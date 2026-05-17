const express = require("express");

const router = express.Router();

const { getAllProducts } = require("../controllers/productController");

router.get("/api/products", getAllProducts);

module.exports = router;