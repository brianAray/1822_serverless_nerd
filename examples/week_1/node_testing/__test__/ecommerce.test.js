const { calculateTotal, createCartMessage } = require("../ecommerce");

/*
    Mocks are essentially dummy objects that can be setup to behave in any way that you want
    The operations however are focused purely on input and output

    When a mock object is called with this parameter, return back this value

    Code typically has dependencies, however, unit testing requires isolation

    In order to create this isolation, we mock any dependencies a unit of code has in order to isolate its behavior
*/

// create a mock function for the calculateTotal function
const mockCalculateTest = jest.fn();

// mock a simple shopping cart

const sampleCart = [
    {id: 1, name: "Product 1", price: 10},
    {id: 2, name: "Product 2", price: 20},
    {id: 3, name: "Product 3", price: 30},
];

test("Create Cart message should get the correct message for the cart", () => {
    // configure the mock function to return a fixed value
    mockCalculateTest.mockReturnValue(60);

    const cartMessage = createCartMessage(sampleCart, mockCalculateTest);

    expect(mockCalculateTest).toHaveBeenCalledWith(sampleCart);

    expect(cartMessage).toBe("Total Price is: 60");

});

// test("calculateTotal should calculate the total price correctly", () => {
//     // configure the mock function to return a fixed value
//     mockCalculateTest.mockReturnValue(60);

//     // Call the calculateTotal function with the sample cart

//     const totalPrice = mockCalculateTest(sampleCart);

//     // Assert that the mock function was called with the sample cart
//     expect(mockCalculateTest).toHaveBeenCalledWith(sampleCart);

//     // Assert that the totalPrice matches the expected value
//     expect(totalPrice).toBe(60);
// })

// afterEach(() => {
//     mockCalculateTest.mockClear();
// });