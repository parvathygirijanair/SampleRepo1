/*
Practical: Create a JavaScript program to store information about a
student.
Store the following:
• Student name
• Age
• Course name
• Whether the student is currently enrolled
• List of subjects
*/
let studentName="Rahul";
let age=19;
let courseName="BTECH";
let isEnrolled=true;
let subjects=["ELECTRONICS","MATHS","ENGLISH"];
console.log("STUDENT NAME: ",studentName);
console.log("AGE: ",age);
console.log("COURSE NAME: ",courseName);
console.log("ENROLLED TO ANY COURSE: ",isEnrolled);
console.log("SUBJECTS: ",subjects);
/*
Write a JavaScript program to:
• Calculate the total marks.
• Calculate the average marks.
• Check whether the student scored at least 40 marks in JavaScript.
• Display the results in the console
JavaScript = 75
Testing = 80
Automation = 70
Create a simple Test Score Calculator that calculates a student's total and
average marks and checks whether the student has passed JavaScript.
*/
let JavaScript = 75;
let Testing = 80;
let Automation = 70;
let totalMarks=JavaScript + Testing+ Automation;
let averageMarks=(JavaScript + Testing+ Automation)/3;
let passedJavaScript=JavaScript>=40;
console.log("Total Marks: ",totalMarks);
console.log("Average Marks: " ,averageMarks);
console.log("Passed JavaScript: ",passedJavaScript);
/*
Create a JavaScript program to store an employee's attendance
percentage.
*/
let attendacePercentage=65;
if(attendacePercentage>=75){
    console.log("Employee is eligible for the examination");
}
else{
    console.log("Employee is not eligible for the examination");
}
/*
Practical: Create a JavaScript program that stores a browser name.
Use one of the following browsers:
• Chrome
• Firefox
• Edge
• Safari
Use a switch statement to display the appropriate message.
Example:
Browser: Chrome
Running tests on Chrome

If an unsupported browser is entered, display:
Unsupported browser
*/
let browser="Safari";
switch(browser){
case "chrome":
    console.log("Running tests on Chrome");
    break;
case "Safari":
    console.log("Running tests on Safari")
    break;
   case "Edge":
    console.log("Running tests on Edge")
    break;
    case "Firefox":
    console.log("Running tests on Firefox")
    break; 
    default:
        console.log("Unsupported browser");
    }
    /*
    Write a JavaScript program to generate and display the
multiplication table of 5 using a for loop.
    */
   let number=5;
   for(let i=1;i<=10;i++){
    console.log(number+" * "+i+" "+"= "+number*i);
   }
   /*
   break,continue
   */
  let num1=9;
  let num2=5;
  for(let i=0;i<10;i++){
    if(i===2){
        continue;
    }
    else if(i===9){
break;
    }
    else{
        console.log(i);
    }
  }
