require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.urlencoded({extended: true}))
mongoose.connect(process.env.API , {useNewUrlParser: true, useUnifiedTopology: true} )


const route = require('./route/appRoute')
app.use('/list', route)

app.use(express.json())


const db = mongoose.connection
db.on('error',() => console.error(error))
db.once('open',() => console.log('connected to db'))
app.listen(3000, ()=> console.log('connected to localhost'))