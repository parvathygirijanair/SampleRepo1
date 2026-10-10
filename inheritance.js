/**Problem1: Inheritance in JavaScript
Write a JavaScript program to demonstrate inheritance using classes.
Create a parent class named Animal.
Add a method eat() that prints "Animal is eating".
Create a child class named Dog that extends the Animal class.
Add a method bark() that prints "Dog is barking".
Create an object of the Dog class.
Use the object to call both eat() and bark() methods.
 */
class Animal{
    eat(){
console.log("Animal is eating")
    }
}
class Dog extends Animal{
    bark(){
       console.log("Dog is barking")
 
    }
}
let dog= new Dog();
dog.eat();
dog.bark();
/**Problem 2: Demonstrate Inheritance Using JavaScript Classes
Create a JavaScript program to demonstrate inheritance using two classes.
Create a parent class named Vehicle.
Add a method start() that displays:
"Vehicle is starting"
Create a child class named Car that extends the Vehicle class.
Add a method drive() inside the Car class that displays:
"Car is driving"
Create an object of the Car class.
Using the object, call both:
start() – inherited from Vehicle
drive() – defined inside Car
 */
class Vehicle{
start(){
console.log("Vehicle is starting")}
}
class Car extends Vehicle{
    drive() {
console.log("Car is driving")}
}
let car=new Car();
car.start();
car.drive();
/**
 * Problem 3: Demonstrate Multilevel Inheritance Using JavaScript Classes
Create a JavaScript program using three classes to demonstrate multilevel inheritance.
Create a parent class named Person.
Add a method speak() that displays:
"Person can speak"
Create a class named Student that extends Person.
Add a method study() that displays:
"Student is studying"
Create another class named CollegeStudent that extends Student.
Add a method attendClass() that displays:
"College student is attending class"
Create an object of the CollegeStudent class.
Using the object, call all three methods:
speak()
study()
attendClass()

 */
class Person{
speak(){
    console.log("Person can speak");
}
}
class Students extends Person{
study(){
    console.log("Student is studying");
}
}
class CollegeStudent extends Students{
attendClass(){
    console.log("College student is attending class");
}
}
let collegestudent= new CollegeStudent();
collegestudent.speak();
collegestudent.study();
collegestudent.attendClass();
/**Problem 4: Demonstrate Inheritance Using JavaScript Classes
Create a JavaScript program to demonstrate multilevel inheritance using classes.
Create a parent class named Person.
Add a method introduce() that displays:
 "Person is introducing"
Create a child class named Student that extends the Person class.
Add a method study() inside the Student class that displays:
 "Student is studying"
Create another child class named CollegeStudent that extends the Student class.
Add a method attendClass() inside the CollegeStudent class that displays:
 "College student is attending class"
Create an object of the CollegeStudent class.
Using the object, call all three methods:
introduce() – inherited from Person
study() – inherited from Student
attendClass() – defined inside CollegeStudent
 */
class Personss{
   introduce() {
 console.log("Person is introducing" );
}}