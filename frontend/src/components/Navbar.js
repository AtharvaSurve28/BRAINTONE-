import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import BuildIcon from '@mui/icons-material/Build';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger Icon
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { Link, NavLink, useLocation } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

// Official Google "G" SVG Component
const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.26 1.07-3.71 1.07-2.87 0-5.3-1.94-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.86-2.59 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);

// Brand Logo Component
const BrandLogo = ({ isScrolled, isMobile = false }) => (
  <Box
    component={Link}
    to="/"
    aria-label="BRAINTONE TECHNOLOGY - Home"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMobile ? 'flex-start' : 'center', // Revert to center
      textDecoration: 'none',
      textDecoration: 'none',
      transition: 'transform 0.3s ease',
      '&:hover': { transform: 'scale(1.02)' },
      width: 'fit-content'
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 900,
        color: '#ff0000',
        lineHeight: 0.9,
        letterSpacing: '-1.5px',
        textShadow: '2px 2px 0px #000',
        fontSize: '2.2rem',
        fontFamily: "'Roboto', sans-serif",
        ml: -0.5 // Shift only the main brand name slightly left
      }}
    >
      BRAINTONE
    </Typography>
    <Typography
      sx={{
        color: 'text.primary',
        fontWeight: 600, // Slightly lighter weight for style
        fontSize: '0.55rem', // Smaller size to fit inside width
        letterSpacing: '1px', // Reduced spacing to keep it compact
        mt: 0,
        lineHeight: 1,
        textTransform: 'uppercase',
        width: '100%',
        textAlign: isMobile ? 'left' : 'center', // Revert to center
        whiteSpace: 'nowrap'
      }}
    >
      TECHNOLOGY PVT. LTD.
    </Typography>
    <Typography
      sx={{
        color: 'text.secondary',
        fontWeight: 600,
        fontSize: '0.58rem',
        mt: 0.3,
        lineHeight: 1,
        width: '100%',
        textAlign: isMobile ? 'left' : 'center', // Revert to center
        whiteSpace: 'nowrap'
      }}
    >
      Multibranded Authorised Laptop Showroom
    </Typography>
  </Box>
);

