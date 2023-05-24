const { Router } = require("express");
const { basketscontroller } = require("../controllers/baskets.controllers");
const router = Router();
const authmiddleware = require('../models/middlewares/auth-middleware');

router.post("/basketadd", authmiddleware,   basketscontroller.createBasket);

router.delete("/basket/:id", authmiddleware,  basketscontroller.deleteBasketById);
router.delete("/basketclear",authmiddleware, basketscontroller.clearBasket);
router.patch("/basket/:id",authmiddleware,basketscontroller.changeBasketById);
router.get("/baskets", authmiddleware, basketscontroller.getBaskets);


module.exports = router;
