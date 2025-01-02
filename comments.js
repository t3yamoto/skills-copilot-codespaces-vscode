// Create web server
// Create a web server that listens on port 3000 and serves the comments.js file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/javascript' });
  fs.readFile('comments.js', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});