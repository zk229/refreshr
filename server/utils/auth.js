const jwt = require('jsonwebtoken');

const secret = 'placeholder';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  authMiddleware: function({ req }) {
    // retrieve token
    let token = req.body || req.query.token || req.headers.authorization;

    // format if needed
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    // exit func if no token found
    if (!token) {
      return req;
    }

    // verify token
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  }
};
