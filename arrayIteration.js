let a=[10,20,30];
let marks=a.forEach(i=>console.log(i));
let total=0;
let markss=a.forEach(i=> total=total + i);
console.log(total);
//DISPLAY NAMES
let names = ["John", "David", "Sam"];

names.forEach(n=>console.log("Hello " +n));

/*1.Question:forEach() 
Create a JavaScript program using the forEach() method to process the following student marks:
[85, 90, 78, 92]
For each student:
Use forEach() to access the mark and index.
Add 5 bonus marks to each student's mark.
Display the student number and the updated marks.*/
let marksss=[85, 90, 78, 92];
marksss.forEach((n,index)=>console.log(`${index+1} ${n +5}`));
/*
Declare an array named marks with the values 35, 45, 55, 90, 88. Write a JavaScript program to print the second element of the array using its index.
*/
let b=[35, 45, 55, 90, 88]
console.log(b[1]);
console.log(b.push(10));
let c=b.push(10);
console.log(b);
let pop=[10,20,30];
pop.pop();
console.log(pop);
pop.push(60);
console.log(pop);
pop.unshift(90);
console.log(pop);
pop.shift();
console.log(pop);
console.log(pop.indexOf(60));
console.log(pop.includes(10));
let subMarks= pop.slice(1,2);
console.log(subMarks);
/*
Write a JavaScript program using forEach() to print each name from the following array: ["John", "David", "Peter"]
*/
let persons=["John", "David", "Peter"];
persons.forEach(n=>console.log(n));
persons.forEach(n=>process.stdout.write(n +" "));
/*
Create an array containing the fruits "Apple", "Banana", and "Mango". Use the forEach() method with an arrow function to print the following message for each fruit:  
*/
let fruits=["Apple", "Banana", "Mango"];
fruits.forEach(f=>console.log("I like " + f));
/*
Q5:
Use map() to multiply every number by 2. 

*/
let num=[10,20];
let updNum=num.map(n=>n*2);
console.log(updNum);
/*
Q5:filter() arrow function
Write a JavaScript program using the filter() method and an arrow function to filter and display all numbers greater than 100 from the given array. 
Input
[50, 120, 75, 200, 30, 150]

*/
let inp=[50, 120, 75, 200, 30, 150];
let fil=inp.filter(i=>
    // if(i>100){
    // console.log(i);}
    i>100
)
console.log(fil);

/*
let users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "David", age: 30 },
    { id: 3, name: "Peter", age: 28 },
    { id: 4, name: "Sam", age: 35 }
];

["John", "David", "Peter", "Sam"]
*/
let users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "David", age: 30 },
    { id: 3, name: "Peter", age: 28 },
    { id: 4, name: "Sam", age: 35 }
];
let updName=users.map(i=>i.name);
console.log(updName);
/*
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 }
];
Use map() to create a new array where each product contains:

the product name
the price after adding 18% GST
[
    { name: "Laptop", price: 59000 },
    { name: "Phone", price: 35400 },
    { name: "Tablet", price: 23600 }
]
*/