import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const Dashboard: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUserEmail(user?.email ?? null);
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/'; // redirect ke login
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Dashboard</h2>
      {userEmail ? (
        <>
          <p>Welcome, <strong>{userEmail}</strong></p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default Dashboard;
