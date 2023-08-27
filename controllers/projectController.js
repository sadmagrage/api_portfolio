require("../configs/mongoose");
const Project = require("../models/projectModel");
const { uuidToBuffer } = require("../utils/parse");

const findAll = async (req, res) => {
    const projects = await Project.find();

    res.status(200).json(projects);
};

const findOne = async (req, res) => {
    const project = await Project.findById({ _id: uuidToBuffer(req.params._id) });

    if (project == null) {
        res.status(404).send("Project not found.");
        return;
    }

    res.status(200).json(project);
};

const save = async (req, res) => {
    try {
        const status = req.body.status.toLowerCase() == "true";
        const technologies = JSON.parse(req.body.technologies);

        const project = new Project({ name: req.body.name, description: req.body.description, bufferImage: req.file.buffer, status: status, repository: req.body.repository, runningLink: req.body.runningLink, technologies: technologies });

        await project.save();

        res.status(201).json(project);
    } catch (error) {
        res.status(500).json(error)
    }
};

const update = async (req, res) => {
    const project = await Project.findById({ _id: uuidToBuffer(req.params._id) });
        
    if (project == null) {
        res.status(404).send("Project not found.");
        return;
    }

    try {    
        const status = req.body.status == true || req.body.status.toLowerCase() == "true" ? true : false ;
        const technologies = typeof(req.body.technologies) != "string" ? req.body.technologies : JSON.parse(req.body.technologies);

        let newProject;

        if (!req.file) {
            newProject = new Project({ _id: project._id, name: req.body.name, description: req.body.description, bufferImage: project.image, status: status, repository: req.body.repository, runningLink: req.body.runningLink, technologies: technologies });
        }
        else {
            newProject = new Project({ _id: project._id, name: req.body.name, description: req.body.description, bufferImage: req.file.buffer, status: status, repository: req.body.repository, runningLink: req.body.runningLink, technologies: technologies });
        }

        await Project.findByIdAndUpdate(project._id, newProject);
        
        res.status(201).json(newProject);        
    } catch (error) {
        res.status(500).json(error);
    }
};

const del = async (req, res) => {
    const project = await Project.findById({ _id: uuidToBuffer(req.params._id) });
    
    if (project == null) {
        res.status(404).send("Project not found.");
        return;
    }

    try {
        await Project.deleteOne({ _id: uuidToBuffer(req.params._id) });

        res.status(200).send("Project deleted sucessfully.");
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { findAll, findOne, save, update, del };
