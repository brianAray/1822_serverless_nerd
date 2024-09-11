// Object Literals
// It is a way to create an object by specifiying its properties and values directly within curly braces {}

const person = {
    "firstName": "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",

    sayHello: function () {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
};

console.log(person.firstName);
console.log(person["lastName"]);

person.address = "123 Main Street";
person.age = 31;

console.log(person);


delete person.email;

console.log(person);



person.sayHello();


// Shorthand Property Names (ES6)
// You can use shorthand property names when the property name matches the variable name

const age = 33;
const occupation = "Engineer";

const worker = {
    age,
    occupation
}

console.log(worker);

