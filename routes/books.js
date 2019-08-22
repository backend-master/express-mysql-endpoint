const express = require("express");
const Router = express.Router();

const bookController = require("../controllers/bookController");

Router.get("/createTB", bookController.createDatabase);
Router.get("/deleteTB", bookController.deteleDatabase);

Router.route("/")
  .post(bookController.createBooks)
  .get(bookController.getAllBooks);

Router.route("/:id")
  .get(bookController.getBookById)
  .delete(bookController.deleteBookById);

module.exports = Router;
