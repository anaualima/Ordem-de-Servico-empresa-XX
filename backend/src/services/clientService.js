const { Client } = require('../models');

const getAll = async () => {
  const clients = await Client.findAll();

  return clients;
};

module.exports = {
  getAll,
}