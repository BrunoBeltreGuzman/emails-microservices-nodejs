const express = require("express");
const morgan = require("morgan");

const app = express();

//Middelware
app.use(morgan("dev"));
app.use(express.json());

module.exports = app;
