const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const projectController = require("../controllers/projectController");
const { auth: basicAuth } = require("../middlewares/basicAuth");

const upload = multer();

const router = express.Router();

router.use(bodyParser.json());

router.get("", projectController.findAll);

router.get("/:_id", projectController.findOne);

router.post("", basicAuth, upload.single('image'), projectController.save);

router.put("/:_id", basicAuth, upload.single('image'), projectController.update);

router.delete("/:_id", basicAuth, projectController.del);

module.exports = { router };