const express = require("express");
const Router = express.Router();

const bookController = require("../controllers/bookController");

Router.get("/createTB", bookController.createDatabase);
Router.get("/deleteTB", bookController.deteleDatabase);

module.exports = Router;
