const express = require("express");
const app = express();
const shopRoutes = require("./routes/shop");


app.use("/shop", shopRoutes);


// SERVER
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});