import { seedDatabase } from './seed.js'
import { createApp } from './app.js'

const PORT = Number(process.env.PORT) || 3001

await seedDatabase()

const app = createApp()

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
})