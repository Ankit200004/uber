const dotenv = require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')
const db = require('./db/db')
const userRoutes = require('./routes/user.routes')

try {
    db()
} catch (error) {
    console.log(error);
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.use('/user',userRoutes)

module.exports = app;