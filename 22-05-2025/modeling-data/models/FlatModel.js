const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FlatSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true,
    min: [0, 'The price must be above 0'],
  },
  address: {
   ref: 'AddressModel'

  },
})

module.exports = mongoose.model('Flat', FlatSchema, 'flat')