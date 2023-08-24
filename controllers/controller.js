require("../configs/mongoose");
const { Sla } = require("../models/model");

const get = async (req, res) => {
    const data = ""/* new Sla({nome: "juninho", email: "email", idade: 15}); */

    /* await data.save(); */

    res.status(201).json(data);
    /* const data = await Sla.find();
    res.status(200).json(data); */
}

module.exports = { get }