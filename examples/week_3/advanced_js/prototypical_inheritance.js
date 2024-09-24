// Prototypical Inheritance
// This is a fundamental concept in JS
// This allows objects to inherit properties and methods from other objects
// Unlike classical inheritance in other languages, JS uses a prototype-based inheritance

// Objects inherit directly from other objects, and there are no classes in a traditional sense

// Key Points

// Prototypes and Objects
// Every JS object has an associated prototype
// A prototype is just another object that the current object inherits properties and methods from
// Ojbects are linked to their prototypes

// __proto__ and Object.getPrototypeOf()
// You can access an objects prototype using the __proto__ property or the function object.getPrototypeOf()

const child = {};
const parent = {name: "Josh"};
console.log(child.__proto__);

child.__proto__ = parent; // sets the child's prototype to parent

// Object.setPrototypeOf(child, parent);

console.log(Object.getPrototypeOf(child) === parent);

console.log(child.name);

// Inheritance Chain
/**
 * If an object doesn't have a property or method, JS looks up to the prototype chain to find it in the prototype objects of that object
 * This forms a chain of inheritance
 */

// constructor functions
// These functions are used to create objects with shared properties andmethods
// When an object isc reated using a constructor, it inherits from the constructors prototype

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

const john = new Person("John", 33);
john.greet();


// Object.create()
// This method allows you to createa  new object with a specified prototype

const parent2 = {
    greet() {
        console.log("hello from parent");
    }
}

const child2 = Object.create(parent2);
child2.greet();


// Constructor Inheritance
// You can create constructor inheritance using the prototype property and the call or apply method to set the prototype of one constructor to be an instance of another constructor

function Student(name, age, studentId){
    Person.call(this, name, age); // Call the person constructor within the student constructor
    this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype); // Inherits Persons prototype
Student.prototype.constructor = Student; // Reset the constructor property

Student.prototype.study = function(){
    console.log(`${this.name} is studying`);
}

const student = new Student("bob", 33, "1233");
student.greet();
student.study();