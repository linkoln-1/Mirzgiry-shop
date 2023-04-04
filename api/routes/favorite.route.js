const { Router } = require("express");
const { favoritescontroller } = require("../controllers/favorites.controllers");
const router = Router();
const authMiddleware = require('../models/middlewares/auth.middleware');

router.post("/favorite", authMiddleware, favoritescontroller.createFavorite);

router.delete("/favorite/:id",authMiddleware,  favoritescontroller.deleteFavoriteById);

// router.patch("/favorite/:id", favoritescontroller.changeFavoriteById);
router.get("/favorites", authMiddleware,  favoritescontroller.getFavorites);
// router.get("/favorite/:id",favoritescontroller.getFavoriteById);
router.patch("/favoriteadd/:id", authMiddleware, favoritescontroller.addProductToFavorite);
// router.patch("/favorite/delete/:id", favoritescontroller.deleteFavoriteById);

module.exports = router;