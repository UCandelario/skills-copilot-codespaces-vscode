
//create web server
var http = require('http');
var fs = require('fs');

//create server
http.createServer(function (req, res) {
    //read the file
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080); //listen on port 8080
console.log('Server is running on http://localhost:8080/');
//end of the server

//read the file
var fs = require('fs');
var comments = require('./comments.json');

//create server
http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            fs.readFile('comments.json', function (err, data) {
                var comments = JSON.parse(data);
                comments.push(JSON.parse(body));
                fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function (err) {
                    console.log('Comment added');
                });
            });
        });
    }
}).listen(8080); //listen on port 8080
console.log('Server is running on http://localhost:8080/');
//end of the server

//read the file
var fs = require('fs');
var comments = require('./comments.json');

//create server
http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            fs.readFile('comments.json', function (err, data) {
                var comments = JSON.parse(data);
                comments.push(JSON.parse(body));
                fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function (err) {
                    console.log('Comment added');
                });
            });
        });
    }

    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(comments));
        res.end();
    }
}).listen(8080); //listen on port 8080
console.log('Server is running on http://localhost:8080/');
//end of the server

//read the file
var fs = require('fs');
var comments = require('./comments.json');

//create server
http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            fs.readFile('comments.json', function (err, data) { // Added closing single quote here
                var comments = JSON.parse(data);
                comments.push(JSON.parse(body));
                fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function (err) {
                    console.log('Comment added');
                });
            });
        });
    }
}).listen(8080); //listen on port 8080
console.log('Server is running on http://localhost:8080/');
//end of the server
