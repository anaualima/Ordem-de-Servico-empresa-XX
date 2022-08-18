module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Client", {
    nome: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
    {
      timestamps: false,
    }
  );

  return Task;
};