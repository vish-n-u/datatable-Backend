// const { findOneAndUpdate } = require("../model/category.model");
// const { where } = require("../model/category.model");
const Product = require("../model/product.model");

exports.getAllProducts = async (req, res) => {
  try {
    console.log("reached");
    const allProduct = await Product.find();
    return res.status(200).send({ message: allProduct });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "internal server err" });
  }
};
exports.createProduct = async (req, res) => {
  try {
    console.log("req.body===", req.body);
    const newProduct = await Product.create(req.body);
    return res.status(201).send({ message: "new product created" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "internal server err" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    console.log(req.body);
    const updateProduct = await Product.findOneAndUpdate(
      {
        _id: req.body.productId,
      },
      { data: req.body.updateObj },
      { new: true }
    );
    console.log(updateProduct);
    return res.status(200).send({ message: "Success" });
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server err");
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    console.log("productId", req.body.productId);
    const deleteProduct = await Product.deleteOne({ _id: req.body.productId });
    console.log(deleteProduct);
    return res.status(200).send({ message: "deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "internal Server err" });
  }
};
