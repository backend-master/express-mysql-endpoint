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

app.use("/api/v1/books", bookRoute);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
