📝 Todo List App (React)

This project is a Todo List application built with React.js as part of a homework assignment given by my teacher.
The main goal of this project is to practice working with APIs using Axios and managing data in React.

🚀 Technologies Used

React.js

Axios

Bootstrap

CSS

JSON Server (for local backend)

📌 Project Features

Fetch todos from a local API

Display todos in a list

Filter todos by user

Update todo status (completed / pending)

Delete todos

UI updates without page refresh

🗂 Project Structure

The fake backend data is stored in:
db/src/db.json

A PDF file explaining the homework requirements is included inside the src folder
(the document is in French)

🛠 Setup & Installation

1️⃣ Install dependencies

npm install

2️⃣ Install JSON Server (if not installed)

npm install -g json-server

3️⃣ Run the JSON Server

From the project root:

json-server --watch db/src/db.json --port 3001

4️⃣ Run the React app

npm start


The app will run on http://localhost:3000
The API will run on http://localhost:3001


🎯 Purpose of the Project

This project was created as a homework assignment to learn:

How to consume APIs using Axios

How to manage state in React

How to handle side effects with useEffect

How frontend and backend communicate

🔮 Future Improvements

Add new todos

Edit todo titles

Improve UI/UX

Better error handling


