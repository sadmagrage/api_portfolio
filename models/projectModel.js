const mongoose = require("mongoose");
const { Binary } = require("bson");
const uuid = require("uuid");

const projectSchema = new mongoose.Schema({
    _id: {
        type: Buffer,
        default: () => {
            const generatedUUID = uuid.v4().replace(/-/g, '');
            return Buffer.from(generatedUUID, 'hex');
        }
    },
    name: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        of: String,
        required: true
    },
    image: {
        type: Buffer,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    repository: {
        type: String,
        required: true
    },
    runningLink: {
        type: String,
        default: ""
    }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

/* {
    name: "juninho cabeçote",
    tecnologies: ["node.js", "mongodb"],
    image: "https://d2r9epyceweg5n.cloudfront.net/stores/002/815/230/products/design-sem-nome-191-8aeb712c872fa63c2d16773541755222-640-0.png",
    status: false,
    description: "dmsakdopsadksaokds",
    repository: "d",
    runningLink: ""
} */