/*
Write a JavaScript program to create an object named employee with the following properties:
name → "Alice"
age → 28
department → "Testing"

*/
const obj={name:"Alice",
    age:28,
    department:"Testing"
}
console.log(obj.name);
/*
Write a JavaScript program to create a Date object and display the current date and time.
*/
let today= new Date();
console.log(today);
console.log(today.getFullYear());
/*
Write a JavaScript program to create a Regular Expression that checks whether the word "JavaScript" is present in the given text. Display the result using the test() method.
*/
let word=/Javascript/;
console.log(word.test("Javascript is good"));
/*
Write a JavaScript program to create a Set containing the following numbers: 10, 20, 20, 30, 30, 40. Display the Set and observe how duplicate values are removed.
*/
let unique= new Set([10, 20, 20, 30, 30, 40]);
console.log(unique);
console.log([...unique]);
/*
Write a JavaScript program to perform different arithmetic operations on two numbers.
*/
let a=10;
let b=9;
let sum=a +b;
let substraction=a -b;
console.log(sum);
console.log(substraction);
console.log(a ** b);//exponential
console.log(a * b);
console.log(a /b);
/*
Create a variable x with the value 10. Then use the assignment operators +=, -=, *=, /=, and %= to update the value of x. Display the value of x after each operation
*/
let x=10;
x+=6;
x-=6
console.log(x);
/*
Write a JavaScript program to compare two numbers using comparison operators.
Create two variables:
a = 20
b = 10

*/
console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a!=b);//comment
/*
 Write a JavaScript program to check whether a person is eligible for a driving license. 
let age = 25;
let hasLicense = true;

*/
let age = 15;

let eligibleForLicense= age>18?true:false;
console.log(eligibleForLicense);

let firstName = "Rahul";
let lastName = "Sharma";
console.log(firstName +" " +lastName);
