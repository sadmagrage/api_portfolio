const { uuidToBuffer } = require("../utils/parse");

require("../configs/mongoose");
const Technology = require("../models/technologyModel");

const findAll = async (req, res) => {
    const technologies = await Technology.find();

    res.status(200).json(technologies);
};

const save = async (req, res) => {
    try {
        const technology = new Technology({ title: req.body.title, imageBuffer: req.file.buffer });

        await technology.save();
    
        res.status(201).json(technology);   
    } catch (error) {
        res.status(500).json(error);
    }
};

const del = async (req, res) => {
    const technologyId = uuidToBuffer(req.params._id);

    Technology.findByIdAndDelete(technologyId)
        .then(() => res.status(200).send("Technology deleted sucessfully."))
        .catch(() => res.status(404).send("Technology not found."));
};

module.exports = { findAll, save, del }