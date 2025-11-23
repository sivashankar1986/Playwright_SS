//compund assignment operators

let x=10
x+=5
console.log(x); //15

x-=5; //x=x-5 (15-5)
console.log(x);//10

x*=5; //10*5
console.log(x);//50

//post inccrement-->value++ => value+1

console.log(x++);// x=50
console.log(x); //51 ----second time only add

//pre inccrement-->++value => value+1

console.log(++x);// x=52 ----first time will itself add
console.log(x); // x=52

//post decrement ->value--=> value-1
console.log(x--);// x=10
console.log(x); //9----second time only add


//pre decrement ->value--=> value-1
console.log(--x);// x=9
console.log(x); //9----second time only add

/* Strict Equality "==="
1.compare datatype and 
2.compare value */

/* non-Strict Equality "=="(loose equility)
compare the value and not the datatype*/

console.log (1===1); //true
console.log (1==="1"); //false
console.log ("1"==1);// true bcoz of loose equlity datatypes gets converted--->type coercion
console.log(true==1);//true internally means 1,true=1 and false=0 converted bcoz of loose equlity datatypes gets converted--->type coercion
console.log(1===true);//false