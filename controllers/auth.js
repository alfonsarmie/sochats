const User = require('../models/users')



const login = async(req, res) => {

    const body = req.body;

    const user = new User(body)

    await user.save(body)

    res.json({
        msg : "User successfully saved"
    })

}


module.exports = {
    login
};



