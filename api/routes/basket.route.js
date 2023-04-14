const { Router } = require("express");
const { basketscontroller } = require("../controllers/baskets.controllers");
const router = Router();

router.post("/basket", basketscontroller.createBasket);

router.delete("/basket/:id", basketscontroller.deleteBasketById);

router.get("/baskets", basketscontroller.getBaskets);

module.exports = router;
