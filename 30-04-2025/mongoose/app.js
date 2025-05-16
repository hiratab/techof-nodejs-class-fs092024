require('dotenv').config();
const mongoose = require('mongoose');
const PersonModel = require('./models/PersonModel');

const { CONNECTION_STRING } = process.env;

async function run() {
  console.log(CONNECTION_STRING)
  await mongoose.connect(CONNECTION_STRING);

  // const ze = new PersonModel({
  //   firstName: 'Jose',
  //   lastName: 'Mariano',
  //   age: 80,
  // });
  // await ze.save();
  const page = 2;
  const limit = 1;

  const products = await PersonModel.find(
    {
      firstName: 'Jose'
    },
    {
      password: 0,
    },
    {
      limit: 1,
      skip: Number(page) * Number(limit),
      sort: {
        age: 1
      },
    }
  );
  console.log('products', products)

  await mongoose.connection.close();
}
run().catch(console.dir) 