const express = require('express');
const app = express();
const port = 3000

var calculateSum = function() {
  var sum = 0;
  for (let i = 0; i < 1000; i++) {
    sum += i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  var counter = req.query.counter;
  var sum = 0;
    for (let i = 0; i <= counter; i++) {
    sum = sum+i;
  }
  res.send('Sum is ' + sum);
}

app.get('/handlesum', handleFirstRequest)


function startServer() {
  console.log(`Example app listening on port ${port}`);
}
app.listen(port, startServer);

//app.listen runs infinitely just like setInterval and exposes the express app to the required port.

function fun(req, res) {
  var random = Math.random();
  res.send('Random number is ' + random);
}

app.get('/random' , fun);
