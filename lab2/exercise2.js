Array.prototype.even =function(){
    let arr= this;
    let result=[];
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2===0)
result.push(arr[i]);
    }
    console.log(result);
}

Array.prototype.odd =function(){
    let arr= this;
    let result=[];
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2!==0)
result.push(arr[i]);
    }
    console.log(result);
}
var arr=[2,3,4,5,6,7];
console.log("start");
 setTimeout(function(){ arr.even()}, 2000);
 setTimeout(function(){ arr.odd()}, 2000);
console.log("end");