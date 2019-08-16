const express = require("express");
const Router = express.Router();

const userController = require("../controllers/userController");

Router.get("/createTB", userController.createTB);
Router.get("/deleteTB", userController.deleteTB);

Router.route("/").post(userController.createUser);

module.exports = Router;
