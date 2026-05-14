const express = require("express");
const app = express();
const bookRouter = require('./routes/book')

app.use('/book', bookRouter);

// SERVER
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});