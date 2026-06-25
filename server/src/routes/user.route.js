const express = require("express");
const users = require("../controllers/user.controller");
const router = express.Router();

router.post("/", users.create);

module.exports = router;