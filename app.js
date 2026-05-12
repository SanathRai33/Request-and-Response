const express = require("express");

const app = express();


// GET Request to /orders
app.get("/orders", (req, res) => {
  res.send("Here is the list of all orders.");
});


// POST Request to /orders
app.post("/orders", (req, res) => {
  res.send("A new order has been created.");
});


// GET Request to /users
app.get("/users", (req, res) => {
  res.send("Here is the list of all users.");
});


// POST Request to /users
app.post("/users", (req, res) => {
  res.send("A new user has been added.");
});


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});