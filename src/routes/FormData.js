const express = require("express");
const router = express.Router();

const {
  setFormData,
  getFormData,
  deleteFormData,
} = require("../controllers/FormData.js");

router.post("/dynamic-items", setFormData);

router.get("/formdata", getFormData);

router.delete("/formdata/:formName", deleteFormData);

module.exports = router;
