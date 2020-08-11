const express = require('express');
const routes = express.Router();

const controllerGet = require('./controllers/getController.js')
const controllerPost = require('./controllers/postController.js')
const controllerDel = require('./controllers/deleteController.js')

routes.get("/animes", controllerGet.indexAnimes)
routes.get("/series", controllerGet.indexSeries)
routes.get("/anime", controllerGet.selectAnime)
routes.get("/serie", controllerGet.selectSerie)

routes.post("/create-animes", controllerPost.createAnime)
routes.post("/create-series", controllerPost.createSerie)

routes.delete("/del-animes", controllerDel.deleteAnime)
routes.delete("/del-series", controllerDel.deleteSerie)

module.exports = routes;