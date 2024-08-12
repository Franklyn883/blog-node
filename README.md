# Blog-node
Blog-node is a simple blog application built using Node.js, Express, and MongoDB. This project allows users to create, view, edit, and delete blog posts. The application also supports categorizing posts, making it easy to filter and browse content by category.

## Features

- Create, Read, Update, and Delete (CRUD) blog posts.
- Categorize blog posts.
- View all posts related to a specific category.
- Uses MongoDB as the database to store blog posts and categories.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Templating Engine**: EJS (Embedded JavaScript)
- **Styling**: CSS
- **HTTP Client**: Fetch API for handling asynchronous HTTP requests

## Installation

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed and running or  mongoDB atlas


### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Franklyn883/blog-node.git
    cd blog-node
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file**:
    Create a `.env` file in the root directory and add your MongoDB connection string:
    ```plaintext
    MONGODB_URI=mongodb://localhost:27017Blog-node
    ```

4. **Run the application**:
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

## Usage

### Home Page

The home page displays all blog posts. Each post shows its title, category, and creation date.

### Editing a Blog Post
1. Navigate to `/category/create` to create a new category.
2. Fill out the form, then submit.

### Creating a Blog Post

1. Navigate to `/blog/create` to create a new blog post.
2. Fill out the form, including the title, content, snippet and category, then submit.

### Editing a Blog Post

1. Navigate to the post's detail page.
2. Click the `Update` button to modify the post.

### Deleting a Blog Post

On the post's detail page, click the `Delete` button to remove the post.

### Viewing Posts by Category

Navigate to `/category/:id/posts` to view all posts in a specific category.

## Project Structure

```plaintextBlog-node/
│
├── controllers/       # Express route controllers for all endpoints
├── models/            # Mongoose models for the application
├── public/            # Static files (CSS, images, JS)
├── routes/            # Express route definitions
├── views/             # EJS templates
│
├── .env               # Environment variables
├── app.js             # Entry point for the application
├── README.md          # Project documentation
└── package.json       # NPM dependencies and scripts
