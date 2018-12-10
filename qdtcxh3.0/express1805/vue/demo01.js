const path = require('path')
const express = require('express')
let app = express()

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})

app.listen(3001,()=>{
    console.log('3000 port connect success')
})


