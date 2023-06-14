const Product = require("../models/Product.model");

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
        colorId: req.body.colorId,
        image:req.body.image,
        checkHeart:req.body.checkHeart,
        sizes:req.body.sizes,
        page: req.body.page

      });
      res.json("Товар добавлен");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteProductById: async function (req, res) {
    try {
      const changeproduct = await Product.findByIdAndUpdate(req.params.id);
      changeproduct.checkHeart=!changeproduct.checkHeart
      changeproduct.save();
      const product = await Product.findByIdAndRemove(req.params.id);
      res.json("Товар удален");
    } catch (error) {
      console.log(error.toString());
    }
  },
  // changeProductById: async function (req, res) {
  //   console.log('vv',req.body)
  //   try {
    
  //     const product = await Product.findByIdAndUpdate(req.params.id, {checkHeart: !req.body.loginData.checkHeart}, {new: true});
  //     res.json(req.params.id);
  //     console.log('change', product)
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // },
  changeProductById: async function (req, res) {
    
    try {
    
      const product = await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        categoryId: req.body.categoryId,
        categoryIdName: req.body.categoryIdName,
        price: req.body.price,
        priceId: req.body.priceId,
        color: req.body.color,
        colorId: req.body.colorId,
        image:req.body.image,
        checkHeart:req.body.checkHeart,
        sizes:req.body.sizes,
        page: req.body.page
      });
      console.log(product)
      res.json(product);
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
 
  getProductById: async function (req, res) {
    try {
      const product = await Product.findById(req.params.id).populate('sizes');
      res.json(product);
    } catch (error) {
      console.log(error.toString());
    }
  }, 
  getProductsByPage: async function (req, res) {
    const { page } = req.params;
    try {
      const product = await Product.find({page}).populate('sizes');
      res.json(product);
    } catch (error) {
      console.log(error.toString());
    }
  },
  getProductByName: async function (req, res) {
    try {
      const { name } = req.params;
      console.log("name", req.params)
    const product = await Product.find({name}).populate('sizes');
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
