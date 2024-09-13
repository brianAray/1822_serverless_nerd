// Jest Matchers
// Improved Expect

// Equality
test('Equality Matchers', () => {
    expect(2*2).toBe(4);
    expect(4-2).not.toBe(1);
})

// Truthiness
test("Truthy Operators", () => {
    let name = "revature"
    let n = null;

    expect(n).toBeNull();
    expect(name).not.toBeNull();

    // name has a valid value
    expect(name).toBeTruthy();

    expect(n).toBeFalsy();
})