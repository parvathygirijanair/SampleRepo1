/**Question1: Create a Student Class
Write a JavaScript program to create a Student class with the following requirements:
Create a Student class with a constructor that accepts name, age, and course.
Store these values using this.
Create a method called study() that prints "Anu is studying".
Create another method called attendClass() that prints "Anu is attending class".
Create a student object named student1 with the values:
Name: Anu
Age: 22
Course: JavaScript
Print the student's name, age, and course.
Call both study() and attendClass() methods.
 */
class Student{
    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
    }
    study(){
        console.log("Anu is studying");
    }
    attendClass(){
        console.log("Anu is attending class");
    }
}
let student1=new Student("Anu",22,"JavaScript");
student1.study();
student1.attendClass();
/**Question 2 Print the Current Date and Time
Write a JavaScript program to create a Date object and print the current date and time to the console.
 */
let d= new Date();
console.log(d);
/**Question 3: Create an Employee Class
Write a JavaScript program to create an Employee class with the following requirements:
Create an Employee class with a constructor that accepts name, age, and department.
Store these values using this.
Create a method called work() that prints "Rahul is working".
Create another method called attendMeeting() that prints "Rahul is attending a meeting".
Create an employee object named employee1 with the values:
Name: Rahul
Age: 30
Department: Testing
Print the employee's name, age, and department.
Call both work() and attendMeeting() methods.
 */
class Employee{
    constructor(name,age,department){
        this.name=name;
        this.age=age;
        this.department=department;
    }
    work(){
console.log(this.name + " is working");
    }
    attendMeeting(){
     console.log(this.name +" is attending a meeting");   
    }
}
let employee1=new Employee("Rahul",22,"BTECH");
employee1.attendMeeting();
employee1.work();
/**Question 4: Create a Product Class
Write a JavaScript program to create a Product class with the following requirements:
Create a Product class with a constructor that accepts name, price, and category.
Store these values using this.
Create a method called displayProduct() that prints "Laptop is available".
Create another method called addToCart() that prints "Laptop is added to cart".
Create a product object named product1 with the values:
Name: Laptop
Price: 50000
Category: Electronics
Print the product's name, price, and category.
Call both displayProduct() and addToCart() methods.
 */
class Product{
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    displayProduct(){
console.log(this.name + " is available")
    }
    addToCart(){
console.log(this.name + " is added to cart")

    }
}
let product= new Product("Laptop","120000","Electronics")
product.displayProduct();
product.addToCart();
console.log(product.name);
console.log(product.price);
