# Worko API

# User Management API

This API provides endpoints for managing user data.

## API Endpoints

### List Users

```GET /api/worko/user```

Lists all users.

### Get User Details

```GET /api/worko/user/```

Retrieves details of a specific user by ID.

### Create User

```POST /api/worko/user```

Creates a new user with provided data.

### Update User

```PUT /api/worko/user/```
```PATCH /api/worko/user/```

Updates an existing user by ID. Both `PUT` and `PATCH` methods are supported for full and partial updates, respectively.

### Soft Delete User

```DELETE /api/worko/user/```

Soft deletes a user by marking them as deleted without removing from the database.

## Authentication

All endpoints except `POST /api/worko/user` require authentication using a Bearer token in the `Authorization` header.

## Error Handling

The API returns appropriate HTTP status codes and JSON error responses for various error scenarios.

## Example Usage

### Create User

http
```POST /api/worko/user```
Content-Type: application/json

{
  "email": "example@example.com",
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "zipCode": "10001"
}

### Update User

```PATCH /api/worko/user/:userId```
Content-Type: application/json

{
  "name": "Updated Name"
}

### Get User Details

```GET /api/worko/user/:userId```



## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
2. Install dependencies

    ```bash
    npm install
    ```

3. Create a `.env` file and add your MongoDB URI and JWT secret

    ```env
    DB_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret>
    ```

4. Start the server

    ```bash
    npm start
    ```

### Running Tests

```bash
npm test
