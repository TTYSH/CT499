const express = require("express");
const app = express();
const usersRouter = require("./routes/user.route");

app.use(express.json());

app.use("/api/users", usersRouter);

module.exports = app;
