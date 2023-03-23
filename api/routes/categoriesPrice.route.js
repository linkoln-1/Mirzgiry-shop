const { Router } = require("express");
const {categoriesPricecontroller} = require("../controllers/categoriesPrice.controllers");
const router = Router();

router.post("/categoriesPrice", categoriesPricecontroller.createCategoryPrice);

router.delete("/categoriesPrice/:id", categoriesPricecontroller.deleteCategoryPriceById);

router.patch("/categoriesPrice/:id", categoriesPricecontroller.changeCategoryPriceById);
router.get("/categoriesPrice", categoriesPricecontroller.getCategoriesPrice);

module.exports = router;