// Classes
// TS is based on the OOP paradigm, classes allow you to have a more organized and clear layout for your code

class PersonClass {
    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    // method
    sayHello() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}

const jane = new PersonClass("Jane", 30);
jane.sayHello();

// Inheritance

class StudentClass extends PersonClass {
    school: string;

    constructor(name: string, age: number, school: string){
        super(name, age);
        this.school = school;
    }

    // override a method from a parent class
    sayHello(): void {
        console.log(`My name is ${this.name} and I am ${this.age} years old, and I go to ${this.school}`);
    }

}

const robert = new StudentClass("Robert", 33, "Revature");

robert.sayHello();


// access modifiers
// public, private, and protected
// Control the visibility and accessibility of class members

class MyClass {
    publicField: string;
    private privateField: string;
    protected protectedField: string;
}

// static members
// static properties and methods that belong to the class itself instead of individual instances

class MathUtil {
    static Pi: number = 3.14;

    static calculateCircleArea(radius: number): number {
        return this.Pi * radius * radius;
    }
}

console.log(MathUtil.calculateCircleArea(5));