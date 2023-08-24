const express = require("express");
const bodyparser = require("body-parser");

const controller = require("../controllers/controller");

const router = express.Router();    

router.use(bodyparser.json());

router.get("", controller.get);

module.exports = { router };