const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "pratofavorito",
    "root",
    "root",
    {
        dialect: "mysql",
        host: "localhost",
    });

    module.exports = sequelize;

