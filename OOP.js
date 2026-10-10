/*
Student
├── name
├── age
├── marks
└── study()
*/
class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    study(){
        console.log("studying")
        console.log(this.name);
        console.log(this.age);
        console.log(this.marks);
    }
}
let student1= new Student("James",19,80);
student1.study();
/*
ENCAPSULATION
*/

class Fruit{
    #name;
constructor(name,number){
    this.#name=name;
    this.number=number
}
getName(){
    return this.#name;
}
setName(name)
{
 this.#name=name;   
}}
let fruit1=new Fruit("APPLE",9);
console.log(fruit1.getName());
fruit1.setName("ORANGE");
console.log(fruit1.getName());
/*
INHERITANCE
*/
class Animal{
    eat(){
        console.log("Aniaml is eating");
    }
}
class Dog extends Animal{
    bark(){
        console.log("Dog can bark");
    }
}
let dog1=new Dog();
dog1.eat();
dog1.bark();
/*
1. super() with constructor
*/
class Animals{
    constructor(name){
        this.name=name;
    }
}
class Gog extends Animals{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
}
let dog2=new Gog("RAVI","LAB");
console.log(dog2.name);
console.log(dog2.breed);
/*
super.method()
*/
class Fruits{
    display(){
        console.log("Display the name");

    }
}
class Mango extends Fruits{
    display(){
        super.display();
        console.log("Mango is too good");
    }
}
let mango=new Mango();
mango.display();