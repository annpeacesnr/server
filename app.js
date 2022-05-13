const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.listen(3001, ()=>{
    console.log("server is listening...")
})