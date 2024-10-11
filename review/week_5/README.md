# TypeScript

- Overview
    - TypeScript is a statically typed, superset of JavaScript
    - It adds optional type annotations to JavaScript, which allows for type checking at compile time
    - This can catch type-related errors early in the development process and improve overall code quality
    - TypeScript is fully compatible with existing JavaScript code and can be gradually introduced into existing projects
- JavaScript vs TypeScript
    - JavaScript:
        - Is a dynamically typed language
        - Types are determined at runtime, not at compile time
        - Does not have strict type checking
        - Often requires more runtime error checking
    - TypeScript:
        - Is a statically typed, superset of JavaScript
        - Adds optional type annotations to JavaScript, which allows for type checking at compile time
        - Is more suited for large and complex applications, as it can catch type-related errors early in the development process
        - Requires a build step to transpile TypeScript code into JavaScript before it can run in a browser or on a server
- TypeScript Compiler
    - The TypeScript compiler (tsc) is the tool that transpiles TypeScript code into JavaScript
    - The compiler can be configured using a tsconfig.json file, which allows customization of the transpilation process
    - The compiler can perform type checking and report errors if any type annotations are not satisfied
    - `tsc name_of_file.ts`: this command will generate a javascript file from the typescript file provided
- Simple Types
    - Simple types in TypeScript include primitive types such as number, string, boolean, undefined, and null
    - These types are used to represent values in the most basic and straightforward way
    - When declaring variables or function parameters with simple types, the type can be explicitly declared (e.g. `let name: string`) or implicitly inferred from the value assigned to the variable (e.g. `let name = 'John'`).
    - ```typescript
        let name: string = "John";
        let age: number = 30;
        let isEmployed: boolean = true;

        function getFullName(firstName: string, lastName: string): string {
            return firstName + " " + lastName;
        }

        let fullName: string = getFullName("Jane", "Doe");
- Object Types
    - Object types in TypeScript allow the representation of more complex data structures, such as records or dictionaries
    - Object types can be declared using object type literals (e.g. `{ name: string; age: number; }`) or interface types
    - Object type literals are used to declare inline object types, while interface types are named types that can be used across multiple parts of the code
    - Object types can include properties with types (e.g. `name: string`), as well as methods (e.g. `greet(): void`)
    - ```typescript
        interface Person {
        name: string;
        age: number;
        greet(): void;
        }

        let person: Person = {
        name: "John",
        age: 30,
        greet() {
            console.log(`Hello, I am ${this.name}.`);
        }
        };

        person.greet();
- Union Types
    - Union types are declared using the | operator (e.g. string | number)
    - When using union types, the variable must match at least one of the types in the union
    - Union types are useful for representing values that can be of different types, such as function parameters that accept either a string or a number
    - ```typescript
        function getLength(value: string | number): number {
            if (typeof value === "string") {
            return value.length;
            } else {
            return value.toString().length;
            }
        }
- String Enums
    - String enums in TypeScript are a way to define a set of named string constants
    - String enums are declared using the enum keyword followed by a unique name
        - `enum Color { Red = "RED", Green = "GREEN", Blue = "BLUE" }`
    - The values of string enums are string literals, and can be assigned explicitly using the = operator
        - `Red = "RED"`
    - ```typescript
        enum Color { Red = "RED", Green = "GREEN", Blue = "BLUE" }

        let color: Color = Color.Red;
        console.log(color); // Red

        let colorName: string = Color[color];
        console.log(colorName); // RED

        color = Color["GREEN"];
        console.log(color); // Green
