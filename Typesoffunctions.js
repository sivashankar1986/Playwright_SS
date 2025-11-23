/* //how to store function --named function ...will call end of statement it will print 
//Named function
//Named function
function PW15ONE(){
console.log("hello team welcome");
}
PW15ONE()

// call a function to exuecte the code inside the functionblock

function PW15() {
    let a=10
    let b=12
    c=a+b
    console.log(c);
}
PW15()
 */
//function expression /Anonymous function:
let funname= function () {
    console.log("this is function expression");
}
funname()

//Arrow function : normally using in projects (day by days functions came like this )
let funname1= ()=> { //fat arrow replcaing function removed function from previous 
    console.log("this is function expression");
}
funname1()
//arrow function wriiten in single line (old way is 3 lines instaed of that only one line refer top)

const funname3 = (a,b) => a+b;
console.log(funname3(10,20));

