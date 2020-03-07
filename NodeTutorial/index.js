const http = require('http');
const path = require('path');
const fs = require('fs');
const person = require('./person')

const server = http.createServer((req, res) => {
    /*
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
    */

    //Build File Path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    //Extension Of File
    let extname = path.extname(filePath);

    //Initial Content Type
    let contentType = 'text/html';

    //Check Ext And Set Content Type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }


    //Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //Page Not Found Error
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                //Some Other Server Error 
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //Successful Response
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    })
});

const PORT = process.env.PORT || 5000;

const p1 = new person("Uyi", 26);
const p2 = new person("Osaretin", 24);
const p3 = new person("Ade", 25);
const p4 = new person("Boye", 27);

server.listen(PORT, () => console.log(`Server Currently Running On Port ${PORT}`));