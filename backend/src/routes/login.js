const express = require('express');

const routerLogin = express.Router();

const CollaboratorController = require('../controllers/collaboratorController');

routerLogin.post('/', CollaboratorController.login);

module.exports = {
  routerLogin,
}