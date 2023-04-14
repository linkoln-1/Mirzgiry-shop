const CategoryPrice= require("../models/CategoryPrice.model");

module.exports.categoriesPricecontroller = {
  createCategoryPrice: async function (req, res) {
    try {
      await CategoryPrice.create({
        name: req.body.name,
      });
      res.json("Категория добавлена");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteCategoryPriceById: async function (req, res) {
    try {
      const category = await CategoryPrice.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeCategoryPriceById: async function (req, res) {
    try {
      const category = await CategoryPrice.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json("Категория изменена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  getCategoriesPrice: async function (req, res) {
    try {
      const categories = await CategoryPrice.find();
      res.json(categories);
    } catch (error) {
      console.log(error.toString());
    }
  },
};
