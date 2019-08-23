require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8800;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bookRoute = require("./routes/books");
const userRoute = require("./routes/users");
const orderRoute = require("./routes/orders");

app.use("/api/v1/books", bookRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/orders", orderRoute);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
