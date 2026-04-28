const express = require("express");
const cors = require("cors");

const securityHeaders = require("./middlewares/securityHeaders");
const httpsRedirect = require("./middlewares/httpsRedirect");
const sessionConfig = require("./config/session");
const testRoutes = require("./routes/testRoutes");

const app = express();

// Security Middlewares
app.use(httpsRedirect);
app.use(securityHeaders);

// Core Middlewares
app.use(cors());
app.use(express.json());

// Session
app.use(sessionConfig);

// Routes
app.use("/api", testRoutes);

module.exports = app;