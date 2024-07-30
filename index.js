const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const userRoutes = require("./src/routes/User.js");

app.use(express.json());
app.use(userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the FormBot Server",
    Version: "0.02",
    Date: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    Time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
  });
});

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Server is running & Connected to Database"))
    .catch((err) => console.error("MongoDB connection error: ", err));
});