- Numeric Enums
    - Numeric enums in TypeScript are a way to define a set of named numeric constants
    - Numeric enums are declared using the enum keyword followed by a unique name 
        - `enum Direction { Up, Down, Left, Right }`
    - The values of numeric enums are numbers, and can be assigned explicitly using the = operator 
        - `Up = 1, Down = 2, Left = 3, Right = 4`
    - or by default starting from 0
        - `Up = 0, Down = 1, Left = 2, Right = 3`
    - Numeric enums can be used to represent named values that are numeric-based, such as error codes, or to avoid the use of hardcoded numeric values throughout the code
    - ```typescript
        enum Direction { Up, Down, Left, Right }

        let directionValue: number = direction;
        console.log(directionValue); // 0

        let directionName: string = Direction[directionValue];
        console.log(directionName); // Up
- Classes
    - Classes in TypeScript are a way to define reusable objects that can have properties and methods
    - Classes are declared using the class keyword followed by a unique name (e.g. class Person {...})
    - Classes can have properties, which define the state of an object (e.g. name: string), and methods, which define the behavior of an object (e.g. greet() {...})
    - Properties and methods can be private, protected, or public, and their visibility is controlled using the private, protected, or no keyword, respectively
    - ```typescript
        class Person {
            name: string;
            age: number;

            constructor(name: string, age: number) {
                this.name = name;
                this.age = age;
            }

            greet() {
                console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
            }
        }

        let person = new Person("John Doe", 30);
        person.greet(); // Hello, my name is John Doe and I am 30 years old.
- Functions
    - They are declared using the function keyword followed by a name and a set of parameters (e.g. function greet(name: string) {...})
    - They can have a return type specified using a colon (e.g. function greet(name: string): void {...}), which defines the type of value that the function returns
    - They can be anonymous, and can be assigned to variables (e.g. let greet = function(name: string) {...})
    - Functions can be used as values, and can be passed as arguments to other functions, or returned as values from other functions
    - Functions can be overloaded, which means that they can have multiple signatures that are used based on the types of the arguments passed
    - ```typescript
        function greet(name: string): void {
            console.log(`Hello, ${name}`);
        }

        greet("John Doe"); // Hello, John Doe
- Array Generics
    - Array generics are a way to create arrays with a specific type in TypeScript
    - Array generics are declared using square brackets and the type parameter (e.g. let numbers: Array<number> = [1, 2, 3];)
    - The type parameter defines the type of the elements that can be stored in the array
    - Array generics can be used with any type, including custom types defined using classes or interfaces
    - ```typescript
        let numbers: Array<number> = [1, 2, 3];
- Basic Generics
    - Generics are a way to create reusable code that can work with multiple types
    - Generics are declared using angle brackets and a type parameter (e.g. function identity<T>(arg: T): T {...})
    - The type parameter can be any valid TypeScript type, including custom types defined using classes or interfaces
    - Generics are useful for creating functions, classes, and interfaces that can work with multiple types
    - The type parameter is automatically inferred from the type of the arguments passed to the function or constructor
    - ```typescript
        function returner<T>(arg: T): T {
            return arg;
        }

        let stringOutput = returner<string>("Hello, World");
        let numberOutput = returner<number>(19);
- Decorators
    - Decorators are a way to add additional behavior to classes, methods, properties, accessors, or parameters in TypeScript
    - They are declared using the `@` symbol, followed by the name of the decorator function (e.g. `@decorator`)
    - They are implemented as functions that take parameters and return a value that modifies the behavior of the decorated element
    - Decorators can be used to add metadata to a class, method, property, or accessor, or to modify the behavior of a class or its members
    - ```typescript
        function logged(target: any) {
            console.log(`Class: ${target}`);
        }

        @logged
        class Account {
            constructor(private name: string) {}
        }

        // Output:
        // Class: [object Object]


# React
To create a react app with typescript, the command is:

`npx create-react-app <name of directory> --template typescript`

* Overview
    - React is a JavaScript library for building user interfaces.
    - It follows a component-based architecture, allowing developers to build reusable UI components.
    - React uses a virtual DOM (Document Object Model) to improve the performance of updates and rendering.
    - React allows for the creation of single-page applications and mobile apps.
    - It integrates well with other libraries and frameworks, such as Redux for state management.
    - React uses a syntax extension of JavaScript called JSX, which allows for writing HTML-like code within JavaScript.
