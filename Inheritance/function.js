/**Write a JavaScript program to create a function declaration named calculateSum that accepts two parameters, num1 and num2.
 *  Inside the function, calculate the sum of the two numbers and print the result using console.log(). 
 * Then call the calculateSum() function by passing 20 and 30 as arguments.  */
let calculateSum= function calculateSum(a,b){
    let sum=a+b;
    console.log(sum);

}
calculateSum(20,30);
/**Write a JavaScript program to create an arrow function named printStudentName
 *  that accepts one parameter named name. Inside the arrow function, use console.log() to print the value of name. 
 * Then call the printStudentName() function by passing "Anu" as the argument and display the output.  */
let prinStudentName=(name)=>{
    console.log(name);
}
prinStudentName("GEORGE");