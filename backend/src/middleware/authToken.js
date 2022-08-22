const jwtGenerator = require('../helpers/jwtGenerator');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'token não existe' });

    const decoded = jwtGenerator.verifyJwt(token);

    if (!decoded.data) return res.status(401).json({ message: 'token inválido' });

    req.user = decoded.data;

    next();
  } catch (error) {
    if (error.name.includes('Token')) {
      return res.status(401).json({ message: 'token invalido' });
    }
    next(error);
  }
};