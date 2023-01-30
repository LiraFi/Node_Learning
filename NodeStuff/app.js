const fs = require('fs');
fs.readFile('./text.txt', 'utf8', (error, data) => {
  console.log(data);
});

console.log('Just text!');