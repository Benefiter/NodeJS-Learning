const http = require('http');

const handleServer = (req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3,]));
        res.end();
    }
}

const server = http.createServer(handleServer);

const connectionHandler = socket => console.log('New Connection...');

server.on('connection', connectionHandler);
server.listen(3000);

console.log('Listeing on port 3000...');
console.log('new message');

