import http from 'http';

const host = 'localhost';
const port = 8000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World  ');
});
