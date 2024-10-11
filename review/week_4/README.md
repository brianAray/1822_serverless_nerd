* HTML
    - Overview
        - HTML stands for Hypertext Markup Language, and is the standard language used to create web pages.
        - HTML consists of a series of elements that define the structure, content, and presentation of a web page.
        - HTML is used in conjunction with other technologies, such as CSS and JavaScript, to create dynamic and interactive web pages.
    - Tags
        - HTML tags are the building blocks of a web page, and define the structure, content, and presentation of the page.
        - Some common HTML tags include:
            - `<html>`: The root element of the page.
            - `<head>`: Contains information about the document, such as the title and meta data.
            - `<body>`: Contains the content of the page.
            - `<h1>` to `<h6>`: Define headings, with `<h1>` being the largest and `<h6>` being the smallest.
            - `<p>`: Defines a paragraph of text.
        - ```html
            <h1>Hello World!</h1>
            <p>This is my first HTML page.</p>
            <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            </ul>
            <img src="image.jpg" alt="An example image">
            <a href="https://www.example.com">Visit Example.com</a>
    - HTML Document Structure
        - The structure of an HTML document consists of a series of nested elements, starting with the `<html>` element as the root element.
        - Within the `<html>` element, there are two main sections: the `<head>` and `<body>` elements.
            - The `<head>` element contains information about the document, such as the title and meta data.
            - The `<body>` element contains the content that is displayed on the web page.
        - Within the `<body>` element, there are various other elements that define the structure, content, and presentation of the page, such as headings, paragraphs, lists, images, links, tables, forms, etc.
    - Elements and Attributes
        - HTML elements are the building blocks of a web page and define the structure, content, and presentation of the page.
        - HTML attributes provide additional information about an element or modify its behavior.
        - Attributes are added to an element's start tag and have the format attribute="value", such as class="highlight" or id="header".
    - Inline and Block Elements
        - Block elements occupy the full width of their parent container and create a new block formatting context. 
            - `<div>` 
            - `<p>`
            - `<h1>`
            - `<ul>`
            - etc.
        - Inline elements only occupy as much width as their content requires and do not create a new block formatting context.
            - `<a>` 
            - `<span>`
    - Form Elements and Attributes
        - HTML forms are used to collect data from users and submit it to a server.
        - Some common form elements include:
            - `<form>`: Defines a form and its properties, such as the method and action attributes, which determine how the data will be submitted.
            - `<input>`: A flexible element that can be used to create various types of form controls, such as text fields, checkboxes, radio buttons, etc. The type attribute determines the type of input control.
            - `<button type="submit">`: Creates a submit button for the form to send its data
        - Some common form attributes include:
            - `name`: Identifies the form control and is used to identify the data when it is submitted.
            - `value`: Specifies the initial value of a form control.
            - `required`: Specifies that a form control must be filled out before the form can be submitted.
            - `disabled`: Disables a form control, making it uneditable.
            - `placeholder`: Provides a hint about the format of the data that should be entered in a form control.
        - ```html
            <form action="https://www.example.com/submit-form" method="post">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required placeholder="Enter your username">

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email address">

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required placeholder="Enter a strong password">

                <button type="submit">Submit</button>
            </form>
    - Select and Multi-Select
        - `<select>`: Creates a dropdown list where the user can choose a single option.
            - The options are represented by `<option>` elements.
            - The selected option can be set by either setting the selected attribute on an `<option>` element.
        - `<select multiple>`: Creates a dropdown list where the user can choose multiple options.
            - The options are represented by `<option>` elements.
            - The selected options can be set by either setting the selected attribute on multiple `<option>` elements.
        - ```html
            <!-- Single Select -->
            <label for="single-select">Single Select:</label>
            <select id="single-select" name="single-select">
            <option value="">Select</option>
            <option value="option1">1</option>
            <option value="option2">2</option>
            </select>

            <!-- Multi Select -->
            <label for="multi-select">Multi Select:</label>
            <select id="multi-select" name="multi-select" multiple>
            <option value="option1">A</option>
            <option value="option2">B</option>
            </select>
    - Input Elements and Input Types
        - `<input>`: Represents an input control that allows the user to enter data.
            - The input type is specified using the type attribute.
            - Common input types include:
                - `text`: Single line text input.
                - `password`: Obscured text input, typically used for entering passwords.
                - `radio`: Single option selection from a group of options.
                - `checkbox`: Multiple option selection.
                - `submit`: Submit button for submitting form data.
                - `reset`: Reset button for clearing form data.
        - ```html
            <!-- Text Input -->
            <label for="text-input">Text Input:</label>
            <input id="text-input" name="text-input" type="text" placeholder="Enter text">

            <!-- Password Input -->
            <label for="password-input">Password Input:</label>
            <input id="password-input" name="password-input" type="password" placeholder="Enter password">

            <!-- Radio Input -->
            <fieldset>
            <legend>Radio Input:</legend>
            <input id="radio1" name="radio" type="radio" value="radio1">
            <label for="radio1">Radio 1</label>
            <input id="radio2" name="radio" type="radio" value="radio2">
            <label for="radio2">Radio 2</label>
            </fieldset>

            <!-- Checkbox Input -->
            <fieldset>
            <legend>Checkbox Input:</legend>
            <input id="checkbox1" name="checkbox1" type="checkbox" value="checkbox1">
            <label for="checkbox1">Checkbox 1</label>
            <input id="checkbox2" name="checkbox2" type="checkbox" value="checkbox2">
            <label for="checkbox2">Checkbox 2</label>
            </fieldset>
    - Submitting Forms
        - Submitting forms can be done by clicking a submit button, pressing enter on a text input, or programmatically with JavaScript.
        - The form data is sent to the server as a query string in the case of a GET request or as a request body in the case of a POST request.
        - The `action` attribute of the form element specifies the URL that the form data is sent to.
        - The `method` attribute of the form element specifies the HTTP method used for submitting the form data.
