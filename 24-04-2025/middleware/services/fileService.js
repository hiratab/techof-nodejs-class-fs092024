const fs = require('fs').promises;
const path = require('path');

const PLAYERS_FILE_NAME = 'players.json';

const readFile = async () => {
  const filePath = path.join(__dirname, '..', PLAYERS_FILE_NAME);

  const data = await fs.readFile(filePath, 'utf8');

  const jsonData = JSON.parse(data);
  return jsonData.players;
}

const writeFile = async (data) => {
  const filePath = path.join(__dirname, PLAYERS_FILE_NAME);

  await fs.writeFile(filePath, JSON.stringify({ players: data }), 'utf8');
}

module.exports = {
  readFile,
  writeFile
}