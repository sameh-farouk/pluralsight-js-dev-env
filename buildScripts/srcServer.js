import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
var port = 3000;
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  'noInfo': true,
  'publicPath': config.output.publicPath
}))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
