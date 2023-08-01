const express = require("express");
const morgan = require("morgan");
const app = express();

// Development Logging
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle all unhandled routes
app.all("*", (req, res, next) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server!`);
});

module.exports = app;
