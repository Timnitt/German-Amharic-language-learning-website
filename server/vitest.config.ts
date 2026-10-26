import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    // server/.env holds the production Turso credentials. dotenv never overrides variables
    // that are already set, so blanking them here keeps tests off the live database.
    env: {
      TURSO_DATABASE_URL: '',
      TURSO_AUTH_TOKEN: '',
    },
  },
})
