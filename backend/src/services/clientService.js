const { Client } = require('../models');

const create = async (objClient) => {
  const client = await Client.create(objClient);
  return client;
};

const getAll = async () => {
  const clients = await Client.findAll();

  return clients;
};

const edit = async (objClient, id) => {
  const { nome } = objClient;
  const client = await Client.update({ nome }, { where: { id } });
  if (!client) return {
    data: client,
    message: 'Este cliente não existe.'
  }
  return {
    data: client,
    message: 'Cliente editado com sucesso!'
  };
};

const del = async (id) => {
  const exclude = await Client.destroy({ where: { id } })
  return exclude;
};

module.exports = {
  create,
  getAll,
  edit,
  del
}
