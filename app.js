const express = require("express");

const app = express();


const userRoutes = require("./routes/userRoutes");

const productRoutes = require("./routes/productRoutes");

const cartRoutes = require("./routes/cartRoutes");


const errorHandler = require("./middleware/errorHandler");


app.use(express.json());


app.use(userRoutes);

app.use(productRoutes);

app.use(cartRoutes);


app.use(errorHandler);


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});