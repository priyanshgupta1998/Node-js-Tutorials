//NODE JS FILE SYSTEM (READING , APPENDING  CREATING , DELETING , UPDATING)
//this script is about appending the content in the existing local file.


var fs = require('fs');

fs.appendFile('notepad1.txt', 'APPEND THE CONTENT IN THE EXISTING FILE!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});