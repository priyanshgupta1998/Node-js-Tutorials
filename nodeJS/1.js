var http = require('http');  // import the built-in module
var dt = require('./createDateModule'); // import the new custom module (file name)

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);