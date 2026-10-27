import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['test/**/*.test.{ts,tsx}'],
    setupFiles: ['test/setup.ts'],
    allowOnly: false,
    passWithNoTests: false,
    retry: 0,
    restoreMocks: true,
    unstubGlobals: true,
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: ['src/main.tsx'],
      reporter: ['text-summary', 'html'],
      // Coverage floors: raise them, never lower them.
      thresholds: { lines: 99, statements: 99, branches: 96, functions: 93 },
    },
  },
})
