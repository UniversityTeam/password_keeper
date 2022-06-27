({
  access: 'public',
  method: async (byField, fields) =>
    await domain.applicationAccount.get(byField, fields),
});
