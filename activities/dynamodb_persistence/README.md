# Refactor Basic API to Use AWS SDK and DynamoDB

## Objective
Refactor the current grocery shopping tracker API to use DynamoDB as the data persistence layer using AWS SDK for JavaScript. The client will interact with the server via HTTP requests, and DynamoDB will store the grocery items.

### Tasks
- Set up a DynamoDB table to store the grocery items.
- Use the AWS SDK to interact with DynamoDB.
- Implement CRUD operations (Create, Read, Update, Delete) using DynamoDB instead of local file storage.
- Test the API using Postman to verify the behavior of the DynamoDB-backed API.

---

## Requirements

### Refactor the API:
1. **Use AWS SDK to interact with DynamoDB**: 
   - The API should interact with a DynamoDB table that stores the grocery items, including fields like `name`, `price`, and `purchased`.
   
2. **Table Setup**:
   - **Table Name**: `GroceryList`
   - **Primary Key**: `ItemID` (a unique identifier for each grocery item).
   
3. **Operations**:
   - **GET** `/items`: Retrieve all grocery items.
   - **POST** `/items`: Add a new grocery item.
   - **PUT** `/items/:id`: Edit a grocery item.
   - **DELETE** `/items/:id`: Delete a grocery item.
   
4. **Persist data in DynamoDB**:
   - Store all grocery items in DynamoDB with the following fields:
     - `ItemID` (String) - Unique identifier for each item.
     - `Name` (String) - Name of the grocery item.
     - `Price` (Number) - Price of the grocery item.
     - `Purchased` (Boolean) - Status of the item (whether it has been purchased or not).

### DynamoDB Structure
- **Table Name**: `GroceryList`
- **Partition Key**: `ItemID` (String)
- Attributes: 
  - `Name` (String)
  - `Price` (Number)
  - `Purchased` (Boolean)