* Nested Components
    - Nested components refer to the practice of having components within other components in React.
    - Nested components allow for the creation of complex and modular user interfaces.
    - Each component can manage its own state and behavior, making it easier to maintain and update the codebase.
    - Nested components promote reusability and make the code more organized and easier to understand.
* Class Components
    - Class components are a way to define React components using ES6 classes.
    - Class components have a state, which is an object that holds data specific to a component.
    - Class components allow for the use of local state and lifecycle methods, making them suitable for more complex and dynamic user interfaces.
    - The render method is used to define what a component should display.
    - Class components can also update their state and re-render in response to user events or changes in data.
    - ```typescript
        import React, { Component } from "react";

        class ParentComponent extends Component {
            state = {
                message: "Hello from Parent Component"
            };

            render() {
                return (
                <div>
                    <ChildComponent message={this.state.message} />
                </div>
                );
            }
            }

            class ChildComponent extends Component {
            render() {
                return <h1>{this.props.message}</h1>;
            }
        }

        export default ParentComponent;
    - Class Components Lifecycle
        - Mounting:
            - The process of creating and inserting a component into the DOM for the first time is called mounting.
            - During the mounting phase, the following lifecycle methods are called in order:
                - `constructor`: It is called before the component is mounted and is used for setting up the initial state and binding methods.
                - `componentWillMount`: It is called just before the component is mounted and is a legacy method that is being phased out.
                - `render`: It is called to render the component and its children.
                - `componentDidMount`: It is called after the component is mounted and can be used for making API calls or setting up subscriptions.
        - Updating:
            - Updating occurs when a component's state or props change, causing it to re-render.
            - During the updating phase, the following lifecycle methods are called in order:
                - `shouldComponentUpdate`: It is called before render and can be used to optimize performance by preventing unnecessary updates.
                - `componentWillUpdate`: It is called just before the component updates and is a legacy method that is being phased out.
                - `render`: It is called to render the updated component and its children.
                - `componentDidUpdate`: It is called after the component updates and can be used to perform additional updates.
        - Unmounting:
            - The process of removing a component from the DOM is called unmounting.
            - During the unmounting phase, the following lifecycle method is called:
                - `componentWillUnmount`: It is called just before the component is unmounted and is used for cleaning up any resources, such as event listeners or timers.
        - Error Handling:
            - In React, errors can be caught and handled within a component using the componentDidCatch lifecycle method.
            - This method is called if there is an error during rendering, in a lifecycle method, or in the constructor of a child component.
            - `componentDidCatch` receives two arguments: error and info, and can be used to log the error or display an error message to the user.
* Container Components
    - Container components, also known as smart components, are components that manage the data and behavior of a group of presentational components.
    - They are typically responsible for fetching data, processing data, and providing data to their child components through props.
    - Container components tend to be class components, as they often need to manage state and lifecycle methods.
    - By separating the data and behavior management from the visual representation, container components can make the code easier to maintain and test.
* Component API
    - `constructor`: It is called before the component is mounted and is used for setting up the initial state and binding methods.
    - `render`: It is called to render the component and its children.
    - `componentDidMount`: It is called after the component is mounted and can be used for making API calls or setting up subscriptions.
    - `shouldComponentUpdate`: It is called before render and can be used to optimize performance by preventing unnecessary updates.
    - `componentDidUpdate`: It is called after the component updates and can be used to perform additional updates.
    - `componentWillUnmount`: It is called just before the component is unmounted and is used for cleaning up any resources, such as event listeners or timers.
    - `componentDidCatch`: It is called if there is an error during rendering, in a lifecycle method, or in the constructor of a child component.
* One-Way Data Flow
    - One-way data flow, also known as unidirectional data flow, is a key concept in React.
    - It means that data flows in only one direction, from the parent component to its children components.
    - Children components cannot modify the data they receive, they can only render it.
    - One-way data flow is implemented through props, where parent components pass data to their children components as props.
    - If a child component needs to update the data, it must communicate this to its parent component, which will then update the data and pass it down again.
    - Props and State
        - `props` (properties) are inputs to a React component, passed down from its parent component.
        - `state` is an internal representation of a component's data and is managed within the component itself.
        - Props are read-only and cannot be changed within the component. If a component needs to change its data, it must use state.
        - State is updated using `setState` method, which triggers a re-render of the component.
        - When using state, it's important to only update state with `setState`, and not directly modify the state object.
        - ```typescript
            import React, { useState } from "react";

            const MyFunctionalComponent = ({ title }) => {
                const [count, setCount] = useState(0);

                const handleClick = () => {
                    setCount(prevCount => prevCount + 1);
                };

                return (
                    <div>
                    <h1>{title}</h1>
                    <p>Count: {count}</p>
                    <button onClick={handleClick}>Increase Count</button>
                    </div>
                );
            };

            export default MyFunctionalComponent;
    - Immutability
        - Immutability refers to the idea of not changing an object or data structure after it's created.
        - In React, it's important to avoid direct modification of props and state objects, as this can lead to unexpected behavior and bugs.
        - Instead, immutability should be maintained by creating new copies of objects with updated values.
        - React provides `setState` method to update the state in a way that's optimized for performance, and encourages immutability.
    - Validating Properties
        - Validation can be done using `PropTypes`, a library for type checking in React.
        - To use `PropTypes`, you can import the library and add a propTypes property to your component.
        - The propTypes property is an object that maps prop names to validation functions.
        - There are several built-in PropTypes for common data types, such as string, number, array, object, etc.
        - You can also create custom PropTypes for more complex validation requirements.
        - If a prop fails validation, a warning will be logged in the browser console.
        - ```typescript
            import React from "react";
            import PropTypes from "prop-types";

            const MyComponent = ({ title, count }) => {
                return (
                    <div>
                        <h1>{title}</h1>
                        <p>Count: {count}</p>
                    </div>
                );
            };

            MyComponent.propTypes = {
                title: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired
            };

            export default MyComponent;
* Lists and Keys
    - Lists are a common component in React, used to render arrays of data.
    - In React, each item in a list should have a unique `key` prop, which helps React to optimize the update process when items are added, removed, or reordered.
    - The `key` prop should be a string that uniquely identifies the item within the list. It's often best to use a unique identifier from the data itself, such as an id field from a database.
    - When rendering lists, it's common to use the map function to iterate over the array and render each item as a separate component.
    - In this case, the `key` prop should be passed to the component for each item.
    - ```typescript
        import React from "react";

        const Item = ({ title, count }) => (
            <div>
                <h2>{title}</h2>
                <p>Count: {count}</p>
            </div>
        );

        const ItemList = ({ items }) => (
            <div>
                {items.map(item => (
                    <Item key={item.id} title={item.title} count={item.count} />
                ))}
            </div>
        );

        export default ItemList;
    > In this example, the Item component is a stateless component that takes title and count as props. The ItemList component maps over the items array and renders an Item component for each item, passing the title and count values as props, along with a unique key value.