export default function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  // Media query: true if screen width is less than 'md' (900px default)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [accessoriesAnchorEl, setAccessoriesAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile Drawer State
  const [servicesExpanded, setServicesExpanded] = useState(false); // Mobile Services Accordion state
  const [accessoriesExpanded, setAccessoriesExpanded] = useState(false); // Mobile Accessories Accordion state

  const servicesOpen = Boolean(servicesAnchorEl);
  const accessoriesOpen = Boolean(accessoriesAnchorEl);

  const isServicesActive = ['/laptops', '/services/refurbished-laptops', '/repair'].includes(location.pathname);
  const isAccessoriesActive = ['/accessories', '/mac-accessories'].includes(location.pathname);

  const socialLinks = {
    google: 'https://www.google.com/search?sca_esv=73a4869cd1a8b769&sxsrf=ANbL-n53pO9e7AARfsxU7U2lxF7vyY211A:1770028042373&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOb5BDM1sSnLuU9e_HlP3noJVzWMCW30sCXPvRZQ5-6Fe6oNwo6e5A8xVAwRMb3s6rhY32Tl5ZoFC_HTkjQUUAdOm85rbyv1UD6LXGo5M22zpUGUBUw%3D%3D&q=Braintone+Technology+Pvt+Ltd+Reviews&sa=X&ved=2ahUKEwij39SlzLqSAxU9TGwGHY0OIcsQ0bkNegQIIhAF&biw=1536&bih=737&dpr=2.5&aic=0',
    instagram: 'https://www.instagram.com/braintone.technology/',
    twitter: 'https://x.com/BraintoneL1707',
    facebook: 'https://www.facebook.com/profile.php?id=61587490744034',
    linkedin: '#',
    whatsapp: 'https://wa.me/919082014406',
  };

  const { mode, toggleTheme } = useThemeContext();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkSx = (isActive) => ({
    color: isActive ? theme.palette.brandRed.main : theme.palette.text.primary,
    fontWeight: 700,
    fontSize: '0.85rem',
    letterSpacing: '0.5px',
    px: 2,
    py: 2,
    borderRadius: 0,
    position: 'relative',
    transition: 'color 0.3s ease',
    '&:hover': { color: theme.palette.brandRed.main, backgroundColor: 'transparent' },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '15%',
      width: isActive ? '70%' : '0%',
      height: '3px',
      backgroundColor: '#e74c3c',
      transition: 'width 0.3s ease',
    },
    '&:hover::after': { width: '70%' }
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // --- MOBILE DRAWER CONTENT ---
  const drawerContent = (
    <Box sx={{ width: 280, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid divider' }}>
        <BrandLogo isMobile={true} />
      </Box>

      {/* Drawer Links */}
      <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/" onClick={handleDrawerToggle} selected={location.pathname === '/'}>
            <ListItemText primary="HOME" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItemButton>
        </ListItem>

        {/* Services Dropdown/Accordion for Mobile */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => setServicesExpanded(!servicesExpanded)}>
            <ListItemText primary="SERVICES" primaryTypographyProps={{ fontWeight: 600 }} />
            <KeyboardArrowDownIcon sx={{ transform: servicesExpanded ? 'rotate(180deg)' : '0deg', transition: '0.3s' }} />
          </ListItemButton>
        </ListItem>

        {servicesExpanded && (
          <List component="div" disablePadding sx={{ bgcolor: 'action.hover' }}>
            <ListItemButton component={Link} to="/laptops" onClick={handleDrawerToggle} sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: 32 }}><LaptopIcon fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Brand New Laptops" />
            </ListItemButton>
            <ListItemButton component={Link} to="/services/refurbished-laptops" onClick={handleDrawerToggle} sx={{ pl: 4 }}>
              <AutorenewIcon sx={{ mr: 2, color: 'primary.main' }} />
              <ListItemText primary="Refurbished Laptops" />
            </ListItemButton>
            <ListItemButton component={Link} to="/repair" onClick={handleDrawerToggle} sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: 32 }}><BuildIcon aria-hidden="true" fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Repair Services" />
            </ListItemButton>
          </List>
        )}

        {/* Accessories Dropdown/Accordion for Mobile */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => setAccessoriesExpanded(!accessoriesExpanded)}>
            <ListItemText primary="ACCESSORIES" primaryTypographyProps={{ fontWeight: 600 }} />
            <KeyboardArrowDownIcon sx={{ transform: accessoriesExpanded ? 'rotate(180deg)' : '0deg', transition: '0.3s' }} />
          </ListItemButton>
        </ListItem>

        {accessoriesExpanded && (
          <List component="div" disablePadding sx={{ bgcolor: 'action.hover' }}>
            <ListItemButton component={Link} to="/accessories" onClick={handleDrawerToggle} sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: 32 }}><LaptopIcon aria-hidden="true" fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="All Laptop Accessories" />
            </ListItemButton>
            <ListItemButton component={Link} to="/mac-accessories" onClick={handleDrawerToggle} sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box
                  component="img"
                  src="/images/brand-logos/apple-icon.png"
                  alt="Apple"
                  sx={{ width: 18, height: 18, objectFit: 'contain', filter: mode === 'dark' ? 'invert(1)' : 'none' }}
                />
              </ListItemIcon>
              <ListItemText primary="Mac Accessories" />
            </ListItemButton>
          </List>
        )}
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/ewaste" onClick={handleDrawerToggle} selected={location.pathname === '/ewaste'}>
            <ListItemText primary="E-WASTE" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/events" onClick={handleDrawerToggle} selected={location.pathname === '/events'}>
            <ListItemText primary="EVENTS" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/about" onClick={handleDrawerToggle} selected={location.pathname === '/about'}>
            <ListItemText primary="ABOUT US" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/contact" onClick={handleDrawerToggle} selected={location.pathname === '/contact'}>
            <ListItemText primary="CONTACT" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItemButton>
        </ListItem>
      </List>

      {/* Drawer Footer Info */}
      <Box sx={{ p: 2, bgcolor: 'background.paper', borderTop: '1px solid divider' }}>
        <Stack spacing={2}>
          <Button
            variant="outlined"
            href={socialLinks.google}
            target="_blank"
            fullWidth
            startIcon={<GoogleG />}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              color: 'text.primary',
              borderColor: 'divider',
              '&:hover': {
                borderColor: '#0077b5',
                color: '#0077b5',
                bgcolor: 'action.hover'
              }
            }}
          >
            Google Reviews
          </Button>
          <Stack direction="row" spacing={1} justifyContent="center" aria-label="Social links">
            <IconButton size="small" href={socialLinks.facebook} target="_blank" aria-label="Facebook" sx={{ color: 'text.primary' }}><FacebookIcon /></IconButton>
            <IconButton size="small" href={socialLinks.instagram} target="_blank" aria-label="Instagram" sx={{ color: 'text.primary' }}><InstagramIcon /></IconButton>
            <IconButton size="small" href={socialLinks.twitter} target="_blank" aria-label="Twitter" sx={{ color: 'text.primary' }}><TwitterIcon /></IconButton>
            <IconButton size="small" href={socialLinks.linkedin} target="_blank" aria-label="LinkedIn" sx={{ color: 'text.primary' }}><LinkedInIcon /></IconButton>
            <IconButton size="small" href={socialLinks.whatsapp} target="_blank" aria-label="WhatsApp" sx={{ color: 'text.primary' }}><WhatsAppIcon /></IconButton>
          </Stack>

          {/* Contact Info in Drawer */}
          <Stack spacing={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon fontSize="small" sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ color: 'text.primary' }}>+91 9820119113 / +91 9819401313</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <AccessTimeIcon fontSize="small" sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ color: 'text.primary' }}>Mon-Sat: 11am-7pm</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.appBar + 2, // Ensure Navbar is always on top (including of Drawer backdrop)
        transform: isScrolled ? 'translateY(-5px)' : 'translateY(0px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* --- TOP BAR (Desktop Only) --- */}
      {!isMobile && (
        <Box sx={{
          py: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: isScrolled
            ? (theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.85)')
            : 'background.default',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.4s ease',
        }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ ml: { xs: 0, md: -10 } }}> {/* Shifted more left */}
                <BrandLogo isScrolled={isScrolled} />
              </Box>

              <Stack direction="row" spacing={3} alignItems="center" sx={{ ml: 'auto', mr: { xs: 0, md: -6 } }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box sx={{ bgcolor: 'action.hover', p: 1, borderRadius: '50%', display: 'flex' }}>
                    <PhoneIcon sx={{ color: 'brandRed.main', fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: 'brandRed.main', mb: -0.5 }}>CALL US</Typography>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'text.primary' }}>+91 9820119113</Typography>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'text.primary' }}>+91 9819401313</Typography>
                  </Box>
                </Stack>

                <Divider orientation="vertical" flexItem sx={{ height: 40, alignSelf: 'center', borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

                <Stack direction="row" spacing={1} alignItems="center">
                  <AccessTimeIcon aria-hidden="true" sx={{ color: 'brandRed.main', fontSize: 18 }} />
                  <Box>
                    <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: 'brandRed.main' }}>FORT STORE</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>Mon-Sat: 11am-7pm</Typography>
                  </Box>
                </Stack>

                <Divider orientation="vertical" flexItem sx={{ height: 40, alignSelf: 'center', borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

                <Stack direction="row" spacing={1} alignItems="center">
                  <AccessTimeIcon aria-hidden="true" sx={{ color: 'brandRed.main', fontSize: 18 }} />
                  <Box>
                    <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: 'brandRed.main' }}>VILE PARLE STORE</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>Mon-Sun: 11am-7pm</Typography>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Container>
        </Box>
      )}

      {/* --- MAIN NAV --- */}
      <AppBar
        position="static"
        elevation={isScrolled ? 4 : 0}
        sx={{
          bgcolor: isScrolled
            ? (theme.palette.mode === 'dark' ? 'rgba(30, 30, 30, 0.85)' : 'rgba(255, 255, 255, 0.75)')
            : 'background.paper',
          backdropFilter: isScrolled ? 'blur(15px)' : 'none',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          transition: 'all 0.4s ease',
          padding: isMobile ? 1 : 0, // Padding for mobile
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: '60px !important' }}>

            {/* Mobile: Logo + Hamburger */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Box>
                  <BrandLogo isMobile={true} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton
                    onClick={toggleTheme}
                    sx={{ color: mode === 'dark' ? '#ffcc00' : '#555' }}
                    aria-label="Toggle theme"
                  >
                    {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                  <IconButton
                    onClick={handleDrawerToggle}
                    aria-label="Toggle Navigation"
                    sx={{
                      width: 40,
                      height: 40,
                      color: 'text.primary',
                      zIndex: theme.zIndex.appBar + 3,
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 18,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        '& span': {
                          display: 'block',
                          width: '100%',
                          height: '2px',
                          bgcolor: mobileOpen ? '#e74c3c' : 'text.primary',
                          borderRadius: '2px',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          transformOrigin: 'left center',
                        },
                        '& span:nth-of-type(1)': {
                          transform: mobileOpen ? 'rotate(45deg) translate(2px, -2px)' : 'none',
                        },
                        '& span:nth-of-type(2)': {
                          opacity: mobileOpen ? 0 : 1,
                          width: mobileOpen ? 0 : '100%',
                        },
                        '& span:nth-of-type(3)': {
                          transform: mobileOpen ? 'rotate(-45deg) translate(2px, 2px)' : 'none',
                        },
                      }}
                    >
                      <span />
                      <span />
                      <span />
                    </Box>
                  </IconButton>
                </Box>
              </Box>
            )}

            {/* Desktop: Full Menu */}
            {!isMobile && (
              <>
                <Box sx={{ display: 'flex', flexGrow: 1, ml: { xs: 0, sm: -6, md: -12 } }}> {/* Shifted more left */}
                  <Button component={NavLink} to="/" end sx={navLinkSx(location.pathname === '/')}>HOME</Button>
                  <Box
                    onMouseEnter={(e) => setServicesAnchorEl(e.currentTarget)}
                    onMouseLeave={() => setServicesAnchorEl(null)}
                    sx={{ display: 'flex' }}
                  >
                    <Button
                      endIcon={<KeyboardArrowDownIcon sx={{ transition: '0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'none' }} />}
                      sx={navLinkSx(isServicesActive)}
                    >
                      SERVICES
                    </Button>
                    <Menu
                      anchorEl={servicesAnchorEl}
                      open={servicesOpen}
                      onClose={() => setServicesAnchorEl(null)}
                      transitionDuration={100}
                      disableScrollLock
                      disableRestoreFocus
                      sx={{ pointerEvents: 'none', mt: '2px' }}
                      PaperProps={{
                        onMouseEnter: () => setServicesAnchorEl(servicesAnchorEl),
                        onMouseLeave: () => setServicesAnchorEl(null),
                        sx: {
                          pointerEvents: 'auto',
                          minWidth: 220,
                          borderRadius: '0 0 8px 8px',
                          bgcolor: 'background.paper',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 15px 30px -5px rgba(0,0,0,0.15)',
                          border: '1px solid',
                          borderColor: 'divider'
                        }
                      }}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                      <MenuItem component={Link} to="/laptops" onClick={() => setServicesAnchorEl(null)} sx={{ py: 1.8, fontSize: '0.85rem', fontWeight: 600 }}>
                        <LaptopIcon aria-hidden="true" sx={{ mr: 1.5, fontSize: 18, color: '#e74c3c' }} /> Brand New Laptops
                      </MenuItem>
                      <MenuItem component={Link} to="/services/refurbished-laptops" onClick={() => setServicesAnchorEl(null)} sx={{ py: 1.8, fontSize: '0.85rem', fontWeight: 600 }}>
                        <AutorenewIcon aria-hidden="true" sx={{ mr: 1.5, fontSize: 18, color: '#e74c3c' }} /> Refurbished Laptops
                      </MenuItem>
                      <MenuItem component={Link} to="/repair" onClick={() => setServicesAnchorEl(null)} sx={{ py: 1.8, fontSize: '0.85rem', fontWeight: 600 }}>
                        <BuildIcon aria-hidden="true" sx={{ mr: 1.5, fontSize: 18, color: '#e74c3c' }} /> Repair Services
                      </MenuItem>
                    </Menu>
                  </Box>
                  <Box
                    onMouseEnter={(e) => setAccessoriesAnchorEl(e.currentTarget)}
                    onMouseLeave={() => setAccessoriesAnchorEl(null)}
                    sx={{ display: 'flex' }}
                  >
                    <Button
                      endIcon={<KeyboardArrowDownIcon sx={{ transition: '0.2s', transform: accessoriesOpen ? 'rotate(180deg)' : 'none' }} />}
                      sx={navLinkSx(isAccessoriesActive)}
                    >
                      ACCESSORIES
                    </Button>
                    <Menu
                      anchorEl={accessoriesAnchorEl}
                      open={accessoriesOpen}
                      onClose={() => setAccessoriesAnchorEl(null)}
                      transitionDuration={100}
                      disableScrollLock
                      disableRestoreFocus
                      sx={{ pointerEvents: 'none', mt: '-5px' }}
                      PaperProps={{
                        onMouseEnter: () => setAccessoriesAnchorEl(accessoriesAnchorEl),
                        onMouseLeave: () => setAccessoriesAnchorEl(null),
                        sx: {
                          pointerEvents: 'auto',
                          minWidth: 240,
                          borderRadius: '0 0 8px 8px',
                          bgcolor: 'background.paper',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 15px 30px -5px rgba(0,0,0,0.15)',
                          border: '1px solid',
                          borderColor: 'divider'
                        }
                      }}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                      <MenuItem component={Link} to="/accessories" onClick={() => setAccessoriesAnchorEl(null)} sx={{ py: 1.8, fontSize: '0.85rem', fontWeight: 600 }}>
                        <LaptopIcon sx={{ mr: 1.5, fontSize: 18, color: '#e74c3c' }} /> All Laptop Accessories
                      </MenuItem>
                      <MenuItem component={Link} to="/mac-accessories" onClick={() => setAccessoriesAnchorEl(null)} sx={{ py: 1.8, fontSize: '0.85rem', fontWeight: 600 }}>
                        <Box
                          component="img"
                          src="/images/brand-logos/apple-icon.png"
                          alt="Apple"
                          sx={{ mr: 1.5, width: 18, height: 18, objectFit: 'contain', mt: -0.2 }}
                        />
                        Mac Accessories
                      </MenuItem>
                    </Menu>
                  </Box>
                  <Button component={NavLink} to="/ewaste" sx={navLinkSx(location.pathname === '/ewaste')}>E-WASTE</Button>
                  <Button component={NavLink} to="/events" sx={navLinkSx(location.pathname === '/events')}>EVENTS</Button>
                  <Button component={NavLink} to="/about" sx={navLinkSx(location.pathname === '/about')}>ABOUT US</Button>
                  <Button component={NavLink} to="/contact" sx={navLinkSx(location.pathname === '/contact')}>CONTACT</Button>
                </Box>

                <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 'auto', mr: { xs: 0, md: -7 } }}>
                  <Button
                    variant="outlined"
                    href={socialLinks.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GoogleG />}
                    sx={{
                      borderRadius: '8px',
                      px: 1.5,
                      py: 0.6,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      borderColor: 'divider',
                      color: 'text.primary',
                      backgroundColor: 'background.paper',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#0077b5',
                        color: '#0077b5',
                        backgroundColor: 'background.paper',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      }
                    }}
                  >
                    Google Reviews
                  </Button>

                  <IconButton size="small" href={socialLinks.facebook} target="_blank" aria-label="Facebook" sx={{ color: 'text.primary', '&:hover': { color: '#4267B2', transform: 'scale(1.1)' }, transition: '0.2s' }}>
                    <FacebookIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" href={socialLinks.instagram} target="_blank" aria-label="Instagram" sx={{ color: 'text.primary', '&:hover': { color: '#E4405F', transform: 'scale(1.1)' }, transition: '0.2s' }}>
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" href={socialLinks.twitter} target="_blank" aria-label="Twitter" sx={{ color: 'text.primary', '&:hover': { color: '#000', transform: 'scale(1.1)' }, transition: '0.2s' }}>
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" href={socialLinks.linkedin} target="_blank" aria-label="LinkedIn" sx={{ color: 'text.primary', '&:hover': { color: '#0077b5', transform: 'scale(1.1)' }, transition: '0.2s' }}>
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" href={socialLinks.whatsapp} target="_blank" aria-label="WhatsApp" sx={{ color: theme.palette.text.primary, '&:hover': { color: '#25D366', transform: 'scale(1.1)' }, transition: '0.2s' }}>
                    <WhatsAppIcon fontSize="small" />
                  </IconButton>

                  <Divider orientation="vertical" flexItem sx={{ height: 24, alignSelf: 'center', mx: 1, borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

                  <IconButton onClick={toggleTheme} color="inherit" id="dark-mode-toggle">
                    {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Stack>
              </>
            )}

          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawerContent}
      </Drawer>

    </Box>
  );
}