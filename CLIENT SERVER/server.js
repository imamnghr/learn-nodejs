const { green } = require('color-name');
const fs = require('fs');
const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {


    const num = _.random(0, 20);
    console.log(num);

    const great = _.once(() => {
        console.log('hello kirno');
    });

    great();
    great();

    


    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // res.write('<head><link rel="styleseet" href = "#"></head>');
    // res.write('<p>Hello, Kirnos</p>');
    // res.write('<p>Hello again, Kirno</p>');
    // res.end();

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
        break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
        break;
        case '/about-bash':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
        break;
        default:
            path += '404.html';
            res.statusCode = 400;
        break;
    }

    // send an html files
    fs.readFile(path, (err,data)=> {
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data)
            res.end(data);
        }
    })
});

server.listen (3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});