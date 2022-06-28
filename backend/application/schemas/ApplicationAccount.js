({
  Entity: {},

  account: { type: 'Account', delete: 'cascade' },
  name: { type: 'string' },
  description: { type: 'string', required: false },
  accountType: {
    type: 'string',
    required: false,
    enum: ['game', 'store', 'mail', 'website', 'application'],
    default: 'application',
  },
  login: { type: 'string' },
  password: { type: 'string', note: 'Password hash' },
  //additionalField - array of objects
  // { id: string, fieldName: string, value: string }
  additionalFields: { type: 'json', required: false },
  createdAt: { type: 'datetime', default: 'now' },
  updatedAt: { type: 'datetime', default: 'now' },
});
