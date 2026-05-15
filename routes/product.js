const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  addProduct,
  getProductById
} = require("../controllers/productController");


router.get("/products", getAllProducts);

router.post("/products", addProduct);

router.get("/products/:id", getProductById);


module.exports = router;