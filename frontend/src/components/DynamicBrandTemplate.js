import React, { useState, useEffect, useMemo } from 'react';
import API_BASE_URL from '../apiConfig';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
  alpha,
  Stack,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import {
  Memory,
  Storage,
  Monitor,
  Business,
  School,
  WorkspacePremium,
  VideogameAsset,
  DisplaySettings,
  ArrowForward,
  Close,
  LocationOn,
  Phone,
  CheckCircle,
  LocalShipping,
  SupportAgent,
  VerifiedUser,
} from '@mui/icons-material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Footer from './Footer';
import FadeInSection from './FadeInSection';

// Animations
const gradientText = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const scrollLeftToRight = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// Helper functions
const getBrandName = (brandId) => {
  const brands = {
    'dell': 'Dell',
    'hp': 'HP',
    'lenovo': 'Lenovo',
    'asus': 'ASUS',
    'acer': 'Acer',
    'apple': 'Apple',
    'msi': 'MSI',
    'samsung': 'Samsung Galaxy',
    'microsoft': 'Microsoft'
  };
  return brands[brandId] || brandId.toUpperCase();
};

// Get brand accent color for series tabs
const getBrandAccentColor = (brandId, theme) => {
  const brandColors = {
    'dell': theme.palette.mode === 'dark' ? '#33abff' : '#007DB8',
    'hp': theme.palette.mode === 'dark' ? '#33b5f7' : '#0096D6',
    'lenovo': '#E2231A',
    'asus': '#B71C1C',
    'acer': theme.palette.mode === 'dark' ? '#aed581' : '#83B81A',
    'apple': theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    'msi': '#FF0000',
    'samsung': theme.palette.mode === 'dark' ? '#3f51b5' : '#1428A0',
    'microsoft': theme.palette.mode === 'dark' ? '#4dabf5' : '#0078D4'
  };
  return brandColors[brandId] || '#007DB8';
};

// Brand-specific colors for hero header
const getBrandColors = (brandId, theme) => {
  const brandColors = {
    'dell': {
      gradient: 'linear-gradient(135deg, #007DB8 0%, #005A8A 50%, #003B5C 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #90E0EF, #FFFFFF)',
      accentColor: theme.palette.mode === 'dark' ? '#33abff' : '#007DB8'
    },
    'hp': {
      gradient: 'linear-gradient(135deg, #0096D6 0%, #0077B3 50%, #005A8A 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #B3E5FC, #FFFFFF)',
      accentColor: theme.palette.mode === 'dark' ? '#33b5f7' : '#0096D6'
    },
    'lenovo': {
      gradient: 'linear-gradient(135deg, #E2231A 0%, #B71C1C 50%, #8B0000 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #FFCDD2, #FFFFFF)',
      accentColor: '#E2231A'
    },
    'asus': {
      gradient: 'linear-gradient(135deg, #B71C1C 0%, #8B0000 50%, #660000 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #FFCDD2, #FFFFFF)',
      accentColor: '#B71C1C'
    },
    'acer': {
      gradient: 'linear-gradient(135deg, #83B81A 0%, #6A9A15 50%, #4A6B0F 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #E8F5E9, #FFFFFF)',
      accentColor: theme.palette.mode === 'dark' ? '#aed581' : '#83B81A'
    },
    'apple': {
      gradient: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #2D2D2D 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #E0E0E0, #FFFFFF)',
      accentColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000'
    },
    'msi': {
      gradient: 'linear-gradient(135deg, #FF0000 0%, #CC0000 50%, #990000 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #FFCDD2, #FFFFFF)',
      accentColor: '#FF0000'
    },
    'samsung': {
      gradient: 'linear-gradient(135deg, #1428A0 0%, #0F1F7A 50%, #0A1554 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #C5CAE9, #FFFFFF)',
      accentColor: theme.palette.mode === 'dark' ? '#3f51b5' : '#1428A0'
    },
    'microsoft': {
      gradient: 'linear-gradient(135deg, #0078D4 0%, #005A9E 50%, #003D6B 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #B3E5FC, #FFFFFF)',
      accentColor: theme.palette.mode === 'dark' ? '#4dabf5' : '#0078D4'
    }
  };
  return brandColors[brandId] || brandColors['dell'];
};


