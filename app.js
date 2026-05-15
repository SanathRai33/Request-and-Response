const express = require("express");
const app = express();

const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});


app.use(studentRoutes);
app.use(courseRoutes);


// 404 HANDLER
app.use((req, res) => {
  res.status(404).send("Page not found");
});


// SERVER
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});