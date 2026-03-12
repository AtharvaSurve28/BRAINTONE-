import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, Box, Fade, CircularProgress } from '@mui/material';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/Navbar';
import FloatingChatButton from './components/FloatingChatButton';
import { ThemeContextProvider } from './context/ThemeContext';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

// Lazy load page components for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const Laptops = React.lazy(() => import('./pages/Laptops'));
const DynamicBrandTemplate = React.lazy(() => import('./components/DynamicBrandTemplate'));
const SecondHand = React.lazy(() => import('./pages/SecondHand'));
const Accessories = React.lazy(() => import('./pages/Accessories'));
const MacAccessories = React.lazy(() => import('./pages/MacAccessories'));
const RepairServices = React.lazy(() => import('./pages/RepairServices'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Contact = React.lazy(() => import('./pages/Contact'));
const EWaste = React.lazy(() => import('./pages/EWaste'));
const Events = React.lazy(() => import('./pages/Events'));

// Admin Pages (Lazy Loaded)
const AdminLogin = React.lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const LaptopForm = React.lazy(() => import('./pages/admin/LaptopForm'));


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Fade key={location.pathname} in timeout={350} appear>
      <Box>
        <React.Suspense fallback={
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <CircularProgress color="primary" />
          </Box>
        }>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/laptops" element={<Laptops />} />

            {/* Dynamic Laptop Brand Route */}
            <Route path="/laptops/:brandId" element={<DynamicBrandTemplate />} />

            <Route path="/second-hand" element={<SecondHand />} />
            <Route path="/refurbished-laptops" element={<SecondHand />} />
            <Route path="/services/refurbished-laptops" element={<SecondHand />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/accessories/:category" element={<Accessories />} />
            <Route path="/mac-accessories" element={<MacAccessories />} />
            <Route path="/repair" element={<RepairServices />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/ewaste" element={<EWaste />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/laptops/new" element={<LaptopForm />} />
            <Route path="/admin/laptops/edit/:id" element={<LaptopForm />} />

          </Routes>
        </React.Suspense>
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
    <ThemeContextProvider>
      <CssBaseline />
      <Router>
        <AppContent />
        <Analytics />
      </Router>
    </ThemeContextProvider>
  );
}

export default App;