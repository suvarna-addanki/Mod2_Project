# Live link:

https://the-book-worm.cyclic.app/

# The Book Worm

 The Book Worm is MERN CRUD application project for Per Scholas Codebridge.

 # Description

 The purpose of this project is to create a CRUD web application and demonstrate knowledge of React and the 7 RESTful Routes.


# Application Function

Index page will list all the available books (GET) with logo and about section.

Create a new product will let the user create a new book (POST)

When the user clicks on the book image, product detail page opens where book can be bought or edited or deleted (PATCH, EDIT & DELETE)

Details of the book can be updated in edit page (PUT)

# Technologies used

MongoDB

Express js

React js

Node js

HTML

CSS

JavaScript

Cyclic
 
 
# RESTful Routes


| Method| Path           | Description          |
|:------|:---------------|:--------------------:|
|GET    |/books          | index of books       |
|GET    |/books/New      | create new books     |
|GET    |/books/Show     | Display selected book|
|DELETE |/books/:id      | Delete selected book |
|PUT    |/books/:id      | Edit selected book   |
|POST   |/books/Show     | Display edited book  |
|GET    |/books/booksList| Show list of books   |


# Future Goal

Shopping cart function when a user buys books

# How to Install The Book Worm Application locally

Fork and clone this repository to your machine

Change into the new directory


Make .env file in root folder

Add MONGO_URI= your connection string to .env

Add PORT=3000 to .env

Run node seed.js

Run nodemon

Lastly, open a browser window, and navigate to http://localhost:3000/products

You're all set to run the app on your machine.












