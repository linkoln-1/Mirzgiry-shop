const { Router } = require("express");
const router = Router();

router.use(require("./categoriesProduct.route"));
router.use(require("./categoriesColor.route"));
router.use(require("./categoriesSize.route"));
router.use(require("./categoriesPrice.route"));
router.use(require("./product.route"));
router.use(require("./size.route"));
router.use(require("./user.route"));
router.use(require("./favorite.route"));
router.use(require("./basket.route"));
router.use(require("./history.route"));
router.use(require("./personal.route"));
module.exports = router;
