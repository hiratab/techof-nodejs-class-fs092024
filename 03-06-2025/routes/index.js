const { Router } = require('express')
const router = Router({ mergeParams: true })

const { getAnimes } = require('../service/animeService')

router.get('/anime/:animeId', async (req, res) => {
  const { animeId } = req.params
  const animes = await getAnimes(animeId)

  return res.json(animes)
});

module.exports = router