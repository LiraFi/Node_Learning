const fs = require('fs');
fs.readFile('./text.txt', 'utf8', (error, data) => {
  fs.mkdir('./files', () => {

    fs.writeFile('./files/text2.txt', `${data} New text added!`, (error) => {
      error ? console.log(error) : null;
    });
  });
});

setTimeout(() => {
  if (fs.existsSync('./files/text2.txt')) {
    fs.unlink('./files/text2.txt', () => { });
  }
}, 4000);

setTimeout(() => {
  if (fs.existsSync('./files')) {
    fs.rmdir('./files', () => { });
  }
}, 6000);

