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
import MonitorIcon from '@mui/icons-material/Monitor';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

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
    {
      id: 7,
      title: 'Demo Units',
      description: 'Used for demonstrations, as good as new',
      startingPrice: '₹25,000',
      icon: <MonitorIcon />,
      color: '#E91E63', // Pink
      bgColor: '#FCE4EC',
      textColor: '#212121',
      specs: [
        'Latest Generation Processors',
        '8GB - 16GB RAM',
        '256GB - 512GB SSD',
        'Pristine Condition',
        'Full Brand Warranty (Varies)',
        'Original Box & Accessories',
      ],
      bestFor: 'Users looking for brand new experience at Lower Price',
      brands: 'All Leading Brands',
      warranty: 'Full Support & Warranty',
    },
    {
      id: 8,
      title: 'Display Units',
      description: 'Ex-Display store models, Great value',
      startingPrice: '₹20,000',
      icon: <ImportantDevicesIcon />,
      color: '#FF5722', // Deep Orange
      bgColor: '#FBE9E7',
      textColor: '#212121',
      specs: [
        'High-End Specifications',
        'Minor Cosmetic Imperfections',
        'Fully Tested & Certified',
        'Excellent Reliability',
        'Highly Competitive Pricing',
        'Latest Tech for Less',
      ],
      bestFor: 'Budget conscious buyers wanting High-End Tech',
      brands: 'Major Brand Store Models',
      warranty: 'Certified Performance',
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
          willChange: 'transform',
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
          willChange: 'transform',
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
      '&:hover .category-card': {
        transform: 'translateY(-12px)',
        boxShadow: 8,
        animation: 'none',
      },
    }}>
      <Card
        className="category-card"
        sx={{
          height: '320px',
          width: '100%',
          minWidth: '300px',
          display: 'flex',
          flexDirection: 'column',
          animation: 'float 3s ease-in-out infinite',
          transition: 'transform 0.3s, box-shadow 0.3s',
          border: `3px solid ${category.color}40`,
          overflow: 'hidden',
          borderRadius: '12px',
          position: 'relative',
          zIndex: 2,
          backgroundColor: 'background.paper',
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


      {/* Hero Section - Clean Background Image - Very Little Short */}
      <FadeInSection fullWidth>
        <Box sx={{
          position: 'relative',
          color: 'white',
          py: { xs: 10, md: 12 },
          textAlign: 'center',
          overflow: 'hidden',
          minHeight: { xs: '65vh', md: '55vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1650820497643-84dfad23d039?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.8)',
            zIndex: 0,
            transform: 'scale(1.05)',
          },
        }}>

          {/* Add CSS keyframes directly */}
          <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-9px); }
    }
  `}</style>

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', py: 3.5 }}>
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                fontWeight: 900,
                fontSize: { xs: '2.3rem', md: '3.1rem' },
                letterSpacing: '-1.1px',
                color: 'white',
                textShadow: '0 4px 12px rgba(0,0,0,0.7)',
                lineHeight: 1.1,
                mb: 2.5,
                animation: 'float 4s ease-in-out infinite',
              }}
            >
              Certified Refurbished Laptops
            </Typography>

            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 400,
                fontSize: { xs: '1.05rem', md: '1.25rem' },
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.45,
                textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                letterSpacing: '0.23px',
                mb: 3.5,
              }}
            >
              Professionally tested refurbished laptops with warranty
            </Typography>

            {/* Features Chips - Slightly smaller */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.8}
              sx={{
                justifyContent: 'center',
                maxWidth: '730px',
                mx: 'auto',
              }}
            >
              <Chip
                icon={<CheckCircleIcon />}
                label="10-Point Quality Check"
                sx={{
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.93rem',
                  py: 1.3,
                  px: 1.8,
                  animation: 'float 3s ease-in-out infinite',
                  '& .MuiChip-icon': {
                    color: '#FFD700',
                    fontSize: '1.1rem',
                  },
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              />
              <Chip
                icon={<CheckCircleIcon />}
                label="Warranty Included"
                sx={{
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.93rem',
                  py: 1.3,
                  px: 1.8,
                  animation: 'float 3s ease-in-out infinite 0.5s',
                  '& .MuiChip-icon': {
                    color: '#FFD700',
                    fontSize: '1.1rem',
                  },
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              />
              <Chip
                icon={<CheckCircleIcon />}
                label="Money-Back Guarantee"
                sx={{
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.93rem',
                  py: 1.3,
                  px: 1.8,
                  animation: 'float 3s ease-in-out infinite 1s',
                  '& .MuiChip-icon': {
                    color: '#FFD700',
                    fontSize: '1.1rem',
                  },
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              />
            </Stack>
          </Container>
        </Box>
      </FadeInSection>

      {/* Red Moving Rail (Marquee) */}
      <Box sx={{
        bgcolor: '#e74c3c',
        color: 'white',
        py: 1.5,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        zIndex: 10,
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}>
        <Box sx={{
          display: 'inline-block',
          animation: 'marquee 30s linear infinite',
          '& span': {
            mx: 4,
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }
        }}>
          <span>✨ PREMIUM DEMO & DISPLAY UNITS NOW AVAILABLE AT UNBEATABLE PRICES! VISIT BRAINTONE STORES FOR EXCLUSIVE DEALS! ✨</span>
          <span>✨ PREMIUM DEMO & DISPLAY UNITS NOW AVAILABLE AT UNBEATABLE PRICES! VISIT BRAINTONE STORES FOR EXCLUSIVE DEALS! ✨</span>
          <span>✨ PREMIUM DEMO & DISPLAY UNITS NOW AVAILABLE AT UNBEATABLE PRICES! VISIT BRAINTONE STORES FOR EXCLUSIVE DEALS! ✨</span>
        </Box>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}</style>
      </Box>

      {/* Main Content with Bubble Background */}
      <Box sx={{
        position: 'relative',
        bgcolor: 'background.default',
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
          <FadeInSection>
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
                Select a category to explore our certified refurbished laptops
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
                    }}
                  >
                    <CategoryCard category={category} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </FadeInSection>
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
            width: isMobile ? '95%' : 800,
            maxHeight: '90vh',
            overflow: 'auto',
            borderRadius: 3,
            position: 'relative',
            m: 2,
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
                p: { xs: 2.5, sm: 4 },
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
                      <Typography variant={isMobile ? "h5" : "h4"} component="h2" fontWeight="bold">
                        {selectedCategory.title}
                      </Typography>
                      <Typography variant={isMobile ? "body1" : "h6"} sx={{ mt: 0.5, opacity: 0.9 }}>
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

              <Box sx={{ p: { xs: 2, sm: 4 } }}>
                {/* Price Highlight */}
                <Box sx={{
                  textAlign: 'center',
                  mb: { xs: 3, sm: 5 },
                  p: { xs: 3, sm: 4 },
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
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    Starting from
                  </Typography>
                  <Typography variant={isMobile ? "h3" : "h1"} fontWeight="bold" color={selectedCategory.color}>
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
                    p: { xs: 3, sm: 4 },
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
                    <Typography variant={isMobile ? "h6" : "h5"} gutterBottom fontWeight="bold">
                      Warranty Included
                    </Typography>
                    <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold">
                      {selectedCategory.warranty}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                      All our certified refurbished laptops come with a comprehensive 1-month warranty
                    </Typography>
                  </Box>
                </Box>

                {/* Contact Us Button Section */}
                <Divider sx={{ my: { xs: 3, sm: 5 } }} />
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography variant={isMobile ? "h6" : "h5"} gutterBottom fontWeight="bold" color="brandRed.main">
                    Want to Know More?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
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
                  <Typography variant={isMobile ? "h5" : "h4"} gutterBottom fontWeight="bold" color="brandRed.main">
                    For Hands-On Experience Visit Our Stores
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
                    See and feel the quality of our certified refurbished laptops in person
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
                      bgcolor: 'brandRed.main',
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
      <Footer fullFooter={true} />
    </>
  );
};

export default SecondHand;