const HTTP = require('http');
const HOST = '127.0.0.1'
const PORT = 1515;
const SERVER = HTTP.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
});

SERVER.listen(PORT, HOST, () => {
	console.log(`Server running at http://${HOST}:${PORT}/`);
});