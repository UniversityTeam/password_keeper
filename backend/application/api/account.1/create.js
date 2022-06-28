({
  access: 'public',
  method: async (data) => await domain.account.create(data),
});
