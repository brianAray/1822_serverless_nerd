# Week 3 Review

* API Documentation/Testing
    - API Testing
        - API testing involves testing individual APIs for functionality, reliability, and performance.
        - Tests ensure that APIs return their expected results and handle errors appropriately.
        - The Tests can be automated, and are often run as part of a continuous integration/continuous delivery pipeline.
    - Postman Collections
        - Postman collections are a way to group, organize, and share related API requests in Postman.
        - Collections can contain individual API requests, as well as folders and sub-folders to better categorize requests.
        - Variables and environment settings can be used within collections to make requests more dynamic and reusable.
    - Generating Random Data with Postman
        - Use the "Random User Generator" API, which generates fake data for user profiles, to generate random data in Postman.
        - Utilize JavaScript code to programmatically generate random data within Postman tests.
        - Store frequently used random data values as environment or global variables in Postman.
    - Postman Variables
        - Postman variables allow for dynamic and reusable data to be used in API requests.
        - Variables can be set at the environment, collection, or global level, and can be accessed within requests using double curly braces syntax (e.g. `{{variable}}`).
        - Variables can be used for values such as API endpoint URLs, authentication credentials, and data that changes frequently.
        - Global variables can be accessed and used by any request within a Postman workspace.
    - Extracting Response Data
        - The response body, header, and status code can be accessed using the pm.response object.
        - Data can be extracted using the methods like:
            - `pm.response.json()`
            - `pm.response.text`
            - `pm.response.header`
            - etc.
        - Extractions can be stored as variables using the syntax `pm.variables.set(key, value)` for later use within the current session or future requests.
        - The `pm.test` function can be used to write assertions to verify that the extracted data matches expected values.
        - The `pm.expect` function from the Chai library can also be used to write more readable and expressive assertions.
    - Postman Assertions
        - Assertions can verify aspects of the response such as status code, response body, headers, and variables.
        - Assertions can be written to check for specific values, data types, presence of key-value pairs, etc.
        - ```javascript
            // Check the status code of the response
            pm.test("Status code is 200", function () {
                pm.response.to.have.status(200);
            });

            // Check for specific data in the response body
            pm.test("Response body contains user data", function () {
                var jsonData = pm.response.json();
                pm.expect(jsonData.name).to.equal("John Doe");
                pm.expect(jsonData.email).to.equal("johndoe@example.com");
            });

            // Check for specific header in the response
            pm.test("Response header has Content-Type value", function () {
                pm.response.to.have.header("Content-Type");
                pm.expect(pm.response.headers.get("Content-Type")).to.equal("application/json");
            });
* JavaScript Advanced
    - Spread / Rest Operator
        - The spread operator `(...)` allows for elements of an array or properties of an object to be spread out into a new array or object.
        - The spread operator can be used to copy arrays and objects, or to concatenate arrays.
        - ```javascript
            // Copying an array
            let originalArray = [1, 2, 3];
            let copiedArray = [...originalArray];
            console.log(copiedArray); // [1, 2, 3]

            // Concatenating arrays
            let array1 = [1, 2, 3];
            let array2 = [4, 5, 6];
            let concatenatedArray = [...array1, ...array2];
            console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]

            // Spreading elements of an array as function arguments
            function add(a, b, c) {
                return a + b + c;
            }
            let numbers = [1, 2, 3];
            console.log(add(...numbers)); // 6
        - The rest operator `(...)` allows for multiple individual elements to be collected into an array.
        - The rest operator can be used in function arguments to gather all remaining parameters into an array.
        - ```javascript
            // Gathering all remaining function arguments into an array
            function logArguments(firstArg, ...restOfArgs) {
                console.log(firstArg);
                console.log(restOfArgs);
            }
            logArguments(1, 2, 3, 4, 5);
            // Output:
            // 1
            // [2, 3, 4, 5]

            // Destructuring an array
            let numbers = [1, 2, 3, 4, 5];
            let [first, ...rest] = numbers;
            console.log(first); // 1
            console.log(rest); // [2, 3, 4, 5]
    - Guard Operator
        - The guard operator `(?.)` is a shorthand for checking the existence of a property or object before accessing or using it.
        - The guard operator returns undefined instead of throwing an error when attempting to access a property of null or undefined.
        - ```javascript
            let person = {
                name: "John",
                address: {
                    street: "123 Main St",
                    city: "San Francisco"
                }
            };

            // Using the guard operator
            let street = person?.address?.street;
            console.log(street); // "123 Main St"

            // Without the guard operator
            let city;
            if (person && person.address) {
                city = person.address.city;
            }
            console.log(city); // "San Francisco"
    - Closures
        - A closure is a function that has access to variables in its outer scope, even after the outer function has returned.
        - Closures can be used to create private variables by returning an inner function that has access to the closure's scope.
        - ```javascript
            // Creating a closure
            function outerFunction() {
                let outerVariable = "I am accessible to innerFunction";
                function innerFunction() {
                    console.log(outerVariable);
                }
                return innerFunction;
            }

            // Invoking outerFunction and storing the returned inner function
            let closure = outerFunction();

            // Invoking the inner function and accessing outerVariable
            closure(); // "I am accessible to innerFunction"
    - Errors
        - Errors are exceptional conditions that occur in a program during its execution.
        - There are different types of errors in JavaScript, including `SyntaxError`, `TypeError`, `RangeError`, and `ReferenceError`.
        - Error handling can be done using try-catch blocks, where code is placed in a try block and exceptions are caught in a catch block.
        - Custom error types can be created using the Error constructor and extending the Error prototype to add additional information.
        - ```javascript
            // Throwing a custom error
            function divide(a, b) {
                if (b === 0) {
                    throw new Error("Cannot divide by zero");
                }
                    return a / b;
            }

            // Catching errors with a try-catch block
            try {
                let result = divide(10, 0);
                console.log(result);
            } catch (error) {
                console.error(error.message); // "Cannot divide by zero"
            }
    - Call Stack
        - JavaScript uses the call stack to keep track of the functions that are being executed and the order in which they are called.
        - Whenever a function is called, it is pushed onto the top of the call stack. When the function returns, it is popped off the top of the call stack.
        - If an error occurs and there are no error handling mechanisms in place, the error will be propagated up the call stack until it reaches the global scope, where it will cause the program to crash.
    - Callback Queue
        - It is a data structure that stores asynchronous function calls, such as those from setTimeout, addEventListener, or fetch.
        - It is separate from the call stack and does not interrupt the execution of the current code.
        - The callback queue is processed only after the call stack is empty.
        - The JavaScript event loop monitors the call stack and callback queue, pushing callbacks onto the call stack whenever the call stack is empty.
    - Event Loop
        - The event loop is a mechanism in JavaScript that continuously checks the call stack and callback queue to determine what code should be executed next.
        - The call stack holds the synchronous code that is currently being executed, while the callback queue holds asynchronous callbacks that are waiting to be executed.
        - The event loop checks the call stack to see if it is empty. If it is, it takes the first callback from the callback queue and pushes it onto the call stack to be executed.
        - The event loop continues this process of checking the call stack and processing callbacks from the callback queue until there is no more code to be executed.
    - Timing Events
        - Timing events refer to events that are scheduled to occur at a specific time or after a specific interval of time.
        - Common timing events in JavaScript include setTimeout, setInterval, and requestAnimationFrame.
        - setTimeout schedules a function to run after a specified amount of time. It returns a unique ID that can be used to cancel the scheduled event with clearTimeout.
    - Promises
        - They are objects in JavaScript that represent the eventual outcome of an asynchronous operation.
        - They have three states: pending, fulfilled, and rejected.
        - They can be created using the Promise constructor, which takes a function as its argument. The function should have two parameters, resolve and reject, which are used to resolve or reject the promise, respectively.
        - Promises have a then method that can be used to specify what should happen when the promise is fulfilled or rejected. The then method takes two functions as arguments, one for fulfillment and one for rejection.
        - They also have a catch method that can be used to specify what should happen when the promise is rejected. The catch method takes a function as its argument, which should handle the rejection.
        - ```javascript
            // Creating a promise
            const promise = new Promise(function(resolve, reject) {
                setTimeout(function() {
                        resolve("Resolved");
                    }, 1000);
            });
            // Using the then and catch methods
            promise
                .then(function(value) {
                    console.log(value);
                })
                .catch(function(error) {
                    console.error(error);
                });
            // Output:
            // Resolved
    - Async Await
        - `async/await` allows you to write asynchronous code that looks and behaves like synchronous code.
        - The `async` keyword is used to declare an asynchronous function, which returns a Promise by default.
        - The `await` keyword can be used within an asynchronous function to pause execution until a Promise is resolved.
        - ```javascript
            // Asynchronous function
            async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            console.log(data);
            }

            // Calling the asynchronous function
            fetchData();

