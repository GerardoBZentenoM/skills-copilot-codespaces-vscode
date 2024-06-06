// Create web server
// Create a web server that listens on port 3000 and sends back the comments data as a response.
// The comments data should be sent as a JSON response. You can use the comments variable provided in the comments.js file.

// Import the http module
const http = require('http');

// Import the comments data
const comments = require('./comments');

// Create the web server
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(comments));
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});