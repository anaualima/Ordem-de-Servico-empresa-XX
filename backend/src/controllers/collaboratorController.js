const CollaboratorService = require('../services/collaboratorService');

const create = async (req, res, next) => {
  const objCollaborator = req.body;
  try {
    const collaborator = await CollaboratorService.create(objCollaborator);
    return res.status(201).json(collaborator);
  } catch (e) {
    console.log(e);
  };
};

const getCollaborators = async (_req, res, next) => {
  try {
    const result = await CollaboratorService.getCollaborators();

    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
  };
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const objCollaborator = req.body;
  try {
    const { data, message } = await CollaboratorService.edit(objCollaborator, id)

    if (!data) return res.status(400).json({ message });

    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  };
};

const del = async (req, res, next) => {
  try {
    const { id } = req.params;
    await CollaboratorService.del(id);
    return res.status(204).json({ message: 'excluído com sucesso' });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getCollaborators,
  create,
  edit,
  del,
}