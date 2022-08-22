const express = require('express');

const routerCollaborator = express.Router();
const CollaboratorController = require('../controllers/collaboratorController');

routerCollaborator.get('/', CollaboratorController.getCollaborators);
routerCollaborator.post('/', CollaboratorController.create);
routerCollaborator.put('/:id', CollaboratorController.edit);
routerCollaborator.delete('/:id', CollaboratorController.del);

module.exports = {
  routerCollaborator,
}