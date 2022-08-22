module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order",
    {
      data: {
        allowNull: false,
        type: DataTypes.DATE
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING
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