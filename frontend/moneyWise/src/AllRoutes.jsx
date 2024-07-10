import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/Login';
import Dashboard from './pages/Dashboard';
import SidebarWithHeader from './components/Sidebar';
import Budget from './pages/Budget';

const AllRoutes = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    <div>
      {showNavbar && <SidebarWithHeader />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
