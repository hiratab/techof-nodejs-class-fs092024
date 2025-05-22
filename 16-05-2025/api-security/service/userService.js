const { encrypt } = require('./cryptoService');
const UserModel = require('../models/UserModel')

const createUser = async ({
  email,
  password,
  firstName,
  lastName,
  photo,
}) => {
  const user = new UserModel({
    email,
    password: encrypt(password),
    firstName,
    lastName,
    photo,
    isActive: true,
  })

  await user.save()

  return user;
}

module.exports = {
  createUser
}
