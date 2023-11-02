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
app.get('/display',(req,res)=>{
    const sql = `SELECT * FROM tasks`
    db.query(sql, (error,result)=>{
        if(!error){
            res.json(result)
        }else{
            res.status(500).send(error)
        }
    })
})

app.get('/', (req,res)=>{
    res.send("home directry")
})

app.post('/create', (req, res) => {
    const { title, date, status } = req.body;
  
    // Insert the task into the tasks table
    const insertQuery = 'INSERT INTO tasks (title, date, status) VALUES (?, ?, ?)';
    db.query(insertQuery, [title, date, status], (error, results) => {
      if (error) {
        console.error('Error inserting task:', error);
        res.status(500).send(error);
      } else {
        console.log('Task inserted successfully.');
        res.status(200).json({ task_id: results.insertId });
      }
    });
  });

// delete 
app.delete('/delete', (req,res)=>{
    res.send("delete")
})


app.listen(5000, ()=>{
    console.log("app is listning........")
})