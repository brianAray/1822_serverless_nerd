// console.log(document)
// Select elements from the DOM

/**
 * Document Object Model is a programming interface that represents the structure of the web page as a tree of objects.
 * 
 * This allows you to interact with and manipulate the content and structure of a web page dynamically.
 * 
 * To select elements, we have to use element selectors
 */

// Select by id
// const elementById = document.getElementById("myElementId");

const loginPageHeader = document.getElementById("login-header");

console.log(loginPageHeader);

loginPageHeader.textContent = "I have been changed by the script";

// Select by class name
// const elementByClass = document.getElementsByClassName("myClassName");

const loginFormInputs = document.getElementsByClassName("login-inputs");

console.log(loginFormInputs);

// select by tag name

const paragraphElement = document.getElementsByTagName("p");
console.log(paragraphElement);


// Selecting by CSS Selector
const elementByQuerySelector = document.querySelector("#login-form");

console.log(elementByQuerySelector);

const elementsAllByQuerySelector = document.querySelectorAll(".login-inputs");

console.log(elementsAllByQuerySelector);



// Parent or Child elements

const loginForm = document.querySelector("#login-form");

console.log(loginForm.parentElement); // Select the parent element
console.log(loginForm.parentNode); // select the parent node

console.log(loginForm.firstElementChild);
console.log(loginForm.lastElementChild);
console.log(loginForm.children);

console.log(loginForm.nextElementSibling);
console.log(loginForm.previousElementSibling);


// DOM Manipulation
// We can then modify the content of any element we want

// loginForm.textContent = "hello"
// loginForm.innerHTML = "<p>New HTML Content</p>"

// We can create elements and add them to the page programmatically
const newElement = document.createElement("p");
newElement.textContent = "Hello again";

loginForm.appendChild(newElement);
loginForm.removeChild(newElement);


/*
    Events and Listeners

    This is an essential concept in web dev
    This allows you to make your page interactive and responsive to user interaction and events

    We can attach event listeners to elements on the page, which on triggering the event, will run whatever function associated with it

    Events:
        - Actions or occurrences that can happen in the browser, like clicking, hovering, pressing a button, moving the page, or when the page finishes loading
        - common events: click, mouseenter, keydown, submit, load
    
    Event Listeners:
        - These are JS functions that listen for the specific events
        - When the vent occurs, the event listener function is executed

*/


// Attach event listeners

const loginButtonInput = document.querySelector("#login-button-input");

loginButtonInput.addEventListener("click", (event) => {
    console.log(event);
    alert("Button is clicked");
});

// Event object
// An event object is created and passed to the event listener function
// The event object contains information about the event, such as the target element, event type, and any event-specific data

// bubbling and Capturing

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => {
    console.log("parent capturing phase");
}, true);

child.addEventListener("click", () => {
    console.log("child capturing phase");
}, true);

parent.addEventListener("click", () => {
    console.log("parent bubbling phase");
});

child.addEventListener("click", () => {
    console.log("child bubbling phase");
});