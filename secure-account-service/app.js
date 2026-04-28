const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const accountRoutes = require("./routes/accountRoutes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/account", accountRoutes);

module.exports = app;