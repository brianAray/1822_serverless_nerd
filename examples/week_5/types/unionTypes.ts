// Union Types
// This basically lets you create a type that allows for variable types
// This is helpful for allowing flexibility and accept different types

let ageOrName: number | string;

ageOrName = 30; //valid
ageOrName = "Mike"; // valid
// ageOrName = true; // invalid


// Type Guards
function display(value: number | string): void{
    if (typeof value === 'number'){
        console.log("Value is a number");
    }else{
        console.log("value is a string");
    }
}



