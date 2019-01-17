//1 
const mydns= require('dns');
const hostname="www.mum.edu";
mydns.resolve4(hostname,function(err,address){
console.log(address);
});
// using promises

const {promisify}= require('util');
const dnspromise=promisify(mydns.resolve4);
dnspromise(hostname).then(
    (addr)=> {console.log('addr:',addr);}
).catch((err)=>{console.log('err:',err);});
// using async/await
const dnsasync=promisify(mydns.resolve4);

async function main(){
    try {
        const result= await dnsasync(hostname);
        console.log('content:',result);
    } catch (error) {
        console.log('error:',error);
    }

}
main();



