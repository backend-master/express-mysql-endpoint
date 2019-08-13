const express = require("express");
const Router = express.Router();

const bookController = require("../controllers/bookControllerr");

Router.route("/createTB").get(bookController.createDatabase);
Router.route("/deleteTB").get(bookController.deteleDatabase);

module.exports = Router;
