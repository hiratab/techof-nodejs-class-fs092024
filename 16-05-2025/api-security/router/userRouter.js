const express = require('express')

const { createUser } = require('../service/userService')

const router = express.Router()

router.post('/', async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    photo,
  } = req.body

  const user = await createUser({
    email,
    password,
    firstName,
    lastName,
    photo,
  })

  res.json({
    success: true,
    user
  })
})

module.exports = router;
