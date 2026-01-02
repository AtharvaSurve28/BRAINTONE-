import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, Box, Fade } from '@mui/material';
import HomePage from './pages/HomePage';
import Laptops from './pages/Laptops';

// Import all brand components
import Dell from './pages/Dell';
import HP from './pages/HP';
import Lenovo from './pages/Lenovo';
import Asus from './pages/Asus';
import Acer from './pages/Acer';
import Apple from './pages/Apple';
// Removed Razer and LG imports
import MSI from './pages/MSI'; // New import
import Samsung from './pages/Samsung'; // New import
import Microsoft from './pages/Microsoft';

import SecondHand from './pages/SecondHand';
import Accessories from './pages/Accessories';
import RepairServices from './pages/RepairServices';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/Navbar';

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
          
          {/* Laptop Brand Routes */}
          <Route path="/laptops/dell" element={<Dell />} />
          <Route path="/laptops/hp" element={<HP />} />
          <Route path="/laptops/lenovo" element={<Lenovo />} />
          <Route path="/laptops/asus" element={<Asus />} />
          <Route path="/laptops/acer" element={<Acer />} />
          <Route path="/laptops/apple" element={<Apple />} />
          {/* Removed Razer and LG routes */}
          <Route path="/laptops/msi" element={<MSI />} /> {/* New route */}
          <Route path="/laptops/samsung" element={<Samsung />} /> {/* New route */}
          <Route path="/laptops/microsoft" element={<Microsoft />} />
          
          <Route path="/second-hand" element={<SecondHand />} />
          <Route path="/pre-owned-laptops" element={<SecondHand />} />
          <Route path="/services/pre-owned-laptops" element={<SecondHand />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/:category" element={<Accessories />} />
          <Route path="/repair" element={<RepairServices />} />
          <Route path="/about" element={<AboutUs />} />
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
