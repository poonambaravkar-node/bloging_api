# Node.js Blogging Platform

A RESTful blogging platform built with Node.js, Express, and MongoDB. It supports user authentication, role-based access, post management, comments, and categories.

## Features
- User registration and login with JWT authentication
- Role-based access control (admin, user)
- CRUD operations for blog posts
- Commenting on posts
- Category management (admin only)
- Trending posts (top 5 by comments)

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication
- **bcrypt**: Password hashing
- **dotenv**: Environment variable management

> **Note:** There is no EJS or frontend templating in this repository. All endpoints are RESTful APIs.

## Project Structure
```
blogging/
  controllers/    # Route logic
  middleware/     # Auth and admin middleware
  models/         # Mongoose schemas
  routes/         # API endpoints
  utils/          # Utility functions (e.g., JWT token generation)
  config/         # Database connection
  server.js       # App entry point
  .env            # Environment variables
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas)

### Installation
```bash
git clone https://github.com/komalm/nodejs-blogging.git
cd nodejs-blogging/blogging
npm install
```

### Environment Variables
Create a `.env` file in the `blogging/` directory:
```
MONGO_URI=mongodb://localhost:27017/blogging
JWT_SECRET=your_secret_key
PORT=5000
```

### Running the Server
```bash
node server.js
# or for development with auto-reload
npx nodemon server.js
```

## API Endpoints

### Auth
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT

### Users
- `GET /api/users/me` — Get current user's profile (protected)
- `GET /api/admin/users` — Get all users (admin only)

### Posts
- `GET /api/posts` — List all posts
- `GET /api/posts/category/:categoryId` — List posts by category
- `GET /api/posts/trending` — List top 5 trending posts
- `POST /api/posts` — Create a new post (protected)

### Comments
- `POST /api/comments/:postId/comments` — Add a comment to a post (protected)

### Categories
- `GET /api/categories` — List all categories
- `POST /api/categories` — Create a new category (admin only)

## Models
- **User**: name, email, password (hashed), role
- **Role**: name (user, admin)
- **Post**: title, content, author, category, createdAt
- **Comment**: text, post, author, createdAt
- **Category**: name

## Middleware
- `protect`: Verifies JWT and attaches user to request
- `admin`: Checks if user has admin role

## Usage

1. **Set up MongoDB** (local or Atlas).
2. **Configure environment variables**:  
   Create a `.env` file in the `blogging/` directory:
   ```
   MONGO_URI=mongodb://localhost:27017/blogging
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
3. **Start the server**:
   ```bash
   node server.js
   # or for development
   npx nodemon server.js
   ```

4. **Test the API**:  
   Use [Postman](https://www.postman.com/) or similar tools.  
   Example collection:  
   `api-collection/Blogging API.postman_collection.json`

## Example Commands

Register a user:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Poonam","email":"poonam@techjoomla.com","password":"admin1234"}'
```

Login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"poonam@techjoomla.com","password":"admin1234"}'
```

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
