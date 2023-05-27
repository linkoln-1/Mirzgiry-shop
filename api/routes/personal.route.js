const { Router } = require("express");
const { personalcontroller } = require("../controllers/personal.controllers");
const router = Router();
const authmiddleware = require("../models/middlewares/auth-middleware");
router.post("/personal",  authmiddleware, personalcontroller.addPersonal);
router.get("/personal",  authmiddleware, personalcontroller.getPersonal);

module.exports = router;