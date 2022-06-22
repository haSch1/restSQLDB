const express = require('express');
const app = express();
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodemysql' //existiert erst nach dem bauen über die url
});

//connect
db.connect((err) => {
    // if(err) throw err;
    // console.log('MySQL connected');

    try {
        console.log('MySQL connected')
    } catch (error) {
        throw err;
    }
});

//create db route
app.get('/createdb', (req, res) => {
    let sql = 'Create database nodemysql';
    db.query(sql, (err ,result) =>{
        if(err) throw err;
        console.log(result);
        res.send('Database created');
    });
});

//create table route
app.get('/createtablefollower', (req, res) => {
    let sql = 'Create table follower(id int auto_increment, name varchar(20), primary key(id))';
    db.query(sql, (err ,result) =>{
        if(err) throw err;
        console.log(result);
        res.send('follower tablse created');
    });
});

//insert follower1
app.get('/addmaik', (req, res) => {
    let post = {name: 'maik'};
    let sql = 'insert into follower set ?';// ? platzhalter
    let query = db.query(sql, post, (err ,result) =>{
        if(err) throw err;
        console.log(result);
        res.send('maik inserted');
    });
});

//select *
app.get('/getfollower', (req, res) => {
    let sql = 'select * from follower';
    db.query(sql, (err ,result) =>{
        if(err) throw err;
        console.log(result);
        res.send('follower werden angezeigt');
    });
});

app.listen('3000', () =>{
    console.log('harrys server is running');
})