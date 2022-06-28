({
  access: 'public',
  method: async (condition, fields) =>
    await domain.account.find(condition, fields),
});
