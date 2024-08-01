const FormData = require("../models/FormData.js");

const setFormData = async (req, res) => {
  try {
    // Validate request body
    if (!req.body.formName || !req.body.user || !req.body.itemList) {
      return res.status(400).send("Invalid data format");
    }

    // Save data to MongoDB
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).send(formData);
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(400).send(error.message);
  }
};

const getFormData = async (req, res) => {
  try {
    const data = await FormData.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
};

module.exports = {
  setFormData,
  getFormData,
};
