const express = require("express");
const Router = express.Router();

const userController = require("../controllers/userController");

Router.get("/createTB", userController.createTB);
Router.get("/deleteTB", userController.deleteTB);

Router.route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);

Router.route("/:id")
  .get(userController.getUserById)
  .delete(userController.deleteUser);

module.exports = Router;
