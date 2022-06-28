({
  access: 'public',
  method: async (id) => await domain.applicationAccount.delete(id),
});
