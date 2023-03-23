const { Router } = require("express");
const {categoriesColorcontroller} = require("../controllers/categoriesColor.controllers");
const router = Router();

router.post("/categoriesColor", categoriesColorcontroller.createCategoryColor);

router.delete("/categoriesColor/:id", categoriesColorcontroller.deleteCategoryColorById);

router.patch("/categoriesColor/:id", categoriesColorcontroller.changeCategoryColorById);
router.get("/categoriesColor", categoriesColorcontroller.getCategoriesColor);

module.exports = router;