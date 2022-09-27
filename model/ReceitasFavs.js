const sequelize = require("sequelize");
const banco = require("../banco/conexao.js");

const ReceitasFav = banco.define("receitasfavs", {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: sequelize.STRING,
        allowNull: false
    },
    imagem: {
        type:sequelize.STRING,
        allowNull: false
    },
    usuarioId: {
        type:sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = ReceitasFav;