* Event Handling
    - Event handling in React refers to the process of responding to user interactions with the UI, such as clicks, hover, etc.
    - In React, events are handled using event handlers, which are functions that are called in response to an event.
    - Event handlers can be defined as properties of a component, and can access the component's `props` and `state` in order to update the component in response to the event.
    - To bind an event handler to an event, you can use the on keyword followed by the event name, such as `onClick`, `onMouseOver`, etc.
    - When defining an event handler, you should use the bind method or an arrow function to ensure that this refers to the component instance.
    - Event handlers should also be kept as simple and focused as possible, to minimize complexity and make the component easier to test.
    - ```typescript
        import React, { useState } from "react";

        const Counter = () => {
            const [count, setCount] = useState(0);

            const handleClick = () => {
                setCount(count + 1);
            };

            return (
                <div>
                    <p>Count: {count}</p>
                    <button onClick={handleClick}>Increment</button>
                </div>
            );
        };

        export default Counter;
* Lifting State
    - "Lifting state up" is a common pattern in React where state is moved from a child component to its parent component, in order to allow the parent component to manage and update the state.
    - This pattern is useful when multiple child components need to share and update the same state. By lifting the state up to the parent component, it becomes easier to manage the state in a centralized location, and to ensure that updates to the state are consistent across all child components.
    - To lift state up, the parent component should define a method that updates the state, and pass this method as a prop to its child components. The child components can then call the method in response to user interactions or other events, in order to update the state.
    - The parent component should also render the child components, passing the relevant state data as props to each child component. This allows the child components to receive updates to the state whenever it changes.
    - ```typescript
        import React, { useState } from "react";

        const Counter = ({ count, onIncrement }) => (
            <div>
                <p>Count: {count}</p>
                <button onClick={onIncrement}>Increment</button>
            </div>
        );

        const CounterParent = () => {
            const [count, setCount] = useState(0);

            const handleIncrement = () => {
                setCount(count + 1);
            };

            return (
                <div>
                    <Counter count={count} onIncrement={handleIncrement} />
                </div>
            );
        };

        export default CounterParent;
    > In this example, the CounterParent component is the parent component that manages the count state. The Counter component is the child component that displays the count and provides a button for incrementing the count. The CounterParent component passes the count state and a handleIncrement method as props to the Counter component, allowing the Counter component to display the count and call the handleIncrement method in response to a click event. The handleIncrement method updates the count state using the setCount method, causing the component to re-render with the updated count value.
