#!/usr/bin/env node
// Claude Code Stop hook: runs the test gate before Claude may end a turn.
// Wired up in .claude/settings.json. Exit 2 blocks the stop and feeds stderr back to Claude.
//
// - Skips when the code (client/, server/, scripts/, package files) is the same as at the
//   last green run, so doc-only turns and repeat turns cost nothing.
// - Runs check-tests, typecheck and tests (build is left to CI for speed).
// - Never touches the live DB: TURSO_* are forced empty.
// - Blocks at most MAX_BLOCKS times per session for the same failure, then lets Claude stop
//   and warns the user instead, so a stuck fix can't loop forever.

import { execSync, spawnSync } from 'node:child_process'
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const stateFile = path.join(root, '.claude', 'verify-state.json')
const CODE_PATHS = ['client', 'server', 'scripts', 'package.json', 'package-lock.json']
const MAX_BLOCKS = 3

function readStdin() {
  try {
    return JSON.parse(fs.readFileSync(0, 'utf8') || '{}')
  } catch {
    return {}
  }
}

function git(args) {
  return execSync(`git ${args}`, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
}

/** Hash of the current code: tracked blobs + uncommitted diff + untracked files. */
function codeKey() {
  const paths = CODE_PATHS.join(' ')
  const h = crypto.createHash('sha256')
  h.update(git(`ls-files -s -- ${paths}`))
  h.update(git(`diff HEAD -- ${paths}`))
  for (const f of git(`ls-files --others --exclude-standard -- ${paths}`).split('\n').filter(Boolean)) {
    h.update(f)
    try {
      h.update(fs.readFileSync(path.join(root, f)))
    } catch {
      // deleted between listing and reading
    }
  }
  return h.digest('hex')
}

function loadState() {
  try {
    return JSON.parse(fs.readFileSync(stateFile, 'utf8'))
  } catch {
    return { lastGreenKey: null, blocks: {} }
  }
}

function saveState(state) {
  try {
    fs.mkdirSync(path.dirname(stateFile), { recursive: true })
    fs.writeFileSync(stateFile, JSON.stringify(state, null, 2))
  } catch {
    // state is only an optimisation
  }
}

const steps = [
  ['check-tests', 'node scripts/check-tests.mjs'],
  ['typecheck', 'npm run typecheck'],
  ['test', 'npm test'],
]

function runGate() {
  const env = { ...process.env, TURSO_DATABASE_URL: '', TURSO_AUTH_TOKEN: '', FORCE_COLOR: '0', NO_COLOR: '1' }
  for (const [name, cmd] of steps) {
    const r = spawnSync(cmd, { cwd: root, env, shell: true, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
    if (r.status !== 0) {
      const out = `${r.stdout ?? ''}\n${r.stderr ?? ''}`.trim().split(/\r?\n/)
      return { ok: false, name, cmd, tail: out.slice(-80).join('\n') }
    }
  }
  return { ok: true }
}

const input = readStdin()
const session = input.session_id ?? 'unknown'

let key
try {
  key = codeKey()
} catch {
  process.exit(0) // not a git checkout; nothing to compare against
}

const state = loadState()
if (state.lastGreenKey === key) process.exit(0)

const result = runGate()
if (result.ok) {
  state.lastGreenKey = key
  state.blocks = {}
  saveState(state)
  process.exit(0)
}

const blocks = (state.blocks[session] ?? 0) + 1
state.blocks[session] = blocks
saveState(state)

if (blocks > MAX_BLOCKS) {
  console.log(
    JSON.stringify({
      systemMessage: `Verify is still failing (${result.name}) after ${MAX_BLOCKS} attempts. Run \`npm run verify\` to see the errors before trusting this change.`,
    }),
  )
  process.exit(0)
}

console.error(
  [
    `Verification failed at "${result.name}" (\`${result.cmd}\`), attempt ${blocks}/${MAX_BLOCKS}.`,
    'Fix the code, or the test if it is genuinely wrong, then finish. Do not skip, delete or',
    'loosen tests to get green without telling the user.',
    '',
    result.tail,
  ].join('\n'),
)
process.exit(2)
