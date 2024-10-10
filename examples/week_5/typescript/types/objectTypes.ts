type Address = {
    street: string;
    city: string;
}

type Person = {
    name: string;
    age?: number;
    address?: Address;
};

const John: Person = {
    name: "John",
    // age: 30,
};

// Readonly properties
type Point = {
    readonly x: number;
    readonly y: number;
}

const pointOrigin: Point = {x: 0, y: 0};

// pointOrigin.x = 10; // Cannot assign value to readonly

// Extending Object Types

type Student = Person & {
    isStudent: boolean
}

const alice: Student = {
    name: "Alice",
    age: 44,
    isStudent: true,
    address: {
        street: "123 Main street",
        city: "Anywhere"
    }
}

// We are using types to mainly define the structure of data shapes and ensuring type safety within our code
// This is especially useful for API responses or complex data structures

