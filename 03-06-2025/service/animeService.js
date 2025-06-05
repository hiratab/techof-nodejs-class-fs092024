const { getAnimesDB } = require('../repository/animeRepository')

const getAnimes = async (animeId) => {
  return await getAnimesDB(animeId)
}


module.exports = {
  getAnimes
}
