const knex = require('../database')

module.exports = {

    async indexAnimes(req, res) {
        const results = await knex('favorites_animes')
    
        return res.json(results)
    },

    async indexSeries(req, res) {
        const results = await knex('favorites_series')
    
        return res.json(results)
    },

    async selectAnime(req, res) {
        const {
            mal_id
        } = req.query

        const results = await knex('favorites_animes').where({
            mal_id
        })
    
        return res.json(results)
    },
    async selectSerie(req, res) {
        const {
            id
        } = req.query

        const results = await knex('favorites_series').where({
            id
        })
    
        return res.json(results)
    }
}