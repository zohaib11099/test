const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

// ⚠️ VULNERABILITY 1: Hardcoded Database Password
const dbPassword = "super_secret_admin_password_123";

const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: dbPassword,
  database: 'my_company_db'
});

app.post('/getUser', (req, res) => {
  const userId = req.body.id;
  
  // ⚠️ VULNERABILITY 2: SQL Injection (Unparameterized query)
  db.query("SELECT * FROM users WHERE id = " + userId, (err, results) => {
    if (err) {
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Test server running on port 3000');
});

const dbPassword = "superSecretPassword123!"; // Hardcoded password
eval("console.log('dangerous function')"); 