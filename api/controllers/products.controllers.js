const Product = require("../models/Product.models");

module.exports.productcontroller = {
  createProduct: async function (req, res) {
    try {
      await Product.create({
        name: req.body.name,
        categoryId: req.body.categoryId,
        categoryIdName: req.body.categoryIdName,
        price: req.body.price,
        priceId: req.body.priceId,
        color: req.body.color,
        image:req.body.image,
        checkHeart:req.body.checkHeart,
        sizes:req.body.sizes,

      });
      res.json("Товар добавлен");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteProductById: async function (req, res) {
    try {
      const product = await Product.findByIdAndRemove(req.params.id);
      res.json("Товар удален");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeProductById: async function (req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        categoryId: req.body.categoryId,
        categoryIdName: req.body.categoryIdName,
        price: req.body.price,
        priceId: req.body.priceId,
        color: req.body.color,
        image:req.body.image,
        checkHeart:req.body.checkHeart,
        sizes:req.body.sizes,
      });
      res.json("Продукт изменен");
    } catch (error) {
      console.log(error.toString());
    }
  },
  getProducts: async function (req, res) {
    try {
      const product = await Product.find().populate('sizes');
      res.json(product);
    } catch (error) {
      console.log(error.toString());
    }
  },
  addSizes: async function(req, res) {
    try {
      const sizes = await Product.findByIdAndUpdate(req.params.id,{
        $push: { sizes: req.body.sizes },
      });
      res.json(sizes);
    } catch (error) {
      console.log(error.toString());
    }
  }
};