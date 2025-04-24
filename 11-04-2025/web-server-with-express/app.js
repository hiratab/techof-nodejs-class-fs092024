const PORT = 3000;

const express = require('express');
const app = express();
app.use(express.json());

const USERS = [
  {
    id: 1,
    name: 'name'
  }
]

app.get('/', function(req, res) {
  res.status(200).send('Hello, world!')
});

app.get('/users', function(req, res) {
  res.status(200).json({
    users: USERS,
    total: USERS.length
  });
});

app.get('/user/:id', function(req, res) {
  const { id } = req.params;

  const [ user ] = USERS.filter(user => Number(user.id) === Number(id));

  res.status(200).json({
    user
  });
});

app.put('/user/:id', function(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  for (let i = 0; i < USERS.length; i++) {
    if (Number(USERS[i].id) === Number(id)) {
      USERS[i].name = name
      return res.status(200).json({
        user: USERS[i]
      });
    } 
  }

  res.status(404).json({
    error: "User not found",
    success: false
  })
});

app.post('/users', function(req, res) {
  console.log(req.body)

  USERS.push({
    id: USERS.length + 1,
    name: req.body.name
  })

  res.status(200).json({
    users: USERS,
    total: USERS.length
  });
});


app.listen(PORT);
