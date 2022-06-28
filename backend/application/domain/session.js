({
  get: async (token, fields = ['*']) =>
    await db.pg.row('Session', fields, { token }),

  create: async (data) => {
    const {
      rows: [{ token }],
    } = await db.pg.insert('Session', data).returning(['token']);
    return token;
  },

  update: async (token, delta) => db.pg.update('Session', delta, { token }),

  delete: async (token) => await db.pg.delete('Session', { token }),

  find: async (conditions = {}, fields = ['*']) =>
    await db.pg.select('Session', fields, conditions),
});
