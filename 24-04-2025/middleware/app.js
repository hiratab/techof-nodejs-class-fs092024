const PORT = 3000;

const express = require('express');
const app = express();
app.use(express.json());

const {
  readFile,
  writeFile
} = require('./services/fileService');

const {
  readFileMiddleware
} = require('./middlewares/fileMiddlewares');

const {
  findPlayerMiddleware
} = require('./middlewares/playerMiddleware');

app.use((req, res, next) => {
  console.log(new Date().toISOString(), ':', req.method, req.path);
  next();
});

app.use('/api/v1/players', (req, res, next) => {
  console.log('/api/v1/players', new Date().toISOString(), ':', req.method, req.path);
  next();
})

app.get('/api/v1/players',
  [readFileMiddleware],
  async (req, res) => {
    const PLAYERS = req.players;

    res.status(200).json({
      players: PLAYERS,
      total: PLAYERS.length
    });
  }
);

app.get('/api/v1/players/:id',
  readFileMiddleware,
  findPlayerMiddleware,
  async (req, res) => {
    const { player } = req;
    res.status(200).json(player);
  });

app.post('/api/v1/players',
  readFileMiddleware,
  async (req, res) => {
    console.log(req.body);
    const { name } = req.body;

    const PLAYERS = req.players;
    const player = {
      id: PLAYERS.length + 1,
      name
    };
    PLAYERS.push(player);
    await writeFile(PLAYERS);

    res.status(200).json({
      players: PLAYERS,
      total: PLAYERS.length
    });
  });

app.patch('/api/v1/players/:id',
  readFileMiddleware,
  findPlayerMiddleware,
  async (req, res) => {
    const { player, players } = req;

    const { name } = req.body;
    player.name = name;
    await writeFile(players);

    res.status(200).json({
      players: players,
      total: players.length
    });
  })

app.delete('',
  readFileMiddleware,
  async (req, res) => {
    const PLAYERS = req.players;

    const players = PLAYERS.filter(player => player.id !== req.params.id)
    await writeFile(players)
  })

app.listen(PORT, () => {
  console.log('Server listening at', PORT)
});
