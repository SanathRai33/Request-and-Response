const {
  sendResponse
} = require("../utils/response");


const getCartForUser = (
  req,
  res,
  next
) => {

  try {

    const userId = req.params.userId;

    sendResponse(
      res,
      `Fetching cart for user with ID: ${userId}`
    );

  } catch (err) {

    next(err);

  }

};


const addProductToCart = (
  req,
  res,
  next
) => {

  try {

    const userId = req.params.userId;

    sendResponse(
      res,
      `Adding product to cart for user with ID: ${userId}`,
      201
    );

  } catch (err) {

    next(err);

  }

};


module.exports = {
  getCartForUser,
  addProductToCart
};