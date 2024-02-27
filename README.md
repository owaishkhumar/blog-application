
# Blog Web Application

This project is a blog website built using Node.js, Express.js, and MongoDB. It provides a platform for users to create, read, update, and delete blog posts. The website features token-based authentication for user login, password hashing for security, and image upload functionality using Multer. The frontend is implemented using EJS templates and Bootstrap for styling.

## Technologies Used

**Client:** 
- EJS (Embedded JavaScript): Templating engine for generating HTML with JavaScript.
- Bootstrap: Frontend framework for responsive and mobile-first design.

**Server:** 
- Node.js: JavaScript runtime for server-side development.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing blog posts and user data.
- Node Crypto: Library for password hashing to ensure security. 
- Multer: Handling file uploads, used for image upload functionality.
- JSON Web Token (jsonwebtoken): Token-based authentication for user login.
 


## Features

- **User Authentication:**
    User registration and login using token-based authentication.
    Secure password hashing for user account protection.

- **Blog Post Management:**
    Create, read, update, and delete blog posts.
    Store blog posts in MongoDB database for persistence.

- **Image Upload:**
    Allow users to upload images to accompany their blog posts.
    Multer middleware for handling image uploads.

- **CRUD Operations:**
    Implement CRUD operations for managing blog posts.
    Enable users to interact with blog posts through intuitive UI.

- **User-Friendly Interface:**
    EJS templates for rendering dynamic content on the frontend.
    Bootstrap components for enhanced user experience and styling.

- **Security Measures:**
    Secure user authentication and password storage.
## Getting Started

Clone the repository:
```bash
  git clone https://github.com/DavidAnson/simple-website-with-blog.git
```
Install dependencies:
```bash
  npm install
```
Start the server:
```bash
    npm start
```


## Usage

Provide instructions on how to use the website, including how to create, read, update, and delete blog posts, as well as how to register and log in as a user.

