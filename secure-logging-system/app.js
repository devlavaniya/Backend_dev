const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", require("./routes/authRoutes"));
app.use("/txn", require("./routes/transactionRoutes"));

module.exports = app;