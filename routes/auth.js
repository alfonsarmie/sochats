const { Router } = require('express');
const { login } = require('../controllers/auth');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');


const router = Router()


router.post('/',login)

module.exports = router