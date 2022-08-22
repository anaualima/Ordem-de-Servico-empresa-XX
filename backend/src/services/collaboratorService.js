const { Collaborator } = require('../models');

const create = async (objCollaborator) => {
  const collaborator = await Collaborator.create(objCollaborator);
  return collaborator;
};

const getCollaborators = async () => {
  const collaborators = await Collaborator.findAll();

  return collaborators;
};

const edit = async (objCollaborator, id) => {
  const { nome, senha } = objCollaborator;
  const collaborator = await Collaborator.update({ nome, senha }, { where: { id } });
  if (!collaborator) return {
    data: collaborator,
    message: 'Este colaborador não existe.'
  }
  return {
    data: collaborator,
    message: 'Colaborador editado com sucesso!'
  };
};

const del = async (id) => {
  const exclude = await Collaborator.destroy({ where: { id } })
  return exclude;
};

module.exports = {
  create,
  getCollaborators,
  edit,
  del
}
