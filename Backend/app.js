const dotenv = require('dotenv').config();
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const connectToDb = require('./db/db.js')
const userRoutes = require('./routes/user.routes.js')
const captainRoutes = require('./routes/captain.routes.js')

connectToDb()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get('/', (req,res)=>{
    res.send('hello wrold');
})
app.use('/users', userRoutes)
app.use('/captains', captainRoutes)

module.exports=app