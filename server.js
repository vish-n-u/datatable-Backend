const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const categoryRoute = require("./route/category.route");
const productRoute = require("./route/product.route");
const dbConfig = require("./config/db.config");
const categoryModel = require("./model/category.model");
const productModel = require("./model/product.model");
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  return res.status(200).send("reached");
});

async function createConnection() {
  try {
    await dbConfig();
    // await categoryModel.insertMany([
    //   {
    //     name: "Food",
    //     vals: ["Dish", "Cuisine", "Price"],
    //     valTypes: { Dish: "text", Cuisine: "text", Price: "number" },
    //   },
    //   {
    //     name: "Clothes",
    //     vals: ["Style", "Gender", "Price"],
    //     valTypes: { Style: "text", Gender: "text", Price: "number" },
    //   },
    //   {
    //     name: "Shelter",
    //     vals: ["House", "Loction", "Price", "Ac"],
    //     valTypes: {
    //       House: "text",
    //       Loction: "text",
    //       Price: "number",
    //       Ac: "text",
    //     },
    //   },
    // ]);
    // await productModel.insertMany([
    //   {
    //     categoryId: "648a7ef4caf957c2a6a8bcc1",
    //     data: {
    //       Dish: "paneer paratha",
    //       Cuisine: "Indian",
    //       Price: 1000,
    //     },
    //   },
    //   {
    //     categoryId: "648a7ef4caf957c2a6a8bcc1",
    //     data: {
    //       Dish: "AlFaham",
    //       Cuisine: "Indian",
    //       Price: 120,
    //     },
    //   },
    //   {
    //     categoryId: "648a7ef4caf957c2a6a8bcc2",
    //     data: {
    //       Style: "Z&M",
    //       Gender: "Male",
    //       Price: 12000,
    //     },
    //   },
    //   {
    //     categoryId: "648a7ef4caf957c2a6a8bcc3",
    //     data: {
    //       House: "AishwaryKiran",
    //       Location: "Dombivli",
    //       Price: 1900000,
    //     },
    //   },

    //   {
    //     categoryId: "648a7ef4caf957c2a6a8bcc3",
    //     data: {
    //       Style: "YarDstick",
    //       Gender: "FeMale",
    //       Price: 10,
    //     },
    //   },
    // ]);
    categoryRoute(app);
    productRoute(app);
    app.listen("4000", () => {
      console.log("listening....");
    });
  } catch (err) {
    console.log(err);
  }
}
createConnection();
