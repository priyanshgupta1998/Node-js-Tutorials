//NODE JS FILE SYSTEM (READING , APPENDING  CREATING , DELETING , UPDATING)
//this script is about open the existing local file to write the some content.


//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing",

var fs = require('fs');

fs.open('notepad1.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});