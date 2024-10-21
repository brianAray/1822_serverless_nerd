# Automation Testing Questions

## Level 1: Basic

<ol>
<li>**What is Cypress, and how does it differ from Selenium for web automation testing?**  
Cypress is a JavaScript-based end-to-end testing framework designed specifically for modern web applications. It differs from Selenium in its architecture; Cypress runs in the same loop as your application and directly interacts with the browser. In contrast, Selenium runs outside the browser and communicates via WebDriver.

<li>**What is Jest, and what is its primary use in JavaScript testing?**  
Jest is a JavaScript testing framework primarily used for unit testing. It's known for its ease of setup, built-in mocking, and snapshot testing features, making it popular for testing JavaScript applications and especially React applications.

<li>**What is the purpose of assertions in Cypress tests?**  
Assertions in Cypress are used to verify the expected behavior of the application under test. They ensure that certain conditions are met, like checking whether an element exists, if a URL is correct, or whether a variable contains a specific value.

<li>**What is Postman, and how is it used for API testing?**  
Postman is a tool for testing APIs by sending HTTP requests and reviewing responses. It's commonly used to perform GET, POST, PUT, DELETE, and other HTTP methods to test API endpoints' functionality and behavior.

<li>**How do Cypress commands differ from JavaScript Promises?**  
Cypress commands are not promises, but they behave similarly. Cypress uses a built-in queue system to manage commands and ensures they run in order. Cypress handles asynchrony automatically, unlike JavaScript promises, which require `.then()` for chaining asynchronous actions.
</li>
</ol>

## Level 2: Intermediate

<ol>
<li>**What are "fixtures" in Cypress, and how are they used?**  
Fixtures in Cypress are used to store and manage external data that tests can use. You typically store JSON files with data in the `fixtures` folder, which can be loaded in a test using `cy.fixture()` to simulate data fetching or handle API response mocks.

<li>**Explain what mocking is and how you would mock an API response in Jest.**  
Mocking is a technique used in testing to simulate real functionality. In Jest, mocking an API response can be done using `jest.mock()` or `jest.spyOn()` to replace the actual API call with a simulated one, allowing the test to focus on how the function handles the response instead of making real network requests.

<li>**What is a "snapshot test" in Jest, and what are its benefits?**  
A snapshot test in Jest captures the rendered output of a component (usually in React) and compares it to a previously saved snapshot. If the output differs, the test will fail, ensuring that changes to the component are intentional and reviewed.

<li>**What is the `beforeEach()` hook in Cypress, and why is it useful?**  
`beforeEach()` is a hook in Cypress that runs a specific piece of code before each test case within a test suite. It’s useful for performing setup tasks like navigating to a particular URL or resetting application state before every test to ensure consistent results.

<li>**What are environment variables in Postman, and how are they used in API tests?**  
Environment variables in Postman allow you to store and reuse values across multiple requests and environments (e.g., dev, staging, production). They are particularly useful for managing API endpoints, authentication tokens, and other parameters that change based on the environment.
</li>
</ol>

## Level 3: Advanced

<ol>
<li>**What is the role of custom commands in Cypress, and when should you use them?**  
Custom commands in Cypress allow you to create reusable functions that encapsulate common sequences of Cypress commands. They are used to DRY (Don’t Repeat Yourself) up your test code by extracting repetitive steps into a single, reusable command that can be called from multiple test cases.

<li>**Explain the concept of mocking in Cypress and how `cy.intercept()` is used for network stubbing.**  
In Cypress, `cy.intercept()` is used for network stubbing or request/response mocking. It allows you to control the response returned for a particular network request, which can be useful for isolating tests from external systems or simulating error scenarios without needing to rely on actual network responses.

<li>**What are Jest matchers, and how do they enhance testing flexibility?**  
Jest matchers are functions used to assert values in tests. Matchers like `toEqual()`, `toBeTruthy()`, `toBeGreaterThan()` offer a flexible way to verify conditions and expected outcomes in unit tests. This flexibility ensures that tests are more expressive and can cover various scenarios.

<li>**What is the difference between integration testing and end-to-end (E2E) testing?**  
Integration testing focuses on the interaction between different modules or components of an application to ensure they work together correctly. End-to-end (E2E) testing, on the other hand, simulates real user behavior by testing the entire application from start to finish, including front-end and back-end interactions.

<li>**In Postman, how can you automate the running of API tests with different environments and ensure all tests pass in a CI/CD pipeline?**  
You can automate Postman tests by exporting your collections and running them with the Postman CLI tool called Newman. By using environment files, you can run the same collection against multiple environments (e.g., staging, production). In a CI/CD pipeline, Newman can be integrated to run tests automatically, ensuring the API behaves as expected in different stages of deployment.
</li>
</ol>