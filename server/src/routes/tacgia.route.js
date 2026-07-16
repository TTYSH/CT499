const express = require("express");
const tacGiaController = require("../controllers/tacgia.controller");
const router = express.Router();

router.get("/", tacGiaController.findAll);

module.exports = router;