({
  access: 'public',
  method: async (data) => await domain.applicationAccount.create(data),
});
