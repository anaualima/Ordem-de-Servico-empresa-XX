module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Collaborators',
      [{
        nome: 'Yoshi',
        email: 'yoshi@email.com',
        senha: 'yoshi123',
      },
      {
        nome: 'Bowser',
        email: 'bowser@email.com',
        senha: 'bowser123',
      },
      {
        nome: 'Peach',
        email: 'peach@email.com',
        senha: 'peach123',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Collaborators', null, {});
  },
};