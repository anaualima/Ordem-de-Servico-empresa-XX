module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      data: {
        allowNull: false,
        type: DataTypes.DATE
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING
      },
      clientId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      collaboratorId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
      }
    },
    { timestamps: false, tableName: 'Orders' }
  );

  Order.associate = (models) => {
    models.Client.belongsToMany(models.Collaborator, {
      as: 'collaborators',
      through: Order,
      foreignKey: 'clientId',
      otherKey: 'collaboratorId',
    });
    models.Collaborator.belongsToMany(models.Client, {
      as: 'clients',
      through: Order,
      foreignKey: 'collaboratorId',
      otherKey: 'clientId',
    });
  };

  return Order;
};