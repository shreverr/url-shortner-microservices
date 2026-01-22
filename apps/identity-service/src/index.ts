import { Hono } from 'hono'

const app = new Hono()

app.get('/health', (c) => {
  return c.text(`Identity service running on port: ${process.env.PORT}`)
})

export default app
