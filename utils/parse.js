const uuidParse = require("uuid-parse");

const uuidToBuffer = (uuid) => {
    const buffer = uuidParse.parse(uuid);

    return buffer;
};

const bufferToUuid = (buffer) => {
    const uuid = uuidParse.unparse(buffer.data);

    return uuid;
};

module.exports = { uuidToBuffer, bufferToUuid }