* Testing Philosophy
    - Understanding testing is essential for ensuring software quality and reliability.
    - Testing validates functionality, enhances user satisfaction, and confirms the software meets its requirements.
    - Tester Mindset
        - **Objective and Skeptical**
            - Assume the software has defects and actively seek to find them.
            - Maintain an unbiased perspective to identify gaps between expected and actual behaviors.
        - **Detail-Oriented**
            - Focus on edge cases, boundary conditions, and rare scenarios.
            - Ensure small features work under various conditions.
        - **Curiosity-Driven**
            - Explore beyond requirements to identify hidden issues.
            - Question assumptions and explore 'what if' scenarios.
    - Developer Mindset
        - **Constructive and Goal-Oriented**
            - Focus on building software according to design specifications.
        - **Optimistic Perspective**
            - Assume code works unless proven otherwise.
        - **Efficiency and Functionality Focused**
            - Prioritize writing efficient and maintainable code.
    - Objectives of Testing
        - **Prevent defects**  
        - **Find defects**
        - **Verify specified requirements**  
        - **Validate user and stakeholder expectations**
        - **Build confidence in software quality**
        - **Ensure compliance with legal and regulatory requirements**
    - Quality Management
        - **Quality Assurance (QA)**
            - Focus on preventing defects by improving the development process.
        - **Quality Control (QC)**
            - Ensure the final product meets quality standards through reviews, inspections, and testing.
        - **Continuous Improvement**
            - Implement feedback loops and adapt testing processes over time.
    - Requirements
        - **Functional Requirements**
            - Define what the system should do and describe its behavior under specific conditions.
        - **Non-Functional Requirements**
            - Define how the system should perform its functions (e.g., performance, security, usability).
        - **Business Requirements**
            - Outline high-level objectives of the organization.
        - **Software Requirements**
            - Bridge the gap between business requirements and technical specifications.
    - Testing Reveals Defects, Not Their Absence
        - **Defect Discovery**
            - Testing finds defects but cannot confirm the software is defect-free.
        - **Confidence Building**
            - Builds confidence in the software’s reliability but does not guarantee perfection.
    - Verification vs. Validation
        - **Verification**
            - Ensures the product is built correctly according to design specifications.
        - **Validation**
            - Confirms the product meets user needs through actual testing.
    - Defects Cluster
        - **Concentration in Complex Areas**
            - Focus testing on complex, defect-prone areas.
        - **Identification of Hotspots**
            - Use historical data to identify high-risk areas for prioritized testing.
    - Exhaustive Testing is Impossible
        - **Combinatorial Explosion**
            - Testing all combinations is impractical; prioritize based on risk and critical functionalities.
        - **Risk-Based Testing**
            - Allocate resources to critical areas and high-risk functionalities.
    - Test Early
        - **Shift-Left Testing**
            - Start testing early in the development process to catch defects early.
        - **Early Feedback**
            - Early testing reduces the cost of defect correction and allows for quicker feedback.
    - Pesticide Paradox
        - **Test Case Maintenance**
            - Regularly update test cases to reflect changes in software.
        - **Expand Test Coverage**
            - Explore new test scenarios to improve coverage.
    - Test Context
        - **Tailored Approaches**
            - Adapt testing strategies based on the project’s context.
        - **Context-Driven Testing**
            - There’s no one-size-fits-all; adjust methods to the project’s needs.
    - Absence of Error Fallacy
        - **Business and User Needs**
            - Even without defects, software may not meet user expectations or business goals.
        - **Holistic Quality View**
            - Evaluate usability, performance, and overall user satisfaction.

