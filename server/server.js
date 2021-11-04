const express = require('express');
const app = express();
app.use(express.json());
let jwt = require("jsonwebtoken");
var server = require('http').createServer(app);
const mysql = require('mysql');
const cors = require('cors');
const multer  = require('multer')
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: 'dongseopfuck1',
    database: "gallery"
})

db.connect();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

app.post('/signup', function(req, res){

})

app.post('/login', function(req, res){

})

app.get('/getgallery', function(req, res){
    db.query(`SELECT * from gallery`, function(err, rows){
        var r;
        var page = Number(req.body.page);
        if(page){
            r = rows.slice(10*page, 10*page+9);
        }  
        else{
            r = rows.slice(0, 9);
        }

        res.json(r);
    })
})

app.post('/gallery', upload.single('file'), function(req, res){
    res.json(req.file);
})

app.delete('/gallery', function(req, res){

})

server.listen(1312, function () {
    console.log('Example app listening on port', 1312);
});