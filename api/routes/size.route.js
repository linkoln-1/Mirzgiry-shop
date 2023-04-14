const { Router } = require("express");
const { sizecontroller } = require("../controllers/sizes.controllers");
const router = Router();

router.post("/size", sizecontroller.createSize);

router.delete("/size/:id", sizecontroller.deleteSizeById);

router.patch("/size/:id", sizecontroller.changeSizeById);
router.get("/sizes", sizecontroller.getSizes);

module.exports = router;
