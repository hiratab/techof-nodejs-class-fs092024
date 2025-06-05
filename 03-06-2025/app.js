const http = require('http')
const express = require('express')

const { PORT = 3000 } = process.env

const app = express()

const listen = (port = PORT) => new Promise(
  (resolve, reject) => {
    const defaultBind = '0.0.0.0'
    const server = http.createServer(app, defaultBind)
    server.listen(port, defaultBind, (err) => {
      if (err) {
        return reject(err)
      }

      console.log(`listening on ${server.address()}:${server.address().port}`)
    })
  }
)

const startUp = async () => {
  console.log('Starting Service')

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.use('/', require('./routes'))

  await listen()
}

const shutdown = (status = 1) => {
  process.exit(status)
}

startUp().catch((error) => {
  console.error('Startup error: ', error)
  shutdown()
})
