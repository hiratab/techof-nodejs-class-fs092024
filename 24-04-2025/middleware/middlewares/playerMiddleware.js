const findPlayerMiddleware = (req, res, next) => {
  const { id } = req.params;
  const { players } = req;

  const [player] = players.filter(player => Number(player.id) === Number(id));
  if (!player) {
    return res.status(404).json({
      message: "player not found"
    });
  };

  req.player = player;
  next();
}

module.exports = {
  findPlayerMiddleware
}