import React, { useState } from 'react';
import { login } from './api';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(username, password);
    if (res.token) {
      setToken(res.token);
      setMsg('Login successful!');
    } else {
      setMsg(res.message || 'Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div>{msg}</div>
    </div>
  );
}

export default Login;
