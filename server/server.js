const express = require('express');
const app = express();
app.use(express.json());
let jwt = require("jsonwebtoken");
var server = require('http').createServer(app);
const mysql = require('mysql');
const cors = require('cors');
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: 'dongseopfuck1',
    database: "sys"
})

db.connect();

app.post('/signup', function(req, res){

})

app.post('/login', function(req, res){

})

app.get('/gallery', function(req, res){

})

app.post('/gallery', function(req, res){

})

app.delete('/gallery', function(req, res){

})

server.listen(1312, function () {
    console.log('Example app listening on port', 1234);
});