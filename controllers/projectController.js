require("../configs/mongoose");
const Project = require("../models/projectModel");

const findAll = async (req, res) => {
    const projects = await Project.find();

    res.status(200).json(projects);
};

const findOne = async (req, res) => {

};

const save = async (req, res) => {
    const status = req.body.status.toLowerCase() == "true";
    const technologies = JSON.parse(req.body.technologies);

    const project = new Project({ name: req.body.name, description: req.body.description, image: req.file.buffer, status: status, repository: req.body.repository, runningLink: req.body.runningLink, technologies: technologies });

    await project.save();

    res.send(project)
};

const update = async (req, res) => {

};

const del = async (req, res) => {

};

module.exports = { findAll, findOne, save, update, del };