* Controller View Pattern
    - The "Controller View" pattern separates the logic and state management of a component from its rendering.
    - The "Controller" component is responsible for managing the state and logic of a component, while the "View" component is responsible for rendering.
    - The "Controller" component manages the data and functions, and passes them to the "View" component as props.
    - The "View" component only receives data through props and renders the UI based on the data received.
    - This pattern helps to keep the components modular, maintainable and testable, by separating the concerns of state management, logic and rendering.
    - The "Controller" component can be easily reused or extended, as it does not depend on the implementation of the "View" component.
    - The "View" component can be easily replaced or modified, as it does not contain any logic or state.
* Higher Order Components
    - Higher Order Components (HOCs) are advanced React components that allow you to reuse, extend and manipulate the behavior of other components.
    - HOCs are functions that take a component as an argument and return a new component with additional props or enhanced functionality.
    - HOCs allow you to add new behavior to existing components, without modifying the original component code.
    - ```typescript
        import React from "react";

        const withLoading = Component => props => {
            const { isLoading, ...rest } = props;

            if (isLoading) {
                return <p>Loading...</p>;
            }

            return <Component {...rest} />;
        };

        const UserList = ({ users }) => (
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        );

        const UserListWithLoading = withLoading(UserList);

        export default UserListWithLoading;
    > In this example, the withLoading Higher Order Component takes a Component as an argument and returns a new component that enhances the behavior of the original component. The new component adds a loading indicator when the isLoading prop is set to true. When the isLoading prop is false, the original Component is rendered with its original props. This HOC can be reused across an application to add the loading behavior to any component that requires it. The resulting component UserListWithLoading is a combination of the original UserList component and the behavior added by the withLoading HOC.
* Containment
    - The goal of containment is to allow components to be composed and reused, while avoiding tight coupling between components.
    - The children are isolated from the parent's implementation details, and are only concerned with rendering the data passed to them as props.
    - This makes components more reusable and composable, since they do not depend on the implementation details of their parent components.
    - Containment is achieved by using a combination of props, Higher Order Components, and render props, and is a fundamental principle in React for building scalable and maintainable applications.
* Specialization
    - Specialization is a pattern in React where a component is designed to handle a specific type of data, rendering or behavior.
    - The goal of specialization is to make components more reusable, predictable, and easier to maintain.
    - In specialization, a component is designed to handle a specific type of data, and it is expected to render that data in a certain way. This makes the component more predictable and easier to use, since it has a specific responsibility.
* Routing
    - To use `react-router` you must install it with npm
        - `npm install react-router-dom`
    - Routing is a feature in React that allows you to manage the navigation between different pages or views of your application.
    - The goal of routing is to provide a seamless and intuitive navigation experience for users, and to make it easy to navigate between different parts of an application.
    - In React, routing is typically implemented using a routing library such as `react-router`. This library provides a set of components and APIs for defining routes, navigating between routes, and managing the URL of your application.
    - The main components used in React routing are the Route, Link, and Router components. The Route component is used to define a mapping between a specific URL path and a component that should be rendered when that path is accessed. The Link component is used to navigate between routes by changing the URL of the application. The Router component is used to define the overall structure of your application's routing.
    - ```typescript
        import React from "react";
        import { BrowserRouter as Router, Route, Link } from "react-router-dom";

        const Home = () => <h2>Home</h2>;
        const About = () => <h2>About</h2>;
        const Contact = () => <h2>Contact</h2>;

        const App = () => (
            <Router>
                <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                </nav>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Router>
        );

        export default App;
    > In this example, the Router component is used to define the overall structure of the application's routing. The `Route` components are used to map URLs to components that should be rendered when those URLs are accessed. The `Link` components are used to navigate between routes by changing the URL of the application.
