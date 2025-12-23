import React, { useState } from 'react';
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
  Tab
} from '@mui/material';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import {
  Memory,
  Storage,
  Speed,
  Monitor,
  Security,
  CurrencyRupee,
  ArrowForward,
  DisplaySettings,
  VideogameAsset,
  Business,
  School,
  WorkspacePremium,
  Star,
  AutoAwesome,
  Rocket,
  LaptopWindows,
  TouchApp,
  BatteryChargingFull,
  CameraAlt,
  Palette,
  MusicNote,
  DeveloperMode,
  Speed as SpeedIcon
} from '@mui/icons-material';

// Animations
const shimmer = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 400% 0%; }
`;

const gradientText = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Microsoft = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedSeries, setSelectedSeries] = useState('Microsoft Surface Pro');

  // Microsoft Series Data
  const microsoftSeriesData = [
    {
      name: 'Microsoft Surface Pro',
      logoColor: '#0078D4', // Microsoft Blue
      description: 'The most versatile Surface. Transform from laptop to studio to tablet with amazing speed.',
      categories: ['Consumer', 'Commercial'],
      
      // Consumer Models
      consumer: [
        {
          id: 'surface-pro-9',
          name: 'Surface Pro 9',
          types: ['Consumer'],
          price: '₹1,09,999',
          specs: ['12th Gen Intel Core i5', '8GB LPDDR5 RAM', '256GB SSD', '13" PixelSense Flow Touch', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Creative Professionals',
          includedIn: ['Consumer'],
          colorOptions: ['Platinum', 'Graphite', 'Sapphire', 'Forest']
        },
        {
          id: 'surface-pro-9-5g',
          name: 'Surface Pro 9 with 5G',
          types: ['Consumer'],
          price: '₹1,24,999',
          specs: ['Microsoft SQ3 chip', '8GB LPDDR4x RAM', '256GB SSD', '13" PixelSense Flow', '5G Connectivity'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mobile Professionals',
          includedIn: ['Consumer'],
          colorOptions: ['Platinum', 'Graphite']
        }
      ],
      
      // Commercial Models
      commercial: [
        {
          id: 'surface-pro-9-commercial',
          name: 'Surface Pro 9 for Business',
          types: ['Commercial'],
          price: '₹1,19,999',
          specs: ['12th Gen Intel Core i5', '16GB LPDDR5 RAM', '256GB SSD', '13" PixelSense Flow', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business Professionals',
          includedIn: ['Commercial'],
          colorOptions: ['Platinum']
        },
        {
          id: 'surface-pro-9-5g-commercial',
          name: 'Surface Pro 9 5G for Business',
          types: ['Commercial'],
          price: '₹1,39,999',
          specs: ['Microsoft SQ3 chip', '16GB LPDDR4x RAM', '256GB SSD', '13" PixelSense Flow', '5G + Security'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Enterprise Mobile Workforce',
          includedIn: ['Commercial'],
          colorOptions: ['Platinum']
        }
      ]
    },
    {
      name: 'Microsoft Surface Laptop',
      logoColor: '#107C10', // Microsoft Green
      description: 'Sleek design, exceptional typing experience, and powerful performance in a thin, light design.',
      categories: ['Commercial'],
      
      // Commercial Models
      commercial: [
        {
          id: 'surface-laptop-5-13',
          name: 'Surface Laptop 5 13.5"',
          types: ['Commercial'],
          price: '₹99,999',
          specs: ['12th Gen Intel Core i5', '8GB LPDDR5x RAM', '512GB SSD', '13.5" PixelSense Touch', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business Professionals',
          includedIn: ['Commercial'],
          colorOptions: ['Platinum', 'Matte Black', 'Sage', 'Sandstone']
        },
        {
          id: 'surface-laptop-5-15',
          name: 'Surface Laptop 5 15"',
          types: ['Commercial'],
          price: '₹1,24,999',
          specs: ['12th Gen Intel Core i7', '16GB LPDDR5x RAM', '512GB SSD', '15" PixelSense Touch', 'Intel Iris Xe'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Power Users, Developers',
          includedIn: ['Commercial'],
          colorOptions: ['Platinum', 'Matte Black']
        }
      ]
    },
    {
      name: 'Microsoft Surface Go',
      logoColor: '#F25022', // Microsoft Orange
      description: 'The most portable and affordable Surface. Perfect for on-the-go productivity and entertainment.',
      categories: ['Consumer'],
      
      // Consumer Models
      consumer: [
        {
          id: 'surface-go-4',
          name: 'Surface Go 4',
          types: ['Consumer'],
          price: '₹54,999',
          specs: ['Intel Pentium Gold 6500Y', '8GB LPDDR3 RAM', '128GB SSD', '10.5" PixelSense Touch', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Casual Users',
          includedIn: ['Consumer'],
          colorOptions: ['Platinum', 'Matte Black']
        },
        {
          id: 'surface-go-3',
          name: 'Surface Go 3',
          types: ['Consumer'],
          price: '₹44,999',
          specs: ['Intel Pentium Gold 6500Y', '4GB LPDDR3 RAM', '64GB eMMC', '10.5" PixelSense', 'Windows 11 in S Mode'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Basic Computing, Education',
          includedIn: ['Consumer'],
          colorOptions: ['Platinum']
        }
      ]
    }
  ];

  // Category definitions
  const categories = [
    {
      name: 'Consumer',
      description: 'Personal use, students, creative work. Price: ₹45,000-1,25,000',
      icon: <Monitor />,
      color: '#10B981', // Green
      priceRange: '₹45,000-1,25,000'
    },
    {
      name: 'Commercial',
      description: 'Business use, corporate deployments.',
      icon: <Business />,
      color: '#6366F1', // Indigo
      priceRange: '₹99,000-1,70,000'
    }
  ];

  // Get selected series data
  const selectedSeriesData = microsoftSeriesData.find(series => series.name === selectedSeries);

  // Function to render Consumer section
  const renderConsumerSection = () => {
    const consumerModels = selectedSeriesData?.consumer || [];
    
    if (consumerModels.length === 0) return null;

    const consumerColor = '#10B981';

    return (
      <Paper
        elevation={0}
        sx={{
          mb: 6,
          p: 4,
          borderRadius: 2,
          border: '2px solid',
          borderColor: alpha(consumerColor, 0.3),
          backgroundColor: alpha(consumerColor, 0.05),
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Consumer Header */}
        <Typography variant="h4" sx={{ 
          fontWeight: 800, 
          color: consumerColor,
          mb: 1
        }}>
          CONSUMER LAPTOPS
        </Typography>
        
        <Typography variant="body1" sx={{ 
          color: 'text.secondary',
          mb: 3,
          fontSize: '1.1rem'
        }}>
          Personal use, students, creative work. Price: ₹45,000-1,25,000
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        {/* Consumer Models Grid */}
        <Grid container spacing={3}>
          {consumerModels.map((model, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                borderRadius: 2,
                boxShadow: 2,
                border: '1px solid',
                borderColor: alpha(consumerColor, 0.2),
                '&:hover': { 
                  boxShadow: 6,
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease'
                }
              }}>
                <CardMedia
                  component="img"
                  image={model.image}
                  alt={model.name}
                  sx={{ 
                    height: 200,
                    objectFit: 'cover'
                  }}
                />
                
                <CardContent>
                  {/* Model Name */}
                  <Typography variant="h5" sx={{ 
                    fontWeight: 800,
                    mb: 1
                  }}>
                    {model.name}
                  </Typography>
                  
                  {/* Price */}
                  <Typography variant="h4" sx={{ 
                    color: consumerColor,
                    fontWeight: 900,
                    mb: 2
                  }}>
                    {model.price}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  {/* Best For */}
                  <Typography variant="body1" sx={{ 
                    color: consumerColor,
                    backgroundColor: alpha(consumerColor, 0.1),
                    p: 1.5,
                    borderRadius: 1,
                    mb: 3,
                    fontWeight: 600,
                    fontStyle: 'italic'
                  }}>
                    ⭐ Best for: {model.bestFor}
                  </Typography>
                  
                  {/* Color Options */}
                  {model.colorOptions && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="caption" sx={{ display: 'block', mb: 1, fontWeight: 600 }}>
                        Available Colors:
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                        {model.colorOptions.map((color, idx) => (
                          <Chip
                            key={idx}
                            label={color}
                            size="small"
                            sx={{
                              backgroundColor: alpha(consumerColor, 0.1),
                              color: consumerColor,
                              fontSize: '0.7rem'
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  )}
                  
                  {/* Specs */}
                  <Box sx={{ mb: 3 }}>
                    {model.specs.map((spec, specIndex) => (
                      <Typography
                        key={specIndex}
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 1.5,
                          fontSize: '0.95rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: consumerColor
                          }}
                        />
                        {spec}
                      </Typography>
                    ))}
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  {/* View Details Button */}
                  <Button
                    component={Link}
                    to={`/product/microsoft/${model.id}`}
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: consumerColor,
                      color: 'white',
                      fontWeight: 700,
                      py: 1.5,
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: alpha(consumerColor, 0.8)
                      }
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    );
  };

  // Function to render Commercial section
  const renderCommercialSection = () => {
    const commercialModels = selectedSeriesData?.commercial || [];
    
    if (commercialModels.length === 0) return null;

    const commercialColor = '#6366F1';

    return (
      <Paper
        elevation={0}
        sx={{
          mb: 6,
          p: 4,
          borderRadius: 2,
          border: '2px solid',
          borderColor: alpha(commercialColor, 0.3),
          backgroundColor: alpha(commercialColor, 0.05),
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Commercial Header */}
        <Typography variant="h4" sx={{ 
          fontWeight: 800, 
          color: commercialColor,
          mb: 1
        }}>
          COMMERCIAL LAPTOPS
        </Typography>
        
        <Typography variant="body1" sx={{ 
          color: 'text.secondary',
          mb: 3,
          fontSize: '1.1rem'
        }}>
          Business use, corporate deployments. Price: ₹99,000-1,70,000
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        {/* Commercial Models Grid */}
        <Grid container spacing={3}>
          {commercialModels.map((model, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                borderRadius: 2,
                boxShadow: 2,
                border: '1px solid',
                borderColor: alpha(commercialColor, 0.2),
                '&:hover': { 
                  boxShadow: 6,
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease'
                }
              }}>
                <CardMedia
                  component="img"
                  image={model.image}
                  alt={model.name}
                  sx={{ 
                    height: 200,
                    objectFit: 'cover'
                  }}
                />
                
                <CardContent>
                  {/* Model Name */}
                  <Typography variant="h5" sx={{ 
                    fontWeight: 800,
                    mb: 1
                  }}>
                    {model.name}
                  </Typography>
                  
                  {/* Price */}
                  <Typography variant="h4" sx={{ 
                    color: commercialColor,
                    fontWeight: 900,
                    mb: 2
                  }}>
                    {model.price}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  {/* Best For */}
                  <Typography variant="body1" sx={{ 
                    color: commercialColor,
                    backgroundColor: alpha(commercialColor, 0.1),
                    p: 1.5,
                    borderRadius: 1,
                    mb: 3,
                    fontWeight: 600,
                    fontStyle: 'italic'
                  }}>
                    ⭐ Best for: {model.bestFor}
                  </Typography>
                  
                  {/* Color Options */}
                  {model.colorOptions && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="caption" sx={{ display: 'block', mb: 1, fontWeight: 600 }}>
                        Available Colors:
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                        {model.colorOptions.map((color, idx) => (
                          <Chip
                            key={idx}
                            label={color}
                            size="small"
                            sx={{
                              backgroundColor: alpha(commercialColor, 0.1),
                              color: commercialColor,
                              fontSize: '0.7rem'
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  )}
                  
                  {/* Specs */}
                  <Box sx={{ mb: 3 }}>
                    {model.specs.map((spec, specIndex) => (
                      <Typography
                        key={specIndex}
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 1.5,
                          fontSize: '0.95rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: commercialColor
                          }}
                        />
                        {spec}
                      </Typography>
                    ))}
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  {/* View Details Button */}
                  <Button
                    component={Link}
                    to={`/product/microsoft/${model.id}`}
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: commercialColor,
                      color: 'white',
                      fontWeight: 700,
                      py: 1.5,
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: alpha(commercialColor, 0.8)
                      }
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    );
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Hero Header */}
      <Box sx={{
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0078D4 0%, #005BA1 50%, #003E6E 100%)',
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
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <LaptopWindows sx={{ fontSize: 48, color: '#FFFFFF', mr: 2 }} />
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', md: '3rem' },
                background: 'linear-gradient(90deg, #FFFFFF, #90E0EF, #FFFFFF)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: `${gradientText} 8s ease infinite`,
              }}
            >
              Microsoft Surface Series
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
            Premium Windows Devices for Work and Play
          </Typography>
          <Divider sx={{ width: '100px', height: '3px', background: '#90E0EF', mx: 'auto', borderRadius: '2px' }} />
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Series Selection Tabs */}
        <Paper sx={{ mb: 4, borderRadius: 2, p: 2 }}>
          <Tabs
            value={selectedSeries}
            onChange={(e, newValue) => setSelectedSeries(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: '0.9rem'
              }
            }}
          >
            {microsoftSeriesData.map((series) => (
              <Tab
                key={series.name}
                label={series.name}
                value={series.name}
                sx={{
                  color: series.logoColor,
                  '&.Mui-selected': {
                    color: series.logoColor,
                    backgroundColor: alpha(series.logoColor, 0.1),
                    borderRadius: 1
                  }
                }}
              />
            ))}
          </Tabs>
        </Paper>

        {/* Selected Series Header */}
        {selectedSeriesData && (
          <Paper sx={{ mb: 4, p: 3, borderRadius: 3, backgroundColor: alpha(selectedSeriesData.logoColor, 0.05) }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{
                width: 8,
                height: 40,
                backgroundColor: selectedSeriesData.logoColor,
                borderRadius: 1,
                mr: 2
              }} />
              <Typography variant="h4" sx={{ fontWeight: 800, color: selectedSeriesData.logoColor }}>
                {selectedSeriesData.name}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
              {selectedSeriesData.description}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
              {selectedSeriesData.categories.map((category) => {
                const cat = categories.find(c => c.name === category);
                return (
                  <Chip
                    key={category}
                    icon={cat?.icon}
                    label={category}
                    sx={{
                      backgroundColor: alpha(cat?.color || '#666', 0.1),
                      color: cat?.color || '#666',
                      fontWeight: 600
                    }}
                  />
                );
              })}
            </Stack>
          </Paper>
        )}

        {/* Information Box */}
        <Box
          sx={{
            mb: 4,
            py: 1.5,
            px: 2,
            backgroundColor: alpha('#ff0000', 0.08),
            borderRadius: 2,
            border: `1px solid ${alpha('#ff0000', 0.2)}`
          }}
        >
          <Typography variant="body1" sx={{ color: '#ff0000', fontWeight: 700, fontSize: '0.95rem' }}>
            ⚠️ Note: we have posted limited models on this site. To explore more visit our store.
          </Typography>
        </Box>

        {/* Consumer Section */}
        {renderConsumerSection()}

        {/* Commercial Section */}
        {renderCommercialSection()}

        {/* Legend Explanation */}
        <Paper sx={{ mt: 6, p: 3, borderRadius: 3, backgroundColor: '#f8fafc' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            📋 Microsoft Surface Categories Explained
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
        </Paper>

        {/* Microsoft Surface Series Comparison */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: '#f1f5f9' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#1e293b' }}>
            📊 Microsoft Surface Series Comparison
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: 'white', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#0078D4', mb: 1 }}>
                  Surface Pro Series
                </Typography>
                <Typography variant="body2">
                  Best for: Creative professionals, students
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Key Features: 2-in-1 design, Surface Pen support, detachable keyboard
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: 'white', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#107C10', mb: 1 }}>
                  Surface Laptop Series
                </Typography>
                <Typography variant="body2">
                  Best for: Business professionals, developers
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Key Features: Premium build, excellent keyboard, PixelSense display
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: 'white', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#F25022', mb: 1 }}>
                  Surface Go Series
                </Typography>
                <Typography variant="body2">
                  Best for: Students, casual users, on-the-go
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Key Features: Most portable, affordable, LTE options
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        {/* Why Choose Microsoft Surface */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: alpha('#0078D4', 0.05) }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0078D4' }}>
            🏆 Why Choose Microsoft Surface?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <TouchApp sx={{ fontSize: 40, color: '#0078D4', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  PixelSense Displays
                </Typography>
                <Typography variant="body2">
                  High-resolution touchscreens with pen support
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <BatteryChargingFull sx={{ fontSize: 40, color: '#0078D4', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  All-day Battery
                </Typography>
                <Typography variant="body2">
                  Up to 15 hours of battery life
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <CameraAlt sx={{ fontSize: 40, color: '#0078D4', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Studio Mics
                </Typography>
                <Typography variant="body2">
                  Studio-quality microphones for clear calls
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Palette sx={{ fontSize: 40, color: '#0078D4', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Premium Design
                </Typography>
                <Typography variant="body2">
                  Magnesium alloy body, premium finishes
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Microsoft;