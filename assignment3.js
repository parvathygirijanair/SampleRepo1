//------------------------Task1------------------------------
/**
 * 1. Create a regular function calculateResult(marks) that accepts a
learner's marks as a parameter and returns:

○ "Pass" if marks are 50 or above
○ "Fail" if marks are below 50
 */
function calculateResult(marks) {
    if (marks >= 50) {
        return ("Pass");
    }
    else if (marks < 50) {
        return ("Fail");
    }
}
console.log(calculateResult(50));
/** Create an arrow function displayResult(name, result) that
displays the learner's name and result.*/
displayResult = ((name, result) => {
    console.log(name + "-" + result);
});
displayResult("Anu", "Pass");
/**
 * 3. Store the following learner data in an array:
[{ name: "Anu", marks: 75 },{ name: "Rahul", marks: 42 },
{ name: "Meena", marks: 68 }, { name: "Arun", marks: 35 }]
 */
let dataSet = [{ name: "Anu", marks: 75 }, { name: "Rahul", marks: 42 },
{ name: "Meena", marks: 68 }, { name: "Arun", marks: 35 }];
/**
 * 4.Use a loop to process each learner.[Hint: Use a for...of loop to
process each learner one by one.]
 */
for (let i of dataSet) {
    console.log(i.name + ": " + i.marks);
}
/**5.Use the calculateResult() function to determine the result for
each learner and use the displayResult() arrow function to display
the learner's name and result. */
dataSet.forEach(learner => {
    let result = calculateResult(learner.marks);
    displayResult(learner.name, result)
}
)
//-----------------------Task 2----------------------------------
/**
 * Write a JavaScript program using the following array methods:
 */
let students = [{ name: "John", marks: 85, grade: "A" },
{ name: "David", marks: 72, grade: "B" },
{ name: "Peter", marks: 90, grade: "A+" },
{ name: "Sarah", marks: 65, grade: "C" }];
/** 1. forEach() – Print the details of every student. */
students.forEach(student => {
    console.log(student.name + "-" + student.marks + "-" + student.grade);
})
/**2. map() – Create a new array containing only the names of all
students. */
let onlyNames = students.map(student => student.name);
console.log(onlyNames);
/**3. filter() – Create a new array containing only the students who
scored 80 or above. */
const topStudents = students.filter(s => s.marks >= 80);
console.log(topStudents);
