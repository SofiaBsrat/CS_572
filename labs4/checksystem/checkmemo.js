const os = require('os');
const {of} = require('rxjs');
const {filter} = require('rxjs/operators');


var numberOfCores = os.cpus().length;
var totalMemory = os.totalmem;

var obj = {
    'cpucore' : numberOfCores,
    'memory' : totalMemory
};

of(obj).pipe(
    filter((x) => x.cpucore > 2 && x.memory > 4e9)
)
.subscribe(
    (x)=>{
        if(x){
            console.log("System checked Successfully");
        }else{
            console.log("ERROR OCCURRED");
        }
    }
)