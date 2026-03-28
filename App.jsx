
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';

// Pages
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Services from './Services';
import Equipments from './Equipments';
import NotFound from './NotFound';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className='flex h-screen items-center justify-center font-black text-2xl'>AR LOADING...</div>;
  if (!user) return <Navigate to='/login' />;
  if (adminOnly && !user.isAdmin) return <Navigate to='/' />;

  return children;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/services' element={<Services />} />
          <Route path='/equipments' element={<Equipments />} />

          {/* Admin Routes */}
          <Route
            path='/admin'
            element={
              <ProtectedRoute adminOnly>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
