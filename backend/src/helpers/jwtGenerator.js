const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET;

module.exports = {
  signJwt: (payload) => jwt.sign({ data: payload }, SECRET, jwtConfig),
  verifyJwt: (payload) => jwt.verify(payload, SECRET),
};