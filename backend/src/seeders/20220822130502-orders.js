module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Orders',
      [{
        data: '1999-01-02',
        descricao: 'demolir castelo',
        clientId: 2,
        collaboratorId: 2
      },
      {
        data: '1997-01-02',
        descricao: 'cuidar do bebê',
        clientId: 1,
        collaboratorId: 1
      },
      {
        data: '1998-11-12',
        descricao: 'fazer bolo de morango',
        clientId: 3,
        collaboratorId: 3
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
