import React, { useState } from 'react';
import { MetaApi } from '../../api';

export const Login = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async () => {
    try {
      const api = await MetaApi.getInstance();
      const { token } = await api.auth.signin({ login, password });
      localStorage.setItem(`token`, token);
      location.href = '/';
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Page for login</h1>
        <label>
          <p>Login</p>
          <input type="text" onChange={(e) => setLogin(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button onClick={onSubmit} type="submit">Submit</button>
        </div>
    </div>
  );
};
