const express = require("express");
const router = express.Router();

const { setFormData } = require("../controllers/FormData.js");

router.post("/dynamic-items", setFormData);

module.exports = router;
