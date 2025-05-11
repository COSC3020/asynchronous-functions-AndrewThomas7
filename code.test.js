const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
var TestArr=[4,2,2,2,3,3,1,1,1]

console.assert(KeyCountAsync(TestArr,4).then((outcome)=>{ console.log(outcome==1)})==true)


