const http = require('http');
const port = 1000;
const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello World!');
});
server.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});
