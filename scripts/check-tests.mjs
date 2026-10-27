#!/usr/bin/env node
// Rejects .only/.skip/.todo/xit/xdescribe and snapshots in test files.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const testDirs = ['server/test', 'client/test'].map((d) => path.join(root, d))

const banned = [
  { re: /\b(?:it|test|describe|suite)\s*\.\s*(?:only|skip|todo|skipIf|runIf)\b/, why: 'focused/skipped test' },
  { re: /\b(?:xit|xtest|xdescribe|fit|fdescribe)\s*\(/, why: 'focused/skipped test' },
  { re: /\btoMatch(?:Inline)?Snapshot\s*\(/, why: 'snapshot assertion' },
  { re: /\bctx\.skip\s*\(|\bcontext\.skip\s*\(/, why: 'runtime skip' },
]

function* walk(dir) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else if (/\.(?:[cm]?[jt]sx?)$/.test(entry.name)) yield full
  }
}

const problems = []
let files = 0
for (const dir of testDirs) {
  for (const file of walk(dir)) {
    files++
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
    lines.forEach((line, i) => {
      for (const { re, why } of banned) {
        if (re.test(line)) problems.push(`${path.relative(root, file)}:${i + 1}  ${why}: ${line.trim()}`)
      }
    })
  }
}

if (files === 0) {
  console.error('check-tests: no test files found - the suite would prove nothing')
  process.exit(1)
}
if (problems.length > 0) {
  console.error('check-tests: these would let tests pass without running them:\n')
  for (const p of problems) console.error('  ' + p)
  console.error('\nRemove them, or fix the test instead of switching it off.')
  process.exit(1)
}
console.log(`check-tests: ${files} test files OK`)
