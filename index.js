const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "gautammg",
  database: "booksdb",
});

app.post("/create", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO signup (username, email, password) VALUES (?,?,?)",
    [username, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get('/login', (req, res) => {
  const username = req.body.username;
  
  const password = req.body.password;

  db.query(
    "SELECT * FROM signup WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send(false)
      } 
      if(result){
        console.log(result)
        res.send(true);
      } else {
        console.log(result)
        res.send(false)
      }
    }
  );
});

app.post("/booksell", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const bookname = req.body.bookname;
  const mode = req.body.mode;

  db.query(
    "INSERT INTO sellformdb (username, email, bookname, mode) VALUES (?,?,?,?)",
    [username, email, bookname, mode],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/showbooks", (req, res) => {

  db.query("SELECT * FROM sellformdb ",(err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result);
        console.log(result);
      } 
    });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});