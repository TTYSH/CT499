const express = require("express");
const ledgerController = require("../controllers/ledger.controller");

const router = express.Router();

router.get("/user/:id", ledgerController.findAllByUser);

module.exports = router;
