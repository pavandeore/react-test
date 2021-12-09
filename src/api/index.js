const express = require('express');
const cors = require("cors");
const app = express();
const mysql = require('mysql')

app.use(cors());

const db = mysql.createConnection({
    user : "dezyre_user",
    host : "127.0.0.1",
    password : "dezyre123",
    database: "dezyre_db"
})


app.get('/random-projects',(req, res)=>{
    db.query(" SELECT project_id, title, short_desc, keyword, last_modified FROM (select * from project where type='P' and is_active ='Y' and is_displayed = 'Y' ORDER BY project_id DESC LIMIT 20 ) as p1 ORDER BY rand() LIMIT 10 ", (err, result)=>{
       if(err){
           console.log(err)
       }else{
           res.send(result);
       }
    })

})

app.listen(3000, ()=>{
    console.log('yes running on http://3000 ')
})