const express = require('express');
const routes = express.Router();

const usersController = require('./controllers/users/usersController.js')
const favoritesController = require('./controllers/favorites/favoritesController.js')

const authMiddlewares = require('./middlewares/auth.js')


routes.post("/register", usersController.registerUser)
routes.post("/auth", usersController.authentication)

routes.get("/animes", favoritesController.indexAnimes)
routes.get("/series", favoritesController.indexSeries)
routes.get("/anime", favoritesController.selectAnime)
routes.get("/serie", favoritesController.selectSerie)

routes.post("/create-animes", favoritesController.createAnime)
routes.post("/create-series", favoritesController.createSerie)

routes.delete("/del-animes", favoritesController.deleteAnime)
routes.delete("/del-series", favoritesController.deleteSerie)

module.exports = routes;