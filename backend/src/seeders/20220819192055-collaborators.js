module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Collaborators',
      [{
        nome: 'Yoshi',
        senha: 'yoshi123',
      },
      {
        nome: 'Bowser',
        senha: 'bowser123',
      },
      {
        nome: 'Peach',
        senha: 'peach123',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Collaborators', null, {});
  },
};