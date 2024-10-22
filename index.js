const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/User.js");
const formDataRoutes = require("./src/routes/FormData.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(userRoutes);
app.use(formDataRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the FormBot Server",
    Version: "0.2",
    Date: `${new Date().getDate()}-${
      new Date().getMonth() + 1
    }-${new Date().getFullYear()}`,
  });
});

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Server is Connected to Database"))
    .catch((err) => console.error("MongoDB connection error: ", err));
});
