const fs = require('fs');
process.on('message', function(filepath){
    fs.readFile(filepath,(err,data)=>{
        if(err) {
            throw err;
        }
        process.send(data.toString());
    });
});