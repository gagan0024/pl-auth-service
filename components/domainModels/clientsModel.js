module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      productType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      clientSecret: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clientId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tokenExpirationTime: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      claims: {
        type: Sequelize.STRING,
        allowNull: false
      },
      algorithm: {
        type: Sequelize.STRING,
        allowNull: false
      },
      appCD: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },{
      freezeTableName: true,
      tableName: 'clients'
    });
  
    return Client;
  };
