const ClientService = require('../services/clientService');

const create = async (req, res, next) => {
  const objClient = req.body;
  try {
    const client = await ClientService.create(objClient);
    return res.status(201).json(client);
  } catch (e) {
    console.log(e);
  };
};

const getAll = async (_req, res, next) => {
  try {
    const result = await ClientService.getAll();

    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
  };
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const objClient = req.body;
  try {
    const { data, message } = await ClientService.edit(objClient, id)

    if (!data) return res.status(400).json({ message });

    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  };
};

const del = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ClientService.del(id);
    return res.status(204).json({ message: 'excluído com sucesso' });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAll,
  create,
  edit,
  del,
}