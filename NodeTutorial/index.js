const http = require('http');
const path = require('path');
const fs = require('fs');
const person = require('./person')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content);
        })
    }

    if (req.url === '/about') {
        fs.readFile(
            path.join(__dirname, 'public', 'about.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        )
    }

    if (req.url === '/api/users') {
        const users = [p1, p2, p3, p4];
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(users));
    }
});

const PORT = process.env.PORT || 5000;

const p1 = new person("Uyi", 26);
const p2 = new person("Osaretin", 24);
const p3 = new person("Ade", 25);
const p4 = new person("Boye", 27);

server.listen(PORT, () => console.log(`Server Currently Running On Port ${PORT}`));