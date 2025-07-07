import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <h1>User Login & Registration</h1>
      {!token ? (
        <>
          <Login setToken={setToken} />
          <Register />
        </>
      ) : (
        <Profile token={token} setToken={setToken} />
      )}
    </div>
  );
}

export default App;
