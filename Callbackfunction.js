
//call if tickets are availabel othwerwise dont call
/*function checkTicketAvailable(x){ //main function
console.log("checking a ticket available");
setTimeout(()=> {
 console.log("Tickest are available");  
 x() 
} ,2000);

}
function yougotcall(){
    console.log("Tickest are ready");
}
checkTicketAvailable(yougotcall)
  */

//example 2 : search movie in netflex 

function checkavaibility (movieName,callBack){
    console.log("checking for the movie");
    setTimeout(()=>{
        console.log(`movie ${movieName}is available`);
        callBack();
    

    },2000);
     
    
}
function playmovie(){
    console.log(`now playing the movie`)
}
checkavaibility("Ave",playmovie)