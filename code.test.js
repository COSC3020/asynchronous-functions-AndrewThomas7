const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
var TestArr=[4,2,2,2,3,3,1,1,1]

console.assert(KeyCountAsync(TestArr,4).then((outcome)=>{ console.log(outcome==1)})==true)
console.assert(KeyCountAsync(TestArr,3).then((outcome)=>{ console.log(outcome==2)})==true)
console.assert(KeyCountAsync(TestArr,2).then((outcome)=>{ console.log(outcome==3)})==true)
console.assert(KeyCountAsync(TestArr,1).then((outcome)=>{ console.log(outcome==3)})==true)
console.assert(KeyCountAsync(TestArr,5).then((outcome)=>{ console.log(outcome==0)})==true)

var TestArr2=['a','a','c','a','a','f','c','f','e']

console.assert(KeyCountAsync(TestArr2,'a').then((outcome)=>{console.log(outcome==4)})==true)
console.assert(KeyCountAsync(TestArr2,'c').then((outcome)=>{console.log(outcome==2)})==true)
console.assert(KeyCountAsync(TestArr2,'f').then((outcome)=>{console.log(outcome==2)})==true)
console.assert(KeyCountAsync(TestArr2,'e').then((outcome)=>{console.log(outcome==1)})==true)
console.assert(KeyCountAsync(TestArr2,1).then((outcome)=>{console.log(outcome==0)})==true)
