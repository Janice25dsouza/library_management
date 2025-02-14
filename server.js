//node.js backend file(api and server config?)
const express = require('express');// express module assignedd here
//for building server
const cors = require('cors');
//cross port connections
const mysql = require('mysql2');
//mysql2 to connect to db

const app = express(); //instance of express is created here
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON data from requests

const db = mysql.createConnection({
    host:'localhost',
    user:'janice',
    password:'janice',
    database:'library_management'
});

db.connect((err) =>{
    if(err){
        console.error('Database connection failed:',err);
    }
    else{
        console.log('Connected to MySQL')
    }
});