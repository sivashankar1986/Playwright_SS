/*  for,do while,while

// for initialization,declaration ,preincrement

for (let i=1;i<=10;i++){
     console.log(i)
}
     

for (let i=1;i<=10;i++){
    if(i%2===0)                   ////strict equiality
     console.log('Even':+i);
} else{
    console.log('odd':+i);
}
//WHILE WITH PAGINATION EXAMPLE
let hasnextpage = true;
while (condition){
    //hasnextpage=await.page
    if(hasnextpage){
        console.log("Moving to next page");
    } else {
        console.log("No more pages");
    }
}
*/
//while loop
let number =10;
while (number){ //true when number values turns"0" whcich means it is false when it come
    console.log(number); //10,9....1
    number-- //9,8,7...0(false)

    }

    //dowhile --only for once we can go with do while

    let count=1;
    do {
        console.log(count);

    }while(num<=0)//false