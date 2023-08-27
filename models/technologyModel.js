const mongoose = require("mongoose");
const uuid = require("uuid");
const { bufferToUuid } = require("../utils/parse");

const technologySchema = new mongoose.Schema({
    _id: {
        type: Buffer,
        default: () => {
            const generatedUUID = uuid.v4().replace(/-/g, '');
            return Buffer.from(generatedUUID, 'hex');
        }
    },
    title: {
        type: String,
        required: true
    },
    imageBuffer: {
        type: Buffer,
        required: true
    }
});

technologySchema.set('toJSON', {
    getters: true,
    transform: (doc, ret) => {
        const uuid = bufferToUuid(ret._id);

        ret._id = uuid;
        
        return ret;
    }
})

const Technology = mongoose.model("Technology", technologySchema);

module.exports = Technology;