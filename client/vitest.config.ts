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
  },
})
