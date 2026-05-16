const express = require("express");

const router = express.Router();


const { getCartForUser, addProductToCart } = require("../controllers/cartController");


router.get("/cart/:userId", getCartForUser);

router.post("/cart/:userId", addProductToCart);


module.exports = router;