import express from 'express'

const app = express()

const port = 4000

app.listen(port, () => {
  console.log(`🤖 app is listening on port ${port}`)
})