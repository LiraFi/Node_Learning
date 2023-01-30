const fs = require('fs');
fs.readFile('./text.txt', (error, data) => {
  console.log(data.toString());
});