const { Router } = require("express");
const { historycontroller } = require("../controllers/history.controllers");
const router = Router();
const authmiddleware = require('../models/middlewares/auth-middleware');

router.post("/historyadd", authmiddleware,   historycontroller.createHistory);

// router.delete("/basket/:id", authmiddleware,  basketscontroller.deleteBasketById);
// router.patch("/basketadd",authmiddleware, historycontroller.addBasketToHistory);
// router.patch("/basket/:id",authmiddleware,basketscontroller.changeBasketById);
router.get("/histories", authmiddleware, historycontroller.getHistiries);


module.exports = router;
