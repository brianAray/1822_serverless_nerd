// Error
// Errors are issues that occur during the execution of a program
// It prevents the program from running as intended
// Errors have many reasons and purposes

// Syntax Errors, Runtime Issues, Logical Errors, etc

// Custom Errors
// Custom errors are made using the Error Constructor
// Can be thrown like built-in errors to provide a more meaningful response

function divide (a, b){
    if (!b){
        throw new Error("Division by falsy or ZERO is not allowed");
    }

    return a / b;
}

// handle errors using try catch
try{
    // code that may throw an error
    divide(1, 0);
}catch(error){
    // handle the error
    console.error(error);
}finally{
    // Runs no matter what happens at the end of the try-catch block
    console.log("Finally!");
}
