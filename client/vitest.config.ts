import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// Separate from vite.config.ts so tests don't load Tailwind or the dev proxy.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['test/**/*.test.{ts,tsx}'],
    setupFiles: ['test/setup.ts'],
    // Guards against a suite that passes for the wrong reasons.
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
      // Floors just under the measured baseline. Low for now because several pages
      // (Flashcards, Review, Dashboard, Vocabulary, Register) have no tests yet: raise these
      // as tests are added, never lower them to get a change through.
      thresholds: { lines: 29, statements: 29, branches: 85, functions: 60 },
    },
  },
})
