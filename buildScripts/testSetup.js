// register babel to transbile before our tests run.
require('babel-register')();
// disable webpack features that Mocha dosen't understand.
require.extensions['.css'] = function() {};