// Laptop Details Modal Component
// Complete Updated LaptopDetailsModal Component
const LaptopDetailsModal = ({ open, onClose, laptop, category, brandId }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeImage, setActiveImage] = useState(0);

  // Reset active image when laptop changes
  useEffect(() => {
    setActiveImage(0);
  }, [laptop]);

  if (!laptop) return null;

  const getImagePath = (img) => {
    if (!img) return '/placeholder.png';
    return img.startsWith('http') ? img : `${API_BASE_URL}${img}`;
  };

  const images = (Array.isArray(laptop.images) && laptop.images.length > 0)
    ? laptop.images.filter(Boolean).map(getImagePath)
    : [getImagePath(laptop.image)];

  // DEBUG: console.log('Modal Laptop:', laptop);
  // DEBUG: console.log('Resolved Images:', images);

  const storeLocations = [
    {
      name: "Fort Store",
      address: "Head office: 10/E, 1st floor, 17A, Patel building / Bahubali building, Fort, Mumbai - 400001 | \nShowroom: Ground floor, 17A, Patel building / Bahubali building, Fort, Mumbai-400001",
      phone: "+91 9820119113",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Braintone+17A+Bahubali+Building+Flora+Fountain+Fort+Mumbai",
      timings: "11:00 AM - 7:00 PM (Monday to Saturday)"
    },
    {
      name: "Vile Parle Store",
      address: "Showroom: Prime Mall, 1st Floor, Off:no 92/96, opp To Alfa no. 1, Irla Road, Vile parle(w)",
      phone: "+91 9819401313",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+Prime+Mall+Irla+Vile+Parle+West+Mumbai",
      timings: "11:00 AM - 7:00 PM (Monday to Sunday)" // Updated timing
    }
  ];

  const laptopFeatures = [
    "Original laptop with all accessories",
    "6 months warranty on parts",
    "Free technical support",
    "Available for demo at store",
    "Cash on delivery available",
    "Exchange offer available"
  ];

  const services = [
    {
      icon: <LocalShipping />,
      title: "Free Delivery",
      description: "Free delivery within Mumbai for orders above ₹10,000",
      color: theme.palette.mode === 'dark' ? '#60a5fa' : '#3B82F6'
    },
    {
      icon: <SupportAgent />,
      title: "24/7 Support",
      description: "Technical support available round the clock",
      color: theme.palette.mode === 'dark' ? '#34d399' : '#10B981'
    },
    {
      icon: <VerifiedUser />,
      title: "Genuine Warranty",
      description: "All laptops come with manufacturer warranty",
      color: theme.palette.mode === 'dark' ? '#fbbf24' : '#F59E0B'
    }
  ];

  const handleContactClick = () => {
    onClose();
    navigate('/contact');
  };

  const handleStoreClick = (googleMapsUrl) => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxHeight: '90vh',
          overflow: 'hidden',
          width: '100%'
        }
      }}
    >
      <DialogTitle sx={{
        m: 0,
        p: 3,
        backgroundColor: alpha(category?.color || '#3B82F6', 0.08),
        borderBottom: `2px solid ${alpha(category?.color || '#3B82F6', 0.2)}`
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: category?.color || '#3B82F6' }}>
            {laptop.name} — Complete Details
          </Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: alpha(category?.color || '#3B82F6', 0.1)
              }
            }}
          >
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers sx={{ p: 0, overflowY: 'auto' }}>
        <Box sx={{ p: { xs: 2, md: 3 } }}>
          {/* Multi-Image Gallery */}
          <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
            {/* Thumbnails Sidebar */}
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              gap: 2,
              order: { xs: 2, md: 1 },
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              {images.map((img, index) => (
                <Box
                  key={index}
                  onMouseEnter={() => setActiveImage(index)}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    border: activeImage === index ? `2px solid ${category?.color || '#3B82F6'}` : '2px solid transparent',
                    borderColor: activeImage === index ? (category?.color || '#3B82F6') : 'divider',
                    padding: '4px',
                    cursor: 'pointer',
                    bgcolor: 'background.paper',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: category?.color || '#3B82F6',
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`${laptop.name} thumb ${index + 1}`}
                    sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </Box>
              ))}
            </Box>

            {/* Main Image Display */}
            <Box sx={{
              flex: 1,
              height: { xs: 200, md: 350 }, // Reduced from 300/450
              bgcolor: 'background.paper',
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 2, md: 4 }, // Responsive padding
              order: { xs: 1, md: 2 }
            }}>
              <Box
                component="img"
                src={images[activeImage]}
                alt={laptop.name}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  transition: 'opacity 0.3s ease'
                }}
              />
            </Box>
          </Box>
          {/* Price and Category */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{
              fontWeight: 800,
              color: category?.color || '#3B82F6',
              mb: 1,
              fontSize: { xs: '1.75rem', md: '2rem' }
            }}>
              {laptop.price}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
              <Chip
                label={`⭐ Best for: ${laptop.bestFor}`}
                sx={{
                  backgroundColor: alpha(category?.color || '#3B82F6', 0.1),
                  color: category?.color || '#3B82F6',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', md: '0.9rem' }
                }}
              />
              <Chip
                label={category?.name || "Laptop"}
                sx={{
                  backgroundColor: alpha(category?.color || '#3B82F6', 0.2),
                  color: category?.color || '#3B82F6',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', md: '0.9rem' }
                }}
              />
              <Chip
                label={getBrandName(brandId)}
                sx={{
                  backgroundColor: alpha('#666666', 0.1),
                  color: '#666666',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', md: '0.9rem' }
                }}
              />
            </Box>
          </Box>

          {/* Key Specifications */}
          <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, mb: 4, backgroundColor: 'action.hover' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              ⚙️ Key Specifications
            </Typography>
            <Grid container spacing={2}>
              {/* Prioritize New structured fields */}
              {laptop.os && (
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5, borderRadius: 1, backgroundColor: alpha('#000000', 0.01), height: '100%' }}>
                    <CheckCircle sx={{ fontSize: '1.2rem', color: category?.color || '#3B82F6', flexShrink: 0, mt: 0.25 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>OS:</strong> {laptop.os}
                    </Typography>
                  </Box>
                </Grid>
              )}
              {laptop.processor && (
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5, borderRadius: 1, backgroundColor: alpha('#000000', 0.01), height: '100%' }}>
                    <CheckCircle sx={{ fontSize: '1.2rem', color: category?.color || '#3B82F6', flexShrink: 0, mt: 0.25 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>Processor:</strong> {laptop.processor}
                    </Typography>
                  </Box>
                </Grid>
              )}
              {laptop.ram && (
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5, borderRadius: 1, backgroundColor: alpha('#000000', 0.01), height: '100%' }}>
                    <CheckCircle sx={{ fontSize: '1.2rem', color: category?.color || '#3B82F6', flexShrink: 0, mt: 0.25 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>RAM:</strong> {laptop.ram}
                    </Typography>
                  </Box>
                </Grid>
              )}
              {laptop.storage && (
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5, borderRadius: 1, backgroundColor: alpha('#000000', 0.01), height: '100%' }}>
                    <CheckCircle sx={{ fontSize: '1.2rem', color: category?.color || '#3B82F6', flexShrink: 0, mt: 0.25 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>Storage:</strong> {laptop.storage}
                    </Typography>
                  </Box>
                </Grid>
              )}
              {laptop.graphics && (
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5, borderRadius: 1, backgroundColor: alpha('#000000', 0.01), height: '100%' }}>
                    <CheckCircle sx={{ fontSize: '1.2rem', color: category?.color || '#3B82F6', flexShrink: 0, mt: 0.25 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>Graphics:</strong> {laptop.graphics}
                    </Typography>
                  </Box>
                </Grid>
              )}
              {laptop.display && (
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5, borderRadius: 1, backgroundColor: alpha('#000000', 0.01), height: '100%' }}>
                    <CheckCircle sx={{ fontSize: '1.2rem', color: category?.color || '#3B82F6', flexShrink: 0, mt: 0.25 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>Display:</strong> {laptop.display}
                    </Typography>
                  </Box>
                </Grid>
              )}
              {laptop.keyboard && (
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5, borderRadius: 1, backgroundColor: alpha('#000000', 0.01), height: '100%' }}>
                    <CheckCircle sx={{ fontSize: '1.2rem', color: category?.color || '#3B82F6', flexShrink: 0, mt: 0.25 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>Keyboard:</strong> {laptop.keyboard}
                    </Typography>
                  </Box>
                </Grid>
              )}
              {laptop.color && (
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5, borderRadius: 1, backgroundColor: alpha('#000000', 0.01), height: '100%' }}>
                    <CheckCircle sx={{ fontSize: '1.2rem', color: category?.color || '#3B82F6', flexShrink: 0, mt: 0.25 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>Color:</strong> {laptop.color}
                    </Typography>
                  </Box>
                </Grid>
              )}
              {laptop.warranty && (
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5, borderRadius: 1, backgroundColor: alpha('#000000', 0.01), height: '100%' }}>
                    <CheckCircle sx={{ fontSize: '1.2rem', color: category?.color || '#3B82F6', flexShrink: 0, mt: 0.25 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>Warranty:</strong> {laptop.warranty}
                    </Typography>
                  </Box>
                </Grid>
              )}

              {/* Remaining generic specs */}
              {laptop.specs?.map((spec, index) => (
                <Grid item xs={12} sm={6} key={`spec-${index}`}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    p: 1.5,
                    borderRadius: 1,
                    backgroundColor: alpha('#000000', 0.01),
                    height: '100%'
                  }}>
                    <CheckCircle sx={{
                      fontSize: '1.2rem',
                      color: category?.color || '#3B82F6',
                      flexShrink: 0,
                      mt: 0.25
                    }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      {spec}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Features */}
          <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, mb: 4, backgroundColor: 'action.hover' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              ✨ What's Included
            </Typography>
            <Grid container spacing={2}>
              {laptopFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    p: 1,
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: alpha('#10B981', 0.05)
                    }
                  }}>
                    <CheckCircle sx={{
                      fontSize: '1rem',
                      color: '#10B981',
                      flexShrink: 0
                    }} />
                    <Typography variant="body2" sx={{ fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                      {feature}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Services - Three horizontal boxes */}
          <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, mb: 4, backgroundColor: 'action.hover' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              🛡️ Our Services
            </Typography>
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      height: '100%',
                      minHeight: 180,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: `1px solid ${alpha(service.color, 0.2)}`,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 16px ${alpha(service.color, 0.15)}`,
                        borderColor: alpha(service.color, 0.4)
                      }
                    }}
                  >
                    <Box sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: alpha(service.color, 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      color: service.color,
                      fontSize: '1.5rem'
                    }}>
                      {service.icon}
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{
                      color: 'text.secondary',
                      flex: 1,
                      fontSize: { xs: '0.85rem', md: '0.9rem' },
                      lineHeight: 1.4
                    }}>
                      {service.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Store Locations - Clickable for Google Maps */}
          {/* Store Locations - FIXED: Equal height boxes with CSS Grid */}
          <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, backgroundColor: 'action.hover' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              🏪 Visit Our Stores
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
              Visit our stores for hands-on demo, expert consultation, and immediate purchase. Our staff will help you choose the perfect laptop for your needs.
            </Typography>

            {/* FIXED: CSS Grid for guaranteed equal height */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)'
              },
              gap: 3,
              alignItems: 'stretch'
            }}>
              {storeLocations.map((store, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  onClick={() => window.open(store.googleMapsUrl, '_blank', 'noopener,noreferrer')}
                  sx={{
                    p: 3,
                    height: '100%', // Important: 100% height of grid cell
                    display: 'flex',
                    flexDirection: 'column',
                    border: `2px solid ${alpha(category?.color || '#3B82F6', 0.2)}`,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: 4,
                      backgroundColor: category?.color || '#3B82F6'
                    },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 20px ${alpha(category?.color || '#3B82F6', 0.2)}`,
                      borderColor: category?.color || '#3B82F6',
                      backgroundColor: alpha(category?.color || '#3B82F6', 0.03)
                    }
                  }}
                >
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 2,
                    flexShrink: 0
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: category?.color || '#3B82F6' }}>
                      {store.name}
                    </Typography>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      backgroundColor: alpha('#3B82F6', 0.1),
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      border: `1px solid ${alpha('#3B82F6', 0.3)}`
                    }}>
                      <Typography variant="caption" sx={{ fontWeight: 600, color: '#3B82F6', fontSize: '0.75rem' }}>
                        Open in Maps
                      </Typography>
                      <ArrowForward sx={{
                        fontSize: '0.8rem',
                        color: '#3B82F6',
                        transform: 'rotate(-45deg)'
                      }} />
                    </Box>
                  </Box>

                  {/* Address section - FIXED: Equal height */}
                  <Box sx={{
                    flex: 1, // This makes it take equal space
                    mb: 2.5,
                    minHeight: 0 // Important for flex to work properly
                  }}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      height: '100%'
                    }}>
                      <LocationOn sx={{
                        color: category?.color || '#3B82F6',
                        mt: 0.25,
                        fontSize: '1.2rem',
                        flexShrink: 0
                      }} />
                      <Typography variant="body2" sx={{
                        flex: 1,
                        lineHeight: 1.5,
                        fontSize: { xs: '0.9rem', md: '1rem' }
                      }}>
                        {store.address}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Contact info - Fixed at bottom */}
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    flexShrink: 0,
                    pt: 1,
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`
                  }}>
                    <Phone sx={{
                      color: category?.color || '#3B82F6',
                      fontSize: '1.2rem',
                      flexShrink: 0
                    }} />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        Phone: {store.phone}
                      </Typography>
                      <Typography variant="caption" sx={{
                        color: 'text.secondary',
                        display: 'block',
                        fontSize: { xs: '0.8rem', md: '0.85rem' }
                      }}>
                        Timings: {store.timings}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>

            {/* Additional Info */}
            <Box sx={{ mt: 4, p: 2, backgroundColor: alpha('#10B981', 0.05), borderRadius: 2 }}>
              <Typography variant="body2" sx={{
                color: 'text.secondary',
                textAlign: 'center',
                fontSize: { xs: '0.85rem', md: '0.9rem' }
              }}>
                💡 <strong>Tip:</strong> Click on any store card to open location in Google Maps for directions.
                Free parking available at both locations. Walk-ins welcome!
              </Typography>
            </Box>
          </Paper>
        </Box>
      </DialogContent>

      <DialogActions sx={{
        p: 2.5,
        backgroundColor: alpha('#000000', 0.02),
        borderTop: `1px solid ${alpha('#000000', 0.1)}`
      }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              fullWidth
              onClick={onClose}
              startIcon={<Close />}
              sx={{
                borderColor: alpha(category?.color || '#3B82F6', 0.5),
                color: category?.color || '#3B82F6',
                fontWeight: 600,
                py: 1.5,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              CLOSE
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleContactClick}
              sx={{
                backgroundColor: category?.color || '#3B82F6',
                color: 'white',
                fontWeight: 600,
                py: 1.5,
                fontSize: { xs: '0.9rem', md: '1rem' },
                '&:hover': {
                  backgroundColor: category?.color || '#3B82F6',
                  opacity: 0.9,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 4px 12px ${alpha(category?.color || '#3B82F6', 0.3)}`
                }
              }}
            >
              CONTACT US
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

