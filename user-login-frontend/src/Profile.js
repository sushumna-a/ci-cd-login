import React, { useEffect, useState } from 'react';
import { getProfile } from './api';

function Profile({ token, setToken }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      const res = await getProfile(token);
      setProfile(res);
    }
    fetchProfile();
  }, [token]);

  const handleLogout = () => setToken(null);

  return (
    <div>
      <h2>Profile</h2>
      {profile ? (
        <div>
          <div>Username: {profile.username}</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Profile;
