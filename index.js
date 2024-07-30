const dotenv = require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the FormBot Server",
    Version: "0.01",
    Date: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    Time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
