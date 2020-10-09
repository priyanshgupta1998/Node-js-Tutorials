//update the content of the existing file.
var fs = require('fs');

fs.appendFile('notepad1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});