const mongoose = require('mongoose');

const { CONNECTION_STRING } = require('../config')

const connectToDb = async () => {
  console.log('Connecting to DB')
  await mongoose.connect(CONNECTION_STRING)
  console.log('Connected to DB')
}

const disconnectFromDb = async () => {
  console.log('Disconnecting from DB')
  await mongoose.connection.close()
  console.log('Disconnected from DB')
}

module.exports = {
  connectToDb,
  disconnectFromDb,
}
