module.exports = (sequelize, DataTypes) => {
  const Collaborator = sequelize.define("Collborator", {
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