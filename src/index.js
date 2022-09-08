const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./route/route')
const multer = require("multer");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(multer().any())

mongoose.connect("mongodb+srv://shailesh123:rYbeOdoWZtY9NdKU@cluster0.e1ege.mongodb.net/companyassignment-DB", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected Successfully"))
    .catch(err => console.log(err))

app.use('/', route)


port = 4000;

app.listen(port, ()=>{
    console.log(`Express app running on port ${port}`)
})
