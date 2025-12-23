import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Modal,
  IconButton,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Chip,
  Stack,
  CardActionArea,
  useMediaQuery,
  useTheme,
  alpha,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SpeedIcon from '@mui/icons-material/Speed';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import BusinessIcon from '@mui/icons-material/Business';
import DiamondIcon from '@mui/icons-material/Diamond';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SecondHand = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Google Maps URLs for locations
  const locationMaps = {
    fort: 'https://www.google.com/maps/search/?api=1&query=Braintone+17A+Bahubali+Building+Flora+Fountain+Fort+Mumbai',
    vileParle: 'https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+Prime+Mall+Irla+Vile+Parle+West+Mumbai'
  };

  // Function to open Google Maps
  const openGoogleMaps = (locationType) => {
    const url = locationMaps[locationType];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const categories = [
    {
      id: 1,
      title: 'Entry Level Laptops',
      description: 'For Students & Basic Computing',
      startingPrice: '₹13,000',
      icon: <SchoolIcon />,
      color: '#2196F3', // Blue
      bgColor: '#2196F3',
      textColor: '#ffffff',
      specs: [
        'Intel Core i3 / AMD Ryzen 3',
        '4GB - 8GB RAM',
        '256GB - 512GB SSD',
        '13" - 15.6" HD Display',
        'Windows 10/11 Pro',
        'Lightweight & Portable',
      ],
      bestFor: 'Students, Basic Office Work, Web Browsing, Online Classes',
      brands: 'Dell Inspiron, HP Pavilion, Lenovo Ideapad',
      warranty: '1 Month Warranty',
    },
    {
      id: 2,
      title: 'Consumer Laptops',
      description: 'For Home & Personal Use',
      startingPrice: '₹23,000',
      icon: <PeopleIcon />,
      color: '#4CAF50', // Green
      bgColor: '#4CAF50',
      textColor: '#ffffff',
      specs: [
        'Intel Core i5 / AMD Ryzen 5',
        '8GB - 16GB RAM',
        '512GB - 1TB SSD',
        'Full HD IPS Display',
        'Backlit Keyboard',
        'Fingerprint Reader',
      ],
      bestFor: 'Home Use, Multimedia, Casual Gaming, Office Work',
      brands: 'Dell XPS, HP Envy, Lenovo Yoga',
      warranty: '1 Month Warranty',
    },
    {
      id: 3,
      title: 'Mid-Range Laptops',
      description: 'For Professionals & Creators',
      startingPrice: '₹28,000',
      icon: <SpeedIcon />,
      color: '#FFEB3B', // Light Yellow
      bgColor: '#FFF9C4',
      textColor: '#212121',
      specs: [
        'Intel Core i7 / AMD Ryzen 7',
        '16GB RAM',
        '512GB - 1TB NVMe SSD',
        'Full HD/2K Display',
        'Dedicated Graphics',
        'Premium Build Quality',
      ],
      bestFor: 'Content Creators, Programmers, Designers, Business Professionals',
      brands: 'Dell Latitude, HP EliteBook, Lenovo ThinkPad',
      warranty: '1 Month Warranty',
    },
    {
      id: 4,
      title: 'Commercial Laptops',
      description: 'For Business & Corporate',
      startingPrice: '₹30,000',
      icon: <BusinessIcon />,
      color: '#9C27B0', // Purple
      bgColor: '#9C27B0',
      textColor: '#ffffff',
      specs: [
        'Intel Core i5/i7 vPro',
        '8GB - 32GB RAM',
        '256GB - 1TB SSD',
        'Security Features (TPM, Fingerprint)',
        'Durable MIL-STD Certified',
        'Windows 10/11 Pro',
      ],
      bestFor: 'Corporate Use, Remote Work, Business Applications',
      brands: 'Dell Latitude, HP ProBook, Lenovo ThinkPad',
      warranty: '1 Month Warranty',
    },
    {
      id: 5,
      title: 'Gaming Laptops',
      description: 'For Gamers & High Performance',
      startingPrice: '₹35,000',
      icon: <VideogameAssetIcon />,
      color: '#F44336', // Red
      bgColor: '#F44336',
      textColor: '#ffffff',
      specs: [
        'Intel Core i7/i9 / AMD Ryzen 7/9',
        '16GB - 32GB RAM',
        '512GB - 2TB SSD',
        'NVIDIA GTX/RTX Graphics',
        '120Hz+ Refresh Rate Display',
        'RGB Keyboard',
      ],
      bestFor: 'Gaming, Video Editing, 3D Rendering, Streamers',
      brands: 'ASUS ROG, MSI, Alienware, HP Omen',
      warranty: '1 Month Warranty',
    },
    {
      id: 6,
      title: 'Premium Laptops',
      description: 'For Executives & Luxury',
      startingPrice: '₹50,000',
      icon: <DiamondIcon />,
      color: '#B8860B', // Dark Golden
      bgColor: '#FFD700',
      textColor: '#212121',
      specs: [
        'Latest Intel/AMD Processors',
        '16GB - 64GB RAM',
        '1TB - 4TB SSD',
        '4K OLED Touch Display',
        'Ultra-Thin & Lightweight',
        'Premium Materials',
      ],
      bestFor: 'Executives, Creative Professionals, Tech Enthusiasts',
      brands: 'Apple MacBook, Dell XPS, Microsoft Surface, HP Spectre',
      warranty: '1 Month Warranty',
    },
  ];

  const handleOpenModal = (category) => {
    setSelectedCategory(category);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCategory(null);
  };

  const handleContactButton = () => {
    handleCloseModal();
  };

  // Bubble Effect for White Background Area
  const WhiteBackgroundBubbles = () => (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Large floating bubbles with different colors and animations */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(33, 150, 243, 0.08), rgba(33, 150, 243, 0.02))',
          animation: 'bubbleFloatLarge 25s ease-in-out infinite',
          filter: 'blur(2px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          right: '8%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 60% 40%, rgba(76, 175, 80, 0.06), rgba(76, 175, 80, 0.01))',
          animation: 'bubbleFloatMedium 30s ease-in-out infinite 5s',
          filter: 'blur(2px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 60%, rgba(255, 235, 59, 0.05), rgba(255, 235, 59, 0))',
          animation: 'bubbleFloatLarge 28s ease-in-out infinite 10s',
          filter: 'blur(2px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          left: '20%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 70% 30%, rgba(156, 39, 176, 0.04), rgba(156, 39, 176, 0))',
          animation: 'bubbleFloatSmall 20s ease-in-out infinite 3s',
          filter: 'blur(1px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 70%, rgba(244, 67, 54, 0.07), rgba(244, 67, 54, 0.01))',
          animation: 'bubbleFloatMedium 35s ease-in-out infinite 7s',
          filter: 'blur(2px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '20%',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.04), rgba(255, 215, 0, 0))',
          animation: 'bubbleFloatSmall 22s ease-in-out infinite 12s',
          filter: 'blur(1px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '40%',
          left: '25%',
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 20% 80%, rgba(33, 150, 243, 0.03), rgba(33, 150, 243, 0))',
          animation: 'bubbleFloatLarge 32s ease-in-out infinite 15s',
          filter: 'blur(2px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '70%',
          right: '25%',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 80% 20%, rgba(76, 175, 80, 0.03), rgba(76, 175, 80, 0))',
          animation: 'bubbleFloatSmall 18s ease-in-out infinite 8s',
          filter: 'blur(1px)',
        }}
      />
      <style>
        {`
          @keyframes bubbleFloatLarge {
            0%, 100% {
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
            25% {
              transform: translate(30px, -20px) scale(1.05) rotate(90deg);
            }
            50% {
              transform: translate(-20px, 30px) scale(0.95) rotate(180deg);
            }
            75% {
              transform: translate(-30px, -15px) scale(1.02) rotate(270deg);
            }
          }
          @keyframes bubbleFloatMedium {
            0%, 100% {
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
            33% {
              transform: translate(25px, -15px) scale(1.08) rotate(120deg);
            }
            66% {
              transform: translate(-15px, 25px) scale(0.92) rotate(240deg);
            }
          }
          @keyframes bubbleFloatSmall {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(20px, -10px) scale(1.1);
            }
          }
        `}
      </style>
    </Box>
  );

  const CategoryCard = ({ category }) => (
    <Box sx={{ 
      position: 'relative',
      width: '100%',
      maxWidth: '400px',
      height: '340px',
    }}>
      <Card 
        sx={{ 
          height: '320px',
          width: '100%',
          minWidth: '300px',
          display: 'flex',
          flexDirection: 'column',
          animation: 'float 3s ease-in-out infinite',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-12px)',
            boxShadow: 8,
            animation: 'none',
          },
          border: `3px solid ${category.color}40`,
          overflow: 'hidden',
          borderRadius: '12px',
          position: 'relative',
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(4px)',
          '@keyframes float': {
            '0%': {
              transform: 'translateY(0px)',
            },
            '50%': {
              transform: 'translateY(-10px)',
            },
            '100%': {
              transform: 'translateY(0px)',
            },
          },
        }}
      >
        <CardActionArea 
          onClick={() => handleOpenModal(category)} 
          sx={{ 
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            p: 0,
          }}
        >
          {/* Color bar at top */}
          <Box sx={{ 
            height: '10px',
            width: '100%',
            bgcolor: category.color,
            position: 'relative',
            zIndex: 2,
          }} />
          
          <CardContent sx={{ 
            p: 4, 
            textAlign: 'center',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            position: 'relative',
            zIndex: 2,
          }}>
            {/* Icon and Title Section */}
            <Box>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 3,
                color: category.color,
                position: 'relative',
                '& svg': {
                  fontSize: '3.5rem',
                  animation: 'pulse 2s infinite',
                  position: 'relative',
                  zIndex: 2,
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80px',
                  height: '80px',
                  background: `radial-gradient(circle, ${alpha(category.color, 0.1)} 0%, transparent 70%)`,
                  borderRadius: '50%',
                  animation: 'ripple 3s ease-out infinite',
                  zIndex: 1,
                  '@keyframes ripple': {
                    '0%': {
                      transform: 'translate(-50%, -50%) scale(0.8)',
                      opacity: 0.7,
                    },
                    '100%': {
                      transform: 'translate(-50%, -50%) scale(1.2)',
                      opacity: 0,
                    },
                  },
                },
                '@keyframes pulse': {
                  '0%': {
                    transform: 'scale(1)',
                  },
                  '50%': {
                    transform: 'scale(1.1)',
                  },
                  '100%': {
                    transform: 'scale(1)',
                  },
                }
              }}>
                {category.icon}
              </Box>
              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom 
                fontWeight="bold"
                sx={{ 
                  minHeight: '72px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1.3,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {category.title}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                gutterBottom
                sx={{ 
                  fontSize: '1rem',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {category.description}
              </Typography>
            </Box>

            {/* Price Section */}
            <Box sx={{ 
              mt: 'auto', 
              pt: 2,
              position: 'relative',
              zIndex: 2,
            }}>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                gutterBottom
                sx={{ fontSize: '1rem' }}
              >
                Starting from
              </Typography>
              <Typography 
                variant="h4" 
                fontWeight="bold"
                sx={{ 
                  color: category.color,
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  animation: 'priceGlow 2s ease-in-out infinite',
                  textShadow: `0 2px 4px ${alpha(category.color, 0.2)}`,
                  '@keyframes priceGlow': {
                    '0%, 100%': {
                      textShadow: `0 2px 4px ${alpha(category.color, 0.2)}`,
                    },
                    '50%': {
                      textShadow: `0 4px 8px ${alpha(category.color, 0.4)}`,
                    },
                  }
                }}
              >
                {category.startingPrice}
              </Typography>
              
              {/* 1 Month Warranty Badge */}
              <Box
                sx={{
                  mt: 2,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 0.5,
                  px: 2,
                  py: 0.5,
                  backgroundColor: alpha(category.color, 0.1),
                  borderRadius: '20px',
                  border: `1px solid ${alpha(category.color, 0.3)}`,
                  animation: 'warrantyPulse 3s ease-in-out infinite',
                  '@keyframes warrantyPulse': {
                    '0%, 100%': {
                      boxShadow: `0 0 0 0 ${alpha(category.color, 0.3)}`,
                    },
                    '50%': {
                      boxShadow: `0 0 0 3px ${alpha(category.color, 0.1)}`,
                    },
                  }
                }}
              >
                <CheckCircleIcon 
                  sx={{ 
                    fontSize: '0.9rem',
                    color: category.color,
                  }} 
                />
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  sx={{ color: category.color }}
                >
                  {category.warranty}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );

  return (
    <>
      {/* Hero Section - Dark Red Background */}
      <Box sx={{ 
        bgcolor: '#8B0000',
        color: 'white',
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: '70vh', md: '60vh' },
        display: 'flex',
        alignItems: 'center',
        animation: 'heroPulse 6s ease-in-out infinite',
        '@keyframes heroPulse': {
          '0%, 100%': {
            backgroundColor: '#8B0000',
          },
          '50%': {
            backgroundColor: '#A52A2A',
          },
        },
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            {/* Gradient Text */}
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontSize: { xs: '2.75rem', md: '4rem' },
                fontWeight: 'bold',
                mb: 4,
                lineHeight: 1.2,
                background: 'linear-gradient(90deg, #FF0000, #FFFF00, #FF0000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '300% 300%',
                animation: 'gradient 8s ease infinite',
                '@keyframes gradient': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                }
              }}
            >
              Certified Pre-Owned Laptops
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 5,
                opacity: 0.9,
                lineHeight: 1.6,
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Find the perfect refurbished laptop for your needs and budget. Every device is professionally tested and comes with warranty.
            </Typography>
            
            {/* Features Chips */}
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              sx={{ 
                justifyContent: 'center',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              <Chip 
                icon={<CheckCircleIcon />} 
                label="10-Point Quality Check" 
                sx={{ 
                  bgcolor: '#A52A2A',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  py: 2,
                  px: 2,
                  animation: 'chipBounce 3s ease-in-out infinite',
                  '& .MuiChip-icon': {
                    color: '#FFD700',
                    fontSize: '1.25rem',
                  },
                  '@keyframes chipBounce': {
                    '0%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '50%': {
                      transform: 'translateY(-5px)',
                    },
                  }
                }} 
              />
              <Chip 
                icon={<CheckCircleIcon />} 
                label="Warranty Included" 
                sx={{ 
                  bgcolor: '#A52A2A',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  py: 2,
                  px: 2,
                  animation: 'chipBounce 3s ease-in-out infinite 0.5s',
                  '& .MuiChip-icon': {
                    color: '#FFD700',
                    fontSize: '1.25rem',
                  },
                  '@keyframes chipBounce': {
                    '0%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '50%': {
                      transform: 'translateY(-5px)',
                    },
                  }
                }} 
              />
              <Chip 
                icon={<CheckCircleIcon />} 
                label="Money-Back Guarantee" 
                sx={{ 
                  bgcolor: '#A52A2A',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  py: 2,
                  px: 2,
                  animation: 'chipBounce 3s ease-in-out infinite 1s',
                  '& .MuiChip-icon': {
                    color: '#FFD700',
                    fontSize: '1.25rem',
                  },
                  '@keyframes chipBounce': {
                    '0%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '50%': {
                      transform: 'translateY(-5px)',
                    },
                  }
                }} 
              />
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Main Content with Bubble Background */}
      <Box sx={{ 
        position: 'relative',
        bgcolor: 'white',
        minHeight: '100vh',
        overflow: 'hidden',
      }}>
        {/* White Background Bubble Effect */}
        <WhiteBackgroundBubbles />
        
        <Container 
          maxWidth="lg" 
          sx={{ 
            py: 8,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Category Grid Section */}
          <Box sx={{ 
            mb: 10,
            position: 'relative',
            zIndex: 2,
          }}>
            <Typography 
              variant="h2"
              component="h2" 
              textAlign="center" 
              gutterBottom
              fontWeight="bold"
              color="#8B0000"
              sx={{ 
                mb: 2,
                fontSize: { xs: '2.25rem', md: '3rem' },
                animation: 'titleGlow 3s ease-in-out infinite',
                position: 'relative',
                zIndex: 2,
                '@keyframes titleGlow': {
                  '0%, 100%': {
                    textShadow: '0 0 10px rgba(139, 0, 0, 0.3)',
                  },
                  '50%': {
                    textShadow: '0 0 20px rgba(139, 0, 0, 0.6)',
                  },
                }
              }}
            >
              Browse By Category
            </Typography>
            <Typography 
              variant="h5" 
              textAlign="center" 
              color="text.secondary"
              sx={{ 
                mb: 8, 
                maxWidth: 700, 
                mx: 'auto',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                position: 'relative',
                zIndex: 2,
              }}
            >
              Select a category to explore our certified pre-owned laptops
            </Typography>
            
            {/* First Row - 3 boxes horizontally */}
            <Grid 
              container 
              spacing={4}
              sx={{ 
                mb: 6,
                justifyContent: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {categories.slice(0, 3).map((category, index) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  md={4} 
                  key={category.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`,
                    '@keyframes slideInUp': {
                      '0%': {
                        opacity: 0,
                        transform: 'translateY(50px)',
                      },
                      '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    }
                  }}
                >
                  <CategoryCard category={category} />
                </Grid>
              ))}
            </Grid>
            
            {/* Second Row - 3 boxes horizontally */}
            <Grid 
              container 
              spacing={4}
              sx={{ 
                justifyContent: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {categories.slice(3, 6).map((category, index) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  md={4} 
                  key={category.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    animation: `slideInUp 0.8s ease-out ${index * 0.2 + 0.6}s both`,
                    '@keyframes slideInUp': {
                      '0%': {
                        opacity: 0,
                        transform: 'translateY(50px)',
                      },
                      '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    }
                  }}
                >
                  <CategoryCard category={category} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Footer with Google Maps Links */}
      <Box
        component="footer"
        sx={{
          bgcolor: '#1a1a2e',
          color: '#ffffff',
          pt: 4,
          pb: 3,
          position: 'relative',
          overflow: 'hidden',
          borderTop: '4px solid #e74c3c',
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
          },
        }}
      >
        <Container maxWidth="lg">
          {/* Box 1: Visit Us Banner - Full Width */}
          <Box
            sx={{
              mb: 3,
              backgroundColor: 'rgba(231, 76, 60, 0.1)',
              borderRadius: 2,
              p: 3,
              minHeight: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(231, 76, 60, 0.2)',
              transition: 'all 0.3s ease',
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgba(231, 76, 60, 0.15)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box sx={{ textAlign: 'center', width: '100%' }}>
              <Typography
                variant="h4"
                sx={{
                  color: '#ffffff',
                  fontWeight: 700,
                  mb: 1.5,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Visit Us for Laptop Repairs
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#b0b0b0',
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                Walk into our store with your laptop for free diagnosis and expert repair services.
              </Typography>
            </Box>
          </Box>

          {/* Box 2: Fort Location - Full Width with Google Maps Link */}
          <Box
            sx={{
              mb: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 2,
              p: 3,
              minHeight: '120px',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(231, 76, 60, 0.2)',
              transition: 'all 0.3s ease',
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgba(231, 76, 60, 0.08)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(231, 76, 60, 0.1)',
                cursor: 'pointer',
              },
            }}
            onClick={() => openGoogleMaps('fort')}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%', gap: 3 }}>
              <Box
                sx={{
                  minWidth: 60,
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(231, 76, 60, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#e74c3c',
                }}
              >
                <PlaceIcon sx={{ fontSize: 28 }} />
              </Box>

              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#e74c3c',
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                    }}
                  >
                    Fort Location
                  </Typography>
                  <OpenInNewIcon 
                    sx={{ 
                      color: '#e74c3c',
                      fontSize: '1.2rem',
                      opacity: 0.7,
                    }} 
                  />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#b0b0b0',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    mb: 2,
                  }}
                >
                  Address: 1st Floor, 17A, Bahubali Bldg, Flora Fountain, 10/E, Cawasji Patel St, next to Vardhman Chambers, Kala Ghoda, Fort, Mumbai, Maharashtra 400001
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(52, 152, 219, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#3498db',
                      }}
                    >
                      <PhoneIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 500, fontSize: '1rem' }}>
                      Phone: 081697 98826
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#e74c3c',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    View on Maps
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Box 3: Vile Parle Location - Full Width with Google Maps Link */}
          <Box
            sx={{
              mb: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 2,
              p: 3,
              minHeight: '120px',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(52, 152, 219, 0.2)',
              transition: 'all 0.3s ease',
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgba(52, 152, 219, 0.08)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(52, 152, 219, 0.1)',
                cursor: 'pointer',
              },
            }}
            onClick={() => openGoogleMaps('vileParle')}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%', gap: 3 }}>
              <Box
                sx={{
                  minWidth: 60,
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(52, 152, 219, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#3498db',
                }}
              >
                <PlaceIcon sx={{ fontSize: 28 }} />
              </Box>

              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#3498db',
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                    }}
                  >
                    Vile Parle Location
                  </Typography>
                  <OpenInNewIcon 
                    sx={{ 
                      color: '#3498db',
                      fontSize: '1.2rem',
                      opacity: 0.7,
                    }} 
                  />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#b0b0b0',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    mb: 2,
                  }}
                >
                  Address: 1st Floor, Prime Mall, F92/96, Alfa Market, Road, Naypada, Irla, Vile Parle West, Mumbai, Maharashtra 400056
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(52, 152, 219, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#3498db',
                      }}
                    >
                      <PhoneIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 500, fontSize: '1rem' }}>
                      Phone: 092233 33357
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#3498db',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    View on Maps
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Box 4: Working Hours - Full Width */}
          <Box
            sx={{
              mb: 3,
              backgroundColor: 'rgba(46, 204, 113, 0.1)',
              borderRadius: 2,
              p: 3,
              minHeight: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(46, 204, 113, 0.2)',
              transition: 'all 0.3s ease',
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgba(46, 204, 113, 0.15)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(46, 204, 113, 0.1)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: 4 }}>
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(46, 204, 113, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2ecc71',
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 32 }} />
              </Box>

              <Box sx={{ textAlign: 'left', flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#2ecc71',
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                  }}
                >
                  Working Hours
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: { xs: '1.4rem', md: '1.8rem' },
                  }}
                >
                  Mon-Sat: 11 AM - 7 PM
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    mt: 1,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Visit us during our business hours for immediate assistance
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Box 5: Copyright/Brand - Full Width */}
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 2,
              p: 3,
              minHeight: '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#ffffff',
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                background: 'linear-gradient(45deg, #e74c3c 30%, #ff7675 50%, #3498db 70%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '1px',
              }}
            >
              BRAINTONE
            </Typography>

            <Divider
              sx={{
                width: '200px',
                my: 2,
                backgroundColor: 'rgba(231, 76, 60, 0.5)',
                height: '2px',
              }}
            />

            <Typography
              variant="h6"
              sx={{
                color: '#b0b0b0',
                mb: 1,
                fontSize: { xs: '1rem', md: '1.1rem' },
                textAlign: 'center',
              }}
            >
              Expert Laptop Repair Services
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: { xs: '0.9rem', md: '1rem' },
                textAlign: 'center',
                mt: 1,
              }}
            >
              © 2024 BRAINTONE. All rights reserved.
            </Typography>
          </Box>

          {/* Bottom decorative line */}
          <Box
            sx={{
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #e74c3c 20%, #3498db 50%, #2ecc71 80%, transparent)',
              mt: 4,
              borderRadius: '2px',
            }}
          />
        </Container>
      </Box>

      {/* Popup Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="category-modal-title"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Paper
          sx={{
            width: isMobile ? '100%' : 800,
            maxHeight: '90vh',
            overflow: 'auto',
            borderRadius: 3,
            position: 'relative',
            animation: 'modalSlideIn 0.4s ease-out',
            '@keyframes modalSlideIn': {
              '0%': {
                opacity: 0,
                transform: 'scale(0.9) translateY(20px)',
              },
              '100%': {
                opacity: 1,
                transform: 'scale(1) translateY(0)',
              },
            }
          }}
        >
          {selectedCategory && (
            <>
              {/* Modal Header */}
              <Box sx={{ 
                p: 4, 
                bgcolor: selectedCategory.color,
                color: selectedCategory.textColor,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      bgcolor: alpha('#fff', 0.2),
                      p: 1,
                      borderRadius: 2,
                      animation: 'iconSpin 3s ease-in-out infinite',
                      '@keyframes iconSpin': {
                        '0%, 100%': {
                          transform: 'rotate(0deg)',
                        },
                        '25%': {
                          transform: 'rotate(-5deg)',
                        },
                        '75%': {
                          transform: 'rotate(5deg)',
                        },
                      }
                    }}>
                      {selectedCategory.icon}
                    </Box>
                    <Box>
                      <Typography variant="h4" component="h2" fontWeight="bold">
                        {selectedCategory.title}
                      </Typography>
                      <Typography variant="h6" sx={{ mt: 0.5, opacity: 0.9 }}>
                        {selectedCategory.description}
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton 
                    onClick={handleCloseModal} 
                    sx={{ 
                      color: selectedCategory.textColor,
                      bgcolor: alpha('#000', 0.1),
                      animation: 'closeBounce 2s ease-in-out infinite',
                      '&:hover': {
                        bgcolor: alpha('#000', 0.2),
                        animation: 'none',
                      },
                      '@keyframes closeBounce': {
                        '0%, 100%': {
                          transform: 'scale(1)',
                        },
                        '50%': {
                          transform: 'scale(1.1)',
                        },
                      }
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* Modal Content */}
              <Box sx={{ p: 4 }}>
                {/* Price Highlight */}
                <Box sx={{ 
                  textAlign: 'center', 
                  mb: 5,
                  p: 4,
                  bgcolor: alpha(selectedCategory.color, 0.1),
                  borderRadius: 3,
                  border: `2px dashed ${selectedCategory.color}`,
                  animation: 'priceBoxBounce 4s ease-in-out infinite',
                  '@keyframes priceBoxBounce': {
                    '0%, 100%': {
                      transform: 'scale(1)',
                    },
                    '50%': {
                      transform: 'scale(1.02)',
                    },
                  }
                }}>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Starting from
                  </Typography>
                  <Typography variant="h1" fontWeight="bold" color={selectedCategory.color}>
                    {selectedCategory.startingPrice}
                  </Typography>
                </Box>

                <Grid container spacing={4}>
                  {/* Left Column - Specs */}
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                      <CheckCircleIcon sx={{ mr: 1, color: selectedCategory.color }} />
                      Specifications
                    </Typography>
                    <List>
                      {selectedCategory.specs.map((spec, index) => (
                        <ListItem 
                          key={index} 
                          sx={{ 
                            px: 0,
                            animation: `listItemFade 0.5s ease-out ${index * 0.1}s both`,
                            '@keyframes listItemFade': {
                              '0%': {
                                opacity: 0,
                                transform: 'translateX(-20px)',
                              },
                              '100%': {
                                opacity: 1,
                                transform: 'translateX(0)',
                              },
                            }
                          }}
                        >
                          <ListItemIcon>
                            <CheckCircleIcon 
                              sx={{ 
                                color: selectedCategory.color,
                                animation: `checkPulse 2s ease-in-out ${index * 0.3}s infinite`,
                                '@keyframes checkPulse': {
                                  '0%, 100%': {
                                    transform: 'scale(1)',
                                  },
                                  '50%': {
                                    transform: 'scale(1.2)',
                                  },
                                }
                              }} 
                            />
                          </ListItemIcon>
                          <ListItemText 
                            primary={spec} 
                            primaryTypographyProps={{ fontWeight: 'medium' }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h5" gutterBottom fontWeight="bold">
                        <BusinessIcon sx={{ mr: 1, color: selectedCategory.color }} />
                        Popular Brands
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {selectedCategory.brands}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Right Column - Best For */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h5" gutterBottom fontWeight="bold">
                        <PeopleIcon sx={{ mr: 1, color: selectedCategory.color }} />
                        Best For
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {selectedCategory.bestFor}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* Warranty Section */}
                <Box sx={{ 
                  mt: 4,
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 5,
                }}>
                  <Box sx={{ 
                    p: 4, 
                    bgcolor: selectedCategory.color,
                    borderRadius: 3,
                    color: selectedCategory.textColor,
                    textAlign: 'center',
                    width: { xs: '100%', sm: '80%', md: '70%' },
                    maxWidth: '500px',
                    animation: 'warrantyBounce 5s ease-in-out infinite',
                    '@keyframes warrantyBounce': {
                      '0%, 100%': {
                        transform: 'translateY(0)',
                      },
                      '50%': {
                        transform: 'translateY(-5px)',
                      },
                    }
                  }}>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                      Warranty Included
                    </Typography>
                    <Typography variant="h3" fontWeight="bold">
                      {selectedCategory.warranty}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, opacity: 0.9 }}>
                      All our certified pre-owned laptops come with a comprehensive 1-month warranty
                    </Typography>
                  </Box>
                </Box>

                {/* Contact Us Button Section */}
                <Divider sx={{ my: 5 }} />
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography variant="h5" gutterBottom fontWeight="bold" color="#8B0000">
                    Want to Know More?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                    Contact our sales team for personalized recommendations and special offers
                  </Typography>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    onClick={handleContactButton}
                    size="large"
                    startIcon={<ContactPhoneIcon />}
                    sx={{ 
                      px: 6,
                      py: 1.5,
                      bgcolor: '#4CAF50',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      animation: 'contactButtonBounce 2s ease-in-out infinite',
                      '&:hover': {
                        bgcolor: '#388E3C',
                        animation: 'none',
                        transform: 'scale(1.05)',
                      },
                      '@keyframes contactButtonBounce': {
                        '0%, 100%': {
                          transform: 'scale(1)',
                        },
                        '50%': {
                          transform: 'scale(1.05)',
                        },
                      }
                    }}
                  >
                    CONTACT US
                  </Button>
                </Box>

                {/* Store Visit Section with Google Maps Links */}
                <Divider sx={{ my: 5 }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" gutterBottom fontWeight="bold" color="#8B0000">
                    For Hands-On Experience Visit Our Stores
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                    See and feel the quality of our certified pre-owned laptops in person
                  </Typography>
                  
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                    <Button
                      variant="outlined"
                      startIcon={<PlaceIcon />}
                      onClick={() => openGoogleMaps('fort')}
                      sx={{ 
                        color: '#e74c3c',
                        borderColor: '#e74c3c',
                        '&:hover': {
                          backgroundColor: 'rgba(231, 76, 60, 0.1)',
                          borderColor: '#e74c3c',
                        }
                      }}
                    >
                      Fort Location
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<PlaceIcon />}
                      onClick={() => openGoogleMaps('vileParle')}
                      sx={{ 
                        color: '#3498db',
                        borderColor: '#3498db',
                        '&:hover': {
                          backgroundColor: 'rgba(52, 152, 219, 0.1)',
                          borderColor: '#3498db',
                        }
                      }}
                    >
                      Vile Parle Location
                    </Button>
                  </Stack>
                  
                  <Button
                    variant="contained"
                    onClick={handleCloseModal}
                    size="large"
                    sx={{ 
                      px: 6,
                      py: 1.5,
                      bgcolor: '#8B0000',
                      color: 'white',
                      fontWeight: 'bold',
                      '&:hover': {
                        bgcolor: '#A52A2A',
                      }
                    }}
                  >
                    CLOSE
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Paper>
      </Modal>
    </>
  );
};

export default SecondHand;