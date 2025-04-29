import React, { useEffect, useState } from 'react';
import { supabase } from '../Component/supabaseClient';

const SupabaseStatusChecker: React.FC = () => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking');

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { error } = await supabase.auth.getSession();
        if (error) {
          setStatus('error');
          console.error('❌ Supabase connection error:', error.message);
        } else {
          setStatus('connected');
          console.log('✅ Supabase connection successful');
        }
      } catch (err) {
        setStatus('error');
        console.error('❌ Error saat connect ke Supabase:', err);
      }

      const { data, error } = await supabase.from('User').select('*');

      if (error) {
        console.error('Error fetch data:', error.message);
      } else {
        console.log('Data dari Supabase:', data);
      }
    };

    checkConnection();
  }, []);

  const renderStatus = () => {
    switch (status) {
      case 'checking':
        return '🔄 Mengecek koneksi ke Supabase...';
      case 'connected':
        return '✅ Terhubung ke Supabase';
      case 'error':
        return '❌ Gagal koneksi ke Supabase';
    }
  };

  return (
    <div style={{ padding: '10px', fontSize: '14px' }}>
      <p>{renderStatus()}</p>
    </div>
  );
};

export default SupabaseStatusChecker;