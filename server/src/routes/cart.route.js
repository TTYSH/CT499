const express = require("express");
const cartController = require("../controllers/cart.controller");

const router = express.Router();

router.post("/add", cartController.addItem);
router.get("/:id", cartController.findOne);
router.delete("/item/:itemId", cartController.removeItem);

module.exports = router;
