({
  access: 'public',
  method: async (id) => await domain.account.delete(id),
});
