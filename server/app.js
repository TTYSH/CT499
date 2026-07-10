const express = require("express");
const app = express();
const usersRouter = require("./src/routes/user.route");
const authRouter = require("./src/routes/auth.route");

const cors = require("cors");
app.use(cors()); // Cần cors để client gọi API

app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

module.exports = app;
