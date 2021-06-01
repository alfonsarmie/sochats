const generateJwt = require('../helpers/generate-jwt');
const User = require('../models/users')



const login = async(req, res) => {

    /*const body = req.body;

    const user = new User(body)

    await user.save(body)

    res.json({
        msg : "User successfully saved"
    })*/

    const jwt = await generateJwt(13)    

    res.json({
        msg: 'OK',
        jwt
    })

}


module.exports = {
    login
};



