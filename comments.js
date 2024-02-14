
//create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const comments = require('./comments.json'); // Remove duplicate import statement for 'comments' module
//create server
const server = http.createServer((req, res) => {
    if (req.url === '/api/comments' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(comments));
    } else if (req.url === '/api/comments' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            let newComment = JSON.parse(body);
            comments.push(newComment);
            fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments), (err) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({error: 'Server error'}));
                } else {
                    res.writeHead(201, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify(newComment));
                }
            });
        });
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Not found'}));
    }
});
//listen for requests
server.listen(3000, () => console.log('Server is running...'));

// Path: index.js
//create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
//create server
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('<h1>Server error</h1>');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Not found</h1>');
    }
});
//listen for requests
server.listen(3000, () => console.log('Server is running