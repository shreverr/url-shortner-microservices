import { Hono } from 'hono'
import { env } from './config/env'
import { connectDB } from './config/database'

const app = new Hono()
connectDB();

app.get('/health', (c) => {
  return c.text(`Identity service running on port: ${process.env.PORT}`)
})

app.get('/validate', (c) => {
  return c.text(`Identity service running on port: ${process.env.PORT}`)
})

export default {
  fetch: app.fetch,
  port: env.PORT,
}