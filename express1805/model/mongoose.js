  const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/login",{useNewUrlParser: true},(err,res)=>{
    console.log(err)
})

mongoose.connection.on('connected',()=> {
    console.log('mongdb connect success')
})
module.exports = mongoose
