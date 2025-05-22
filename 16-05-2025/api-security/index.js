const express = require('express')

const {
  connectToDb,
  disconnectFromDb,
} = require('./db')

const userRouter = require('./router/userRouter');
const authRouter = require('./router/authRouter')

const app = express()

const configureAPI = () => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use('/user', userRouter)
  app.use('/auth', authRouter)
}

const startUp = async () => {
  configureAPI()

  await connectToDb()

  app.listen(3000, async () => {
    console.log('Listening to 3000')
  })
}

const shutdown = async () => {
  await disconnectFromDb()

  process.exit(0)
}

process.on('SIGINT', shutdown)

startUp().catch(error => {
  console.error(error)
  process.exit(1)
})
