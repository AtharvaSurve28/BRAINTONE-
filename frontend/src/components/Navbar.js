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
} from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import LaptopIcon from '@mui/icons-material/Laptop';
import BuildIcon from '@mui/icons-material/Build';
import StoreIcon from '@mui/icons-material/Store';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  // State for Services dropdown only
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
  
  const servicesOpen = Boolean(servicesAnchorEl);

  const isServicesActive =
    location.pathname === '/laptops' ||
    location.pathname === '/second-hand' ||
    location.pathname === '/pre-owned-laptops' ||
    location.pathname === '/services/pre-owned-laptops' ||
    location.pathname === '/repair';

  const isAccessoriesActive = location.pathname === '/accessories';

  const navLinkSx = (isActive) => ({
    color: isActive ? '#e74c3c' : '#2c3e50',
    fontWeight: 600,
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    px: 0,
    minWidth: 'auto',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: 0,
      width: isActive ? '100%' : '0%',
      height: '2px',
      background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
      transition: 'width 0.3s ease',
    },
    '&:hover::after': {
      width: '100%',
    },
    '&:hover': {
      color: '#e74c3c',
      backgroundColor: 'transparent',
    },
  });

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  // Services menu items
  const servicesItems = [
    { label: 'New Laptops', to: '/laptops', icon: <LaptopIcon sx={{ mr: 1, fontSize: 20 }} /> },
    { label: 'Pre-Owned Laptops', to: '/services/pre-owned-laptops', icon: <AutorenewIcon sx={{ mr: 1, fontSize: 20 }} /> },
    { label: 'Repair Services', to: '/repair', icon: <BuildIcon sx={{ mr: 1, fontSize: 20 }} /> },
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Top Contact Bar */}
      <Box
        sx={{
          bgcolor: 'white',
          py: 2,
          borderBottom: '1px solid #e0e0e0',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'linear-gradient(90deg, #fff 0%, #f8f9fa 50%, #fff 100%)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                fontWeight: 800,
                color: '#e74c3c',
                textDecoration: 'none',
                fontSize: '2rem',
                letterSpacing: '0.5px',
                background: 'linear-gradient(45deg, #e74c3c 30%, #c0392b 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              BRAINTONE
            </Typography>

            <Box sx={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: -5,
                      left: -5,
                      right: -5,
                      bottom: -5,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(231,76,60,0.1) 0%, transparent 70%)',
                      animation: 'pulse 2s infinite',
                    },
                  }}
                >
                  <PhoneIcon sx={{ color: '#e74c3c', fontSize: 22, position: 'relative', zIndex: 1 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>
                    Call Us
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.9rem', color: '#666' }}>
                    9821212912 / 9892001640
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                <AccessTimeIcon sx={{ color: '#e74c3c', fontSize: 22, mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', mb: 0.3 }}>
                    Opening Hours
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '0.8rem', color: '#666', display: 'block' }}>
                    Fort Store : Mon-Sat: 11:00 - 7:00pm
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '0.8rem', color: '#666', display: 'block' }}>
                    Ville Parle Store : Mon-Sat: 11:00 - 7:00pm
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: '#fff',
          borderBottom: '1px solid #e0e0e0',
          background: 'linear-gradient(180deg, #fff 0%, #f8f9fa 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 64, justifyContent: 'space-between' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {/* Home Button */}
              <Button
                component={NavLink}
                to="/"
                end
                sx={({ isActive }) => navLinkSx(isActive)}
              >
                HOME
              </Button>

              {/* Services Dropdown */}
              <Box>
                <Button
                  onMouseEnter={handleServicesClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    ...navLinkSx(isServicesActive || servicesOpen),
                  }}
                >
                  SERVICES
                </Button>
                <Menu
                  anchorEl={servicesAnchorEl}
                  open={servicesOpen}
                  onClose={handleServicesClose}
                  MenuListProps={{ onMouseLeave: handleServicesClose }}
                  PaperProps={{
                    sx: {
                      mt: 1.5,
                      minWidth: 240,
                      borderRadius: 2,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                      border: '1px solid rgba(231, 76, 60, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ px: 2, py: 1, backgroundColor: 'rgba(231, 76, 60, 0.05)', borderBottom: '1px solid rgba(231, 76, 60, 0.1)' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#e74c3c' }}>
                      Our Services
                    </Typography>
                  </Box>
                  {servicesItems.map((item) => (
                    <MenuItem
                      key={item.to}
                      component={Link}
                      to={item.to}
                      onClick={handleServicesClose}
                      sx={{
                        py: 1.5,
                        px: 2,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(231, 76, 60, 0.08)',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      {item.icon}
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {item.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Accessories - Single Page Link */}
              <Button
                component={NavLink}
                to="/accessories"
                end
                sx={({ isActive }) => navLinkSx(isActive)}
              >
                ACCESSORIES
              </Button>

              {/* About Us */}
              <Button
                component={NavLink}
                to="/about"
                end
                sx={({ isActive }) => navLinkSx(isActive)}
              >
                ABOUT US
              </Button>

              {/* Contact */}
              <Button
                component={NavLink}
                to="/contact"
                end
                sx={({ isActive }) => navLinkSx(isActive)}
              >
                CONTACT
              </Button>
            </Box>

            <Stack direction="row" spacing={1.5}>
              <IconButton
                size="small"
                sx={{
                  color: '#555',
                  background: 'linear-gradient(135deg, #f0f0f0 0%, #fff 100%)',
                  '&:hover': {
                    color: '#e74c3c',
                    background: 'linear-gradient(135deg, #ffecec 0%, #fff 100%)',
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: '#555',
                  background: 'linear-gradient(135deg, #f0f0f0 0%, #fff 100%)',
                  '&:hover': {
                    color: '#0077b5',
                    background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: '#555',
                  background: 'linear-gradient(135deg, #f0f0f0 0%, #fff 100%)',
                  '&:hover': {
                    color: '#E4405F',
                    background: 'linear-gradient(135deg, #ffe6ee 0%, #fff 100%)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Animations used by navbar */}
      <style jsx="true">{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.5; }
        }
      `}</style>
    </Box>
  );
}

