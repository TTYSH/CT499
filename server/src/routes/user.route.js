const express = require("express");
const users = require("../controllers/user.controller");
const router = express.Router();

router.post("/", users.create);
router.put("/:id", users.update);
router.get("/:id", users.findById);

module.exports = router;