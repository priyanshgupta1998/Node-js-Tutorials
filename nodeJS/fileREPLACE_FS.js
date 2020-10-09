
//NODE JS FILE SYSTEM (READING , APPENDING  CREATING , DELETING , UPDATING)


/*
The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
*/

var fs = require('fs');

fs.writeFile('notepad1.txt', 'replace some content!', function (err) {
  if (err) throw err;
  console.log('REPLACED!');
});