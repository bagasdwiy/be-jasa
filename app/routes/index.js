const express = require('express')
const { Register } = require('../controllers/register')
const { Login } = require('../controllers/login')
const { handleRoot } = require('../controllers/root')

const router = express.Router()
router.get('/', handleRoot)
router.post('/register', Register )
router.post('/login', Login )
module.exports = router