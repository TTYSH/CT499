const express = require("express");
const ledgerController = require("../controllers/ledger.controller");

const router = express.Router();

router.route("/user/:id")
    .get(ledgerController.findAllByUser);

module.exports = router;
