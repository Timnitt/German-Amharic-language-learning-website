import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    setupFiles: ['test/setup.ts'],
    // Blank the production Turso credentials from server/.env so tests stay local.
    env: {
      TURSO_DATABASE_URL: '',
      TURSO_AUTH_TOKEN: '',
    },
    allowOnly: false,
    passWithNoTests: false,
    retry: 0,
    restoreMocks: true,
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: ['src/seedData.ts', 'src/index.ts'],
      reporter: ['text-summary', 'html'],
      // Coverage floors: raise them, never lower them.
      thresholds: { lines: 95, statements: 95, branches: 90, functions: 90 },
    },
    testTimeout: 20000,
    hookTimeout: 30000,
  },
})