* Refs
    - Refs in React provide a way to access the properties of a DOM element directly from your JavaScript code.
    - Refs are created using the `createRef()` method and attached to React elements via the `ref` prop.
    - Refs are useful when you need to directly access the properties of an element, such as its position, size, or value, in order to perform some type of manipulation.
    - Refs should be used sparingly, as they can make your code less declarative and harder to understand.
    - There are two main types of refs in React: callback refs and `createRef()` refs.
    - ```typescript
        import React, { useRef } from 'react';

        const InputRefExample = () => {
            const inputRef = useRef(null);
            
            const handleClick = () => {
                inputRef.current.focus();
            };

            return (
                <div>
                    <input type="text" ref={inputRef} />
                    <button onClick={handleClick}>Focus Input</button>
                </div>
            );
        };

        export default InputRefExample;
    > In this example, a ref is created using the `useRef` hook and attached to the input element via the ref prop. The `handleClick` function is used to focus the input when the button is clicked. The value of the input can be accessed via `inputRef.current`.
* Hooks
    - Hooks are a feature in React that allow you to add state and other React features to functional components.
    - Prior to Hooks, adding state and other React features to functional components required the use of class components.
    - Hooks are named after the state or feature they provide, such as `useState`, `useEffect`, `useContext`, etc.
    - Hooks let you reuse stateful logic across your components, without having to write class components.
    - Hooks can only be called at the top level of your components or your own custom Hooks.
    - ```typescript
        import React, { useState } from 'react';

        const Counter = () => {
            const [count, setCount] = useState(0);

            return (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div>
            );
        };

        export default Counter;
    > In this example, the `useState` hook is used to add a state value `count` to the component. The hook returns an array containing the current state value `count` and a function `setCount` that can be used to update the state value. The `setCount` function is passed to the `onClick` prop of the button, which updates the count value each time the button is clicked.
