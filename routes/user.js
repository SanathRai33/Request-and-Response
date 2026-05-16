const express = require("express");

const router = express.Router();

const { getAllUsers, addUser, getUserById } = require("../controllers/userController");


router.get("/users", getAllUsers);

router.post("/users", addUser);

router.get("/users/:id", getUserById);


module.exports = router;