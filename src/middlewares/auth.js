const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization

    if (!authHeader){
        return res.json({"Error": "Not Token"}).status(401)
    }

    const [ , token] = authHeader.split(' ')

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        
        if(err){
            return res.json({"Error": "Token Invalid"}).status(401)
        }

        req.userId = decoded.id
    })

    return next()
}