const knex = require('../database')

module.exports = {

    async createAnime(req, res) {
        const {
            mal_id,
            title,
            synopsis,
            image_url,
            episodes,
            score,
            url,
        } = req.body;
    
        await knex('favorites_animes').insert({
            mal_id,
            title,
            synopsis,
            image: image_url,
            episodes,
            score,
            url
        })
    
        return res.json({
            "reponse": "OK"
        })
    },

    async createSerie(req, res) {
        const {
            id,
            name,
            image_thumbnail_path,

        } = req.body;
    
        await knex('favorites_series').insert({
            id,
            name,
            image_thumbnail_path,
        })
    
        return res.send('OK')
    }
}