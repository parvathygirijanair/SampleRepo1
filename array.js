/**Write a program to filter words having more than 5 letters.
Input
["Apple", "Banana", "Cat", "Elephant", "Dog"]
 */
let fruits=["Apple", "Banana", "Cat", "Elephant", "Dog"];
let fru=fruits.filter(i=>i.length>5);
console.log(fru);
/**
 * Write a program using map() to find the square of each number. 
Answer
const numbers = [2, 3, 4];

 */
const numbers = [2, 3, 4];
let square=numbers.map(i=>i*i);
console.log(square);
/**
 * Declare an array named numbers using const with the values 5, 10, 15, and 20. Use the filter() method to create a new array containing only the numbers greater than 10, and display the result. 
Answer

 */
const number=[5, 10, 15, 20];
let num=number.filter(n=>n>10);
console.log(num);
// let num = number.filter(n => {
//     console.log(n);
//     return n > 10;
// });
/**Write a program using filter() to display students whose marks are greater than 60. 
Answer
 */
const marks = [45, 78, 60, 85, 52];
let mar=marks.filter(i=>i>60);
console.log(mar);
