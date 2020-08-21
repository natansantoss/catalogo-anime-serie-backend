const jwt = require('jsonwebtoken')

const knex = require('../../database');
const authConfig = require('../../config/auth.json')

function generateToken(params = {}){

    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })

}

module.exports = {

    async registerUser(req, res) {

        const {  email  } = req.body
        console.log(email)

        if ( email ) {

            const user = await knex('users').where({  email  })
            const userExists = user[0]

            try{
            
                if (userExists !== undefined) {
                    
                    res.status(400).json({"Error": "User already exists"})
        
                } else{
                
                    const {
                        name,
                        email,
                        password
                    } = req.body
    
                    const userCreated = await knex('users').insert({
                        name,
                        email,
                        password
                    })
                    
                    const token = generateToken({ id: userCreated[0].id })

                    res.status(200).json({userCreated, token})
    
                }
    
            }catch(err){
    
                res.status(400).json({"Error": "Registration Failed"} )
    
            }

        }else{
            
            res.status(400).json({"Error": "Registration Failed"} )  

        }
    },

    async authentication(req, res){

        const {
            email,
            password
        } = req.body

        if (email && password){
            
            try{
                        
                const user = await knex('users').where({
                    email,
                    password
                })

                const token = generateToken({ id: user[0].id })

                const userNotExists = user[0]

                return res.json({user, token}).status(200)

            }catch(err){
                return res.json({"Error": "Authentication Failed"} )
            }

        } else{

            return res.json({"Error": "Authentication Failed"} )
            
        }
    }
}
