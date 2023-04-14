const Size = require("../models/Size.model");

module.exports.sizecontroller = {
  createSize: async function (req, res) {
    try {
      await Size.create({
        size: req.body.size,
        inStock: req.body.inStock,
        count: req.body.count,
      });
      res.json("Размер добавлен");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteSizeById: async function (req, res) {
    try {
      const size = await Size.findByIdAndRemove(req.params.id);
      res.json("Размер удален");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeSizeById: async function (req, res) {
    try {
      const size = await Size.findByIdAndUpdate(req.params.id, {
        size: req.body.size,
        inStock: req.body.inStock,
        count: req.body.count,
      });
      res.json("Размер изменен");
    } catch (error) {
      console.log(error.toString());
    }
  },
  getSizes: async function (req, res) {
    try {
      const size = await Size.find();
      res.json(size);
    } catch (error) {
      console.log(error.toString());
    }
  },
};
