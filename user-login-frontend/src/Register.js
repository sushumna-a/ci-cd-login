import React, { useState } from 'react';
import { register } from './api';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(username, password);
    setMsg(res.message || 'Registration failed');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <div>{msg}</div>
    </div>
  );
}

export default Register;
