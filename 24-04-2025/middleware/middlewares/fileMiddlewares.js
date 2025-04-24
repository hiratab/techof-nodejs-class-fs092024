const { readFile } = require('../services/fileService');

const readFileMiddleware = async (req, res, next) => {
  const PLAYERS = await readFile();
  
  req.players = PLAYERS;

  next();
}

module.exports = {
  readFileMiddleware
}