* Cypress 
    - Cypress Fundamentals
        - **Automation Testing Overview**
            - Automation testing uses software tools to execute tests automatically, saving time and resources.
        - **Types of Automation Testing**
            - Unit Testing, Integration Testing, End-to-End (E2E) Testing.
        - **Advantages of Automation Testing**
            - Reduces human error, increases test coverage, and improves efficiency.
    - Cypress Features
        - **Time Travel**
            - Debugging made easier by viewing past steps.
        - **Automatic Waiting**
            - Automatically waits for elements to load before acting.
        - **Real-Time Reloads**
            - Instantly see test results while writing tests.
        - **Network Traffic Control**
            - Easily mock and stub network requests.
    - Cypress Installation & Setup
        ```bash
        npm init -y
        npm install cypress --save-dev
        npx cypress open
        ```
    - Cypress Commands
        - **cy.visit()**  
            - Navigates to a specified URL, simulating a user visiting the web page.
            - Example:  
                ```js
                cy.visit('https://example.com')
                ```
        - **cy.get()**  
            - Selects an element based on a CSS selector. Used to interact with elements on the page.
            - Example:  
                ```js
                cy.get('button').click()
                ```
        - **cy.contains()**  
            - Finds an element containing specific text.
            - Example:  
                ```js
                cy.contains('Submit').click()
                ```
        - **cy.type()**  
            - Types into a text field or input element.
            - Example:  
                ```js
                cy.get('input[name="email"]').type('example@example.com')
                ```
        - **cy.should()**  
            - Asserts that a selected element has a certain property or behavior.
            - Example:  
                ```js
                cy.get('button').should('be.visible')
                ```
        - **cy.intercept()**  
            - Intercepts and mocks network requests, useful for simulating backend responses.
            - Example:  
                ```js
                cy.intercept('GET', '/api/data', { fixture: 'data.json' })
                ```
    - Cypress Test Structure & Syntax
        - **describe()**  
            - Defines a test suite (a collection of related test cases).
            - Used to group together multiple test cases for a feature or functionality.
            - Example:  
                ```js
                describe('Login Functionality', () => {
                // Test cases go here
                })
                ```
        - **it()**  
            - Defines an individual test case.
            - Represents a specific behavior or functionality being tested.
            - Example:  
                ```js
                it('should successfully log in with valid credentials', () => {
                // Test steps go here
                })
                ```
        - **before()**  
            - Runs once before all tests in a suite.
            - Useful for setting up preconditions or initial application state.
            - Example:  
                ```js
                before(() => {
                cy.visit('https://example.com/login')
                })
                ```
        - **beforeEach()**  
            - Runs before each test case in the suite.
            - Useful for resetting state or reinitializing the application for each test.
            - Example:  
                ```js
                beforeEach(() => {
                cy.clearCookies()
                })
                ```
        - **afterEach()**  
            - Runs after each test case.
            - Can be used to clean up or reset things after tests.
            - Example:  
                ```js
                afterEach(() => {
                cy.log('Test finished')
                })
                ```
    - Cypress Test Suites
        - **Test Suite Structure**  
            - Organize test suites around related functionalities, such as "Login", "Search", "Cart", etc.
            - A test suite is defined using `describe()` and can include multiple `it()` test cases.
            - Example:
                ```js
                describe('Login Suite', () => {
                it('should display login form', () => {
                    cy.visit('/login')
                    cy.get('form').should('be.visible')
                })
                
                it('should log in with correct credentials', () => {
                    cy.get('input[name="username"]').type('user1')
                    cy.get('input[name="password"]').type('password1')
                    cy.get('button[type="submit"]').click()
                    cy.url().should('include', '/dashboard')
                })
                })
                ```
    - Cypress Test Cases
        - **Test Case Structure**  
            - Each test case is defined using the `it()` block and contains a sequence of Cypress commands to perform specific actions and validations.
            - Test cases should focus on one behavior or scenario at a time.
            - Example:
                ```js
                it('should allow user to log in', () => {
                cy.visit('/login')
                cy.get('input[name="username"]').type('user1')
                cy.get('input[name="password"]').type('password1')
                cy.get('button[type="submit"]').click()
                cy.url().should('include', '/dashboard')
                })
                ```
        - **Best Practices for Test Cases**  
            - Write tests that are independent of each other to avoid interdependencies.
            - Keep test cases small and focused on one behavior.
            - Use meaningful test names that describe the behavior being tested.
            - Use assertions (`should()`) to check that expected outcomes match actual outcomes.
            - Example:
                ```js
                it('should not allow login with incorrect password', () => {
                cy.visit('/login')
                cy.get('input[name="username"]').type('user1')
                cy.get('input[name="password"]').type('wrongpassword')
                cy.get('button[type="submit"]').click()
                cy.get('.error-message').should('contain', 'Invalid credentials')
                })
                ```