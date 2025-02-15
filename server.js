//node.js backend file(api and server config?)

const express = require('express'); // express module assignedd here ,for building server
const mysql = require('mysql2');    // for db connection
const cors = require('cors');       //cross port connections


const app = express();             // instance of express is created here
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());            // For parsing JSON data from requests


// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'janice',
    password: 'janice',
    database: 'library_management'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Test Route
app.get('/', (req, res) => {
    res.send('Server is running and connected to MySQL!');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

