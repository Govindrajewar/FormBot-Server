const FormData = require("../models/FormData.js");

const setFormData = async (req, res) => {
  try {
    if (!req.body.formName || !req.body.user || !req.body.itemList) {
      return res.status(400).send("Invalid data format");
    }

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

const deleteFormData = async (req, res) => {
  try {
    const formName = req.params.formName;
    const result = await FormData.deleteOne({ formName });
    if (result.deletedCount === 0) {
      return res.status(404).send("Form not found");
    }
    res.status(200).send("Form deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  setFormData,
  getFormData,
  deleteFormData,
};
