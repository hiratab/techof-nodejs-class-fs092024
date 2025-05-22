const bcrypt = require('bcrypt')

const encrypt = (plainText) => {
  const salt = bcrypt.genSaltSync(12)
  return bcrypt.hashSync(plainText, salt)
}

const compareText = (plainText, encryptedText) => {
  return bcrypt.compareSync(plainText, encryptedText)
}

module.exports = {
  encrypt,
  compareText
}
