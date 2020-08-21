const knex = require('../../database')

module.exports = {

    async indexAnimes(req, res) {

        const {  user_id  } = req.query

        const results = await knex('favorites_animes').where({  user_id  })
    
        return res.json(results)
    },

    async indexSeries(req, res) {

        const {  user_id  } = req.query

        const results = await knex('favorites_series').where({  user_id  })
    
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
    },


    async createAnime(req, res) {

        const {
            mal_id,
            title,
            synopsis,
            image_url,
            episodes,
            score,
            url,
            user_id
        } = req.body;
    
        await knex('favorites_animes').insert({
            mal_id,
            title,
            synopsis,
            image: image_url,
            episodes,
            score,
            url,
            user_id
        })
    
        return res.json({
            "reponse": "OK"
        })
    },

    async createSerie(req, res) {
        const {
            id,
            name,
            user_id,
            image_thumbnail_path

        } = req.body;
    
        await knex('favorites_series').insert({
            id,
            name,
            user_id,
            image_thumbnail_path
        })
    
        return res.send('OK')
    },


    async deleteAnime(req, res){

        const {  user_id  } = req.query

        try{
            const {
                mal_id,
            } = req.query
    
            await knex('favorites_animes').where({
                mal_id,
                user_id
            }).del()
    
            return res.send("")

        }catch(e){
            console.log(e)
        }
    },

    async deleteSerie(req, res){
        try{
            const {
                id,
                user_id
            } = req.query
    
            await knex('favorites_series').where({
                id,
                user_id
            }).del() 
    
            return res.send("")

        }catch(e){
            console.log(e)
        }
    }
}