const mongoose = require("mongoose");
const uuid = require("uuid");
const { bufferToUuid } = require("../utils/parse");

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
    bufferImage: {
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

projectSchema.set('toJSON', {
    getters: true,
    transform: (doc, ret) => {
        const uuid =  bufferToUuid(ret._id);

        ret._id = uuid;

        return ret;
    },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
