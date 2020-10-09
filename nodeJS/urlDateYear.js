//this script is about making request to fetch the details of the year and month.
//the url will be "http://localhost:8080/?year=2052&month=august"
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query; 
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);