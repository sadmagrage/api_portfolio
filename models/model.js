const mongoose = require("mongoose");

const slaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    idade: Number
});

const Sla = mongoose.model('Sla', slaSchema);

module.exports = { Sla }