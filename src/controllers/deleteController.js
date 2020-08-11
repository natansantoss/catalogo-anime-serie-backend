const knex = require('../database');

module.exports = {

    async deleteAnime(req, res){
        try{
            const {
                mal_id,
            } = req.query
    
            await knex('favorites_animes').where({
                mal_id
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
            } = req.query
    
            await knex('favorites_series').where({
                id 
            }).del() 
    
            return res.send("")

        }catch(e){
            console.log(e)
        }
    }
}