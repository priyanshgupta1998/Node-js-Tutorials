//NODE JS FILE SYSTEM (READING , APPENDING  CREATING , DELETING , UPDATING)
//this script is about reading the local html file content's.
//the url will be "http://localhost:8080/"
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  fs.readFile('demoHTML.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write(data);
    return res.end();
  });
}).listen(8080);