const JWT = require('jsonwebtoken')

const { compareText } = require('./cryptoService')
const UserModel = require('../models/UserModel')
const config = require('../config')

const login = async ({ email, password }) => {
  const user = await UserModel.findOne({
    email
  });

  console.log(user)

  if (!user) {
    console.log('user not found')
    throw new Error('user not found')
  }

  if (!user.isActive) {
    console.log('user not active')
    throw new Error('user not active')
  }

  const isPasswordMatching = compareText(password, user.password)
  if (!isPasswordMatching) {
    console.log('password does not match')
    throw new Error('password does not match')
  }

  const jwt = JWT.sign({
    email,
    userId: user._id
  }, config.JWT_SECRET)

  return {
    token: jwt,
    user
  }
}

module.exports = {
  login
}
