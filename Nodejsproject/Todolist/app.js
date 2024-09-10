 const express = require('express')
const port = 5000
 const app = express();
 const mongoose = require('mongoose')

// Connection to mongodb
mongoose.connect('mongodb://localhost/todo_express',{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

 app.listen(port, ()=>{
    console.log(`Server started listening on port: ${port}`)
 })