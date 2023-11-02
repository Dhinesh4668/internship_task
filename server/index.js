const mysql = require('mysql')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

// database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task-tracker'
})
// database error handling
db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ' + err.message);
    return;
    }console.log('Connected to the database');
  });

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