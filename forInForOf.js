/*
You are given an object containing the details of a student. Write a JavaScript program using the for...in loop to display all the property names (keys) of the student object.
The program should visit each property of the object one by one and print only the property name. Do not print the property values.

*/
let student = {
    name: "Anu",
    age: 22,
    course: "JavaScript",
    city: "Bangalore"
};
for(let i in student){
    console.log(i);
}
/*
You are given an object containing the details of a student. Write a JavaScript program using a for...in loop to print the property values of the student object.
The program should access each property using its key and display only the values, not the property names.

*/
for(let i in student){
console.log(student[i]);
}
/*
The program should visit each property of the object one by one and print the property name along with its value.
	Given Object:

*/
let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics"
};
for(let i in product){
    console.log(i + " " + product[i]);
}
/*
The program should access the value of each array element and print it using console.log().

Given Array:


*/
let fruits = ["Apple", "Banana", "Mango", "Orange"]; 
for(let i of fruits){
    console.log(i);
}
/**Write a JavaScript program using the for...of loop to go through each mark in the array and calculate the total marks.
Finally, use console.log() to display the total marks.


Given Array:

 */
let marks = [75, 80, 65, 90, 85]; 
let sum=0;
for(let m of marks){
    sum+=m;
}
console.log(sum);
/**for of in object */
let student1 = {
    name: "Rahul",
    age: 19,
    course: "BTECH"
};
for(let i of Object.values(student1)){
    console.log(i);
}
for(let i of Object.keys(student1)){
    console.log(i);
}
for(let [keys,values] of Object.entries(student1)){
    console.log(keys,values);
}
/**
 * Use for...in to print all the keys of the student object.
Use for...of with Object.values() to print the values of the object.
Use for...of to print each subject from the subjects array.
Print the message "Adult student" if the student's age is 18 or above.
 */
let students = {
    name: "Rahul",
    age: 20,
    course: "BTECH",
    subjects: ["Maths", "JavaScript", "Testing"]
};
for(let i of Object.values(students)){
    if(students.age>=18){
        console.log("ADULT STUDENT");
    }
    console.log(i);
}