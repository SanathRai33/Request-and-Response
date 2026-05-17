const express = require("express");

const app = express();

const port = 4000;

const productRoutes = require("./routes/productRoutes");

app.use(express.static("public"));
app.use(express.json());


app.use("/api/products", productRoutes);

app.listen(port, () => {

  console.log(`Server is running on http://localhost:${port}`);
});