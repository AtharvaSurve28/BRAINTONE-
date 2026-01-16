import React from 'react';
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
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
  const servicesOpen = Boolean(servicesAnchorEl);

  const isServicesActive = ['/laptops', '/services/pre-owned-laptops', '/repair'].includes(location.pathname);

  // Social media links
  const socialLinks = {
    instagram: 'https://www.instagram.com/braintone.technology/',
    twitter: 'https://x.com/BraintoneL1707',
    linkedin: '#' // Add your LinkedIn link here when available
  };

  React.useEffect(() => {
    const handleScroll = () => {
      // Trigger motion after 50px of scrolling
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

  return (
    <Box 
      sx={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1200,
        // The "Motion": Subtle slide down/up and shadow transition
        transform: isScrolled ? 'translateY(-5px)' : 'translateY(0px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* --- TOP BAR --- */}
      <Box sx={{ 
          py: 2, 
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          // Semi-transparent background on scroll
          bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : '#ffffff',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease',
        }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h4" component={Link} to="/" sx={{
                fontWeight: 900,
                textDecoration: 'none',
                color: '#e74c3c',
                letterSpacing: '-1px'
              }}>
              BRAINTONE
            </Typography>

            <Stack direction="row" spacing={3} alignItems="center">
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ bgcolor: '#fff5f5', p: 1, borderRadius: '50%', display: 'flex' }}>
                  <PhoneIcon sx={{ color: '#e74c3c', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: '#e74c3c', mb: -0.5 }}>CALL US</Typography>
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>9821212912</Typography>
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>9892001640</Typography>
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

      {/* --- MAIN NAV --- */}
      <AppBar 
        position="static" 
        elevation={isScrolled ? 4 : 0} 
        sx={{ 
          // Transparency and Blur for the lower panel
          bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.75)' : '#ffffff',
          backdropFilter: isScrolled ? 'blur(15px)' : 'none',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          transition: 'all 0.4s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: '60px !important' }}>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
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
                  disableScrollLock
                  disableRestoreFocus
                  sx={{ pointerEvents: 'none', mt: '-5px' }}
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

              <Button component={NavLink} to="/accessories" sx={navLinkSx(location.pathname === '/accessories')}>ACCESSORIES</Button>
              <Button component={NavLink} to="/about" sx={navLinkSx(location.pathname === '/about')}>ABOUT US</Button>
              <Button component={NavLink} to="/contact" sx={navLinkSx(location.pathname === '/contact')}>CONTACT</Button>
            </Box>

            <Stack direction="row" spacing={1}>
              <IconButton 
                size="small" 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: '#333', 
                  '&:hover': { 
                    color: '#E4405F', 
                    transform: 'scale(1.1)' 
                  }, 
                  transition: '0.2s' 
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              
              <IconButton 
                size="small" 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: '#333', 
                  '&:hover': { 
                    color: '#000000', // Twitter/X black color
                    transform: 'scale(1.1)' 
                  }, 
                  transition: '0.2s' 
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              
              <IconButton 
                size="small" 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: '#333', 
                  '&:hover': { 
                    color: '#0077b5', 
                    transform: 'scale(1.1)' 
                  }, 
                  transition: '0.2s' 
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}