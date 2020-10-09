

//NODE JS FILE SYSTEM (READING , APPENDING  CREATING , DELETING , UPDATING)
//this script is about changing the name of the existing local file.




var fs = require('fs');

fs.rename('jo.txt', 'jo1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});