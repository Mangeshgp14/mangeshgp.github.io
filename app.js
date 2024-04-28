

const express = require('express');
const app = express();
app.use(express.json());       
app.use(express.static(__dirname + '/css'));

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

  app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.get("/reg_form", (req, res) => {
  res.sendFile(__dirname + "/reg_form.html");
});

// app.get("/reg_form", (req, res) => {
//   res.sendFile(__dirname + "/reg_form.html");
// });
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mangesh_14",
  database: "aker"

});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    console.log(username);
    console.log(password);

//     var mysql = require('mysql2');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Mangesh_14",
//   database: "aker"
// });

const values = [
    [username, password]
];

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "INSERT INTO login(username, password) VALUES (?)";
  con.query(sql, values, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });   
});


    res.sendFile(__dirname + "/about.html");

  });


app.post("/registration", (req, res) => {
    const Name = req.body.Name;
    const SapID = req.body.SapID;
    const Dept = req.body.Dept;
    const Email_id = req.body.email_id;
    const No_of_Exp = req.body.No_of_Exp;
    const Skills = req.body.Skills;
    
    console.log(Name);
    console.log(SapID);
    console.log(Dept);
    console.log(Email_id);
    console.log(No_of_Exp);
    console.log(Skills);

const values = [
    [Name, SapID, Dept, Email_id, No_of_Exp, Skills]
];

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "INSERT INTO profile(name, sap_id, department, email_id, experience, skills) VALUES (?)";
  con.query(sql, values, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });   
});


    res.sendFile(__dirname + "/about.html");

  });

  app.listen(4000);
