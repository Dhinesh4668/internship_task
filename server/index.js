const mysql = require('mysql')
const express = require('express')
const app = express()



// simple rest api 
app.get('/',(req,res)=>{
    res.send("home")
})

app.get('/display', (req,res)=>{
    res.send("displey the task")
})

// crerate the task 
app.post('/create', (req,res)=>{
    res.send("create the task")
})

app.listen(5000, ()=>{
    console.log("app is listning........")
})