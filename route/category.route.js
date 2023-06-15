const categoryController = require("../controller/category.controller");

const categoryRoute = (app) => {
  app.get(
    "/categoryMaster/api/v1/categories",
    categoryController.getAllCategories
  );
  app.post(
    "/categoryMaster/api/v1/categories",
    categoryController.createCategory
  );
};
module.exports = categoryRoute;
