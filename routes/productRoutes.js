const express = require("express");

const router = express.Router();

const { getProductPage } = require("../controller/productController");


router.get("/api/products", getProductPage);


module.exports = router;