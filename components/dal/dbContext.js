const Sequelize = require("sequelize");
const config = require('../../config/config.js');

const sequelize = new Sequelize(gConfig.database, gConfig.db_userid, gConfig.db_password, {
  host: gConfig.dbserver,
  dialect: gConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: parseInt(gConfig.db_maxpool),
    min:parseInt(gConfig.db_minpool),
    acquire: parseInt(gConfig.db_acquire),
    idle: parseInt(gConfig.db_idle)
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("../domainModels/usersModel.js")(sequelize, Sequelize);
db.clients = require("../domainModels/clientsModel.js")(sequelize, Sequelize);



module.exports = db;