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

// Define the schema for form data
// const itemSchema = new mongoose.Schema({
//   id: String,
//   type: String,
//   src: String,
//   placeholder: String,
//   value: String,
// });

// const formSchema = new mongoose.Schema({
//   formName: String,
//   user: {
//     userId: String,
//     username: String,
//     email: String,
//   },
//   itemList: [itemSchema],
// });

// const FormData = mongoose.model("FormData", formSchema);

// app.post("/dynamic-items", async (req, res) => {
//   try {
//     console.log("Incoming request body:", req.body);

//     // Validate request body
//     if (!req.body.formName || !req.body.user || !req.body.itemList) {
//       return res.status(400).send("Invalid data format");
//     }

//     // Save data to MongoDB
//     const formData = new FormData(req.body);
//     await formData.save();
//     res.status(201).send(formData);
//   } catch (error) {
//     console.error("Error saving form data:", error);
//     res.status(400).send(error.message);
//   }
// });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the FormBot Server",
    Version: "0.03",
    Date: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    Time: `${
      new Date().getHours() % 12
    }:${new Date().getMinutes()}:${new Date().getSeconds()}`,
  });
});

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Server is running & Connected to Database"))
    .catch((err) => console.error("MongoDB connection error: ", err));
});
