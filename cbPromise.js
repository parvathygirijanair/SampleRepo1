/*
Requirements:

Create a variable:
let stock = 5;
Create a Promise.
If stock > 0, call resolve() with:
"Product is available"
If stock === 0, call reject() with:
"Product is out of stock"
Use .then() to print the success message.
Use .catch() to print the failure message.
Expected output for:
let stock = 5;
Product is available

If you change it to:

let stock = 0;

Expected:

Product is out of stock
*/
let stock = 5;
let stockPromise=new Promise(function(resolve, reject){
    if(stock>0){
        resolve();
    }
    else if(stock === 0){
         reject();
    }
})
stockPromise.then(function(){
console.log("Product is available");
})
.catch(function(){
   console.log("Product is not available"); 
})
/** 
 * 
*/
let numberPromise = new Promise(function(resolve, reject) {
    resolve(10);
});

numberPromise
    .then(function(number) {
       let result= number +5
       return result;
        // Add 5 to the number
        // return the result
    })
    .then(function(number) {
        // Multiply the result by 2
        // return the result
        let result= number *2
        return(result);
    })
    .then(function(number) {
        console.log(number);
    });
    /**
     * Write a JavaScript program to simulate a washing machine using setTimeout().
The program should perform the following steps:
1.Print "Washing machine started".
2.Use setTimeout() to simulate the washing process for 3 seconds.
3.While the machine is working, print "You can do other work".
4.After 3 seconds, print "Washing completed - Clothes are ready".

     */
    console.log("Washing machine started")
    setTimeout(()=>{
        console.log("Washing completed - Clothes are ready")
    },3000)
    console.log("You can do other work")