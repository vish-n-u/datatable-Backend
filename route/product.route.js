const productController = require("../controller/product.controller");

const productRoute = (app) => {
  app.get("/categoryMaster/api/v1/products", productController.getAllProducts);
  app.post("/categoryMaster/api/v1/products", productController.createProduct);
  app.put("/categoryMaster/api/v1/products", productController.updateProduct);
  app.delete(
    "/categoryMaster/api/v1/products",
    productController.deleteProduct
  );
};

module.exports = productRoute;
