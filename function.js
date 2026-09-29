/*
1.Question:forEach() 
Create a JavaScript program using the forEach() method to process the following student marks:
[85, 90, 78, 92]
For each student:
Use forEach() to access the mark and index.
Add 5 bonus marks to each student's mark.
Display the student number and the updated marks.

*/
let marks=[85, 90, 78, 92];
marks.forEach(function(mark,index){
    let total=mark +5
    console.log("student " +(index+1)+" " + total);
    }
)

// let marks = [85, 90, 78, 92];

// marks.forEach((mark, index) => {
//     let total = mark + 5;
//     console.log(`student ${index + 1} ${total}`);
// });

/*
 Write a JavaScript program to create a function named greetUser that accepts a user's name as a parameter and displays a greeting message using the user's name. Call the function by passing "Anish" as the argument.

*/
function greetUser(name){
    console.log("Hello " + name);
}
greetUser("Anish");
/*
Q2. 
Write a JavaScript program to create a function named addNumbers that accepts two numbers as parameters, adds them, and returns the result. Call the function by passing 10 and 20, and display the returned sum. 
*/
function addNumbers(a,b){
    return a+b;
}
let result=addNumbers(10,20);
console.log("sum " + result);
/*
Q3. 
Write a JavaScript program to create a function named subtractNumbers that accepts two numbers as parameters, subtracts the second number from the first number, and returns the result. Call the function by passing 50 and 20, and display the returned difference.

*/
function subtractNumbers(a,b){
    return a-b;
}
let result1= subtractNumbers(20,10);
console.log(result1);
/*
Write a JavaScript program to create a function that checks whether a number is even or odd. 
*/
function isEvenOrOdd(a){
    if(a%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
isEvenOrOdd(7);
/*
Question:
 Write a JavaScript program to create a function named multiplyNumbers that accepts two numbers as parameters and displays their multiplication result. Pass 5 and 4 as arguments
*/
function multiplyNumbers(a,b){
    console.log(a*b);
}
multiplyNumbers(5,4);
/*
Q6:Fn Expression 
Write a JavaScript program using a Function Expression to create a function named calculateSquare that accepts a number and returns its square.
*/
let exp= function calculateSquare(a){
    console.log(a*a);
}
exp(5);
/*
Write a JavaScript program to create a function named calculateSum that accepts two numbers and returns their sum. Call the function with 15 and 25 and display the returned value. 
*/
function calculateSum(a,b){
    return a+b;
}
let result3=calculateSum(6,8);
console.log(result3);
/*
Q8:Arrow Fn Without Parameters  
Write a JavaScript program using an arrow function named welcome that returns "Welcome to JavaScript!". Call the function and display the result. 
*/
const welcome=()=>
    "Welcome to JavaScript!";

console.log(welcome());
const welcome1 = () => 
{ return "Welcome to JavaScript!";}
console.log(welcome1());
/*
Q9:Anonymous Fn 
Write a JavaScript program using an anonymous function stored in a variable named showMessage. The function should display "Hello from JavaScript". 

*/
const showMessage=function(){
    console.log("Hello from JavaScript");
}
showMessage();
/*
Q10:Arrow Fn with Parameters 
Write a JavaScript program using an arrow function named subtract that accepts two numbers and returns the difference between them. Pass 50 and 20. 
*/
let substract =(a,b)=>{
return a-b;
}
console.log(substract(2,1));
/*
Q11:Arrow Fn with Multiple Statements 
Write a JavaScript program using an arrow function named calculateTotal that accepts price and quantity, calculates the total amount, and returns it.

*/
let calculateTotal=(price,quantity)=>{
    return price*quantity
}
console.log(calculateTotal(10,9));
/*
Q12:Default Parameter 
Write a JavaScript program to create a function named greet with a default parameter "Guest". Display "Hello" followed by the name. Call the function once with "Anish" and once without an argument.

*/
function greet(name="Guest"){
    console.log("Hello " + name);
}
greet("parvathy");
greet();
/*
Q13:Function Declaration 
Write a JavaScript program using a Function Declaration to create a function named findGreater that accepts two numbers and displays the greater number. Call the function with 25 and 40.
*/
let fn=function findGreater(a,b){
    if(a>b){
        console.log(a)
    }
    else{
        console.log(b);
    }
}
fn(1,8);
/*
Q14:Function Declaration 
Write a JavaScript program using a Function Declaration to create a function named calculateArea that accepts the length and width of a rectangle and returns its area. Use length 10 and width 5. 

*/
let area=function calculateArea(a,b){
    return a*b;
}
console.log(area(10,6));
/*
Q15:Function Declaration 
Write a JavaScript program to create a function named calculateAverage that accepts three marks and returns their average. Use marks 80, 90, and 70.

*/
let average=function calculateAverage(a,b,c){
    return (a+b+c)/3;
}
console.log(average(80,90,100));
/*
Write a JavaScript program using a Function Expression named calculateDiscount that accepts a price and discount percentage and returns the discount amount. Use price 1000 and discount 10%.
*/
let discount=function calculateDiscount(price,disPer){
return (price*disPer)/100;
}
console.log(discount(100,10));
/*
Q17:arrow Fn 
Write a JavaScript program using an arrow function named findMaximum that accepts two numbers and returns the greater number. Use 45 and 60.

*/
let findMaximum= (a,b)=>{
    if(a>b){
        return a;
    }
    else
        return b;

}
console.log(findMaximum(1,8));