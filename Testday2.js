let fruits = ["Apple","banana","orange"];
console.log(fruits);
console.log(typeof fruits);

//characteristics /Behaviour of var,let and constat the time of redeclaration,reassignment

//var redeclaration :

var username ="@siva.com"  //declaration
var username = "@sivashankar.com"// redeclaration
console.log(username);

// var reassignment
var password = "testlead@1234"; //declaration and assigning the value
password ="testlead@2344";
console.log(password);

//let redeclaration

let accountbalance = 45678
let accountbalance = 6789
console.log(accountbalance);

//let reassignment
let accountbalance = 45678
accountbalance = 6789
console.log(accountbalance);

//const redeclaration 
const accountnumber = 786554432
const accountnumber = 87654454332 //can not redeclaration
console.log(accountnumber);

// const reassignment
const accountnumber = 765443323
accountnumber=6789 ///can not allow

//initialazation

var x //declare without initialization possible in var
let y //declare without initialization possible in let
const z //declare without initialization is not possible in const
const z= "123 " //should always have varaibles without this we cannot execute
 


