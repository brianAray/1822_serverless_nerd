/*
    Adding metadata and behavior to classes, methods, properties, and parameters

    To use this feature, you have use the flag:

    tsc --experimentalDecorators

    It will show errors, but you can ignore them
*/

// class decorator

function classDecorator(constructor: Function){
    console.log("class decorator has been called");
}

// method decorator
function methodDecorator(target: any, key: string, descriptor: PropertyDescriptor){
    console.log(`Method decorator called for ${key}`);
}

// Property decorator
function propertyDecorator(target: any, key: string){
    console.log(`Property decorator called for ${key}`);
}

// Parameter Decorator
function parameterDecorator(target: any, key: string, index: number){
    console.log(`Parameter decorator called for paraemter ${index} of ${key}`);
}

@classDecorator
class MyClass {

    @propertyDecorator
    message = "Hello";

    constructor(){
        console.log("Class Instance Created");
    }

    @methodDecorator
    greet(@parameterDecorator name: string) {
        console.log(`Hello ${name}`);
    }
}

const myClass = new MyClass();
myClass.greet("Mike");

// This is widely used for a range of things
// Additional logging, validation, modifying the behavior of classes and their members
// They are typically inside libraries and frameworks like Angular for feature like dependency injection and route handling