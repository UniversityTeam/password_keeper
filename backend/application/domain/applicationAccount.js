({
  get: async (applicationId, fields = ['*']) =>
    await db.pg.row('ApplicationAccount', fields, { applicationId }),

  create: async (data) => {
    const {
      rows: [{ applicationAccountId }],
    } = await db.pg
      .insert('ApplicationAccount', data)
      .returning(['applicationAccountId']);
    return applicationAccountId;
  },

  update: async (applicationAccountId, delta) =>
    db.pg.update(
      'ApplicationAccount',
      { ...delta, updateAt: new Date() },
      { applicationAccountId }
    ),

  delete: async (applicationAccountId) =>
    await db.pg.delete('ApplicationAccount', { applicationAccountId }),

  find: async (conditions = {}, fields = ['*']) =>
    await db.pg.select('ApplicationAccount', fields, conditions),
});
