// const exp = require('express');

const http = require('http'); 
const server =http.createServer( (req,resp) => {
    resp.setHeader('Content-Type','text/html')
    resp.end('<h1>This is my first response</h1><h2>This is my second response</h2><p>This is my third response</p>')
})

server.listen(3000);