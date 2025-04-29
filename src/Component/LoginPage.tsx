import React, { useState } from 'react';
import TextInput from './TextInput';
import { supabase } from './supabaseClient';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert('Login sukses!');
      window.location.href = '/dashboard';
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email kamu"
          icon="📧"
          error={error?.toLowerCase().includes('email') ? error : ''}
        />

        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
          icon="🔒"
          error={error?.toLowerCase().includes('password') ? error : ''}
        />

        {error && !error.toLowerCase().includes('email') && !error.toLowerCase().includes('password') && (
          <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;