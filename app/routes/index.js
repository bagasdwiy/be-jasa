const express = require('express')
const { Register } = require('../controllers/register')
const { Login } = require('../controllers/login')

const router = express.Router()

router.post('/register', Register )
router.post('/login', Login )
module.exports = router