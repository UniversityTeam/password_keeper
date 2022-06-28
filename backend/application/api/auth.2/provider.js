({
  generateToken() {
    const { characters, secret, length } = config.sessions;
    return metarhia.metautil.generateToken(secret, characters, length);
  },

  saveSession: async (token, data) =>
    await domain.session.update(token, { data: JSON.stringify(data) }),

  startSession: async (token, data, fields = {}) =>
    await domain.session.create({
      token,
      data: JSON.stringify(data),
      ...fields,
    }),

  restoreSession: async (token) => {
    const record = await domain.session.get(token, ['data']);
    if (record && record.data) return record.data;
    return null;
  },

  deleteSession: async (token) => await domain.session.delete(token),

  registerUser: async (data) => await domain.account.create(data),

  getUser: async (login) => await domain.account.find({ login }),
});
