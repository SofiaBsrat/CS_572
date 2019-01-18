const url = require('url');
const server = require('http').createServer();
const {fork} = require('child_process');

server.on('request',(req, res)=>{
   
    const myURL = url.parse(req.url,true) ;
    console.log(myURL);
    var filepath = myURL.query.url;
    if(filepath){
        const reader = fork('reader.js');
        reader.send(filepath);
        reader.on('message', msg => {
            res.end(msg);
        });
    }

}).listen(8000);
console.log("Server is listening to port 8000...")