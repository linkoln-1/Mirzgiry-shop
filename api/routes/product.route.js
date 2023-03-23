const { Router } = require("express");
const {productcontroller} = require("../controllers/products.controllers");
const router = Router();

router.post("/product", productcontroller.createProduct);

router.delete("/product/:id", productcontroller.deleteProductById);

router.patch("/product/:id", productcontroller.changeProductById);
router.get("/products", productcontroller.getProducts);
router.patch("/productadd/:id", productcontroller.addSizes);

module.exports = router;