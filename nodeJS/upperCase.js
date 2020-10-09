var http = require('http');
var uc = require('upper-case'); // import the upper-case module
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!")); //conver into upper case letter
  res.end();
}).listen(8080);