//scoping in JS
//var scoping in block

//if true or false -block scoping

var companyname = "TESTLEAF" //global declaration
if (true) {
var companyname = "TESTLEAF" //global declaration
console.log("accessing var inside the if block", companyname);
}
console.log("accessing var outside the if block", companyname);
//----------------------------------------------

  //let block scoping chedk

let companyname = "HAPPY" //let  declaration
if (true) {
let companyname = "TESTLEAF" //let declaration
console.log("accessing let inside the if block", companyname);
}
console.log("accessing let outside the if block", companyname);

 //let is not accessing outside of the block 

//const block scoping

const companyname = "TESTLEAF" //let  declaration
if (true) {
const companyname = "TESTLEAF" //let declaration
console.log("accessing const inside the if block", companyname);
}

console.log("accessing const outside the if block", companyname);

// const not accessible outside of the block 

//introdue function block to know behaviour var,let and const

//var is function scope
function greet (){
var message = "Heelo Team"
console.log("accessing var inside the function block",message);
if (true) {
console.log("accessing var inside the if block", message);

}
}
//console.log("accessing var outside the if block", message); //outside of block will not run only inside will work
greet ()

//let function block ///same as var

function greet (){
let message = "Heelo Team"
console.log("accessing let inside the function block",message);
if (true) {
console.log("accessing let inside the if block", message);

}
}
//console.log("accessing let outside the if block", message); //outside of block will not run only inside will work
greet ()
//const function block ///same as var 


