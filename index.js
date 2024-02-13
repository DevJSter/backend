const express = require('express');
const app = express();
const port = 3000

var calculateSum = function(counter) {
  var sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  var counter = req.query.counter;
  var finalsum = calculateSum(counter);
  res.send('Sum is ' + finalsum);
}

app.get('/sum', handleFirstRequest)


function fun(req, res) {
  var random = Math.random(); //random number between 0 and 1
  res.send('Random number is ' + parseInt(random*100000000000));
}

app.get('/random' , fun);

function startServer() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, startServer);

//app.listen runs infinitely just like setInterval and exposes the express app to the required port.
