const PORT = 3000;
const PLAYERS_FILE_NAME = 'players.json';

const express = require('express');
const app = express();
app.use(express.json());

const fs = require('fs').promises;
const path = require('path');

const readFile = async () => {
  const filePath = path.join(__dirname, PLAYERS_FILE_NAME);

  const data = await fs.readFile(filePath, 'utf8');

  const jsonData = JSON.parse(data);
  return jsonData.players;
}

const writeFile = async (data) => {
  const filePath = path.join(__dirname, PLAYERS_FILE_NAME);

  await fs.writeFile(filePath, JSON.stringify({ players: data }), 'utf8');
}

app.get('/api/v1/players', async (req, res) => {
  const PLAYERS = await readFile();

  res.status(200).json({
    players: PLAYERS,
    total: PLAYERS.length
  });
});

app.get('/api/v1/players/:id', async (req, res) => {
  const { id } = req.params;

  const PLAYERS = await readFile();
  const [player] = PLAYERS.filter(player => Number(player.id) === Number(id));

  if (!player) {
    return res.status(404).json({
      message: "player not found"
    });
  }

  res.status(200).json(player);
});

app.post('/api/v1/players', async (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  const PLAYERS = await readFile();
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

app.patch('/api/v1/players/:playerId', async (req, res) => {
  const PLAYERS = await readFile();
  const [player] = PLAYERS
    .filter(player => Number(player.id) === Number(req.params.playerId));

  if (!player) {
    return res.status(404).json({
      message: "player not found"
    });
  }

  const { name } = req.body;
  player.name = name;
  await writeFile(PLAYERS);

  res.status(200).json({
    players: PLAYERS,
    total: PLAYERS.length
  });
})

app.delete('', async (req, res) => {
  const PLAYERS = await readFile();

  const players = PLAYERS.filter(player => player.id !== req.params.id)
  await writeFile(players)
})

app.listen(PORT, () => {
  console.log('Server listening at', PORT)
});
