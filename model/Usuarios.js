const Sequelize = require("sequelize");
const banco = require("../banco/conexao.js");

const Usuarios = banco.define("usuarios", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
    },
    senha: {
        type:Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Usuarios;