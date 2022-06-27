({
  access: 'public',
  method: async (id, delta) =>
    await domain.applicationAccount.update(id, delta),
});
