
/*  function getBrowser(browsername){ //function declaration passing parameter name is mandatory
if (browsername ==="chrome") {
    Console.log("supported browser is chrome");
    
} else if (browsername ==="edge") {
    console.log("supported browser is Edge");
    
} 
else {
    console.log ("not a supported browser");
    
     }
}
getBrowser("firefox")
*/

//// swtich 


function getversion(browsername){ //function declaration passing parameter name is mandatory
    switch (browser) {
        case "chrome":
              console.log("131");
            break;
        case "edge":
              console.log("132");
            break;
        case "firefox":
              console.log("133");
            break;
    
        default:
            console.log("unsupported browser");
            break;
    }
}
let browser ="firefox"
getversion()