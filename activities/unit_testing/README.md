# Unit Testing Activity for Basic API

This activity involves writing unit tests for a basic API using **Jest**. The API is built with Node.js using the `http` module and `fs` module for persisting data to a `data.json` file. You’ll write unit tests for each of the API's core functionalities, ensuring that it works as expected.

## Project Setup

Before starting the unit testing, ensure your project is set up correctly with the necessary dependencies:

### Install Dependencies

1. **Install Jest**:
    ```bash
    npm install --save-dev jest
    ```

2. **Set Jest as the test script** in your `package.json`:
    ```json
    {
      "scripts": {
        "test": "jest"
      }
    }
    ```

## Testing Plan

The API exposes the following operations, and we will write unit tests for each:

1. **View the grocery list** (`GET /items`)
2. **Add a new item** (`POST /items`)
3. **Edit an item** (`PUT /items/:index`)
4. **Delete an item** (`DELETE /items/:index`)

## Unit Test Setup with Jest

Create a `__tests__/` directory and add a file like `shoppingListDAO.test.js` where you will define your tests.

When you are testing the write file, make sure to verify you are referencing the right data.json as the `path` module can have mistakes if you don't match what is expected in the src.

### Examples

```javascript
// shoppingListDAO.test.js

const { readShoppingList, writeShoppingList } = require('../src/shoppingListDAO');
const fs = require('fs');
const path = require('path');

// Mock the fs module
jest.mock('fs');

describe('DAO Tests', () => {
  beforeEach(() => {
    fs.writeFileSync.mockClear();
  });

  test('should write shopping list to data.json', () => {
    const shoppingList = [{ name: 'Milk', price: 2.99 }];
    
    // Call the function to write the shopping list
    writeShoppingList(shoppingList);

    // Dynamically generate the correct file path
    const filePath = path.join(__dirname, '../src/data.json');

    // Check if fs.writeFileSync was called with the correct arguments
    expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, JSON.stringify(shoppingList, null, 2));
  });
});

```

```javascript
// shoppingListFunctions.test.js

const { addItem } = require('../src/shoppingListFunctions');

describe('Shopping List Functionality Tests', () => {
  test('should add an item to the shopping list', () => {
    const response = addItem('Bread', 1.99);
    expect(response).toBe('Bread has been added to the shopping list');
  });
});
```

### Running the Tests

To run the tests, use the following command:

```bash
npm test
```

### Notes:

- You can extend these tests by adding more validation (e.g., handling errors, testing edge cases, etc.).

## Useful Resources
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Node.js APIs with Jest](https://jestjs.io/docs/tutorial-async) 