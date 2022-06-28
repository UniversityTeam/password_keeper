({
  get: async (roleId, fields = ['*']) =>
    await db.pg.row('Role', fields, { roleId }),

  create: async (data) => {
    const {
      rows: [{ roleId }],
    } = await db.pg.insert('Role', data).returning(['roleId']);
    return roleId;
  },

  update: async (roleId, delta) => db.pg.update('Role', delta, { roleId }),

  delete: async (roleId) => await db.pg.delete('Role', { roleId }),

  find: async (conditions = {}, fields = ['*']) =>
    await db.pg.select('Role', fields, conditions),
});
