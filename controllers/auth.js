const generateJwt = require('../helpers/generate-jwt');
const { googleVerify } = require('../helpers/google-verify');
const User = require('../models/users')



const login = async(req, res) => {
    
    let {id_token} = req.body;
    
    try {

        //Receiving the token from the frontend, that google api send to find user data
        const {name,email} = await googleVerify(id_token)

        let user = await User.findOne({email})
        
        if (!user) {
            
            const data = {
                name,
                email,
                password: ':)'
            }

            let user = new User(data)
            await user.save()
        }

        if (!user.state) {
            res.status(404).json({
                msg: 'User blocked'
            })
        }


        const jwt = await generateJwt(user._id)    

        res.json({
            msg: 'OK',
            jwt
        })
        
    } catch (error) {
        res.status(400).json({
            msg: 'No google token valid'
        })
    }

}


module.exports = {
    login
};



