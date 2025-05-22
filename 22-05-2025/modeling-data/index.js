const express = require('express')

require('dotenv').config()
const { PORT } = process.env

const {
  connectToDb,
  disconnectFromDb,
} = require('./db')

const app = express()

const UserModel = require('./models/UserModel')
const FlatModel = require('./models/FlatModel')

const createUser = async () => {
  const flat = new FlatModel({
    title: 'Flat do Joao',
    description: 'Flat do Joao',
    price: 200,
    address: 'Avenida da Liberdade, 321'
  })
  await flat.save()

  const user = new UserModel({
    email: 'test4@test.com',
    password: '123456',
    firstName: 'firstName4',
    lastName: 'lastName4',
    isActive: true,
    flats: [
      flat
    ]
  })

  await user.save()
}

const findUser = async () => {
  const user = await UserModel.find({}).populate([{ path: 'flats'}, { path: 'flats', populate: 'address'}, { path: 'flats.address', populate: 'x'}]);

  console.log('user')
  console.dir(user, { depth: 5 })
}

const configureApi = () => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
}

const startUp = async () => {
  console.log("Starting the service")

  configureApi()
  await connectToDb()
  // await createUser()
  await findUser()

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
  })
}

const shutdown = async (code = 0) => {
  console.log(`Shutdown with signal ${code}`)
  await disconnectFromDb()

  process.exit(code)
}

process.on('SIGINT', shutdown)

startUp().catch(error => {
  console.error('Start Up error')
  console.error(error)
  shutdown(1)
})
