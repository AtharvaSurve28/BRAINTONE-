import React, { useState, useEffect } from 'react';
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
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
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
  VerifiedUser
} from '@mui/icons-material';

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

// Brand-specific colors for hero header
const getBrandColors = (brandId) => {
  const brandColors = {
    'dell': {
      gradient: 'linear-gradient(135deg, #007DB8 0%, #005A8A 50%, #003B5C 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #90E0EF, #FFFFFF)'
    },
    'hp': {
      gradient: 'linear-gradient(135deg, #0096D6 0%, #0077B3 50%, #005A8A 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #B3E5FC, #FFFFFF)'
    },
    'lenovo': {
      gradient: 'linear-gradient(135deg, #E2231A 0%, #B71C1C 50%, #8B0000 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #FFCDD2, #FFFFFF)'
    },
    'asus': {
      gradient: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #2D2D2D 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #E0E0E0, #FFFFFF)'
    },
    'acer': {
      gradient: 'linear-gradient(135deg, #83B81A 0%, #6A9A15 50%, #4A6B0F 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #E8F5E9, #FFFFFF)'
    },
    'apple': {
      gradient: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #2D2D2D 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #E0E0E0, #FFFFFF)'
    },
    'msi': {
      gradient: 'linear-gradient(135deg, #FF0000 0%, #CC0000 50%, #990000 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #FFCDD2, #FFFFFF)'
    },
    'samsung': {
      gradient: 'linear-gradient(135deg, #1428A0 0%, #0F1F7A 50%, #0A1554 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #C5CAE9, #FFFFFF)'
    },
    'microsoft': {
      gradient: 'linear-gradient(135deg, #0078D4 0%, #005A9E 50%, #003D6B 100%)',
      textGradient: 'linear-gradient(90deg, #FFFFFF, #B3E5FC, #FFFFFF)'
    }
  };
  return brandColors[brandId] || brandColors['dell']; // Default to Dell colors
};

// Category definitions - ALL 6 CATEGORIES
const categories = [
  {
    name: 'Entry Level',
    description: 'Basic performance, essential tasks. Price: ₹10,000-32,000',
    icon: <School />,
    color: '#3B82F6',
    priceRange: '₹10,000-32,000',
    key: 'entryLevel'
  },
  {
    name: 'Mid-Range',
    description: 'Balanced performance for work & media. Price: ₹33,000-50,000',
    icon: <DisplaySettings />,
    color: '#F59E0B',
    priceRange: '₹33,000-50,000',
    key: 'midrange'
  },
  {
    name: 'Consumer',
    description: 'Design, multimedia, portability for personal use.',
    icon: <Monitor />,
    color: '#10B981',
    priceRange: '₹33,000-70,000',
    key: 'consumer'
  },
  {
    name: 'Commercial',
    description: 'Security, durability for business use.',
    icon: <Business />,
    color: '#6366F1',
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
    color: '#8B5CF6',
    priceRange: '₹70,000+',
    key: 'premium'
  }
];

