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
    const sql = `SELECT * FROM task`
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

// crerate the task 
app.post('/create', (req,res)=>{
    const id = req.body.id;
    const title = req.body.title;
    const date = req.body.date;
    const status = req.body.status;
    // if (!title || !date || !status) {
    //     return res.status(400).send("Missing required fields.");
    // }

    const insert = "INSERT INTO `task` (`id`,`title`, `date`, `status`) VALUES (?,?,?,?)";
    db.query(insert,[id,title,date,status], (err,result)=>{
        if(err){
            return res.status(500).send(err)
        }else{
            return res.status(200).send(result.insertId.toString())
        }
    })
})


// delete 
app.delete('/delete', (req,res)=>{
    res.send("delete")
})


app.listen(5000, ()=>{
    console.log("app is listning........")
})