# Cypress Testing

This activity will guide you through creating a Cypress test suite for the Conduit real-world application. You will be testing the login page, registration page, profile page, create article page, and an additional page of your choice. This will help you gain hands-on experience with Cypress for testing frontend websites.

The website url is:

- "https://conduit.realworld.how"

## Setup and Installation

### Prerequisites
- Ensure you have Node.js installed on your machine.
- Have a basic understanding of Cypress.

### Initial Setup

1. **Clone the Project Repository:**
   If you don't already have a Node project, create one:
   ```bash
   npm init -y
   ```

2. **Install Cypress:**
   Install Cypress as a dev dependency in your project:
   ```bash
   npm install cypress
   ```

3. **Directory Structure:**
   This will open cypress and create the folder structure needed to create tests.
   ```bash
   npx cypress open
   ```

## Writing Tests

### 1. Login Page Tests
You can reference the `login_spec.cy.js` created during training to build out the login page tests. Use this as starter code to understand how to approach cypress and then go on to build your own tests.

### 2. Registration Page Tests
Create a new test file called `register_spec.cy.js` under `e2e/`:

```javascript
describe('/register', () => {
    beforeEach(() => {
        // navigate to the register page
        cy.visit("");
    });

    it('greets with Sign up', () => {
        cy.contains('h1', 'Sign up');
    });
});
```

### 3. Profile Page Tests
Create a new test file called `profile_spec.cy.js` under `e2e/`:

```javascript
describe('Profile Page', () => {
    before(() => {
        // login to account
        // navigate to profile page
    });
});
```

### 4. Create Article Page Tests
Create a new test file called `create_article_spec.cy.js` under `e2e/`:

### 5. Additional Page Test
Choose another page to test, such as the Global Feed, Settings Page, or Favorite Articles, and create appropriate tests following the same structure.

## Running the Tests

To run the tests, use the following command in your terminal:
```bash
npx cypress open
```
Select the test you want to run from the Cypress UI.