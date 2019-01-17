const emiter= require('events');

class Myemitter extends emiter{ }

const myemiter= new Myemitter();
myemiter.on('boom',()=>{console.log("athlet is working out")});
setInterval( function(){myemiter.emit('boom')},1000);