import express from 'express';
import path from 'path';
import open from 'open';


var port = 3000;
var app = express();

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
app.get('/users', function(req, res) {
  res.json([
    {id: 1, firstName:"sameh", lastName:"farouk", email:"samehabouelsaad@gmail.com"},
    {id: 2, firstName:"ahmed", lastName:"hany", email:"some@some.org"},
    {id: 3, firstName:"mohamed", lastName:"galal", email:"f.seed@moore.com"}
  ])
});


app.listen(port, function(err) {
  if (err) {
    console.log(err); //eslint-disable-line no-console
  }
  else {
    open('http://localhost:' + port);
  }
});
