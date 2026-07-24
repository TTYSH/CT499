const express = require("express");
const cartController = require("../controllers/cart.controller");

const router = express.Router();

router.post("/add", cartController.addItem);
router.get("/:id", cartController.findOne);
router.route("/item/:itemId")
    .delete(cartController.removeItem)
    .put(cartController.updateQuantity);

module.exports = router;
