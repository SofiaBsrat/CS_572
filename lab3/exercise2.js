// using readfile
const http= require('http');
const fs=require('fs');
const hostname='127.0.0.1';
const port= 3000;
fs.readFile('test.html',(err,html)=>{
    if(err){
        throw err;
    }

const server=http .createServer((req,res)=>{
    res.statusCode=200;
res.setHeader('content-type','text/html');
res.write(html);
res.end();
});
server.listen(port,hostname,()=>{
    console.log('server started on port'+ port);
});
});

//using readfilesynch

 var html=fs.readFileSync('test.html','utf8');
    
const server=http .createServer((req,res)=>{
    res.statusCode=200;
res.setHeader('content-type','text/html');
res.write(html);
res.end();
});
server.listen(port,hostname,()=>{
    console.log('server started on port'+ port);

});

//using buffer

var readable= fs.createReadStream('test.html',{encoding:'utf8',highWaterMark:16*1024});
readable.on('data',function(html){
    const server=http .createServer((req,res)=>{
        res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.write(html);
    res.end();
    });
    server.listen(port,hostname,()=>{
        console.log('server started on port'+ port);
    
    });
});


