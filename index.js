const express = require('express');
const app = express();
const port = 3000

function middleware(req, res, next) {   //middleware function
  console.log('Middleware called' + req.headers.counter);
  next(); //the control wil reach the next middleware or route handler
}

app.use(middleware); //app.use is used to mount the middleware function

var calculateSum = function(counter) {
  var sum = 0;
    for (let i = 0; i <= counter; i++) {
      sum += i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  var counter = req.headers.counter || 10;
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

function createUser(req, res) {
  var user = req.body;
  console.log(user);
  res.send('User created');
}

app.post('/createUser', handleFirstRequest);
app.post('/create', createUser);

function updateUser(req, res) {
  var user = req.body;
  console.log(user);
  res.send('User updated');
}

app.put('/updateUser', updateUser);

function deleteUser(req, res) {
  var user = req.body;
  console.log(user);
  res.send('User deleted');
}

app.delete('/deleteUser', deleteUser);

app.listen(port, startServer);

//app.listen runs infinitely just like setInterval and exposes the express app to the required port.
//req.headers is an object that contains the headers sent by the client.(?counter=5&name=John)  //req.query is an object that contains the query string parameters.