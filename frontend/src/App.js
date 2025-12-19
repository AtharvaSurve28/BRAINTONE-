import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import HomePage from './pages/HomePage';
import Laptops from './pages/Laptops';

// Import all brand components
import Dell from './pages/Dell';
import HP from './pages/HP';
import Lenovo from './pages/Lenovo'; // Note: Filename is Lenovo.js, not Lenevo.js
import Asus from './pages/Asus';
import Acer from './pages/Acer';
import Apple from './pages/Apple';
import Razer from './pages/Razer';
import LG from './pages/LG';
import Microsoft from './pages/Microsoft';

import SecondHand from './pages/SecondHand';
import Accessories from './pages/Accessories';
import RepairServices from './pages/RepairServices';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Laptop Brand Routes */}
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/laptops/dell" element={<Dell />} />
            <Route path="/laptops/hp" element={<HP />} />
            <Route path="/laptops/lenovo" element={<Lenovo />} />
            <Route path="/laptops/asus" element={<Asus />} />
            <Route path="/laptops/acer" element={<Acer />} />
            <Route path="/laptops/apple" element={<Apple />} />
            <Route path="/laptops/razer" element={<Razer />} />
            <Route path="/laptops/lg" element={<LG />} />
            <Route path="/laptops/microsoft" element={<Microsoft />} />
            
            {/* Other Routes */}
            <Route path="/second-hand" element={<SecondHand />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/repair" element={<RepairServices />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
