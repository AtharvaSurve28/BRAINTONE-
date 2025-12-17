import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
  Grid,
  Paper,
  Divider,
  IconButton,
  Card,
  Menu,
  MenuItem,
  Popover,
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupIcon from '@mui/icons-material/Group';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChatIcon from '@mui/icons-material/Chat';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // State for Services dropdown
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
  const [accessoriesAnchorEl, setAccessoriesAnchorEl] = React.useState(null);
  
  const servicesOpen = Boolean(servicesAnchorEl);
  const accessoriesOpen = Boolean(accessoriesAnchorEl);

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const handleAccessoriesClick = (event) => {
    setAccessoriesAnchorEl(event.currentTarget);
  };

  const handleAccessoriesClose = () => {
    setAccessoriesAnchorEl(null);
  };

  // Services menu items
  const servicesItems = [
    { label: 'New Laptops', to: '/laptops', icon: <LaptopIcon sx={{ mr: 1, fontSize: 20 }} /> },
    { label: 'Pre-Owned Laptops', to: '/services/pre-owned-laptops', icon: <AutorenewIcon sx={{ mr: 1, fontSize: 20 }} /> },
    { label: 'Repair Services', to: '/repair', icon: <BuildIcon sx={{ mr: 1, fontSize: 20 }} /> },
  ];

  // Accessories menu items
  const accessoriesItems = [
    { label: 'Laptop Bags', to: '/accessories/bags' },
    { label: 'Laptop Chargers', to: '/accessories/chargers' },
    { label: 'Laptop Stands', to: '/accessories/stands' },
    { label: 'External Hard Drives', to: '/accessories/storage' },
    { label: 'Laptop Cooling Pads', to: '/accessories/cooling' },
    { label: 'Wireless Mice', to: '/accessories/mice' },
    { label: 'Laptop Keyboards', to: '/accessories/keyboards' },
    { label: 'Laptop Screen Protectors', to: '/accessories/protectors' },
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Top Contact Bar */}
      <Box sx={{ 
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
        }
      }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}>
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
                <Box sx={{
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
                  }
                }}>
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
      <AppBar position="sticky" elevation={0} sx={{ 
        bgcolor: '#fff', 
        borderBottom: '1px solid #e0e0e0',
        background: 'linear-gradient(180deg, #fff 0%, #f8f9fa 100%)',
      }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 64, justifyContent: 'space-between' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {/* Home Button */}
              <Button
                component={Link}
                to="/"
                sx={{ 
                  color: '#2c3e50', 
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
                    width: '0%',
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
                  }
                }}
              >
                HOME
              </Button>

              {/* Services Dropdown */}
              <Box>
                <Button
                  onClick={handleServicesClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{ 
                    color: servicesOpen ? '#e74c3c' : '#2c3e50', 
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
                      width: servicesOpen ? '100%' : '0%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover': { 
                      color: '#e74c3c',
                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  SERVICES
                </Button>
                <Menu
                  anchorEl={servicesAnchorEl}
                  open={servicesOpen}
                  onClose={handleServicesClose}
                  PaperProps={{
                    sx: {
                      mt: 1.5,
                      minWidth: 240,
                      borderRadius: 2,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                      border: '1px solid rgba(231, 76, 60, 0.1)',
                    }
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
                        }
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

              {/* Accessories Dropdown */}
              <Box>
                <Button
                  onClick={handleAccessoriesClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{ 
                    color: accessoriesOpen ? '#e74c3c' : '#2c3e50', 
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
                      width: accessoriesOpen ? '100%' : '0%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover': { 
                      color: '#e74c3c',
                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  ACCESSORIES
                </Button>
                <Popover
                  anchorEl={accessoriesAnchorEl}
                  open={accessoriesOpen}
                  onClose={handleAccessoriesClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  PaperProps={{
                    sx: {
                      mt: 1.5,
                      minWidth: 280,
                      borderRadius: 2,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                      border: '1px solid rgba(231, 76, 60, 0.1)',
                    }
                  }}
                >
                  <Box sx={{ p: 0, maxHeight: 400, overflow: 'auto' }}>
                    <Box sx={{ px: 2, py: 1.5, backgroundColor: 'rgba(231, 76, 60, 0.05)', borderBottom: '1px solid rgba(231, 76, 60, 0.1)' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#e74c3c' }}>
                        Laptop Accessories
                      </Typography>
                    </Box>
                    <Grid container>
                      {accessoriesItems.map((item, index) => (
                        <Grid item xs={6} key={item.to}>
                          <MenuItem 
                            component={Link}
                            to={item.to}
                            onClick={handleAccessoriesClose}
                            sx={{ 
                              py: 1.5,
                              px: 2,
                              transition: 'all 0.2s ease',
                              borderBottom: index < accessoriesItems.length - 2 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                              '&:hover': {
                                backgroundColor: 'rgba(231, 76, 60, 0.08)',
                              }
                            }}
                          >
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {item.label}
                            </Typography>
                          </MenuItem>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Popover>
              </Box>

              {/* About Us */}
              <Button
                component={Link}
                to="/about"
                sx={{ 
                  color: '#2c3e50', 
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
                    width: '0%',
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
                  }
                }}
              >
                ABOUT US
              </Button>

              {/* Contact */}
              <Button
                component={Link}
                to="/contact"
                sx={{ 
                  color: '#2c3e50', 
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
                    width: '0%',
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
                  }
                }}
              >
                CONTACT
              </Button>
            </Box>
            
            <Stack direction="row" spacing={1.5}>
              <IconButton size="small" sx={{ 
                color: '#555', 
                background: 'linear-gradient(135deg, #f0f0f0 0%, #fff 100%)',
                '&:hover': { 
                  color: '#e74c3c',
                  background: 'linear-gradient(135deg, #ffecec 0%, #fff 100%)',
                }
              }}>
                <GitHubIcon />
              </IconButton>
              <IconButton size="small" sx={{ 
                color: '#555', 
                background: 'linear-gradient(135deg, #f0f0f0 0%, #fff 100%)',
                '&:hover': { 
                  color: '#0077b5',
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)',
                }
              }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton size="small" sx={{ 
                color: '#555', 
                background: 'linear-gradient(135deg, #f0f0f0 0%, #fff 100%)',
                '&:hover': { 
                  color: '#E4405F',
                  background: 'linear-gradient(135deg, #ffe6ee 0%, #fff 100%)',
                }
              }}>
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section with Animated Gradient */}
      <Box
        sx={{
          minHeight: 'calc(100vh - 120px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(-45deg, #4a5568, #2d3748, #1a202c, #4a5568)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(231,76,60,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,0.1) 0%, transparent 50%)',
          }
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' },
              background: 'linear-gradient(45deg, #fff 30%, #e0e0e0 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Premium Laptops & Expert Repair Services
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 5, 
              fontSize: '1.1rem',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.9)'
            }}
          >
            High-quality new and pre-owned laptops with expert repair services to meet all your needs
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: 'linear-gradient(45deg, #e74c3c 30%, #c0392b 90%)',
              px: 5,
              py: 2,
              fontSize: '1rem',
              textTransform: 'none',
              fontWeight: 600,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                transition: 'left 0.5s',
              },
              '&:hover::before': {
                left: '100%',
              },
              '&:hover': { 
                background: 'linear-gradient(45deg, #c0392b 30%, #a93226 90%)',
              },
            }}
          >
            Explore Our Products
          </Button>
        </Container>
      </Box>

      {/* Find the Perfect Laptop - with Gradient Background */}
{/* Find the Perfect Laptop - WITH COMPLETE MOTION BACKGROUND EFFECTS */}
<Box sx={{ 
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        // Top shimmer border
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #e74c3c, #3498db, #e74c3c)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s infinite',
          zIndex: 3,
        },
        // Solid gradient background
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(231,76,60,0.03) 0%, rgba(52,152,219,0.03) 100%)',
          zIndex: 0,
        }
      }}>
        {/* Rotating radial gradient - needs a separate div since we already used both pseudo-elements */}
        <Box sx={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(231,76,60,0.05) 0%, transparent 70%)',
          animation: 'rotate 20s linear infinite',
          zIndex: 0,
        }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h4" 
            align="center" 
            sx={{ 
              fontWeight: 700, 
              mb: 1.5, 
              color: '#2d3748',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
                borderRadius: '2px',
              }
            }}
          >
            Find the Perfect Laptop
          </Typography>
          <Typography 
            variant="body1" 
            align="center" 
            color="text.secondary" 
            sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
          >
            Whether you're looking for the latest models or a budget-friendly option, we have a laptop for every need and budget.
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ mb: 4 }}>
            {[
              {
                icon: <LaptopIcon sx={{ fontSize: 40 }} />,
                iconBg: 'linear-gradient(135deg, #ffecec 0%, #ffcccc 100%)',
                iconColor: '#e74c3c',
                title: 'New Laptops',
                desc: 'Explore the latest technology from top brands. Powerful performance and pristine condition guaranteed.',
                cta: 'Shop New',
                link: '/laptops',
              },
              {
                icon: <AutorenewIcon sx={{ fontSize: 40 }} />,
                iconBg: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                iconColor: '#2980b9',
                title: 'Pre-Owned Laptops',
                desc: 'Save big with quality refurbished laptops. Expertly restored and tested for reliability.',
                cta: 'Shop Pre-Owned',
                link: '/pre-owned-laptops',
              },
              {
                icon: <BuildIcon sx={{ fontSize: 40 }} />,
                iconBg: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                iconColor: '#27ae60',
                title: 'Expert Laptop Repairs',
                desc: 'Fast, reliable repairs by certified technicians. From hardware fixes to software solutions.',
                cta: 'Book a Repair',
                link: '/repair',
              },
            ].map((card, idx) => (
              <Box 
                key={idx}
                component={Link} 
                to={card.link} 
                sx={{ 
                  textDecoration: 'none', 
                  flex: 1,
                  display: 'block',
                }}
              >
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #f0f0f0',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderRadius: 12,
                    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: card.iconBg,
                    },
                    '&:hover': { 
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      background: card.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      color: card.iconColor,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontSize: '1.1rem' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6, minHeight: '60px', fontSize: '0.875rem' }}>
                    {card.desc}
                  </Typography>
                  <Button
                    component={Link}
                    to={card.link}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    variant="contained"
                    size="small"
                    sx={{
                      background: card.iconBg,
                      color: card.iconColor,
                      '&:hover': { 
                        background: 'linear-gradient(135deg, #ddd, #fff)',
                        transform: 'translateY(-2px)',
                      },
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 3,
                      py: 0.8,
                      fontSize: '0.875rem',
                      borderRadius: 8,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {card.cta}
                  </Button>
                </Card>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>


      {/* Thin Border Separator between Find Laptop and One-Stop Shop sections */}
      <Box sx={{ 
        position: 'relative',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #e0e0e0, transparent)',
        mx: 4,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60px',
          height: '2px',
          background: '#e74c3c',
          borderRadius: '1px',
        }
      }} />

      {/* One-Stop Shop – EXACTLY LIKE THE SECOND IMAGE with Gradient Background */}
      <Box sx={{ 
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(231,76,60,0.03) 0%, rgba(52,152,219,0.03) 100%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(231,76,60,0.05) 0%, transparent 70%)',
          animation: 'rotate 20s linear infinite',
          zIndex: 0,
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            
            {/* LEFT SIDE — Title + Paragraph + Bullet Points */}
            <Grid item xs={12} md={6}>
              <Box sx={{ pr: 4 }}>

                {/* TITLE */}
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    color: "#1a1a1a",
                  }}
                >
                  Your One-Stop Shop for Laptop Needs
                </Typography>

                {/* PARAGRAPH — VERTICAL / NARROW */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    mb: 4,
                    lineHeight: 1.8,
                    maxWidth: "500px",
                  }}
                >
                  BRAINTONE is dedicated to providing high-quality laptops and reliable repair services.
                  We understand the importance of technology in your daily life, which is why we offer a curated
                  selection of new and second-hand devices, alongside expert technical support to ensure your
                  technology works for you.
                </Typography>

                {/* BULLET POINTS */}
                <Stack spacing={3}>
                  {[
                    {
                      title: "Quality Products:",
                      desc: "Carefully selected new and certified pre-owned laptops."
                    },
                    {
                      title: "Expert Repairs:",
                      desc: "Skilled technicians provide fast and effective solutions."
                    },
                    {
                      title: "Customer Focused:",
                      desc: "We are committed to excellent service and support."
                    },
                  ].map((item, idx) => (
                    <Stack key={idx} direction="row" spacing={2}>
                      <CheckCircleIcon sx={{ fontSize: 30, color: "#e74c3c" }} />
                      <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.6 }}>
                        <strong>{item.title}</strong> {item.desc}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* RIGHT SIDE — BOX */}
            <Grid 
              item 
              xs={12} 
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  width: "100%",
                  minHeight: 320,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: "#e74c3c",
                    mb: 4,
                    textAlign: "center",
                  }}
                >
                  Why Choose BRAINTONE?
                </Typography>

                <Stack spacing={3}>
                  {[
                    {
                      icon: <GroupIcon />,
                      title: "Expert Team",
                      desc: "Experienced technicians and professionals."
                    },
                    {
                      icon: <VerifiedUserIcon />,
                      title: "Quality Assurance",
                      desc: "High-quality diagnostic tools and parts."
                    },
                    {
                      icon: <HeadsetMicIcon />,
                      title: "Support",
                      desc: "Transparent communication and service."
                    }
                  ].map((item, idx) => (
                    <Stack key={idx} direction="row" spacing={2}>
                      <Box
                        sx={{
                          width: 120,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: "#ffecec",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#e74c3c",
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#555" }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Thin Border Separator between One-Stop Shop and All About BRAINTONE sections */}
      <Box sx={{ 
        position: 'relative',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #e0e0e0, transparent)',
        mx: 10,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60px',
          height: '2px',
          background: '#e74c3c',
          borderRadius: '1px',
        }
      }} />

      {/* All About BRAINTONE - WITH EXACT SAME BACKGROUND MOTION EFFECTS */}
      {/* All About BRAINTONE - WITH AUTO MOTION EFFECTS */}
      <Box sx={{ 
        py: 8, 
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(231,76,60,0.03) 0%, rgba(52,152,219,0.03) 100%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(231,76,60,0.05) 0%, transparent 70%)',
          animation: 'rotate 20s linear infinite',
          zIndex: 0,
        }
      }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: '#2c3e50'
              }}
            >
              All about <span style={{ color: '#e74c3c' }}>BRAINTONE</span>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.8,
                maxWidth: 800,
                mx: 'auto',
                px: 2
              }}
            >
              Discover everything we have to offer, from the latest laptops to expert
              repair and maintenance services. At BRAINTONE, we're committed to providing
              top-quality technology solutions that empower your digital life.
            </Typography>
          </Box>

          {/* Section 1: New Laptop Collection - Text Left, Image Right */}
          <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 4, md: 8 },
              mb: { xs: 8, md: 12 }
            }}>
              {/* Text Content - LEFT */}
              <Box sx={{ flex: 1, minHeight: { md: 400 } }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 3,
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    lineHeight: 1.2,
                    color: '#2c3e50'
                  }}
                >
                  Explore Our New Laptop Collection
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 3, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Discover cutting-edge technology with our extensive range of brand-new laptops. 
                  From high-performance gaming rigs designed for immersive experiences to 
                  ultra-portable notebooks perfect for professionals on the go, we stock 
                  the latest models from leading brands like Dell, HP, Lenovo, Apple, and Asus.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 3, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Our collection includes laptops for every need and budget: 
                  • Business laptops with enhanced security features
                  • Creative workstations with powerful graphics capabilities
                  • Everyday use laptops with optimal performance
                  • Convertible 2-in-1 devices for maximum flexibility
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 4, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Each device is carefully selected to ensure you get the best in speed, design, 
                  and reliability. We provide expert guidance to help you choose the perfect 
                  laptop that matches your specific requirements and enhances your productivity.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#e74c3c',
                    color: '#fff',
                    '&:hover': { 
                      bgcolor: '#c0392b',
                      transform: 'translateY(-2px)'
                    },
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    minWidth: 180,
                    transition: 'all 0.3s ease'
                  }}
                >
                  Shop New Laptops
                </Button>
              </Box>

              {/* Image - RIGHT with Auto-Flip Effect */}
              <Box sx={{ 
                flex: 1, 
                width: '100%',
                perspective: '1000px',
              }}>
                <Box sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 300, md: 400 },
                  transition: 'transform 0.8s',
                  transformStyle: 'preserve-3d',
                  animation: 'flip 6s ease-in-out infinite',
                  '@keyframes flip': {
                    '0%, 100%': {
                      transform: 'rotateY(0deg)',
                    },
                    '50%': {
                      transform: 'rotateY(180deg)',
                    }
                  }
                }}>
                  {/* Front of Card */}
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80"
                    alt="New Laptops"
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      borderRadius: 2,
                      objectFit: 'cover',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    }}
                  />
                  {/* Back of Card */}
                  <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    borderRadius: 2,
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 4,
                    transform: 'rotateY(180deg)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                      Premium Selection
                    </Typography>
                    <Typography variant="body1" align="center" sx={{ mb: 2 }}>
                      Latest models from top brands
                    </Typography>
                    <Typography variant="body2" align="center">
                      Expert guidance available
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Divider */}
            <Divider sx={{ my: { xs: 6, md: 8 } }} />

            {/* Section 2: Pre-Owned Laptops - Image Left, Text Right */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 4, md: 8 },
              mb: { xs: 8, md: 12 }
            }}>
              {/* Image - LEFT with Auto-Pulse Effect */}
              <Box sx={{ 
                flex: 1, 
                width: '100%',
                order: { xs: 1, md: 1 },
              }}>
                <Box sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 300, md: 400 },
                  animation: 'pulse 3s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    },
                    '50%': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 20px 40px rgba(52, 152, 219, 0.4)',
                    }
                  }
                }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?auto=format&fit=crop&w=1400&q=80"
                    alt="Pre-owned Laptops"
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 2,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>

              {/* Text Content - RIGHT */}
              <Box sx={{ 
                flex: 1,
                order: { xs: 2, md: 2 },
                minHeight: { md: 400 }
              }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 3,
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    lineHeight: 1.2,
                    color: '#2c3e50'
                  }}
                >
                  Quality Pre-Owned Laptops
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 3, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Get the performance you need at a price you'll love with our extensive range 
                  of certified pre-owned laptops. Each device in our pre-owned collection undergoes 
                  a rigorous 25-point inspection and refurbishment process to guarantee it meets 
                  our exacting standards for quality and reliability.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 3, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Our refurbishment process includes:
                  • Comprehensive hardware diagnostics and testing
                  • Thorough cleaning and cosmetic restoration
                  • Battery health assessment and optimization
                  • Operating system reinstallation and updates
                  • Stress testing to ensure stability
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 4, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  We offer certified pre-owned laptops from all major brands, including recent 
                  models with significant savings compared to new devices. Every pre-owned laptop 
                  comes with a minimum 6-month warranty, making it a smart, sustainable choice 
                  that's good for both your wallet and the environment.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#e74c3c',
                    color: '#fff',
                    '&:hover': { 
                      bgcolor: '#c0392b',
                      transform: 'translateY(-2px)'
                    },
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    minWidth: 180,
                    transition: 'all 0.3s ease'
                  }}
                >
                  Browse Pre-Owned
                </Button>
              </Box>
            </Box>

            {/* Divider */}
            <Divider sx={{ my: { xs: 6, md: 8 } }} />

            {/* Section 3: Repair Services - Text Left, Image Right */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 4, md: 8 },
              mb: { xs: 8, md: 12 }
            }}>
              {/* Text Content - LEFT */}
              <Box sx={{ flex: 1, minHeight: { md: 400 } }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 3,
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    lineHeight: 1.2,
                    color: '#2c3e50'
                  }}
                >
                  Expert Laptop Repair Services
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 3, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Is your laptop running slow, not turning on, or has a cracked screen? 
                  Our team of certified technicians with over 10 years of combined experience 
                  is here to provide comprehensive repair solutions. We specialize in all 
                  major brands including Apple MacBook, Dell, HP, Lenovo, Asus, and Acer.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 3, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Our comprehensive repair services include:
                  • Screen replacement and display repairs
                  • Motherboard diagnostics and repair
                  • Keyboard and touchpad replacement
                  • Battery replacement and calibration
                  • Liquid damage repair and cleaning
                  • Software troubleshooting and virus removal
                  • Data recovery and transfer services
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 4, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  We use only high-quality, genuine or OEM-equivalent parts to ensure 
                  your device returns to peak performance. Most common repairs are completed 
                  within 24-48 hours, and we provide a 90-day warranty on all repair work. 
                  Free diagnostics for all devices brought to our stores.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#e74c3c',
                    color: '#fff',
                    '&:hover': { 
                      bgcolor: '#c0392b',
                      transform: 'translateY(-2px)'
                    },
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    minWidth: 180,
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get a Repair Quote
                </Button>
              </Box>

              {/* Image - RIGHT with Auto-Shake Effect */}
              <Box sx={{ 
                flex: 1, 
                width: '100%',
              }}>
                <Box sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 300, md: 400 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  animation: 'shake 5s ease-in-out infinite',
                  '@keyframes shake': {
                    '0%, 100%': {
                      transform: 'translateX(0) rotate(0)',
                    },
                    '10%, 30%, 50%, 70%, 90%': {
                      transform: 'translateX(-5px) rotate(-1deg)',
                    },
                    '20%, 40%, 60%, 80%': {
                      transform: 'translateX(5px) rotate(1deg)',
                    }
                  }
                }}>
                  <Box
                    component="img"
                    src="https://laptopworlds.in/wp-content/uploads/2023/11/l2.png"
                    alt="Repair Services"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.9)',
                    }}
                  />
                  {/* Overlay */}
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(231, 76, 60, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 700,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      }}
                    >
                      Expert Repairs
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Divider */}
            <Divider sx={{ my: { xs: 6, md: 8 } }} />

            {/* Section 4: Maximize Life - Image Left, Text Right */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 4, md: 8 }
            }}>
              {/* Image - LEFT with Auto-Float Effect */}
              <Box sx={{ 
                flex: 1, 
                width: '100%',
                order: { xs: 1, md: 1 },
              }}>
                <Box sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 300, md: 400 },
                  animation: 'floatUp 8s ease-in-out infinite',
                  '@keyframes floatUp': {
                    '0%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '50%': {
                      transform: 'translateY(-20px)',
                    }
                  }
                }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
                    alt="Maximize Laptop Life"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 2,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    }}
                  />
                  {/* Floating Elements */}
                  <Box sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(231, 76, 60, 0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    animation: 'float 3s ease-in-out infinite',
                  }}>
                    <Typography variant="h6">✓</Typography>
                  </Box>
                  <Box sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(52, 152, 219, 0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    animation: 'float 3s ease-in-out infinite 1s',
                  }}>
                    <Typography variant="h6">+</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Text Content - RIGHT */}
              <Box sx={{ 
                flex: 1,
                order: { xs: 2, md: 2 },
                minHeight: { md: 400 }
              }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 3,
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    lineHeight: 1.2,
                    color: '#2c3e50'
                  }}
                >
                  Maximize Your Laptop's Life & Performance
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 3, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Beyond repairs, we offer comprehensive services designed to enhance and 
                  extend the life of your laptop investment. Our optimization services ensure 
                  your device runs at its maximum potential throughout its lifespan.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 3, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Our enhancement services include:
                  • Memory (RAM) upgrades for improved multitasking
                  • SSD installation for faster boot times and application loading
                  • Professional internal cleaning to prevent overheating
                  • Thermal paste replacement for better heat dissipation
                  • Operating system optimization and tuning
                  • Custom software configuration for specific use cases
                  • Regular maintenance packages for long-term performance
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    mb: 4, 
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  We also offer personalized consultation services to help you understand 
                  how to best maintain your specific laptop model. From gaming laptops 
                  requiring specialized cooling to business laptops needing enhanced security 
                  configurations, our experts can help you get the most out of your machine 
                  for years to come, potentially extending its usable life by 2-3 years.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#e74c3c',
                    color: '#fff',
                    '&:hover': { 
                      bgcolor: '#c0392b',
                      transform: 'translateY(-2px)'
                    },
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    minWidth: 180,
                    transition: 'all 0.3s ease'
                  }}
                >
                  Explore Our Services
                </Button>
              </Box>
            </Box>
          </Container>
        </Container>
      </Box>

      {/* BORDER - Separates All About BRAINTONE from Results and Feedbacks */}
      <Box sx={{ 
        position: 'relative',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #e0e0e0, transparent)',
        mx: { xs: 4, md: 8 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80px',
          height: '3px',
          background: '#e74c3c',
          borderRadius: '2px',
        }
      }} />

      {/* Results and Feedbacks Section */}
      {/* Results and Feedbacks Section */}
      <Box sx={{ 
        py: 8, 
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(231,76,60,0.03) 0%, rgba(52,152,219,0.03) 100%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(231,76,60,0.05) 0%, transparent 70%)',
          animation: 'rotate 20s linear infinite',
          zIndex: 0,
        }
      }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: '#2c3e50'
              }}
            >
              Results and Feedbacks
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.6,
                maxWidth: 600,
                mx: 'auto',
                mb: 4
              }}
            >
              Trusted by customers for reliable laptops and expert repairs.
            </Typography>
          </Box>

          {/* Feedback Slider Container */}
          <Box sx={{ 
            position: 'relative',
            maxWidth: 1200,
            mx: 'auto',
            mb: 6,
            overflow: 'hidden'
          }}>
            {/* Feedback Cards Grid - Auto Scroll Slider */}
            <Box sx={{
              display: 'flex',
              gap: 4,
              animation: 'slide 60s linear infinite',
              '&:hover': {
                animationPlayState: 'paused'
              },
              '@keyframes slide': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' }
              }
            }}>
              {/* First set of 6 feedbacks */}
              {[
                {
                  id: 1,
                  text: "I bought a second-hand MacBook from Braintone and it works like a charm. The price was unbeatable and the customer service was excellent. They helped me find the perfect machine for my design work. Highly recommended!",
                  author: "Jane Doe",
                  role: "Graphic Designer",
                  initials: "JD"
                },
                {
                  id: 2,
                  text: "My laptop's screen was completely shattered. The team at Braintone Technology fixed it in less than a day! They were professional, quick, and the repair cost was very reasonable. My laptop looks brand new again. Thank you!",
                  author: "John Smith",
                  role: "University Student",
                  initials: "JS"
                },
                {
                  id: 3,
                  text: "As a small business owner, reliable tech is crucial. Braintone supplied our office with five refurbished laptops that have been running flawlessly. Their advice on the best models for our needs was invaluable. Great service and products.",
                  author: "Sarah Lee",
                  role: "Startup Founder",
                  initials: "SL"
                },
                {
                  id: 4,
                  text: "I was skeptical about buying a refurbished laptop, but Braintone exceeded all expectations. The Dell XPS I purchased looked and performed like new, and came with a solid warranty. Saved me hundreds of dollars!",
                  author: "Michael Chen",
                  role: "Software Developer",
                  initials: "MC"
                },
                {
                  id: 5,
                  text: "When my laptop died during finals week, Braintone saved me! They diagnosed the issue quickly, had the parts in stock, and completed the repair same-day. Couldn't have asked for better service during a stressful time.",
                  author: "Alex Johnson",
                  role: "Graduate Student",
                  initials: "AJ"
                },
                {
                  id: 6,
                  text: "We've been using Braintone for all our company's tech needs for 2 years now. From laptops to repairs, their service is consistently excellent. Their team is knowledgeable and always goes above and beyond.",
                  author: "David Wilson",
                  role: "IT Manager",
                  initials: "DW"
                }
              ].map((feedback) => (
                <Box
                  key={feedback.id}
                  sx={{
                    flex: '0 0 calc(33.333% - 32px)',
                    minWidth: { xs: '85%', sm: '45%', md: '30%' }
                  }}
                >
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                      border: '1px solid rgba(231, 76, 60, 0.1)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 15px 40px rgba(231,76,60,0.15)',
                        borderColor: 'rgba(231, 76, 60, 0.3)'
                      },
                      '&::before': {
                        content: '"\\201C"',
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        fontSize: '4rem',
                        color: 'rgba(231, 76, 60, 0.1)',
                        fontFamily: 'serif',
                        lineHeight: 1,
                      }
                    }}
                  >
                    {/* Quote Icon */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #ffecec 0%, #ffcccc 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#e74c3c'
                      }}
                    >
                      <Box sx={{ fontSize: '1.5rem', lineHeight: 1 }}>"</Box>
                    </Box>

                    {/* Feedback Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        color: '#2c3e50',
                        mb: 4,
                        fontStyle: 'italic',
                        position: 'relative',
                        zIndex: 1,
                        flex: 1
                      }}
                    >
                      "{feedback.text}"
                    </Typography>

                    {/* Profile Section */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        pt: 3,
                        borderTop: '1px solid rgba(231, 76, 60, 0.1)',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {/* Round Profile */}
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '1.25rem',
                          flexShrink: 0,
                          boxShadow: '0 4px 12px rgba(231,76,60,0.3)',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -2,
                            left: -2,
                            right: -2,
                            bottom: -2,
                            borderRadius: '50%',
                            border: '2px solid rgba(231, 76, 60, 0.2)',
                          }
                        }}
                      >
                        {feedback.initials}
                      </Box>

                      {/* Author Info */}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: '#e74c3c',
                            fontSize: '1.1rem',
                            mb: 0.5
                          }}
                        >
                          {feedback.author}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#666',
                            fontSize: '0.9rem'
                          }}
                        >
                          {feedback.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {[
                {
                  id: 7,
                  text: "I bought a second-hand MacBook from Braintone and it works like a charm. The price was unbeatable and the customer service was excellent. They helped me find the perfect machine for my design work. Highly recommended!",
                  author: "Jane Doe",
                  role: "Graphic Designer",
                  initials: "JD"
                },
                {
                  id: 8,
                  text: "My laptop's screen was completely shattered. The team at Braintone Technology fixed it in less than a day! They were professional, quick, and the repair cost was very reasonable. My laptop looks brand new again. Thank you!",
                  author: "John Smith",
                  role: "University Student",
                  initials: "JS"
                },
                {
                  id: 9,
                  text: "As a small business owner, reliable tech is crucial. Braintone supplied our office with five refurbished laptops that have been running flawlessly. Their advice on the best models for our needs was invaluable. Great service and products.",
                  author: "Sarah Lee",
                  role: "Startup Founder",
                  initials: "SL"
                },
                {
                  id: 10,
                  text: "I was skeptical about buying a refurbished laptop, but Braintone exceeded all expectations. The Dell XPS I purchased looked and performed like new, and came with a solid warranty. Saved me hundreds of dollars!",
                  author: "Michael Chen",
                  role: "Software Developer",
                  initials: "MC"
                },
                {
                  id: 11,
                  text: "When my laptop died during finals week, Braintone saved me! They diagnosed the issue quickly, had the parts in stock, and completed the repair same-day. Couldn't have asked for better service during a stressful time.",
                  author: "Alex Johnson",
                  role: "Graduate Student",
                  initials: "AJ"
                },
                {
                  id: 12,
                  text: "We've been using Braintone for all our company's tech needs for 2 years now. From laptops to repairs, their service is consistently excellent. Their team is knowledgeable and always goes above and beyond.",
                  author: "David Wilson",
                  role: "IT Manager",
                  initials: "DW"
                }
              ].map((feedback) => (
                <Box
                  key={feedback.id}
                  sx={{
                    flex: '0 0 calc(33.333% - 32px)',
                    minWidth: { xs: '85%', sm: '45%', md: '30%' }
                  }}
                >
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                      border: '1px solid rgba(231, 76, 60, 0.1)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 15px 40px rgba(231,76,60,0.15)',
                        borderColor: 'rgba(231, 76, 60, 0.3)'
                      },
                      '&::before': {
                        content: '"\\201C"',
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        fontSize: '4rem',
                        color: 'rgba(231, 76, 60, 0.1)',
                        fontFamily: 'serif',
                        lineHeight: 1,
                      }
                    }}
                  >
                    {/* Quote Icon */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #ffecec 0%, #ffcccc 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#e74c3c'
                      }}
                    >
                      <Box sx={{ fontSize: '1.5rem', lineHeight: 1 }}>"</Box>
                    </Box>

                    {/* Feedback Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        color: '#2c3e50',
                        mb: 4,
                        fontStyle: 'italic',
                        position: 'relative',
                        zIndex: 1,
                        flex: 1
                      }}
                    >
                      "{feedback.text}"
                    </Typography>

                    {/* Profile Section */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        pt: 3,
                        borderTop: '1px solid rgba(231, 76, 60, 0.1)',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {/* Round Profile */}
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '1.25rem',
                          flexShrink: 0,
                          boxShadow: '0 4px 12px rgba(231,76,60,0.3)',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -2,
                            left: -2,
                            right: -2,
                            bottom: -2,
                            borderRadius: '50%',
                            border: '2px solid rgba(231, 76, 60, 0.2)',
                          }
                        }}
                      >
                        {feedback.initials}
                      </Box>

                      {/* Author Info */}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: '#e74c3c',
                            fontSize: '1.1rem',
                            mb: 0.5
                          }}
                        >
                          {feedback.author}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#666',
                            fontSize: '0.9rem'
                          }}
                        >
                          {feedback.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Gradient Overlays */}
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1,
              background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0) 95%, rgba(255,255,255,1) 100%)',
            }} />

            {/* Navigation Dots */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mt: 4,
              gap: 1.5
            }}>
              {[1, 2, 3, 4, 5, 6].map((dot) => (
                <Box
                  key={dot}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: dot === 1 ? '#e74c3c' : '#ddd',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: dot === 1 ? '#c0392b' : '#bbb',
                      transform: 'scale(1.2)'
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Ready to Find Section */}
      <Box sx={{ 
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(https://laptopworlds.in/wp-content/uploads/2023/11/l2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          animation: 'zoom 20s infinite alternate',
          zIndex: 0,
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              fontWeight: 700, 
              mb: 8,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              color: '#fff',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              background: 'linear-gradient(45deg, #fff 30%, #e74c3c 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to find your next laptop?
          </Typography>
          
          {[ 
            ['New Laptops', 'Second-hand Laptops', 'Repair of Laptops'],
            ['Video Games', 'Laptop Accessories', 'And much more...']
          ].map((row, rowIndex) => (
            <Grid container spacing={4} key={rowIndex} sx={{ mb: rowIndex === 0 ? 4 : 0, justifyContent: 'center' }}>
              {row.map((label, idx) => {
                const icons = [LaptopIcon, AutorenewIcon, BuildIcon, StoreIcon, ComputerIcon, StoreIcon];
                const IconComponent = icons[rowIndex * 3 + idx];
                
                return (
                  <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                      sx={{
                        width: '100%',
                        maxWidth: 380,
                        height: 100,
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 3,
                        p: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                          transition: 'left 0.5s',
                        },
                        '&:hover::before': {
                          left: '100%',
                        },
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          backgroundColor: 'rgba(231, 76, 60, 0.3)',
                          borderColor: '#e74c3c',
                          boxShadow: '0 15px 40px rgba(231, 76, 60, 0.4)',
                        },
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        width: 50,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: -5,
                          left: -5,
                          right: -5,
                          bottom: -5,
                          borderRadius: '50%',
                          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                        }
                      }}>
                        <IconComponent sx={{ fontSize: 36, color: '#fff', position: 'relative', zIndex: 1 }} />
                      </Box>
                      
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600, 
                          fontSize: '1.1rem',
                          color: '#fff',
                          textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                          flex: 1,
                          textAlign: 'left'
                        }}
                      >
                        {label}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          ))}
        </Container>
      </Box>

      {/* Footer with Gradient */}
      <Box component="footer" sx={{ 
        bgcolor: '#1a252f', 
        color: '#a0aec0', 
        pt: 6, 
        pb: 3,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #e74c3c, #3498db, #2ecc71, #e74c3c)',
          backgroundSize: '300% 100%',
          animation: 'shimmer 4s infinite linear',
        }
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ 
                color: '#e74c3c', 
                fontWeight: 800, 
                mb: 2,
                background: 'linear-gradient(45deg, #e74c3c 30%, #ff7675 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                BRAINTONE
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                Your trusted partner for laptops and tech services.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: '0.95rem' }}>
                Quick Links
              </Typography>
              <Stack spacing={0.5}>
                {['Home', 'Laptops', 'Repairs', 'About Us'].map((link) => (
                  <Typography key={link} variant="body2" sx={{ 
                    fontSize: '0.85rem', 
                    cursor: 'pointer', 
                    '&:hover': { 
                      color: '#e74c3c',
                      transform: 'translateX(5px)',
                      transition: 'all 0.3s ease'
                    } 
                  }}>
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: '0.95rem' }}>
                Contact
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                  1st Floor, 17A, Bahubali Bldg, Flora Fountain, Fort, Mumbai
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>contact@braintone.com</Typography>
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>+1 (234) 567-890</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: '0.95rem' }}>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={2}>
                {[
                  { icon: <GitHubIcon fontSize="small" />, color: '#333' },
                  { icon: <LinkedInIcon fontSize="small" />, color: '#0077b5' },
                  { icon: <InstagramIcon fontSize="small" />, color: '#E4405F' }
                ].map((social, idx) => (
                  <IconButton 
                    key={idx}
                    size="small" 
                    sx={{ 
                      color: '#a0aec0', 
                      background: 'rgba(255,255,255,0.1)',
                      '&:hover': { 
                        color: social.color,
                        background: 'rgba(255,255,255,0.2)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 3 }} />
          <Typography variant="body2" align="center" sx={{ fontSize: '0.85rem' }}>
            © 2024 Braintone Technology. All Rights Reserved.
          </Typography>
        </Container>
      </Box>

      {/* Floating Chat Button with Animation */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #e74c3c 30%, #c0392b 90%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(231,76,60,0.4)',
          zIndex: 1000,
          animation: 'float 3s ease-in-out infinite',
          '&:hover': { 
            background: 'linear-gradient(45deg, #c0392b 30%, #a93226 90%)',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <ChatIcon sx={{ color: '#fff', fontSize: 28 }} />
      </Box>

      {/* Add CSS Animations */}
      <style jsx="true">{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Box>
  );
};

export default HomePage;