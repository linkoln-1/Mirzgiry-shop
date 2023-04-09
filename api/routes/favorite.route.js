const { Router } = require("express");
const { favoritescontroller } = require("../controllers/favorites.controllers");
const router = Router();
const authmiddleware = require('../models/middlewares/auth-middleware');

router.post("/favorite",  authmiddleware, favoritescontroller.createFavorite);

router.delete("/favorite/:id", favoritescontroller.deleteFavoriteById);

// router.patch("/favorite/:id", favoritescontroller.changeFavoriteById);
router.get("/favorites", authmiddleware,  favoritescontroller.getFavorites);
// router.get("/favorite/:id",favoritescontroller.getFavoriteById);
router.patch("/favoriteadd/:id",authmiddleware, favoritescontroller.addProductToFavorite);
// router.patch("/favorite/delete/:id", favoritescontroller.deleteFavoriteById);

module.exports = router;