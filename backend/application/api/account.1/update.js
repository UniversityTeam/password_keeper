({
  access: 'public',
  method: async (id, delta) => await domain.account.update(id, delta),
});
