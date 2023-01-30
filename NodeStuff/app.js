const fs = require('fs');
fs.readFile('./text.txt', 'utf8', (error, data) => {
  fs.writeFile('./files/text2.txt', `${data} New text added!`, (error) => {
    error ? console.log(error) : null;
  });
});

