# Node.js MVC Project

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
   ```sh
   git clone <repository_url>
   ```
2. Install dependencies
   ```sh
   cd nodejs-mvc-project
   npm install
   ```
3. Create a `.env` file and add the following environment variables:
   ```sh
   PORT=3000
   DB_CONNECTION_STRING=<your_mongodb_connection_string>
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application

1. Start the server

   ```sh
   npm start
   ```

2. The server will run on `http://localhost:3000`

### Running Tests

1. Run the tests
   ```sh
   npm test
   ```

## API Endpoints

### User Endpoints

- `GET /api/worko/user` - List users
- `GET /api/worko/user/:userId` - Get user details
- `POST /api/worko/user` - Create user
- `PUT /api/worko/user/:userId` - Update user
- `PATCH /api/worko/user/:userId` - Update user
- `DELETE /api/worko/user/:userId` - Soft delete user

## Authentication

- Basic authentication is implemented for all APIs.
- Use the `Authorization` header to pass the JWT token.
