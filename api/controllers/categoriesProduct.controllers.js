const CategoryProduct = require("../models/CategoryProduct.model");

module.exports.categoriesProductcontroller = {
  createCategoryProduct: async function (req, res) {
    try {
      await CategoryProduct.create({
        name: req.body.name,
      });
      res.json("Категория добавлена");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteCategoryProductById: async function (req, res) {
    try {
      const category = await CategoryProduct.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeCategoryProductById: async function (req, res) {
    try {
      const category = await CategoryProduct.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json("Категория изменена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  getCategoriesProduct: async function (req, res) {
    try {
      const categories = await CategoryProduct.find();
      res.json(categories);
    } catch (error) {
      console.log(error.toString());
    }
  },
};
