// JSON
// JavaScript Object Notation

/*
    Lightweight data interchange format that is both easy for humans to read and for machines to interpret

    JSON is often used to transmit data between a server and a web application or between different parts of an application.

    {
        "name" : "John Doe",
        "age" : 30,
        "isStudent" : false,
        "hobbies" : ["reading", "programming"],
        "address": {
            "street" : "123 Main Street",
            "city": "Examplecity"
        },
        "empty": null
    }

*/

/*
    Serialization and Parsing
    Serialization is the process of converting a JavaScript Object into a JSON string.
    This is often used to send data

    Parsing is the process of converting from JSON to a JavaScript Object.

    JSON.stringify(obj);
    JSON.parse(jsonString);
*/

const data = {
    name: "Alice",
    age: 33
};

const jsonString = JSON.stringify(data);

console.log(jsonString);

const parsedData = JSON.parse(jsonString);
console.log(parsedData);