//even or odd
let number=15;
if(number%2==0){
    console.log("it is even");
}else{
    console.log("Odd");
}
//grade marks
let marks=85;
if(marks>90){
    console.log("GRADE:A+");
}else if(marks>80 && marks <90){
    console.log("GRADE:A")
}
else if(marks>70 && marks<80){
    console.log("GRADED:B")
}
else{
    console.log("FAIL");
}
//TRUTHY FALSY
let names="";
if(names){
    console.log("Truthy");
}
else{
    console.log("FALSY");
}

//Print number from 1 to 5
for(let i=0;i<=5;i++){

    process.stdout.write(i +" ");
}
let result="";
for(let i=0;i<=5;i++){
result +=i +" ";
}
/*
Question 1
Write a JavaScript program to check whether a person is eligible to vote.

*/
let age=18;
if(age>=18){
    console.log("eligible for voting");
}
else{
    console.log("Not eligible")
}
/*
Write a JavaScript program to check whether a student has passed or failed.
Store the student's marks in a variable called marks.
If the marks are 50 or above, display "Student passed".
Use an if statement to perform the check.

*/
let markss=60;
if(markss>=50){
    console.log("Passes");
}
else{
    console.log("Failed");
}
/*
Write a JavaScript program to display a message based on the temperature.
If the temperature is 35 or above, display "Very Hot".
If the temperature is 25 or above, display "Warm".
If the temperature is 15 or above, display "Cool".
Otherwise, display "Cold".

*/
let temperature=20;
if(temperature>=35){
    console.log("Very Hot");
}
else if(temperature>=25){
    console.log("Warm");
}
else if(temperature>=15){
    console.log("Cool");
}
else{
    console.log("Cold")
}
/*
Write a JavaScript program to display the day based on a number.
*/
let day=2;
switch(day){
    case 1:{console.log("MONDAY");

    }
    case 2:{
        console.log("TUESDAY");
    }
    default:{
console.log("Any other day");
    }
}
/*
Write a JavaScript program to check whether a given number is a truthy or falsy value. Declare a variable named number and assign the value 0.
Use an if...else statement to check whether the value is truthy or falsy.
If the value is truthy, display "Truthy Value".
If the value is falsy, display "Falsy Value"

*/
let numberr=0;
if(number){
    console.log("Truthy Value");
}
else{
   console,log("Falsy Value"); 
}
/*
Write a JavaScript program to print the multiplication table of 5.
*/
let n=5;
for(let i=1;i<=10;i++){
console.log("5 * "+ i + " =" ,i*5);
}
/*
Write a JavaScript program to print numbers from 1 to 5 using a while loop.
*/
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
/*
Write a JavaScript program using a while loop to print even numbers from 2 to 10.
*/
let num=2;
while(num<=10){
    console.log(num);
    num=num +2;
}
/*
Write a JavaScript program to print numbers from 1 to 5 using a do...while loop.
*/
let num1=1;
do{
    console.log(num1);
    num1++;
}
while(num1<=5);
//Write a JavaScript program to print even numbers from 2 to 10 using a do...while loop.
let num2=2;
do{
    console.log(num2);
   num2= num2 +2;
}
while(num2<=10 && num2%2==0);
/*
Write a JavaScript program to print numbers from 1 to 10 but stop when the number reaches 5.
*/
for(let i=0;i<=10;i++){
    if(i==5)
        continue;
    console.log(i);
}
/*
if Statement – Positive Number
Question 10
Write a JavaScript program to check whether a number is positive.
Answer:
*/
let number3 = 25;

if (number3 > 0) {
    console.log("Positive Number");
}
