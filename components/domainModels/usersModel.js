module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      orgId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:''
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue:null
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue:null
      },
      countryExt: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue:'91'
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:''
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue:true
      },
    },{
      freezeTableName: true,
      tableName: 'users'
    });
  
    return User;
  };
