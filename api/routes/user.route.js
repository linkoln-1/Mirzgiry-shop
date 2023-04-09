const { Router } = require("express");
const {
  userscontroller,
} = require("../controllers/users.controllers");
const router = Router();
const authmiddleware = require('../models/middlewares/auth-middleware');

router.post("/users", userscontroller.registration);
router.post("/login", userscontroller.login);
router.post("/logout", userscontroller.logout);
router.get("/activate/:link", userscontroller.activate);
router.get("/refresh", userscontroller.refresh);
// router.delete("/users/:id", userscontroller.deleteUserById);

// router.patch("/users/:id", userscontroller.changeUserById);
router.get("/users", authmiddleware, userscontroller.getUsers);


module.exports = router;