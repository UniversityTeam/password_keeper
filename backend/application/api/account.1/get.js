({
  access: 'public',
  method: async (accountId, fields) =>
    await domain.account.get(accountId, fields),
});
