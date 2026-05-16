// controllers/productController.js


// IMPORT SERVICES
const { getAllProductsService, getProductByIdService, addProductService } = require("../services/productService");


const getAllProducts = (req, res) => {
  const response = getAllProductsService();
  res.send(response);
};


const getProductById = (req, res) => {
  const id = req.params.id;
  const response = getProductByIdService(id);
  res.send(response);
};


const addProduct = (req, res) => {
  const response = addProductService();
  res.send(response);
};


module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};