* Axios
    - Axios is a popular JavaScript library used for making HTTP requests.
    - It provides a simple API for making both GET and POST requests to a server.
    - Axios supports a variety of features such as request and response interceptors, error handling, and transforming requests and responses.
    - To use Axios, you must install it with npm
        - `npm install axios`
    - ```typescript
        import React, { useState, useEffect } from 'react';
        import axios from 'axios';

        const API_URL = 'https://jsonplaceholder.typicode.com/posts';

        const Posts = () => {
            const [posts, setPosts] = useState([]);

            useEffect(() => {
                axios.get(API_URL)
                    .then(response => setPosts(response.data))
                    .catch(error => console.error(error));
            }, []);

            return (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            );
        };

        export default Posts;
    > In this example, the component makes a GET request to the JSON placeholder API using the `axios.get` method. The response from the API is then stored in the component's state using the `setPosts` function, which is passed as the first argument to `useState`. The component is then rendered with a list of post titles.
    - Axios vs Fetch
        - Axios and fetch are both libraries used for making HTTP requests in JavaScript.
        - Fetch is a native browser API for making HTTP requests, while Axios is a third-party library.
        - Both Axios and fetch allow you to make GET and POST requests, but Axios has more features and a more user-friendly API.
        - Axios supports request and response interceptors, automatic transformation of request and response data, error handling, and more.
        - Fetch does not have built-in error handling, and its API is less intuitive compared to Axios.
        - Axios is also more widely used and has better community support compared to fetch.
        - Here are some examples
            - Axios GET Request
                - ```typescript
                    import axios from 'axios';

                    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

                    axios.get(API_URL)
                        .then(response => console.log(response.data))
                        .catch(error => console.error(error));
            - Fetch GET Request
                - ```typescript
                    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

                    fetch(API_URL)
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error(error));
* Jest
    - Jest supports unit, integration, and end-to-end testing.
    - Jest has a rich set of features, including mocking, spying, and snapshot testing.
    - To setup Jest in your React Typescript project, we need to do the following
        1. Install Jest
            - `npm install --save-dev jest @types/jest ts-jest`
            - In the case that this fails, run it with `--force` as well
        2. Add the Jest config file `jest.config.json` in your root folder
            - ```json
                {
                    "transform": {
                        "^.+\\.tsx?$": "ts-jest"
                    }
                }
        3. Now you can create your tests, make sure to name them with the `fileName.test.tsx` as the `.test` is needed for jest to recognize it is a test
    - ```typescript
        import React from 'react';
        import { render } from '@testing-library/react';
        import App from './App';

        test('renders learn react link', () => {
            const { getByText } = render(<App />);
            const linkElement = getByText(/learn react/i);
            expect(linkElement).toBeInTheDocument();
        });
* React Testing Library
    - React Testing Library focuses on testing the behavior of a React component as a user would interact with it, rather than testing its internal implementation details.
    - React Testing Library encourages developers to write tests that are simple, easy to understand, and maintainable.
    - It is framework agnostic, meaning it can be used with any testing framework, not just Jest.
    - To use React Testing Library, follow these steps
        1. Install React Testing Library using npm
            - `npm install --save-dev @testing-library/react @testing-library/jest-dom jest-environment-jsdom
        2. Update your `jest.config.json` file
            - ```json
                {
                    "testEnvironment": "jsdom",
                    "transform": {
                        "^.+\\.tsx?$": "ts-jest"
                    },
                    "setupFilesAfterEnv": [
                        "@testing-library/jest-dom/extend-expect"
                    ]
                }
    - ```typescript
        import React from 'react';
        import { render, screen } from '@testing-library/react';
        import App from './App';

        test('renders learn react link', () => {
            render(<App />);
            const linkElement = screen.getByText(/learn react/i);
            expect(linkElement).toBeInTheDocument();
        });
    > In this example, React Testing Library is used to test a React component called `App`. The `render` method from `@testing-library/react` is used to render the component, and the `screen` object provides access to the rendered output. The `getByText` method is used to find an element in the rendered output that matches the provided text, and an expectation is made that the element is present in the document.
- * Context API
    - `useContext` is a React Hook that allows you to subscribe to React's Context API.
    - Context provides a way to pass data through the component tree without manually passing props down at every level.
    - It is useful for sharing global data (like themes, authentication info) across multiple components without prop drilling.
    - * Creating Context
        - First, you need to create a context using `React.createContext()`.
        - The context created has a `Provider` and `Consumer` component, but with hooks (`useContext`), you don’t need to use `Consumer`.

        ```typescript
        import React, { createContext, useContext } from 'react';

        const ThemeContext = createContext('light'); // 'light' is the default value

        const App = () => {
            return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
            );
        };
        ```
    - * Using `useContext`
        - To access the context value, you use the `useContext` hook in a functional component.
        - `useContext` takes the context object returned from `createContext()` as an argument and gives you the current value of the context.

        ```typescript
        const Toolbar = () => {
            return <ThemeButton />;
        };

        const ThemeButton = () => {
            const theme = useContext(ThemeContext); // accessing the context value

            return <button style={{ background: theme === 'dark' ? '#333' : '#eee' }}>Button</button>;
        };
        ```