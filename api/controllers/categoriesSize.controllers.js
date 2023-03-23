const CategorySize = require("../models/CategorySize.models");

module.exports.categoriesSizecontroller = {
  createCategorySize: async function (req, res) {
    try {
      await CategorySize.create({
        name: req.body.name,
      });
      res.json("Категория добавлена");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteCategorySizeById: async function (req, res) {
    try {
      const category = await CategorySize.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeCategorySizeById: async function (req, res) {
    try {
      const category = await CategorySize.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json("Категория изменена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  getCategoriesSize: async function (req, res) {
    try {
      const categories = await CategorySize.find();
      res.json(categories);
    } catch (error) {
      console.log(error.toString());
    }
  },
};