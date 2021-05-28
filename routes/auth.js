const { Router } = require("express");
const { login } = require("../controllers/auth");


const router = Router()


router.post('/', async (req, res) => {

    //const body = req.body;

    //const user = new User(body)

    //await user.save(body)

    const body = req.body

    if (!body) {
        res.json({
            msg: 'BOdy do not exist'
        })
    }

    
    console.log(body);


})

module.exports = router