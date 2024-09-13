const mathOperations = require('../mathOperations');

/*
    Describe
    The describe block is an outer description for the test suite

    Individual Tests
    These test blocks represent a single test, the string in quotes is the test description

    Expect Block
    Expect is an assertion of some kind of verification

*/

// Version 1

describe("Calculator Tests", () => {
    test("Adding 1 + 2 should return 3", () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    })
});

// Version 2 - Cleaner

describe("Cleaner Calculator Tests", () => {
    test('Adding 4 + 5 should return 9', () => {
        // AAA

        // Arrange
        let result = 0;
        let a = 4;
        let b = 5;
        let expectedAnswer = 9;

        // Action
        result = mathOperations.sum(a, b);

        // Assert
        expect(result).toBe(expectedAnswer);
    })
})

// more examples
describe("More Calculator Tests", () => {
    test("Adding 1 + 2 should return 3", () => {
        // Arrange and Act
        let result = mathOperations.sum(1, 2);

        // Assert
        expect(result).toBe(3);
    });
    test("Subtracting 2 from 10 should return 8", () => {
        // Arrange and Act
        let result = mathOperations.diff(10, 2);

        // Assert
        expect(result).toBe(8);
    });
    test("multiplying 2 and 8 should return 16", () => {
        // Arrange and Act
        let result = mathOperations.prod(8, 2);

        // Assert
        expect(result).toBe(16);
    });
})


