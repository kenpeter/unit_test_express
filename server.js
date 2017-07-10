// express
var express = require('express');
// instance
var app = express();
// root
app.get('/', function (req, res) {
  // res status 200, ok
  res.status(200).send('ok');
});

// server listen 3000
var server = app.listen(3000, function () {
  // server address() port
  var port = server.address().port;
  // console
  console.log('Example app listening at port %s', port);
});

// module exports server
module.exports = server;
