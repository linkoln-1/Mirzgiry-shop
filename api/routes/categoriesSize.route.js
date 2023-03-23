const { Router } = require("express");
const {categoriesSizecontroller} = require("../controllers/categoriesSize.controllers");
const router = Router();

router.post("/categoriesSize", categoriesSizecontroller.createCategorySize);

router.delete("/categoriesSize/:id", categoriesSizecontroller.deleteCategorySizeById);

router.patch("/categoriesSize/:id", categoriesSizecontroller.changeCategorySizeById);
router.get("/categoriesSize", categoriesSizecontroller.getCategoriesSize);

module.exports = router;