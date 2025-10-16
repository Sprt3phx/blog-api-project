# Blog API Project

A RESTful API built with **Express.js** that manages blog posts and users.  
This project demonstrates Express routing, controllers, middleware, and error handling following the MVC pattern.

---

## 🚀 How to Run the App Locally

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

## Project Structure
blog-api-project/
├── app.js
├── routes/
│   ├── posts.js
│   └── users.js
├── controllers/
│   ├── postsController.js
│   └── usersController.js
└── middleware/
    ├── errorHandler.js
    
## Base URL
runs on http://localhost:3000

## Health Check
GET /health
→ { "status": "OK" }


## Post Endpoints
| Method | Endpoint         | Description             | Status Codes |
| ------ | ---------------- | ----------------------- | ------------ |
| GET    | `/api/posts`     | Get all posts           200          |
| GET    | `/api/posts/:id` | Get a specific post     | 200, 404     |
| POST   | `/api/posts`     | Create a new post       | 201, 400     |
| PUT    | `/api/posts/:id` | Update an existing post | 200, 404     |
| DELETE | `/api/posts/:id` | Delete a post           | 200, 404     |



## Example Req Body
{
  "title": "My New Blog Post",
  "content": "Learning Express is awesome!",
  "author": "Caitie"
}



## Users Endpoint 
| Method | Endpoint         | Description         | Status Codes |
| ------ | ---------------- | ------------------- | ------------ |
| GET    | `/api/users`     | Get all users       | 200          |
| GET    | `/api/users/:id` | Get a specific user | 200, 404     |
| POST   | `/api/users`     | Create a new user   | 201, 400     |
| PUT    | `/api/users/:id` | Update a user       | 200, 404     |
| DELETE | `/api/users/:id` | Delete a user       | 200, 404     |

## Example Req Body
{
  "name": "Taylor",
  "email": "taylor@example.com",
  "role": "reader"
}


## Middleware
express.json() → Parses incoming JSON

errorHandler.js → Catches and formats errors

logger.js (optional) → Logs every request (if you added it)


## Technologies Used
Node.js

Express.js

Nodemon

dotenv

Postman (for API testing)

## Status
Express setup complete
Controllers connected
All CRUD operations implemented
Error handling and validation
Minor issue: DELETE endpoint may hang (intermittent), but logic implemented


## Author
Built with ❤️ by Caitie Wagner

---

## Step 2 — Commit and Push

Once that’s saved, in your terminal:
```bash
git add README.md
git commit -m "Added full project documentation"
git push
