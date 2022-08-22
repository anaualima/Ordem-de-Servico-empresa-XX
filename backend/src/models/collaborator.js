module.exports = (sequelize, DataTypes) => {
  const Collaborator = sequelize.define("Collaborator", {
    nome: {
      allowNull: false,
      type: DataTypes.STRING
    },
    senha: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
    {
      timestamps: false,
    }
  );

  return Collaborator;
};