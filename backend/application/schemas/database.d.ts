interface Role {
  roleId: number;
  name: string;
}

interface Account {
  accountId: number;
  login: string;
  password: string;
}

interface ApplicationAccount {
  applicationAccountId: number;
  accountId: number;
  name: string;
  description?: string;
  accountType?: string;
  login: string;
  password: string;
  additionalFields?: string;
  createdAt: string;
  updatedAt: string;
}

interface Session {
  sessionId: number;
  accountId: number;
  token: string;
  ip: string;
  data: string;
}
