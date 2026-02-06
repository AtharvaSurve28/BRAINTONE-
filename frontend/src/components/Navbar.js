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
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger Icon
import CloseIcon from '@mui/icons-material/Close';

import { Link, NavLink, useLocation } from 'react-router-dom';

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
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMobile ? 'flex-start' : 'center',
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
        color: '#000',
        fontWeight: 700,
        fontSize: '0.62rem',
        letterSpacing: '3.5px',
        mt: 0.5,
        lineHeight: 1,
        textTransform: 'uppercase',
        width: '100%',
        textAlign: isMobile ? 'left' : 'center',
        whiteSpace: 'nowrap'
      }}
    >
      TECHNOLOGY PVT. LTD.
    </Typography>
    <Typography
      sx={{
        color: '#444',
        fontWeight: 600,
        fontSize: '0.58rem',
        mt: 0.3,
        lineHeight: 1,
        width: '100%',
        textAlign: isMobile ? 'left' : 'center',
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

  const isServicesActive = ['/laptops', '/services/pre-owned-laptops', '/repair'].includes(location.pathname);
  const isAccessoriesActive = ['/accessories', '/mac-accessories'].includes(location.pathname);

  const socialLinks = {
    google: 'https://www.google.com/search?sca_esv=73a4869cd1a8b769&sxsrf=ANbL-n53pO9e7AARfsxU7U2lxF7vyY211A:1770028042373&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOb5BDM1sSnLuU9e_HlP3noJVzWMCW30sCXPvRZQ5-6Fe6oNwo6e5A8xVAwRMb3s6rhY32Tl5ZoFC_HTkjQUUAdOm85rbyv1UD6LXGo5M22zpUGUBUw%3D%3D&q=Braintone+Technology+Pvt+Ltd+Reviews&sa=X&ved=2ahUKEwij39SlzLqSAxU9TGwGHY0OIcsQ0bkNegQIIhAF&biw=1536&bih=737&dpr=2.5&aic=0',
    instagram: 'https://www.instagram.com/braintone.technology/',
    twitter: 'https://x.com/BraintoneL1707',
    linkedin: '#',
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkSx = (isActive) => ({
    color: isActive ? '#e74c3c' : '#111',
    fontWeight: 700,
    fontSize: '0.85rem',
    letterSpacing: '0.5px',
    px: 2,
    py: 2,
    borderRadius: 0,
    position: 'relative',
    transition: 'color 0.3s ease',
    '&:hover': { color: '#e74c3c', backgroundColor: 'transparent' },
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
      {/* Drawer Header */}
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee' }}>
        <BrandLogo isMobile={true} />
        {/* Removed redundant CloseIcon here as it's now handled by the main toggle button */}
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
          <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
            <ListItemButton component={Link} to="/laptops" onClick={handleDrawerToggle} sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: 32 }}><LaptopIcon fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="New Laptops" />
            </ListItemButton>
            <ListItemButton component={Link} to="/services/pre-owned-laptops" onClick={handleDrawerToggle} sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: 32 }}><AutorenewIcon fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Pre-Owned Laptops" />
            </ListItemButton>
            <ListItemButton component={Link} to="/repair" onClick={handleDrawerToggle} sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: 32 }}><BuildIcon fontSize="small" color="primary" /></ListItemIcon>
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
          <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
            <ListItemButton component={Link} to="/accessories" onClick={handleDrawerToggle} sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: 32 }}><LaptopIcon fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="All Laptop Accessories" />
            </ListItemButton>
            <ListItemButton component={Link} to="/mac-accessories" onClick={handleDrawerToggle} sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box
                  component="img"
                  src="/images/brand-logos/apple-icon.png"
                  alt="Apple"
                  sx={{ width: 18, height: 18, objectFit: 'contain' }}
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
      <Box sx={{ p: 2, bgcolor: '#f9f9f9', borderTop: '1px solid #eee' }}>
        <Stack spacing={2}>
          <Button
            variant="outlined"
            href={socialLinks.google}
            target="_blank"
            fullWidth
            startIcon={<GoogleG />}
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            Google Reviews
          </Button>
          <Stack direction="row" spacing={1} justifyContent="center">
            <IconButton size="small" href={socialLinks.instagram} target="_blank"><InstagramIcon /></IconButton>
            <IconButton size="small" href={socialLinks.twitter} target="_blank"><TwitterIcon /></IconButton>
            <IconButton size="small" href={socialLinks.linkedin} target="_blank"><LinkedInIcon /></IconButton>
          </Stack>

          {/* Contact Info in Drawer */}
          <Stack spacing={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon fontSize="small" color="action" />
              <Typography variant="body2">9821212912 / 9892001640</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <AccessTimeIcon fontSize="small" color="action" />
              <Typography variant="body2">Mon-Sat: 11am-7pm</Typography>
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
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : '#ffffff',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease',
        }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ ml: { xs: 0, md: -6 } }}>
                <BrandLogo isScrolled={isScrolled} />
              </Box>

              <Stack direction="row" spacing={3} alignItems="center">
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box sx={{ bgcolor: '#fff5f5', p: 1, borderRadius: '50%', display: 'flex' }}>
                    <PhoneIcon sx={{ color: '#e74c3c', fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: '#e74c3c', mb: -0.5 }}>CALL US</Typography>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>81697 98826</Typography>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>90366 51639</Typography>
                  </Box>
                </Stack>

                <Divider orientation="vertical" flexItem sx={{ height: 40, alignSelf: 'center', borderColor: 'rgba(0,0,0,0.1)' }} />

                <Stack direction="row" spacing={1} alignItems="center">
                  <AccessTimeIcon sx={{ color: '#e74c3c', fontSize: 18 }} />
                  <Box>
                    <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: '#e74c3c' }}>FORT STORE</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: '#444' }}>Mon-Sat: 11am-7pm</Typography>
                  </Box>
                </Stack>

                <Divider orientation="vertical" flexItem sx={{ height: 40, alignSelf: 'center', borderColor: 'rgba(0,0,0,0.1)' }} />

                <Stack direction="row" spacing={1} alignItems="center">
                  <AccessTimeIcon sx={{ color: '#e74c3c', fontSize: 18 }} />
                  <Box>
                    <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: '#e74c3c' }}>VILE PARLE STORE</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: '#444' }}>Mon-Sun: 11am-7pm</Typography>
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
          bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.75)' : '#ffffff',
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
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    color: mobileOpen ? '#e74c3c' : '#333',
                    transition: 'all 0.3s ease',
                    zIndex: theme.zIndex.appBar + 3,
                    position: 'relative',
                  }}
                >
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </Box>
            )}

            {/* Desktop: Full Menu */}
            {!isMobile && (
              <>
                <Box sx={{ display: 'flex', flexGrow: 1, ml: { xs: 0, sm: -4, md: -8 } }}>
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
                          bgcolor: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 15px 30px -5px rgba(0,0,0,0.15)',
                          border: '1px solid rgba(0,0,0,0.05)'
                        }
                      }}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                      <MenuItem component={Link} to="/laptops" onClick={() => setServicesAnchorEl(null)} sx={{ py: 1.8, fontSize: '0.85rem', fontWeight: 600 }}>
                        <LaptopIcon sx={{ mr: 1.5, fontSize: 18, color: '#e74c3c' }} /> New Laptops
                      </MenuItem>
                      <MenuItem component={Link} to="/services/pre-owned-laptops" onClick={() => setServicesAnchorEl(null)} sx={{ py: 1.8, fontSize: '0.85rem', fontWeight: 600 }}>
                        <AutorenewIcon sx={{ mr: 1.5, fontSize: 18, color: '#e74c3c' }} /> Pre-Owned Laptops
                      </MenuItem>
                      <MenuItem component={Link} to="/repair" onClick={() => setServicesAnchorEl(null)} sx={{ py: 1.8, fontSize: '0.85rem', fontWeight: 600 }}>
                        <BuildIcon sx={{ mr: 1.5, fontSize: 18, color: '#e74c3c' }} /> Repair Services
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
                          bgcolor: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 15px 30px -5px rgba(0,0,0,0.15)',
                          border: '1px solid rgba(0,0,0,0.05)'
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
                  <Button component={NavLink} to="/about" sx={navLinkSx(location.pathname === '/about')}>ABOUT US</Button>
                  <Button component={NavLink} to="/contact" sx={navLinkSx(location.pathname === '/contact')}>CONTACT</Button>
                </Box>

                <Stack direction="row" spacing={1} alignItems="center">
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
                      borderColor: 'rgba(0,0,0,0.15)',
                      color: '#3c4043',
                      backgroundColor: '#ffffff',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#4285F4',
                        color: '#4285F4',
                        backgroundColor: '#ffffff',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(66, 133, 244, 0.1)',
                      }
                    }}
                  >
                    Google Reviews
                  </Button>

                  <IconButton size="small" href={socialLinks.instagram} target="_blank" sx={{ color: '#333', '&:hover': { color: '#E4405F', transform: 'scale(1.1)' }, transition: '0.2s' }}>
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" href={socialLinks.twitter} target="_blank" sx={{ color: '#333', '&:hover': { color: '#000', transform: 'scale(1.1)' }, transition: '0.2s' }}>
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" href={socialLinks.linkedin} target="_blank" sx={{ color: '#333', '&:hover': { color: '#0077b5', transform: 'scale(1.1)' }, transition: '0.2s' }}>
                    <LinkedInIcon fontSize="small" />
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