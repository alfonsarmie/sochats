const User = require('../models/users')



const login = async(req, res) => {

    const body = req.body;

    //const user = new User(body)

    //await user.save(body)

    res.json({
        body
    })

    console.log(body);


}


module.exports = {
    login
};



