const express = require("express");
const bookController = require("../controllers/book.controller");
const router = express.Router();

router.get("/", bookController.findAll);
router.get("/newbooks", bookController.getNewBooks);
router.get("/categories", bookController.getCategories);
router.get("/:id", bookController.findOne);

module.exports = router;