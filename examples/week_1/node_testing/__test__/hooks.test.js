const mathOperations = require("../mathOperations")

// Hooks
// Setups and Teardowns

/**
 * There are 4 hoooks
 * 
 * beforeEach and afterEach
 * Executed before and after each test in the test suite
 * 
 * 
 * beforeAll and afterAll
 * Executed just once for each test suite
 * 
 * 
 */

describe("Calculator with hooks", () => {
    let input1 = 0;
    let input2 = 0;

    beforeAll(() => {
        console.log("beforeAll Called");
    });

    afterAll(() => {
        console.log("afterAll Called");
    });


    beforeEach(() => {
        console.log("beforeEach called");
        input1 = 1;
        input2 = 2;
    });

    afterEach(() => {
        console.log("afterEach called");
    });

    test("Adding 1 + 2 should return 3", () => {
        let result = mathOperations.sum(input1, input2);

        expect(result).toBe(3);
    });
})