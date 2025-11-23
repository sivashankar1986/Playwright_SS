import{chromium,test} from "@playwright/test";

test(`Test to launch browser manual way of invoking the browser`,async()=>{
    const browser= await chromium.launch({channel:"chrome"})
    console.log("Test called");

})