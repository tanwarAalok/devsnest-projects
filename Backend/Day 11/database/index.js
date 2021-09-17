
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "vinay",
    {
        host: "localhost",
        dialect: "postgres"
    }
);



(async () => {
    try {
        await sequelize.sync();
        await sequelize.authenticate();
        console.log("Connection estabalized with DB");
    } catch (err) {
        console.log(err);
        console.error("Unable to connect to DB");
    }
})();

module.exports = sequelize;