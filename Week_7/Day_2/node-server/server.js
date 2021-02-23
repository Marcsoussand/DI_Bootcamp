const http = require('http'); 

const requestJ = function (req,res) {
    res.setHeader("Content-Type", "application/json");
    res.end(`{"user": "Marc"}`);
};
const server =http.createServer(requestJ);

server.listen(8000);