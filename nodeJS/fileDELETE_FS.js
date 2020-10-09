//NODE JS FILE SYSTEM (READING , APPENDING  CREATING , DELETING , UPDATING)

//The fs.unlink() method deletes the specified file:

var fs = require('fs');

fs.unlink('jo.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});