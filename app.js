const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require('cors');
const apiRouters = require('./app/routes/index')
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use('/',apiRouters)
// Connect to MongoDB database
mongoose.connect('mongodb+srv://bagasdwi:aku909kk@cluster0.5vrgoma.mongodb.net/jasa?retryWrites=true&w=majority', { useNewUrlParser: true}).then(()=> {app.listen(3000,()=>{console.log('konek coy')})}).catch((err)=> console.log(err))