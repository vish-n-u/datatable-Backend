const Category = require("../model/category.model");

exports.getAllCategories = async (req, res) => {
  try {
    const allCategory = await Category.find();
    return res.status(200).send({ message: allCategory });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "internal server err" });
  }
};

exports.createCategory = async (req, res) => {
  console.log("req.body", req.body);
  try {
    const newCategoryData = {
      name: req.body.name,
      vals: req.body.vals,
      valTypes:req.body.valType
    };
    const newCategory = await Category.create(newCategoryData);
    return res.status(201).send({ message: "successful" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "internal server err" });
  }
};
