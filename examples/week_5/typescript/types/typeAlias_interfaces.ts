// Type Alias

type User = {
    id: number;
    name: string;
    email: string;
};

// we use type aliases when we are trying to represent complex types

// Interfaces

// Interfaces act as a contract that classes or objects must adhere to

interface UserInterface {
    id: number;
    name: string;
    email: string;
}

// Differences
/*
    1. Extending / Implementing
        Interfaces support extending and implementing other interfaces, allowing you to create complex type hierarchies

*/

interface PersonInterface {
    name: string;
}

interface AddressInterface {
    street: string;
}

interface Contact extends PersonInterface, AddressInterface {
    email: string;
}


/*
    2. Comptability

        Interfaces should be treated as open-ended by default, which means you can add properties to an interface even after it is defined

        Type aliases are not open ended and cannot be extended after they are defined
*/

/*
    3. Intersection Types

        Type Aliases can represent intersection types using the & operator

*/

type A = {x: number};
type B = {y: string};
type C = A & B;

const double: C = {x: 1, y: "hello"};

// Preference
/*
    Use interfaces when defining the shape of objects or when creating contracts for classes to adhere to

    Use type aliases for creating complex, resuable types that may or may not represent objects or classes

*/