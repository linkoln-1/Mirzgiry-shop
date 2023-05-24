const { Router } = require("express");
const { productcontroller } = require("../controllers/products.controllers");
const router = Router();
const authmiddleware = require("../models/middlewares/auth-middleware");
router.post("/product", productcontroller.createProduct);

router.delete("/product/:id", productcontroller.deleteProductById);

// router.patch("/product/:id", authmiddleware,  productcontroller.changeProductById);
router.get("/products", productcontroller.getProducts);
router.get("/products/:id", productcontroller.getProductById);
router.patch("/productadd/:id", productcontroller.addSizes);

module.exports = router;
