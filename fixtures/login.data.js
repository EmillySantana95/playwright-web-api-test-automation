const validUser = {
  email: 'tomsmith',
  password: 'SuperSecretPassword!'
};

const invalidEmailUser = {
  email: 'email_invalido',
  password: 'SuperSecretPassword!'
};

const invalidPasswordUser = {
  email: 'tomsmith',
  password: 'senha_errada'
};

module.exports = {
  validUser,
  invalidEmailUser,
  invalidPasswordUser
};
