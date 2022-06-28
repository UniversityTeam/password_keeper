({
  get: async (accountId, fields = ['*']) =>
    await db.pg.row('Account', fields, { accountId }),

  create: async (data) => {
    const {
      rows: [{ accountId }],
    } = await db.pg.insert('Account', data).returning(['accountId']);
    return accountId;
  },

  update: async (accountId, delta) =>
    db.pg.update('Account', delta, { accountId }),

  delete: async (accountId) => await db.pg.delete('Account', { accountId }),

  find: async (conditions = {}, fields = ['*']) =>
    await db.pg.select('Account', fields, conditions),
});
