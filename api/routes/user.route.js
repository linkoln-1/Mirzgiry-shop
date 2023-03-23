const { Router } = require("express");
const {
  userscontroller,
} = require("../controllers/users.controllers");
const router = Router();

router.post("/users", userscontroller.registerUser);
router.post("/login", userscontroller.login);
router.delete("/users/:id", userscontroller.deleteUserById);

// router.patch("/users/:id", userscontroller.changeUserById);
router.get("/users", userscontroller.getUsers);


module.exports = router;