// OOP

/*
    OOP is supported in JS
    Some of the features

    Objects
    Classes
    Constructors
    Inheritance
    Encapsulation
    Abstraction
    Polymorphism

*/

// Objects
const person = {name: "Mike", age: 33};

// classes
// In ES6, there is a class syntax which allows you to create classes as blueprints for objects

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person1 = new Person("John", 30);
person1.greet();

// inheritance

class Student extends Person {
    constructor(name, age, studentId){
        super(name, age); // calls the parent constructor
        this.studentId = studentId;
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}

const student = new Student("Jim", 35, "234234");
student.greet();
student.study();

// encapsulation is not straightforward in JS due to the lack of access modifiers
// you can use closures to create a simulation of encapsulation

// Static Methods and Properties
class MathUtils {
    static add(x, y){
        return x + y;
    }
}

const result = MathUtils.add(45, 33); // 78, we do not have to instantiate the class as it has static methods