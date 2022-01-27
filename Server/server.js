const dotenv = require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const { request } = require('express');
const app = express();
// const MONGODB_URI = process.env.DATABASE;
const PORT = process.env.PORT;

//Importing UserRegister
// const UserRegister = require('./model/registerSchema');

// Database connection
require('./db/connection')
// const URL = 'mongodb://localhost:27017/';

app.use(express.json());

//Middleware
const middleware = (req, res, next) =>{
    console.log(`Middleware`);
    next();
}

//Company
// const company = require('./model/companySchema');
// Link the router files
app.use(require('./route/auth'));





app.get('/', (req, res)=>{
    res.send('Server is Up!')
});


app.listen(PORT, ()=>{
    console.log(`Server is running at port number ${PORT}`);
});