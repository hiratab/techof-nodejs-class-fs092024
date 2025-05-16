const JWT = require('jsonwebtoken');
const SECRET = 'my-super-strong-and-long-secret';

require('dotenv').config()
const PORT = process.env.PORT;

const express = require('express');
const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  const jwt = JWT.sign({
    department: 'Logistic',
    name: 'Joao',
    accountId: 1,
    userId: '663968ed397fb7e73cdea52d'
  }, SECRET);

  res.status(200).json({
    token: jwt
  })
});

app.post('/login', (req, res) => {
  const jwt = JWT.sign({
    department: 'Logistic',
    name: 'Joao',
    accountId: 1,
    userId: '663968ed397fb7e73cdea52d'
  }, SECRET);

  res.status(200).json({
    token: jwt
  })
})

app.get('/account-balance',
  function (req, res, next) {
    try {
      const authorizationHeader = req.headers.authorization;

      const [_, jwt] = authorizationHeader.split('Bearer ');

      const payload = JWT.verify(jwt, SECRET);
      const { accountId } = payload;

      req.accountId = accountId;

      next();
    } catch (error) {
      res.status(401).json({
        error: 'Unauthorized'
      })
    }
  },
  function (req, res) {
    if (Number(req.accountId) === 1) {
      return res.status(200).json({
        balance: 10000000
      })
    }

    res.status(200).json({
      balance: 1000
    })
  }
)

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`)
});
