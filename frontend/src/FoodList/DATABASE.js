const express = require('express');
const cors = require('cors');
const app = express();


const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "172.31.82.192",
  user: "G_30",
  password: "NzBzo1f0Zu",
  database: "G_30_DB",
  dateStrings: true
});
var temp=[];
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM FoodList", function (err, result, fields) {
    if (err) throw err;
    temp=[...result];
    console.log(temp);
  });
});

app.use(cors());

app.get('/data', (req, res) => {
  // Your Node.js code that generates the output
  const data = {
    message: temp
  };

  // Send the output as a JSON response
  res.json(data);
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});