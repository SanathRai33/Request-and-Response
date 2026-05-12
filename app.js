const express = require("express");

const app = express();


app.get("/welcome/:username", (req, res) => {

  const username = req.params.username;

  const age = req.query.age;

  res.send(
    `<h1>Welcome ${username}, your age is ${age}</h1>`
  );

});


// SERVER
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});