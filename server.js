const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()

//morgan HTTP request 기록해주는 미들웨어
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    const db = mongoose.connection;

db.on('error', function (err){
    console.log(err)
})
db.once('open', function (){
    console.log('디비 연결');
})

const PORT = process.env.PORT || 3333
app.listen(PORT)