// Laptop Details Modal Component
const LaptopDetailsModal = ({ open, onClose, laptop, category, brandId }) => {
  const navigate = useNavigate(); // Added navigate hook
  
  if (!laptop) return null;

  const storeLocations = [
    {
      name: "Fort Store",
      address: "1st Floor, 17A, Bahubai Bldg, Flora Fountain, 10/E, Cawasji Patel St, next to Varithman Chambers, Kali Ghoda, Fort, Mumbai, Maharashtra 400001",
      phone: "081697 98826"
    },
    {
      name: "Vile Parle Store",
      address: "1st Floor, Prime Mall, F92/96, Alfa Market, Road, Naypada, Irla, Vile Parle West, Mumbai, Maharashtra 400056",
      phone: "092233 33357"
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
      color: "#3B82F6"
    },
    {
      icon: <SupportAgent />,
      title: "24/7 Support",
      description: "Technical support available round the clock",
      color: "#10B981"
    },
    {
      icon: <VerifiedUser />,
      title: "Genuine Warranty",
      description: "All laptops come with manufacturer warranty",
      color: "#F59E0B"
    }
  ];

  const handleContactClick = () => {
    onClose(); // Close the modal first
    navigate('/contact'); // Navigate to contact page
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxHeight: '90vh',
          overflow: 'hidden'
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
        <Box sx={{ p: 3 }}>
          {/* Price and Category */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" sx={{ 
              fontWeight: 800, 
              color: category?.color || '#3B82F6',
              mb: 1
            }}>
              {laptop.price}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
              <Chip
                label={`⭐ Best for: ${laptop.bestFor}`}
                sx={{
                  backgroundColor: alpha(category?.color || '#3B82F6', 0.1),
                  color: category?.color || '#3B82F6',
                  fontWeight: 600
                }}
              />
              <Chip
                label={category?.name || "Laptop"}
                sx={{
                  backgroundColor: alpha(category?.color || '#3B82F6', 0.2),
                  color: category?.color || '#3B82F6',
                  fontWeight: 600
                }}
              />
              <Chip
                label={getBrandName(brandId)}
                sx={{
                  backgroundColor: alpha('#666666', 0.1),
                  color: '#666666',
                  fontWeight: 600
                }}
              />
            </Box>
          </Box>

          {/* Key Specifications */}
          <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: alpha('#000000', 0.02) }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              ⚙️ Key Specifications
            </Typography>
            <Grid container spacing={2}>
              {laptop.specs?.map((spec, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: 1.5,
                    p: 1.5,
                    borderRadius: 1,
                    backgroundColor: alpha('#000000', 0.01)
                  }}>
                    <CheckCircle sx={{ 
                      fontSize: '1.2rem', 
                      color: category?.color || '#3B82F6',
                      flexShrink: 0,
                      mt: 0.25
                    }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.4 }}>
                      {spec}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Features */}
          <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: alpha('#000000', 0.02) }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              ✨ What's Included
            </Typography>
            <Grid container spacing={2}>
              {laptopFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircle sx={{ 
                      fontSize: '1rem', 
                      color: '#10B981' 
                    }} />
                    <Typography variant="body2">
                      {feature}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Services - UPDATED WITH EQUAL SIZE BOXES */}
          <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: alpha('#000000', 0.02) }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              🛡️ Our Services
            </Typography>
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 2,
                      height: '100%',
                      minHeight: 180, // Fixed height for equal boxes
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: `1px solid ${alpha(service.color, 0.2)}`,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 4px 12px ${alpha(service.color, 0.15)}`
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
                      color: service.color
                    }}>
                      {service.icon}
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>
                      {service.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Store Locations */}
          <Paper elevation={0} sx={{ p: 3, backgroundColor: alpha('#000000', 0.02) }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              🏪 Visit Our Stores
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              Visit our stores for hands-on demo, expert consultation, and immediate purchase. Our staff will help you choose the perfect laptop for your needs.
            </Typography>
            
            <Grid container spacing={3}>
              {storeLocations.map((store, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 3,
                      height: '100%',
                      border: `2px solid ${alpha(category?.color || '#3B82F6', 0.2)}`,
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        backgroundColor: category?.color || '#3B82F6'
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: category?.color || '#3B82F6' }}>
                      {store.name}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, gap: 1.5 }}>
                      <LocationOn sx={{ 
                        color: category?.color || '#3B82F6', 
                        mt: 0.25,
                        fontSize: '1.2rem',
                        flexShrink: 0
                      }} />
                      <Typography variant="body2" sx={{ flex: 1, lineHeight: 1.5 }}>
                        {store.address}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Phone sx={{ 
                        color: category?.color || '#3B82F6',
                        fontSize: '1.2rem',
                        flexShrink: 0
                      }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Phone: {store.phone}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                          Timings: 10:00 AM - 8:00 PM (Monday to Sunday)
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </DialogContent>

      {/* UPDATED: DialogActions with Contact Us button linking to contact page */}
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
                py: 1.5
              }}
            >
              CLOSE
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleContactClick} // UPDATED: Now links to contact page
              sx={{
                backgroundColor: category?.color || '#3B82F6',
                color: 'white',
                fontWeight: 600,
                py: 1.5,
                '&:hover': {
                  backgroundColor: category?.color || '#3B82F6',
                  opacity: 0.9
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

const DynamicBrandTemplate = ({ brandId }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedSeries, setSelectedSeries] = useState('');
  const [brandData, setBrandData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState({});
  
  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchBrandData();
  }, [brandId]);

  const fetchBrandData = async () => {
    try {
      setLoading(true);
      console.log(`Fetching ${brandId} data...`);
      const response = await fetch(`/api/laptops/brand/${brandId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      console.log('API Response:', data);
      
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
    // Reset expanded categories when series changes
    setExpandedCategories({});
  };

  const toggleCategoryExpansion = (categoryKey) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  // Modal handlers
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

  // Find selected series data
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

  // Function to render ALL category sections
  const renderCategorySection = (category) => {
    const laptops = selectedSeriesData[category.key] || [];
    const hasLaptops = laptops.length > 0;
    const isExpanded = expandedCategories[category.key] || false;
    const displayLaptops = isExpanded ? laptops : laptops.slice(0, 3);
    
    return (
      <Paper
        elevation={0}
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 3,
          border: `2px solid ${alpha(category.color, hasLaptops ? 0.3 : 0.1)}`,
          backgroundColor: alpha(category.color, hasLaptops ? 0.05 : 0.02),
          opacity: hasLaptops ? 1 : 0.7,
          transition: 'all 0.3s ease'
        }}
      >
        {/* Category Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            backgroundColor: alpha(category.color, hasLaptops ? 0.2 : 0.1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
            color: category.color
          }}>
            {category.icon}
          </Box>
          <Box>
            <Typography variant="h5" sx={{ 
              fontWeight: 700, 
              color: category.color,
              opacity: hasLaptops ? 1 : 0.7
            }}>
              {category.name} LAPTOPS
              {hasLaptops && ` (${laptops.length})`}
            </Typography>
            <Typography variant="body2" sx={{ 
              color: 'text.secondary',
              opacity: hasLaptops ? 1 : 0.7
            }}>
              {category.description} | {category.priceRange}
            </Typography>
          </Box>
        </Box>

        {/* Show message if no laptops */}
        {!hasLaptops ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="body1" sx={{ 
              color: 'text.secondary', 
              fontStyle: 'italic',
              opacity: 0.7
            }}>
              No {category.name} laptops available in {selectedSeriesData.displayName || selectedSeries} series.
            </Typography>
            <Typography variant="body2" sx={{ 
              color: 'text.secondary', 
              mt: 1,
              opacity: 0.7
            }}>
              Check other series or visit our store for more options.
            </Typography>
          </Box>
        ) : (
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)'
            },
            gap: 2,
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
                  border: `1px solid ${alpha(category.color, 0.2)}`,
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  minWidth: 0,
                  maxWidth: '100%',
                  minHeight: 480,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 25px ${alpha(category.color, 0.15)}`
                  }
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  image={laptop.image}
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
                  p: 2,
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
                      mb: 0.5
                    }}>
                      {laptop.name}
                    </Typography>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 800, 
                      color: category.color,
                      fontSize: '1.1rem'
                    }}>
                      {laptop.price}
                    </Typography>
                  </Box>

                  {/* Best For */}
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      color: category.color,
                      backgroundColor: alpha(category.color, 0.1),
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      mb: 1.5,
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      lineHeight: 1.2
                    }}
                  >
                    ⭐ Best for: {laptop.bestFor}
                  </Typography>

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
                          color: 'text.secondary',
                          mb: 0.5,
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 0.5,
                          lineHeight: 1.3
                        }}
                      >
                        <Box
                          sx={{
                            width: 3,
                            height: 3,
                            borderRadius: '50%',
                            backgroundColor: alpha(category.color, 0.6),
                            flexShrink: 0,
                            mt: 0.75
                          }}
                        />
                        <span>{spec}</span>
                      </Typography>
                    ))}
                  </Box>

                  {/* View Details Button - Opens Modal */}
                  <Box sx={{ 
                    mt: 'auto',
                    pt: 1.5,
                    flexShrink: 0
                  }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      size="small"
                      endIcon={<ArrowForward />}
                      onClick={() => handleOpenModal(laptop, category)}
                      sx={{
                        borderColor: alpha(category.color, 0.5),
                        color: category.color,
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        py: 0.75,
                        '&:hover': {
                          borderColor: category.color,
                          backgroundColor: alpha(category.color, 0.04)
                        }
                      }}
                    >
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
        
        {/* Show "View All" / "Show Less" button if more than 3 laptops */}
        {laptops.length > 3 && (
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              variant="text"
              size="small"
              onClick={() => toggleCategoryExpansion(category.key)}
              sx={{ 
                color: category.color, 
                fontWeight: 600,
                fontSize: '0.9rem',
                '&:hover': {
                  backgroundColor: alpha(category.color, 0.1)
                }
              }}
            >
              {isExpanded 
                ? `Show less (Show only 3 of ${laptops.length})` 
                : `View all ${laptops.length} ${category.name} laptops →`}
            </Button>
          </Box>
        )}
      </Paper>
    );
  };

  const brandColors = getBrandColors(brandId);

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      overflow: 'hidden'
    }}>
      {/* Hero Header */}
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
              fontSize: { xs: '2rem', md: '3rem' },
              background: brandColors.textGradient,
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: `${gradientText} 8s ease infinite`,
              mb: 2
            }}
          >
            {brandData.brandName} Laptop Series
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

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Series Selection Tabs */}
        {brandData.series && brandData.series.length > 0 && (
          <Paper sx={{ mb: 4, borderRadius: 2, p: 2 }}>
            <Tabs
              value={selectedSeries}
              onChange={handleSeriesChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }
              }}
            >
              {brandData.series.map((series) => (
                <Tab
                  key={series.name}
                  label={series.displayName}
                  value={series.name}
                  sx={{
                    color: series.logoColor || '#666666',
                    '&.Mui-selected': {
                      color: series.logoColor || '#666666',
                      backgroundColor: alpha(series.logoColor || '#666666', 0.1),
                      borderRadius: 1
                    }
                  }}
                />
              ))}
            </Tabs>
          </Paper>
        )}

        {/* Selected Series Header */}
        {selectedSeriesData && (
          <Paper sx={{ 
            mb: 4, 
            p: 3, 
            borderRadius: 3, 
            backgroundColor: alpha(
              selectedSeriesData.logoColor || '#666666', 
              0.05
            ) 
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{
                width: 8,
                height: 40,
                backgroundColor: selectedSeriesData.logoColor || '#666666',
                borderRadius: 1,
                mr: 2
              }} />
              <Typography variant="h4" sx={{ 
                fontWeight: 800, 
                color: selectedSeriesData.logoColor || '#666666'
              }}>
                {selectedSeriesData.displayName || selectedSeries} Series
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
              {selectedSeriesData.description || `${selectedSeriesData.displayName} series laptops`}
            </Typography>
            
            {/* Series Categories */}
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
              {selectedSeriesData.categories?.map((category) => {
                const cat = categories.find(c => c.name === category);
                return cat ? (
                  <Chip
                    key={category}
                    icon={cat.icon}
                    label={category}
                    size="small"
                    sx={{
                      backgroundColor: alpha(cat.color, 0.1),
                      color: cat.color,
                      fontWeight: 600
                    }}
                  />
                ) : (
                  <Chip
                    key={category}
                    label={category}
                    size="small"
                    sx={{
                      backgroundColor: alpha('#666666', 0.1),
                      color: '#666666',
                      fontWeight: 600
                    }}
                  />
                );
              })}
            </Stack>
          </Paper>
        )}

        {/* Warning Message */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            mb: 4,
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
              ⚠️ Note: we have posted limited models on this site. To explore more visit our store. ⚠️
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
              ⚠️ Note: we have posted limited models on this site. To explore more visit our store. ⚠️
            </Typography>
          </Box>
        </Box>

        {/* Render ONLY categories that actually have laptops */}
        {categories
          .filter((category) => (selectedSeriesData[category.key] || []).length > 0)
          .map((category) => renderCategorySection(category))}

        {/* Legend Explanation */}
        <Paper sx={{ mt: 6, p: 3, borderRadius: 3, backgroundColor: '#f8fafc' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            📋 Category Legend
          </Typography>
          <Grid container spacing={2}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={2} key={category.name}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 1,
                  p: 1,
                  borderRadius: 1,
                  backgroundColor: alpha(category.color, 0.05)
                }}>
                  <Box sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: category.color,
                    mr: 1
                  }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {category.name}
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                  {category.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body2" sx={{ mt: 2, color: '#64748b', fontStyle: 'italic' }}>
            Note: Laptops can appear in multiple categories if they meet the criteria for those categories.
            For example, a laptop in ₹33,000-50,000 range can appear in Consumer, Commercial, and Mid-Range categories.
          </Typography>
        </Paper>
      </Container>

      {/* Laptop Details Modal Popup */}
      <LaptopDetailsModal
        open={modalOpen}
        onClose={handleCloseModal}
        laptop={selectedLaptop}
        category={selectedCategory}
        brandId={brandId}
      />
    </Box>
  );
};

export default DynamicBrandTemplate;