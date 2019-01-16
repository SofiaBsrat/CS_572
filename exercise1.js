
//const {from}= require("rxjs");
function filterwords(a){
  var msg="this is great and interesting";
  
    // const result= a.map((b)=>msg.replace(b,"***") );
     a.map(function(b){
      const result= msg.replace(b,"***");
       msg=result;
           })
    
      console.log(msg);
  }
   var check=["great","and"];
   filterwords(check);
   // using promises
   var filterwords= function(a){
    var msg="this is great and interesting";
    a.map(function(b){
        const result= msg.replace(b,"***");
         msg=result;
             })
    return new Promise(function(resolve,reject)
   { if(msg){
resolve(msg);
    }
    else
    {
        reject("fails");
    }})
}
var check=["great","and"];
filterwords(check)
.then(data=>console.log(data))
.catch(err=>console.log(err));

// using asynch/await

String.prototype.filterWords3 = function(args){
    var temp = this;
    var banWord = async function (s) {
        let promise = new Promise(function (resolve, reject) {
        resolve();
        });
        try {
        let result = await Promise.resolve(1).then(s => temp = temp.toString().replace(s,'***'));
        //console.log(result);
        return result;
        } catch (error) {
            console.log(error);
        }
        
    };
    return temp;
}
console.log("This house is nice!".filterWords3(['house', 'nice']));


// Observables
const rx = require("rxjs");
const rxjsOperator = require("rxjs/operators");

String.prototype.filterWords = function(bannedWords) {
  rx.from(this.split(" "))
  .pipe(
    rxjsOperator.map(word => {
      if (bannedWords.indexOf(word) > -1) {
        return "***";
      } else {
        return word;
      }
    }),
    rxjsOperator.reduce((w1, w2) => w1 + " " + w2)
  )
  .subscribe(
    filteredSentence => {
      console.log(filteredSentence);
    },
    err => console.log(err),
    null
  );
};

"This house is nice!".filterWords(['house', 'nice']);
