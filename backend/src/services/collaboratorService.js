const { Collaborator } = require('../models');
const { signJwt } = require('../helpers/jwtGenerator');

const create = async (objCollaborator) => {
  const collaborator = await Collaborator.create(objCollaborator);
  return collaborator;
};

const login = async (obj) => {
  const registered = await Collaborator.findOne({ where: { email: obj.email } });

  if (!registered) return {
    data: obj,
    message: 'Email ou senha inválidos!'
  };

  const token = signJwt({
    email: obj.email,
    id: registered.id,
  });

  return {
    id: registered.id, token
  };
}

const getCollaborators = async () => {
  const collaborators = await Collaborator.findAll();

  return collaborators;
};

const getById = async (id) => {
  const collaborator = await Collaborator.findByPk(id);

  if (!collaborator) return {
    data: collaborator,
    message: 'Esta tarefa ainda não existe.'
  };

  return {
    data: collaborator,
    message: 'Id encontrado!'
  };
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
  del,
  login,
  getById,
}
