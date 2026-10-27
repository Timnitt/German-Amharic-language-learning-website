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
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      // Content data and the listen() entry point would only inflate the numbers.
      exclude: ['src/seedData.ts', 'src/index.ts'],
      reporter: ['text-summary', 'html'],
      // Floors just under the measured baseline: raise them as coverage grows, never lower
      // them to get a change through.
      thresholds: { lines: 95, statements: 95, branches: 90, functions: 90 },
    },
    // bcrypt + seeding ~1000 rows per file; generous but finite.
    testTimeout: 20000,
    hookTimeout: 30000,
  },
})
