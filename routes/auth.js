const { Router } = require("express");

const router = Router()


router.post('/', (req, res) => {
    console.log('Up date login');
})


module.exports = router