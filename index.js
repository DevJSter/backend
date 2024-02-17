const express = require('express');
const app = express();
const port = 3000


const bodyParser = require('body-parser');
app.use(bodyParser.json());


// function middleware(req, res, next) {   //middleware function
//   console.log('Middleware called' + " " +  req.headers.counter);
//   next(); //the control wil reach the next middleware or route handler
// }

// app.use(middleware); //app.use is used to mount the middleware function

var calculateSum = function(counter) {
  var sum = 0;
    for (let i = 0; i <= counter; i++) {
      sum += i;
  }
  return sum;
}

function calMul(counter){
  var mul = 1;
  for(let i = 1; i <= counter; i++){
    mul = mul*i;
  }
  return mul;

}
 
function handleFirstRequest(req, res) {
  // console.log(req.body); //Body parser helps to parse the data sent from the body to backend and it parses the json to simple data
  //As using the express we can only use the the headers to send the data to the backend ,,but Body-Parser changes everything
  var counter = req.body.counter || 10;
    
  var finalsum = calculateSum(counter);
  var findmul = calMul(counter);

//By using JSon we can send the data in the fotm
  var ansobj = {
    sum: finalsum,
    mul: findmul
  } // Through this we can return the data in the json format

  // res.send('Sum is ' + finalsum); //res.send is used to send the response to the client
  res.status(200).send(ansobj);

   

}

app.get('/sum', handleFirstRequest)

function givePage(req, res) {
  // res.send(`<!DOCTYPE html>
  // <html lang="en-US">
  // <head>
  //  <meta charset="UTF-8">
  //  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //  <title>Document</title>
  // </head>
  // <body>
  //  <h1>Hello ji Kaise ho saare </h1>
  // </body>
  // </html>`);

  var randomobj = { 
    name: "Sachin"
  };
  res.send(randomobj);
}

app.get( '/' , givePage); 

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




// Responses from the server other than data it can also return status codes, headers and body.

