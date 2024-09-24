// Guard Operator
// &&

// This is used for guarding against certain conditions
// THe logical AND operator can be used to check and ensure that a condition is met before processing with further code

const someValue = null;

// Guard against a null or undefined value
const result = someValue && someFunction(someValue);

/**
 * If someValue is falsy (null, undefined, false, 0, etc) the right side is not executed
 * 
 * if someValue is truthy, someFunction(someValue) is called and assigned to "result";
 */