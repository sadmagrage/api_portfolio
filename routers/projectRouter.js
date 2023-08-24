const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const projectController = require("../controllers/projectController");

const upload = multer();

const router = express.Router();

router.use(bodyParser.json());

router.get("", projectController.findAll);

router.get("/:_id", projectController.findOne);

router.post("", upload.single('image'), projectController.save);

router.put(projectController.update);

router.delete(projectController.del);

module.exports = { router };