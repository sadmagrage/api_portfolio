const express = require("express");
const multer = require("multer");

const technologyController = require("../controllers/technologyController");
const { auth: basicAuth } = require("../middlewares/basicAuth");

const router = express.Router();
const upload = multer();

router.get("", technologyController.findAll);

router.post("", basicAuth, upload.single("image"), technologyController.save);

router.delete("/:_id", basicAuth, technologyController.del);

module.exports = { router };
