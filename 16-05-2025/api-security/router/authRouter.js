const express = require('express')
const router = express.Router()

const { login } = require('../service/authService')

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await login({ email, password })

    return res.json({
      success: true,
      ...user
    })
  } catch(error) {
    console.error(error);
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    })
  }
})

module.exports = router
