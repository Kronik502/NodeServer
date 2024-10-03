const http = require('http');
const {type} = require('os');
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);
    //set header content-Type
    res.setHeader('content-Type','text/plain');
    res.write('Hello Cruel World')
    res.end();
});
server.listen(4000, 'localhost',()=>{
    console.log('listening for requests on port 3000')
});