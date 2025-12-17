import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import HomePage from './pages/HomePage';
import Laptops from './pages/Laptops';
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
            <Route path="/laptops" element={<Laptops />} />
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
