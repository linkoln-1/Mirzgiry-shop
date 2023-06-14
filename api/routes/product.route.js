const { Router } = require("express");
const { productcontroller } = require("../controllers/products.controllers");
const router = Router();
const authmiddleware = require("../models/middlewares/auth-middleware");
router.post("/product", productcontroller.createProduct);

router.delete("/product/:id", productcontroller.deleteProductById);
router.get("/product/:name", productcontroller.getProductByName);
router.patch("/product/:id",  productcontroller.changeProductById);
router.get("/productspage/:page", productcontroller.getProductsByPage);
router.get("/products", productcontroller.getProducts);
router.get("/products/:id", productcontroller.getProductById);
router.patch("/productadd/:id", productcontroller.addSizes);

module.exports = router;
