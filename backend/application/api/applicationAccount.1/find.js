({
  access: 'public',
  method: async (cond, fields) =>
    await domain.applicationAccount.find(cond, fields),
});
