const express = require("express");
const helmet = require("helmet");
const session = require("./config/session");
const sanitize = require("./middleware/sanitize");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(session);
app.use(sanitize);

app.use("/auth", require("./routes/authRoutes"));
app.use("/txn", require("./routes/transactionRoutes"));

module.exports = app;