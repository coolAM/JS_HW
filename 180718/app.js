const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if(req.url=="/index.html"){
        res.writeHead(200, {"Content-Type" : "application/html"})
        fs.createReadStream("index.html").pipe(res);
    }
});

server.listen(3000);

console.log('Listening on port 3000...');
