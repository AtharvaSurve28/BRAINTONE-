import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, Box, Fade } from '@mui/material';
import HomePage from './pages/HomePage';
import Laptops from './pages/Laptops';
import DynamicBrandTemplate from './components/DynamicBrandTemplate';

import SecondHand from './pages/SecondHand';
import Accessories from './pages/Accessories';
import MacAccessories from './pages/MacAccessories';
import RepairServices from './pages/RepairServices';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import EWaste from './pages/EWaste';

import ScrollToTop from './ScrollToTop';
import Navbar from './components/Navbar';
import FloatingChatButton from './components/FloatingChatButton'; // Import the new component

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import LaptopForm from './pages/admin/LaptopForm';

import './App.css';

const theme = createTheme({
  palette: {
    primary: { main: '#1565c0' },
    secondary: { main: '#26a69a' },
    background: { default: '#f4f6f8' },
  },
  typography: {
    fontFamily: 'Roboto, "Segoe UI", sans-serif',
    h3: { fontWeight: 700 },
  },
});

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Fade key={location.pathname} in timeout={350} appear>
      <Box>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/laptops" element={<Laptops />} />

          {/* Dynamic Laptop Brand Route */}
          <Route path="/laptops/:brandId" element={<DynamicBrandTemplate />} />

          <Route path="/second-hand" element={<SecondHand />} />
          <Route path="/pre-owned-laptops" element={<SecondHand />} />
          <Route path="/services/pre-owned-laptops" element={<SecondHand />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/:category" element={<Accessories />} />
          <Route path="/mac-accessories" element={<MacAccessories />} />
          <Route path="/repair" element={<RepairServices />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ewaste" element={<EWaste />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/laptops/new" element={<LaptopForm />} />
          <Route path="/admin/laptops/edit/:id" element={<LaptopForm />} />

        </Routes>
      </Box>
    </Fade>
  );
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <Box>
      {!isAdminRoute && <Navbar />}
      <ScrollToTop />
      <AnimatedRoutes />

      {/* Add Floating Chat Button to all non-admin pages */}
      {!isAdminRoute && <FloatingChatButton />}
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;