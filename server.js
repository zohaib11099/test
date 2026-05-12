const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());
const AWS_SECRET_KEY = "AKIAIMNO7890ORSTUVWXYZ1234567890ABCDEFGH"; 

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123', // Another hardcoded password
  database: 'codesentry_test'
});

app.get('/user-details', (req, res) => {
  const userId = req.query.id;

  
  const query = "SELECT * FROM users WHERE id = '" + userId + "'";
  
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post('/debug-log', (req, res) => {
  const logData = req.body.data;

 
  console.log("Processing data: " + logData);
  res.send("Data received: " + logData);
});

app.listen(3000, () => {
  console.log('Vulnerable server running on port 3000');
});

// hello friends it's me again, I just wanted to say that this code is intentionally vulnerable for testing purposes. Please do not use it in production environments. Always follow best practices for security and avoid hardcoding sensitive information like passwords and API keys.