const { Router } = require("express");
const {categoriesProductcontroller} = require("../controllers/categoriesProduct.controllers");
const router = Router();

router.post("/categoriesProduct", categoriesProductcontroller.createCategoryProduct);

router.delete("/categoriesProduct/:id", categoriesProductcontroller.deleteCategoryProductById);

router.patch("/categoriesProduct/:id", categoriesProductcontroller.changeCategoryProductById);
router.get("/categoriesProduct", categoriesProductcontroller.getCategoriesProduct);

module.exports = router;