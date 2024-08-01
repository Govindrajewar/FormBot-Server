const express = require("express");
const router = express.Router();

const { setFormData, getFormData } = require("../controllers/FormData.js");

router.post("/dynamic-items", setFormData);

router.get("/formdata", getFormData);

module.exports = router;
