// simple types

let age: number = 29;
let price: number = 34.33;

let personName: string = "Greg";

let isActive: boolean = false;

let names: string[] = ["Mike", "Jane", "Sherry"];

// Tuple
// A typed array with pre-defined length and types for each index

let person: [string, number] = ["Alice", 30];

// Enums
// Useful for creating a group of constants
// Two main types - String and Number enums

// Numeric Enum
// You can initialize enums with a different starting number
// By default, it starts from 0 and increments by 1

enum CardinalDirection {
    North = 1,
    East,
    South,
    West
}

let currentDirection = CardinalDirection.North;

console.log(currentDirection);

enum Statuscodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
};

console.log(Statuscodes.NotFound);


// String Enums

enum StringEnumDirection {
    UP = "Up",
    RIGHT = "Right",
    DOWN = "Down",
    LEFT = "Left"
}

console.log(StringEnumDirection.RIGHT);


// Any type
// Replicate the behavior of JS
let data: any = 34;
data = ["hello"];
data = {};

// Void Type
function logMessage(message: string): void {
    console.log(message);
}

// Null and undefined
let nullValue : null = null;
let undefinedValue: undefined = undefined;