const path = require("path");


const getProducts = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "view", "product.html")
  );
};

const postProducts = (req, res) => {

  const data = req.body;

  console.log(data);

  res.json({
    value: data.productName
  });
};


module.exports = {
  getProducts,
  postProducts
};