* CSS
    - Overview
        - CSS (Cascading Style Sheets) is used to style and layout HTML documents.
    - CSS Box Model
        - Each HTML element is considered a rectangular box with content, padding, borders, and margins.
        - The content area is where the element's content (e.g. text, images) is displayed.
        - Padding is the space between the content and the border.
        - Borders are lines that surround the content and padding.
        - Margins are the space outside the border and are used to separate elements from each other.
        - The width and height of an element can be set to control the size of the content area. The total width and height of an element including padding, borders, and margins can be calculated using the box-sizing property.
        - ```css
            div {
              width: 300px;
              height: 200px;
              padding: 20px;
              border: 5px solid black;
              margin: 10px;
              box-sizing: border-box;
            }
    - Inline, Internal, and External Stylesheets
        - Inline styles are applied directly to an HTML element using the "style" attribute.
            - `<p style="color: blue;">This is a paragraph with inline styles.</p>`
        - Internal stylesheets are added to an HTML document using the "style" tag within the "head" section.
            - ```html
                <head>
                  <style>
                    p {
                      color: blue;
                    }
                  </style>
                </head>
                <body>
                  <p>This is a paragraph with styles from an internal stylesheet.</p>
                </body>
        - External stylesheets are separate files with a ".css" extension that are linked to an HTML document using the "link" tag within the "head" section.
            - ```html
                <head>
                  <link rel="stylesheet" type="text/css" href="styles.css">
                </head>
                <body>
                  <p>This is a paragraph with styles from an external stylesheet.</p>
                </body>
            - ```css
                p {
                  color: blue;
                }
    - CSS Properties
        - CSS properties are used to control the styling of HTML elements.
        - ```css
            p {
              color: blue;
              font-size: 16px;
              background-color: yellow;
              padding: 10px;
              margin: 10px;
              width: 50%;
              height: 50px;
              text-align: center;
              border: 1px solid black;
            }
    - Selectors
        - CSS element selectors are used to target specific HTML elements and apply styles to them.
        - ```css
            /* Type selector */
            p {
              color: blue;
            }

            /* Class selector */
            .highlight {
              background-color: yellow;
            }

            /* ID selector */
            #header {
              text-align: center;
            }

            /* Universal selector */
            * {
              margin: 0;
              padding: 0;
            }

            /* Attribute selector */
            input[type="submit"] {
              background-color: green;
            }
    - Sibling Selectors
        - Sibling selectors in CSS allow you to select and style an element based on its relationship with its sibling elements.
        - There are two types of sibling selectors:
            - Adjacent sibling selector: selects an element that is immediately preceded by another specified element (e.g. h1 + p)
            - General sibling selector: selects an element that is preceded by another specified element (e.g. h1 ~ p)
        - ```css
            /* Adjacent sibling selector */
            h1 + p {
              color: blue;
            }

            /* General sibling selector */
            h1 ~ p {
              font-size: 18px;
            }
    - Advanced Selectors
        - Advanced selectors in CSS allow you to select and style elements with more specificity and precision.
        - Some common advanced selectors include:
            - Attribute selectors (e.g. [attribute="value"])
            - Pseudo-classes (e.g. :hover, :active, :focus)
            - Pseudo-elements (e.g. ::before, ::after)
            - Child selectors (e.g. parent > child)
            - Descendant selectors (e.g. ancestor descendant)
        - ```css
            /* Attribute selector */
            a[target="_blank"] {
              color: blue;
            }

            /* Pseudo-class */
            button:hover {
              background-color: lightgray;
            }

            /* Pseudo-element */
            p::before {
              content: "Note: ";
              font-weight: bold;
            }

            /* Child selector */
            ul > li {
              list-style-type: square;
            }

            /* Descendant selector */
            #header h1, h2, h3 {
              color: red;
            }
    - Responsive Web Design
        - Responsive web design (RWD) is a design approach that makes web pages adjust to different screen sizes and device types.
        - The goal of RWD is to provide an optimal viewing and interaction experience for users, regardless of the device they use.
        - Techniques used in RWD include using flexible grid-based layouts, media queries, and CSS3 media features to adjust the layout and content of a web page.
        - The design should adapt to different viewports, such as desktop, tablet, and mobile, by changing the layout, size, and position of elements to best fit the screen size.
        - ```css
            /* CSS Media Query */
            @media (min-width: 768px) {
              /* apply styles for devices with viewports >= 768px */
            }

            /* CSS3 Media Feature */
            @media screen and (max-width: 600px) {
              /* apply styles for devices with viewports <= 600px */
            }
    - Flexbox
        - Flexbox is a CSS layout mode that provides a flexible way to arrange and align elements within a container.
        - It allows for dynamic and efficient layouts, with elements automatically resizing and repositioning as the container size changes.
        - A flex container can be either a row or a column and can have multiple flex items that can be aligned and spaced in any direction.
        - Key properties of flexbox include display: flex, flex-direction, justify-content, align-items, and flex-wrap.
        - ```css
            /* Creating a flex container */
            .container {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            }

            /* Flex item */
            .item {
              flex: 1;
            }
    - CSS Grid
        - CSS Grid is another layout mode that provides a powerful and flexible way to arrange and align elements within a container.
        - It allows for creating multi-dimensional layouts with rows and columns, and defining how elements are placed and sized within the grid.
        - Key properties of CSS Grid include display: grid, grid-template-columns, grid-template-rows, grid-column-start, grid-row-start, grid-column-end, grid-row-end, and grid-template-areas.
        - ```css
            /* Creating a grid container */
            .container {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-template-rows: repeat(3, 100px);
              grid-template-areas: 
                "header header header"
                "nav main main"
                "footer footer footer";
            }

            /* Grid items */
            header {
              grid-area: header;
            }
            nav {
              grid-area: nav;
            }
            main {
              grid-area: main;
            }
            footer {
              grid-area: footer;
            }
    - Bootstrap
        - Bootstrap is a popular front-end development framework that provides a pre-designed set of HTML, CSS, and JavaScript components to build responsive, mobile-first websites.
        - It includes a comprehensive collection of CSS classes and JavaScript plugins for common design patterns and UI elements like navigation bars, forms, modals, buttons, and more.
        - Bootstrap uses a grid-based layout system and uses classes to control element sizing, alignment, and spacing.
        - The framework supports responsive design and provides classes for easily hiding or showing elements based on screen size.
* JavaScript DOM
    - Selecting Elements from the DOM
        - JavaScript DOM (Document Object Model) allows you to manipulate the elements of a web page.
        - Elements can be selected using methods such as document.getElementById, document.getElementsByTagName, and document.querySelector/document.querySelectorAll.
        - ```javascript
            // select element with id 'example'
            let example = document.getElementById("example");
            console.log(example);

            // select all p elements
            let paragraphs = document.getElementsByTagName("p");
            console.log(paragraphs);

            // select first element with class 'example'
            let firstExample = document.querySelector(".example");
            console.log(firstExample);

            // select all elements with class 'example'
            let allExamples = document.querySelectorAll(".example");
            console.log(allExamples);
    - DOM Structure
        - The DOM represents the structure of an HTML document as a tree-like structure, called the DOM tree.
        - Each element is a node in the tree, with parent, child, and sibling relationships.
        - The root node is document and its children are the elements in the HTML page.
    - Traversing the DOM
        - The DOM API provides methods to traverse the DOM tree and manipulate its elements
        - Examples of traversing methods are: `parentNode`, `nextSibling`, `previousSibling`, `firstChild`, `lastChild`, `childNodes`
        - DOM traversal is useful to select specific elements or groups of elements based on their relationship with other elements in the DOM tree.
    - Manipulating the DOM
        - You can use DOM methods to access, change, delete and add elements to a document
        - ```javascript
            // Accessing an element
            let myDiv = document.getElementById("myDiv");
            console.log(myDiv);
            
            // Changing content
            let p = myDiv.getElementsByTagName("p")[0];
            p.innerHTML = "Hello DOM!";
            
            // Adding an element
            let newP = document.createElement("p");
            newP.innerHTML = "I'm a new paragraph.";
            myDiv.appendChild(newP);
    - Events and Listeners
        - DOM events are actions that occur in the browser, such as a user clicking on a button, hovering over an element, etc.
        - You can use JavaScript event listeners to respond to DOM events, and execute code when the events occur
        - Event listeners are attached to elements using addEventListener() method.
        - ```javascript
            let myBtn = document.getElementById("myBtn");
            myBtn.addEventListener("click", function() {
                alert("Button was clicked!");
            });
        - Some example events:
            - `click` - When an element is clicked
            - `load` - When a page or resource has finished loading
            - `mouseover` - When the mouse pointer moves over an element
            - `submit` - When a form is submitted
    - Bubbling and Capturing
        - Bubbling: When an event is fired on an element, it first triggers the innermost element and then bubbles up to parent elements
        - Capturing: The opposite of bubbling, where the event first triggers on the outermost element and then propagates to inner elements
        - By default, events bubble in the DOM
        - You can specify the propagation behavior of an event by using the useCapture argument in addEventListener() method.
        - ```javascript
            // Bubbling
            outer.addEventListener("click", function() {
                console.log("Bubbling");
            });
            // Capturing
            outer.addEventListener("click", function() {
                console.log("Capturing");
            }, true);
* JavaScript AJAX
    - Fetch API
        - AJAX (Asynchronous JavaScript and XML) allows you to update parts of a web page asynchronously without reloading the entire page
        - Fetch API is the modern way to make HTTP request in JS
        - It returns a promise that resolves to the response of the request
        - ```javascript
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
        - `.json()`: This function parses the response as an expected JSON data into a JavaScript Object
        - To make a POST request, you must pass into the fetch call an object that contains the parameters needed to configure the request
        - ```javascript
            fetch('https://example.com/postendpoint', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
