 //declaration - two types (Literal and object)

//string Literal ---same value is declared same value it will not create own menory space
let companyName = "SIVA"
let frimName = "SIVA"

console.log(companyName===frimName);//true

//object way of declaration --creaating new memeory location by mentioning new
//object literal
let companyNewName = new String ("SIVA")
let frimNewName = new String("SIVA")

console.log(companyNewName===frimNewName);//false


//String Methods:

//1. Escape sequence: \ is a called escape sequece and ""''\n,\t,\

let testEsc = 'it\'s is a regression '
console.log(testEsc);

let testEscDbl = "it\t is a regression\"double quote\"" 
console.log(testEscDbl);

//concatenation:---concat()
//+
let testcase = "create a new lead"
let testcaseID = "123"

let resultConcat = testcaseID.concat(testcase)
console.log(resultConcat);

//if its a number we can use string method we need to convert to string 

let testcase = "create a new lead"
let testcaseID = 123 //not in string then need to convert number

let resultConcat = testcaseID.toString().concat(testcase)
console.log(resultConcat);

//+
let testcase = "create a new lead"
let testcaseID = 123 //not in string then need to convert number

let resultplus = testcaseID+"-"+testcase+"passed the execution"
console.log(resultplus);

//template literal -dont hardcode-->`${}`

function funname(Tcase){
let output =`there are ${Tcase} testcases`
console.log(output);
}
funname(120)


//length-property --counting the string by number of characters inside a string--p starts with 1 

let course ="playwright"
console.log(`The lenghth of string is ${course.length}`);

//charArt()--- satrts with index refer notes for diagram

let course1 = "playwright"
console.log(`the charAt of 2 in the string is ${course1.charAt(2)}`);

//indexof()
let course2 = "playwright"
console.log(`the indexOf "a" ${course2.indexOf('a')}`);

//slice()---cut it 
//start index included  and end index id optional , negative index is allowed, not able to swap
let course3 = "playwright"
let outputSlice1=course3.slice(2,4) //slice (start index,end index)
console.log(outputSlice1); //answer ay

//for negative value
let course4 = "playwright"
let outputSlice2=course4.slice(-4,-2) //slice (start index,end index)
console.log(outputSlice2); //answer ig

//cannt swap
let course5 = "playwright"
let outputSlice3=course5.slice(-2,-4) //slice (start index,end index)
console.log(outputSlice3); //not able to swap and it will give space


//substring() --negative value not allow in substring but slice will allow
let course6 = "playwright"
let outputSubstring1=course6.substring(2,4); //ay
console.log(outputSubstring1);

let course7 = "playwright"
let outputSubstring2=course7.substring(4,2); //ay while swaping is allowed and same value as before
console.log(outputSubstring2);

let course8 = "playwright"
let outputSubstring3=course8.substring(-4,-2); //not accept it will throw blank space
console.log(outputSubstring3);

let course9 = "playwright"
let outputSubstring4=course9.substring(5,-2); //-2 is eqaulent to 0
console.log(outputSubstring4);

let course10 = "playwright"
let outputSubstring5=course10.substring(-5); //substring(-5) not taken as consideration it will show no value it will give playwrighrt result
console.log(outputSubstring5);

 //string reversal
let company = "Testleaf"
let reversed = "";
for(let i=company.length-1;i>=0;i--){
    reversed += company[i]
}
console.log(reversed);

let company = "Testleaf"
let reversed = "";
for(let i=company.length-1;i>=0;i--){
    reversed =reversed+company[i]
}
console.log(reversed);
   



