const { Router } = require("express");
const { favoritescontroller } = require("../controllers/favorites.controllers");
const router = Router();
const authmiddleware = require("../models/middlewares/auth-middleware");

router.post("/favoriteadd", authmiddleware, favoritescontroller.createFavorite);

router.delete("/favoritedelete/:id", authmiddleware, favoritescontroller.deleteFavoriteById);

// router.patch("/favorite/:id", favoritescontroller.changeFavoriteById);
router.get("/favorites", authmiddleware, favoritescontroller.getFavorites);
// router.get("/favorite/:id",favoritescontroller.getFavoriteById);
// router.patch(
//   "/favorite/:id",
//   authmiddleware,
//   favoritescontroller.changeFavoriteById
// );
// router.patch("/favorite/delete/:id", favoritescontroller.deleteFavoriteById);

module.exports = router;
