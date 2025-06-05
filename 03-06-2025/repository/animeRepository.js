const knex = require('../config/db')

const Anime = require('../entities/Anime')

const getAnimesDB = async (animeId) => {
  const query = knex
    .select(Anime.dbProperties)
    .from(Anime.tableName)

    if (animeId) {
      query.where(Anime.dbProperties.animeId, animeId)
    }

    return query
}

const createAnimeDB = async () => {
  const newAnime = {}
  newAnime[Anime.dbProperties.animeName] = 'Name'
  newAnime[Anime.dbProperties.animeDescription] = 'Description'

  return await knex.insert(newAnime).into(Anime.tableName)
}

const updateAnimeDB = async () => {
  const newAnime = {}
  newAnime[Anime.dbProperties.animeName] = 'Name'
  newAnime[Anime.dbProperties.animeDescription] = 'Description'

  const where = {}
  where[Anime.dbProperties.animeId] = '5'
  return await knex(Anime.tableName).where(where).update(newAnime)
}

module.exports = {
  getAnimesDB,
  createAnimeDB
}