const DynamicBrandTemplate = ({ brandId: propBrandId }) => {
  const { brandId: urlBrandId } = useParams();
  const brandId = propBrandId || urlBrandId;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedSeries, setSelectedSeries] = useState('');
  const [brandData, setBrandData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState({});

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Category definitions with theme-aware colors
  const categories = useMemo(() => [
    {
      name: 'Entry Level',
      description: 'Basic performance, essential tasks. Price: ₹10,000-32,000',
      icon: <School />,
      color: theme.palette.mode === 'dark' ? '#60a5fa' : '#3B82F6',
      priceRange: '₹10,000-32,000',
      key: 'entryLevel'
    },
    {
      name: 'Mid-Range',
      description: 'Balanced performance for work & media. Price: ₹33,000-50,000',
      icon: <DisplaySettings />,
      color: theme.palette.mode === 'dark' ? '#ff5252' : '#800000',
      priceRange: '₹33,000-50,000',
      key: 'midrange'
    },
    {
      name: 'Consumer',
      description: 'Design, multimedia, portability for personal use.',
      icon: <Monitor />,
      color: theme.palette.mode === 'dark' ? '#34d399' : '#10B981',
      priceRange: '₹33,000-70,000',
      key: 'consumer'
    },
    {
      name: 'Commercial',
      description: 'Security, durability for business use.',
      icon: <Business />,
      color: theme.palette.mode === 'dark' ? '#818cf8' : '#6366F1',
      priceRange: '₹33,000-70,000',
      key: 'commercial'
    },
    {
      name: 'Gaming',
      description: 'High-performance GPU, high-refresh displays. Price: ₹51,000+',
      icon: <VideogameAsset />,
      color: '#EF4444',
      priceRange: '₹51,000+',
      key: 'gaming'
    },
    {
      name: 'Premium',
      description: 'Top-tier performance, best displays, premium build. Price: ₹70,000+',
      icon: <WorkspacePremium />,
      color: theme.palette.mode === 'dark' ? '#fbbf24' : '#F59E0B',
      priceRange: '₹70,000+',
      key: 'premium'
    }
  ], [theme.palette.mode]);

  useEffect(() => {
    fetchBrandData();
  }, [brandId]);

  const fetchBrandData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/laptops/brand/${brandId}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setBrandData(data);
        if (data.series && data.series.length > 0) {
          setSelectedSeries(data.series[0].name);
        }
      } else {
        console.error('API Error:', data.error);
        setBrandData(null);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setBrandData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSeriesChange = (event, newValue) => {
    setSelectedSeries(newValue);
    setExpandedCategories({});
  };

  const toggleCategoryExpansion = (categoryKey) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const handleOpenModal = (laptop, category) => {
    setSelectedLaptop(laptop);
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedLaptop(null);
    setSelectedCategory(null);
  };

  const selectedSeriesData = brandData?.series?.find(series => series.name === selectedSeries) || {};

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Typography variant="h6">Loading {getBrandName(brandId)} laptops...</Typography>
      </Box>
    );
  }

  if (!brandData) {
    return (
      <Box sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h5" color="error">
          No data found for {getBrandName(brandId)}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Please check back later or contact us.
        </Typography>
      </Box>
    );
  };

  const renderCategorySection = (category) => {
    const laptops = selectedSeriesData[category.key] || [];
    const hasLaptops = laptops.length > 0;
    const isExpanded = expandedCategories[category.key] || false;
    const displayLaptops = isExpanded ? laptops : laptops.slice(0, 3);

    if (!hasLaptops) return null;

    return (
      <FadeInSection>
        <Box sx={{ mb: 10, mt: 10 }}>
          {/* Clean Category Header */}
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{
              width: 48,
              height: 48,
              borderRadius: 2,
              backgroundColor: alpha(category.color, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: category.color,
              border: `2px solid ${alpha(category.color, 0.2)}`
            }}>
              {category.icon}
            </Box>
            <Box>
              <Typography variant="h4" sx={{
                fontWeight: 700,
                color: category.color,
                mb: 0.5
              }}>
                {category.name} Laptops
                <Typography component="span" variant="h6" sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  ml: 1
                }}>
                  ({laptops.length} models)
                </Typography>
              </Typography>
              <Typography variant="body1" sx={{
                color: 'text.primary',
                fontSize: '1.1rem'
              }}>
                {category.description} | Price range: {category.priceRange}
              </Typography>
            </Box>
          </Box>

          {/* Laptop Grid */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)'
            },
            gap: 3,
            width: '100%',
            alignItems: 'stretch'
          }}>
            {displayLaptops.map((laptop, index) => (
              <Card
                key={laptop.id || index}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  minWidth: 0,
                  maxWidth: '100%',
                  minHeight: 480,
                  backgroundColor: 'background.paper',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => `0 12px 28px ${alpha(category.color, theme.palette.mode === 'dark' ? 0.3 : 0.15)}`,
                    borderColor: alpha(category.color, 0.3)
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    Array.isArray(laptop.images) && laptop.images.length > 0
                      ? (laptop.images[0].startsWith('http') ? laptop.images[0] : `${API_BASE_URL}${laptop.images[0]}`)
                      : (laptop.image && laptop.image.startsWith('http') ? laptop.image : `${API_BASE_URL}${laptop.image || '/placeholder.png'}`)
                  }
                  alt={laptop.name}
                  sx={{
                    height: 160,
                    objectFit: 'cover',
                    width: '100%',
                    flexShrink: 0
                  }}
                />

                <CardContent sx={{
                  flex: '1 0 auto',
                  p: 2.5,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 0
                }}>
                  {/* Name and Price */}
                  <Box sx={{ mb: 1.5 }}>
                    <Typography variant="h6" sx={{
                      fontWeight: 700,
                      fontSize: '1rem',
                      lineHeight: 1.3,
                      mb: 0.5,
                      color: 'text.primary'
                    }}>
                      {laptop.name}
                    </Typography>
                    <Typography variant="h5" sx={{
                      fontWeight: 800,
                      color: category.color,
                      fontSize: '1.25rem'
                    }}>
                      {laptop.price}
                    </Typography>
                  </Box>

                  {/* Best For */}
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        color: category.color,
                        backgroundColor: alpha(category.color, 0.1),
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 1,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        lineHeight: 1.2
                      }}
                    >
                      ⭐ Best for: {laptop.bestFor}
                    </Typography>
                  </Box>

                  {/* Specs Container */}
                  <Box sx={{
                    flex: 1,
                    mb: 2,
                    minHeight: 0
                  }}>
                    {laptop.specs?.map((spec, specIndex) => (
                      <Typography
                        key={specIndex}
                        variant="body2"
                        sx={{
                          color: 'text.primary',
                          mb: 0.75,
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 0.75,
                          lineHeight: 1.4
                        }}
                      >
                        <Box
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            backgroundColor: alpha(category.color, 0.8),
                            flexShrink: 0,
                            mt: 0.75
                          }}
                        />
                        <span>{spec}</span>
                      </Typography>
                    ))}
                  </Box>

                  {/* View Details Button */}
                  <Box sx={{
                    mt: 'auto',
                    pt: 1.5,
                    flexShrink: 0
                  }}>
                    <Button
                      variant="contained"
                      fullWidth
                      size="medium"
                      endIcon={<ArrowForward />}
                      onClick={() => handleOpenModal(laptop, category)}
                      sx={{
                        backgroundColor: category.color,
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        py: 1,
                        borderRadius: 1,
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: category.color,
                          opacity: 0.9,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 6px 16px ${alpha(category.color, 0.3)}`
                        }
                      }}
                    >
                      View Full Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Show "View All" / "Show Less" button if more than 3 laptops */}
          {laptops.length > 3 && (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={() => toggleCategoryExpansion(category.key)}
                sx={{
                  color: category.color,
                  borderColor: alpha(category.color, 0.4),
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: category.color,
                    backgroundColor: alpha(category.color, 0.05),
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                {isExpanded
                  ? `Show Less (3 of ${laptops.length})`
                  : `View All ${laptops.length} Models`}
                <ArrowForward sx={{
                  ml: 1,
                  transform: isExpanded ? 'rotate(-90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} />
              </Button>
            </Box>
          )}
        </Box>
      </FadeInSection>
    );
  };

  const brandColors = getBrandColors(brandId, theme);
  const brandAccentColor = getBrandAccentColor(brandId, theme);

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: 'background.default',
      overflow: 'hidden'
    }}>
      {/* Hero Header - BRAND SPECIFIC */}
      <FadeInSection fullWidth>
        <Box sx={{
          minHeight: '30vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: brandColors.gradient,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)'
          }
        }}>
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', py: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '4rem' }, // Slightly larger as requested earlier
                background: brandColors.textGradient,
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: `${gradientText} 8s ease infinite`,
                mb: 2
              }}
            >
              {brandData.brandName} Laptops
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
              Organized by Levels and Categories
            </Typography>
            <Divider sx={{
              width: '100px',
              height: '3px',
              background: '#90E0EF',
              mx: 'auto',
              borderRadius: '2px'
            }} />
          </Container>
        </Box>
      </FadeInSection>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{
        py: 6,
        backgroundColor: 'background.paper',
        borderRadius: 3,
        mt: -3,
        boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.08)',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Series Selection Tabs - DARK BLACK DEFAULT, BRAND COLOR WHEN SELECTED */}
        <FadeInSection>
          {brandData.series && brandData.series.length > 0 && (
            <Box sx={{ mb: 6 }}>
              <Typography variant="h6" sx={{
                fontWeight: 700,
                mb: 3,
                color: '#000000',
                fontSize: '1.1rem',
                letterSpacing: '0.5px'
              }}>
                SELECT SERIES:
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  borderRadius: 2,
                  p: 1,
                  backgroundColor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <Tabs
                  value={selectedSeries}
                  onChange={handleSeriesChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  sx={{
                    minHeight: 48,
                    '& .MuiTabs-scroller': {
                      paddingBottom: '4px'
                    },
                    '& .MuiTabs-indicator': {
                      backgroundColor: brandAccentColor,
                      height: 3,
                      borderRadius: 2
                    },
                    '& .MuiTab-root': {
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      minHeight: 48,
                      padding: '8px 20px',
                      transition: 'all 0.2s ease',
                      borderBottom: '3px solid transparent',
                      color: 'text.primary', // DEFAULT: All tabs use theme primary
                      '&:hover': {
                        backgroundColor: alpha(brandAccentColor, 0.05),
                        borderBottom: `3px solid ${alpha(brandAccentColor, 0.2)}`,
                        color: brandAccentColor // Hover: Change to brand color
                      }
                    },
                    '& .Mui-selected': {
                      color: `${brandAccentColor} !important`, // SELECTED: Only selected tab gets brand color
                      fontWeight: 700
                    }
                  }}
                >
                  {brandData.series.map((series) => (
                    <Tab
                      key={series.name}
                      label={series.displayName}
                      value={series.name}
                    />
                  ))}
                </Tabs>
              </Paper>
              {/* Mobile Scroll Hint */}
              <Typography
                variant="caption"
                sx={{
                  display: { xs: 'block', md: 'none' },
                  color: 'text.secondary',
                  mt: 1,
                  fontStyle: 'italic',
                  textAlign: 'right',
                  fontSize: '0.75rem'
                }}
              >
                Swipe for more →
              </Typography>
            </Box>
          )}
        </FadeInSection>

        {/* Selected Series Header - BRAND COLOR THEME */}
        <FadeInSection>
          {selectedSeriesData && (
            <Box sx={{
              mb: 6,
              p: { xs: 2, md: 4 }, // Reduced padding on mobile
              borderRadius: 2,
              backgroundColor: 'background.default',
              borderLeft: `4px solid ${brandAccentColor}`,
              boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="h3" sx={{
                fontWeight: 800,
                color: '#000000',
                mb: 1.5,
                fontSize: { xs: '1.75rem', md: '2.5rem' } // Smaller font on mobile
              }}>
                {selectedSeriesData.displayName || selectedSeries}
              </Typography>
              <Typography variant="body1" sx={{
                color: 'text.primary',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                mb: 2
              }}>
                {selectedSeriesData.description || `${selectedSeriesData.displayName} series laptops designed for optimal performance and reliability.`}
              </Typography>

              {/* Series Categories */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }} // Stack vertically on mobile
                spacing={{ xs: 1, sm: 1.5 }}
                sx={{
                  mt: 3,
                  flexWrap: 'wrap',
                  alignItems: { xs: 'flex-start', sm: 'center' }
                }}
              >
                <Typography variant="body2" sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mr: { xs: 0, sm: 1 },
                  mb: { xs: 1, sm: 0 }, // Margin bottom on mobile
                  whiteSpace: 'nowrap'
                }}>
                  Available in:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedSeriesData.categories?.map((category) => {
                    const cat = categories.find(c => c.name === category);
                    return cat ? (
                      <Chip
                        key={category}
                        label={category}
                        size="medium"
                        sx={{
                          backgroundColor: alpha(cat.color, 0.1),
                          color: cat.color,
                          fontWeight: 600,
                          border: `1px solid ${alpha(cat.color, 0.3)}`,
                          '&:hover': {
                            backgroundColor: alpha(cat.color, 0.2),
                            transform: 'translateY(-1px)'
                          }
                        }}
                      />
                    ) : (
                      <Chip
                        key={category}
                        label={category}
                        size="medium"
                        sx={{
                          backgroundColor: alpha('#000000', 0.05),
                          color: '#000000',
                          fontWeight: 600,
                          border: `1px solid ${alpha('#000000', 0.2)}`
                        }}
                      />
                    );
                  })}
                </Box>
              </Stack>
            </Box>
          )}
        </FadeInSection>

        {/* Warning Message - WITH MOVING ANIMATION */}
        <FadeInSection>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              mb: 6,
              py: 1.5,
              backgroundColor: alpha('#ff0000', 0.08),
              borderRadius: 2,
              border: `1px solid ${alpha('#ff0000', 0.2)}`
            }}
          >
            <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <Typography
                variant="body1"
                sx={{
                  display: 'inline-block',
                  color: '#ff0000',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  animation: `${scrollLeftToRight} 20s linear infinite`,
                  px: 2
                }}
              >
                ⚠️ Note: Limited models shown online. Visit our store for complete collection & expert consultation. ⚠️
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  display: 'inline-block',
                  color: '#ff0000',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  animation: `${scrollLeftToRight} 20s linear infinite`,
                  px: 2,
                  animationDelay: '-10s'
                }}
              >
                ⚠️ Note: Limited models shown online. Visit our store for complete collection & expert consultation. ⚠️
              </Typography>
            </Box>
          </Box>
        </FadeInSection>

        {/* Categories with Laptops - Increased spacing between them */}
        {categories
          .filter((category) => (selectedSeriesData[category.key] || []).length > 0)
          .map((category) => renderCategorySection(category))}

        {/* Legend Explanation */}
        <FadeInSection>
          <Box sx={{
            mt: 12,
            pt: 8,
            borderTop: `1px solid ${alpha('#000000', 0.1)}`
          }}>
            <Typography variant="h5" sx={{
              fontWeight: 700,
              mb: 6,
              color: '#1f2937'
            }}>
              Category Guide
            </Typography>
            <Grid container spacing={3}>
              {categories.map((category) => (
                <Grid item xs={12} sm={6} md={4} key={category.name}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'background.default',
                      borderColor: alpha(category.color, 0.3),
                      transform: 'translateY(-2px)',
                      boxShadow: `0 4px 12px ${alpha(category.color, 0.1)}`
                    }
                  }}>
                    <Box sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      backgroundColor: alpha(category.color, 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      color: category.color,
                      border: `1px solid ${alpha(category.color, 0.2)}`
                    }}>
                      {category.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {category.name}
                      </Typography>
                      <Typography variant="caption" sx={{
                        color: '#6b7280',
                        display: 'block'
                      }}>
                        {category.description}
                      </Typography>
                      <Typography variant="caption" sx={{
                        color: category.color,
                        fontWeight: 600,
                        display: 'block',
                        mt: 0.5
                      }}>
                        {category.priceRange}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Typography variant="body2" sx={{
              mt: 6,
              color: '#6b7280',
              fontStyle: 'italic',
              textAlign: 'center',
              px: 2
            }}>
              Laptops may appear in multiple categories based on their specifications and suitability for different use cases.
            </Typography>
          </Box>
        </FadeInSection>
      </Container>

      {/* Laptop Details Modal Popup */}
      <LaptopDetailsModal
        open={modalOpen}
        onClose={handleCloseModal}
        laptop={selectedLaptop}
        category={selectedCategory}
        brandId={brandId}
      />
      <Footer fullFooter={true} />
    </Box>
  );
};

export default DynamicBrandTemplate;