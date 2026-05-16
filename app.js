const express = require("express");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to E-Commerce API");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});