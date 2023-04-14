const CategoryColor = require("../models/CategoryColor.model");

module.exports.categoriesColorcontroller = {
  createCategoryColor: async function (req, res) {
    try {
      await CategoryColor.create({
        name: req.body.name,
      });
      res.json("Категория добавлена");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteCategoryColorById: async function (req, res) {
    try {
      const category = await CategoryColor.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeCategoryColorById: async function (req, res) {
    try {
      const category = await CategoryColor.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json("Категория изменена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  getCategoriesColor: async function (req, res) {
    try {
      const categories = await CategoryColor.find();
      res.json(categories);
    } catch (error) {
      console.log(error.toString());
    }
  },
};
