const express = require("express");
const Router = express.Router();

const orderController = require("../controllers/orderController");

Router.get("/createTB", orderController.createTable);
Router.get("/deleteTB", orderController.deleteTable);

Router.route("/")
  .post(orderController.createOrder)
  .get(orderController.getAllOrder);

module.exports = Router;
