const { Router } = require("express");
const { basketscontroller } = require("../controllers/baskets.controllers");
const router = Router();
const authMiddleware = require('../models/middlewares/auth-middleware');

router.post("/basket",  authMiddleware, basketscontroller.createBasket);

router.delete("/basket/:id", authMiddleware,  basketscontroller.deleteBasketById);


router.get("/baskets", basketscontroller.getBaskets);


module.exports = router;
