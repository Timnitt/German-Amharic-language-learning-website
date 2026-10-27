import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    setupFiles: ['test/setup.ts'],
    // server/.env holds the production Turso credentials. dotenv never overrides variables
    // that are already set, so blanking them here keeps tests off the live database.
    env: {
      TURSO_DATABASE_URL: '',
      TURSO_AUTH_TOKEN: '',
    },
    // Guards against a suite that passes for the wrong reasons.
    allowOnly: false,
    passWithNoTests: false,
    retry: 0,
    restoreMocks: true,
    // bcrypt + seeding ~1000 rows per file; generous but finite.
    testTimeout: 20000,
    hookTimeout: 30000,
  },
})
