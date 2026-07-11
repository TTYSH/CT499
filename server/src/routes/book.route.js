const express = require("express");
const books = require("../controllers/book.controller");

const router = express.Router();

router.route("/")
    .get(books.findAll);

router.route("/:id")
    .get(books.findOne);

module.exports = router;
