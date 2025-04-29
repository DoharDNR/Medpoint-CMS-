import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Component/LoginPage';
import Dashboard from './Component/Dashboad';
import SupabaseStatusChecker from './CheckConnection/SupabaseStatusChecker';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <SupabaseStatusChecker />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;