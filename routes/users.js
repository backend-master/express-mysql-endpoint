const express = require("express");
const Router = express.Router();

const userController = require("../controllers/userController");

Router.get("/createTB", userController.createTB);
Router.get("/deleteTB", userController.deleteTB);

module.exports = Router;
