// Closures

// A closure occurs when a function is defined within another function and has access to the outer functions variables
// This allows for data encapsulation and the preservation of state within a function even after the function has finished executing

function outer(){
    const outerVariable = 15;

    function inner(){
        console.log(outerVariable); // inner function has access to outer variable
    }

    return inner; // return the inner function
}

const closureFunction = outer();

closureFunction();


// Data Encapsulation
// Closures are used to create private variables and methods within a function

function createCounter(){
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        getCount: function () {
            return count;
        },
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());

// This createCounter function return an object with two methods that access the count outer variable
// count remains private to the closure, and hidden from external access