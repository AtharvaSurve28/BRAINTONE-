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
  Apple as AppleIcon,
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

const scrollLeftToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Apple = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedSeries, setSelectedSeries] = useState('MacBook Air');

  // Apple Series Data with updated colors
  const appleSeriesData = [
    {
      name: 'MacBook Air',
      logoColor: '#000000', // Green - Consistent with Consumer color
      description: 'Incredibly thin and light with the power of Apple silicon. Perfect for everyday tasks.',
      categories: ['Consumer', 'Commercial', 'Mid-Range'],
      
      // Consumer Models
      consumer: [
        {
          id: 'macbook-air-m1',
          name: 'MacBook Air (M1)',
          types: ['Consumer', 'Mid-Range'],
          price: '₹89,900',
          specs: ['Apple M1 chip', '8GB Unified Memory', '256GB SSD', '13.3" Retina Display', 'Up to 18 hours battery'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Everyday Use',
          includedIn: ['Consumer', 'Mid-Range'],
          chip: 'M1',
          colorOptions: ['Space Gray', 'Silver', 'Gold']
        },
        {
          id: 'macbook-air-m2-13',
          name: 'MacBook Air 13" (M2)',
          types: ['Consumer'],
          price: '₹1,09,900',
          specs: ['Apple M2 chip', '8GB Unified Memory', '256GB SSD', '13.6" Liquid Retina', 'MagSafe charging'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professionals, Creatives',
          includedIn: ['Consumer'],
          chip: 'M2',
          colorOptions: ['Midnight', 'Starlight', 'Space Gray', 'Silver']
        }
      ],
      
      // Commercial Models
      commercial: [
        {
          id: 'macbook-air-m2-15',
          name: 'MacBook Air 15" (M2)',
          types: ['Commercial'],
          price: '₹1,34,900',
          specs: ['Apple M2 chip', '16GB Unified Memory', '512GB SSD', '15.3" Liquid Retina', '6-speaker sound system'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business Professionals',
          includedIn: ['Commercial'],
          chip: 'M2',
          colorOptions: ['Midnight', 'Starlight', 'Space Gray', 'Silver']
        }
      ],
      
      // Mid-Range Models
      midRange: [
        {
          id: 'macbook-air-m1',
          name: 'MacBook Air (M1)',
          types: ['Consumer', 'Mid-Range'],
          price: '₹89,900',
          specs: ['Apple M1 chip', '8GB Unified Memory', '256GB SSD', '13.3" Retina Display', 'Up to 18 hours battery'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Everyday Use',
          includedIn: ['Consumer', 'Mid-Range'],
          chip: 'M1',
          colorOptions: ['Space Gray', 'Silver', 'Gold']
        },
        {
          id: 'macbook-air-m2-13-16gb',
          name: 'MacBook Air 13" (16GB)',
          types: ['Mid-Range'],
          price: '₹1,24,900',
          specs: ['Apple M2 chip', '16GB Unified Memory', '512GB SSD', '13.6" Liquid Retina', '10-core GPU'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Power Users, Developers',
          includedIn: ['Mid-Range'],
          chip: 'M2',
          colorOptions: ['Midnight', 'Starlight', 'Space Gray', 'Silver']
        }
      ]
    },
    {
      name: 'MacBook Pro',
      logoColor: '#000000', // Indigo - Consistent with Commercial color
      description: 'Supercharged by M-series chips for pros. Extreme performance for demanding workflows.',
      categories: ['Consumer', 'Commercial', 'Premium', 'Gaming'],
      
      // Consumer Models
      consumer: [
        {
          id: 'macbook-pro-14-m3',
          name: 'MacBook Pro 14" (M3)',
          types: ['Consumer'],
          price: '₹1,69,900',
          specs: ['Apple M3 chip', '8GB Unified Memory', '512GB SSD', '14.2" Liquid Retina XDR', 'ProMotion 120Hz'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Consumer'],
          chip: 'M3',
          colorOptions: ['Space Black', 'Silver']
        },
        {
          id: 'macbook-pro-16-m3-pro',
          name: 'MacBook Pro 16" (M3 Pro)',
          types: ['Consumer'],
          price: '₹2,49,900',
          specs: ['Apple M3 Pro chip', '18GB Unified Memory', '512GB SSD', '16.2" Liquid Retina XDR', 'Spatial Audio'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Video Editors, 3D Artists',
          includedIn: ['Consumer'],
          chip: 'M3 Pro',
          colorOptions: ['Space Black', 'Silver']
        }
      ],
      
      // Commercial Models
      commercial: [
        {
          id: 'macbook-pro-14-m3-pro-enterprise',
          name: 'MacBook Pro 14" (M3 Pro) Enterprise',
          types: ['Commercial'],
          price: '₹2,19,900',
          specs: ['Apple M3 Pro chip', '18GB Unified Memory', '1TB SSD', '14.2" Liquid Retina XDR', 'Enterprise Management'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Deployments',
          includedIn: ['Commercial'],
          chip: 'M3 Pro',
          colorOptions: ['Space Black', 'Silver']
        }
      ],
      
      // Premium Models
      premium: [
        {
          id: 'macbook-pro-16-m3-max',
          name: 'MacBook Pro 16" (M3 Max)',
          types: ['Premium', 'Gaming'],
          price: '₹3,49,900',
          specs: ['Apple M3 Max chip', '48GB Unified Memory', '1TB SSD', '16.2" Liquid Retina XDR', '40-core GPU'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professional Content Creation',
          includedIn: ['Premium', 'Gaming'],
          chip: 'M3 Max',
          colorOptions: ['Space Black', 'Silver']
        },
        {
          id: 'macbook-pro-16-m3-max-ultra',
          name: 'MacBook Pro 16" (M3 Max Fully Loaded)',
          types: ['Premium'],
          price: '₹5,49,900',
          specs: ['Apple M3 Max chip', '128GB Unified Memory', '8TB SSD', '16.2" Liquid Retina XDR', '16-core CPU, 40-core GPU'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Hollywood-grade Production',
          includedIn: ['Premium'],
          chip: 'M3 Max',
          colorOptions: ['Space Black', 'Silver']
        }
      ],
      
      // Gaming Models
      gaming: [
        {
          id: 'macbook-pro-16-m3-pro-gaming',
          name: 'MacBook Pro 16" (M3 Pro) Gaming',
          types: ['Gaming', 'Consumer'],
          price: '₹2,69,900',
          specs: ['Apple M3 Pro chip', '36GB Unified Memory', '1TB SSD', '16.2" Liquid Retina XDR', 'ProMotion 120Hz'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-End Gaming',
          includedIn: ['Gaming', 'Consumer'],
          chip: 'M3 Pro',
          colorOptions: ['Space Black', 'Silver']
        },
        {
          id: 'macbook-pro-16-m3-max-gaming',
          name: 'MacBook Pro 16" (M3 Max) Gaming',
          types: ['Gaming', 'Premium'],
          price: '₹3,49,900',
          specs: ['Apple M3 Max chip', '48GB Unified Memory', '1TB SSD', '16.2" Liquid Retina XDR', '40-core GPU'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Extreme Gaming & Development',
          includedIn: ['Gaming', 'Premium'],
          chip: 'M3 Max',
          colorOptions: ['Space Black', 'Silver']
        }
      ]
    }
  ];

  // Category definitions (with consistent colors)
  const categories = [
    {
      name: 'Consumer',
      description: 'Personal use, students, creative work. Price: ₹90,000-2,50,000',
      icon: <Monitor />,
      color: '#10B981', // Green
      priceRange: '₹90,000-2,50,000'
    },
    {
      name: 'Commercial',
      description: 'Business use, corporate deployments.',
      icon: <Business />,
      color: '#6366F1', // Indigo
      priceRange: '₹1,35,000-2,50,000'
    },
    {
      name: 'Mid-Range',
      description: 'Enhanced performance, professional features.',
      icon: <DisplaySettings />,
      color: '#F59E0B', // Amber
      priceRange: '₹90,000-1,35,000'
    },
    {
      name: 'Premium',
      description: 'Maximum performance, studio-grade features.',
      icon: <WorkspacePremium />,
      color: '#8B5CF6', // Purple
      priceRange: '₹3,50,000+'
    },
    {
      name: 'Gaming',
      description: 'High-performance GPU, advanced graphics.',
      icon: <VideogameAsset />,
      color: '#EF4444', // Red
      priceRange: '₹2,50,000+'
    }
  ];

  // Get selected series data
  const selectedSeriesData = appleSeriesData.find(series => series.name === selectedSeries);

  // Apple doesn't have traditional "Entry Level", so we'll render Consumer as primary section
  const renderPrimarySection = () => {
    const consumerModels = selectedSeriesData?.consumer || [];
    
    if (consumerModels.length === 0) return null;

    const consumerColor = '#10B981'; // Use Consumer color (Green)

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
        {/* Primary Header */}
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
          Personal use, students, creative work. Price: ₹90,000-2,50,000
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        {/* Models List */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            Consumer Models
          </Typography>
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', mb: 3 }}>
            {consumerModels.map((model, index) => (
              <Chip
                key={index}
                label={model.name}
                sx={{
                  backgroundColor: alpha(consumerColor, 0.1),
                  color: consumerColor,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  py: 1.5
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Models Grid */}
        <Grid container spacing={3}>
          {consumerModels.slice(0, 3).map((model, index) => (
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
                  {/* Model Name with Chip */}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>
                      {model.name}
                    </Typography>
                    <Chip
                      label={`Apple ${model.chip}`}
                      size="small"
                      sx={{
                        backgroundColor: alpha(consumerColor, 0.1),
                        color: consumerColor,
                        fontWeight: 700
                      }}
                    />
                  </Box>
                  
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
                    to={`/product/apple/${model.id}`}
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

  // Render category section (for other categories)
  const renderCategorySection = (categoryName) => {
    const category = categories.find(c => c.name === categoryName);
    const categoryKey = categoryName.toLowerCase().replace(/[ -]/g, '');
    const models = selectedSeriesData?.[categoryKey] || [];
    
    if (models.length === 0 || categoryName === 'Consumer') return null;

    return (
      <Paper
        elevation={0}
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 3,
          border: `2px solid ${alpha(category.color, 0.2)}`,
          backgroundColor: alpha(category.color, 0.05),
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Category Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            backgroundColor: alpha(category.color, 0.2),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
            color: category.color
          }}>
            {category.icon}
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, color: category.color }}>
              {categoryName} LAPTOPS
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {category.description} | {category.priceRange}
            </Typography>
          </Box>
        </Box>

        {/* Models Grid */}
        <Grid container spacing={3}>
          {models.map((model, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: `1px solid ${alpha(category.color, 0.2)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 25px ${alpha(category.color, 0.15)}`
                  }
                }}
              >
                {/* Chip and Color Options */}
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1.5,
                  backgroundColor: alpha(category.color, 0.05)
                }}>
                  <Chip
                    label={`Apple ${model.chip}`}
                    size="small"
                    sx={{
                      backgroundColor: alpha(category.color, 0.1),
                      color: category.color,
                      fontWeight: 700,
                      fontSize: '0.7rem'
                    }}
                  />
                  {model.colorOptions && (
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {model.colorOptions.length} colors
                    </Typography>
                  )}
                </Box>

                {/* Image */}
                <CardMedia
                  component="img"
                  image={model.image}
                  alt={model.name}
                  sx={{
                    height: 200,
                    objectFit: 'cover'
                  }}
                />

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  {/* Name */}
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {model.name}
                  </Typography>
                  
                  {/* Price */}
                  <Typography variant="h5" sx={{ fontWeight: 800, color: category.color, mb: 2 }}>
                    {model.price}
                  </Typography>

                  {/* Best For */}
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      color: category.color,
                      backgroundColor: alpha(category.color, 0.1),
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      mb: 2,
                      fontWeight: 600
                    }}
                  >
                    ⭐ Best for: {model.bestFor}
                  </Typography>

                  {/* Included In Badges */}
                  <Box sx={{ mb: 2 }}>
                    {model.includedIn.filter(type => type !== categoryName).map((type, idx) => (
                      <Chip
                        key={idx}
                        label={type}
                        size="small"
                        sx={{
                          backgroundColor: alpha(
                            categories.find(c => c.name === type)?.color || category.color,
                            0.1
                          ),
                          color: categories.find(c => c.name === type)?.color || category.color,
                          fontSize: '0.6rem',
                          height: 18,
                          mr: 0.5,
                          mb: 0.5
                        }}
                      />
                    ))}
                  </Box>

                  {/* Key Specs (limited to 3) */}
                  <Box sx={{ mb: 2 }}>
                    {model.specs.slice(0, 3).map((spec, specIndex) => (
                      <Typography
                        key={specIndex}
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 0.5,
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <Box
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            backgroundColor: alpha(category.color, 0.6)
                          }}
                        />
                        {spec}
                      </Typography>
                    ))}
                  </Box>

                  {/* View Details Button */}
                  <Button
                    component={Link}
                    to={`/product/apple/${model.id}`}
                    variant="outlined"
                    fullWidth
                    endIcon={<ArrowForward />}
                    sx={{
                      mt: 'auto',
                      borderColor: alpha(category.color, 0.5),
                      color: category.color,
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: category.color,
                        backgroundColor: alpha(category.color, 0.04)
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
      {/* Hero Header - Updated with vibrant gradient */}
      <Box sx={{
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(8, 25, 20) 50%,rgb(0, 0, 0) 100%)',
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
            <AppleIcon sx={{ fontSize: 48, color: '#FFFFFF', mr: 2 }} />
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', md: '3rem' },
                background: 'linear-gradient(90deg, #FFFFFF, #D1FAE5, #FFFFFF)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: `${gradientText} 8s ease infinite`,
              }}
            >
              MacBook 
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
            Power. Performance. Precision.
          </Typography>
          <Divider sx={{ width: '100px', height: '3px', background: '#D1FAE5', mx: 'auto', borderRadius: '2px' }} />
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Series Selection Tabs */}
        <Paper sx={{ mb: 4, borderRadius: 2, p: 2, backgroundColor: '#f8fafc' }}>
          <Tabs
            value={selectedSeries}
            onChange={(e, newValue) => setSelectedSeries(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: '0.9rem',
                textTransform: 'none'
              }
            }}
          >
            {appleSeriesData.map((series) => (
              <Tab
                key={series.name}
                label={series.name}
                value={series.name}
                icon={<AppleIcon sx={{ fontSize: 20 }} />}
                iconPosition="start"
                sx={{
                  color: series.logoColor,
                  '&.Mui-selected': {
                    color: '#FFFFFF',
                    backgroundColor: series.logoColor,
                    borderRadius: 1
                  }
                }}
              />
            ))}
          </Tabs>
        </Paper>

        {/* Selected Series Header */}
        {selectedSeriesData && (
          <Paper sx={{ 
            mb: 4, 
            p: 3, 
            borderRadius: 3, 
            backgroundColor: alpha(selectedSeriesData.logoColor, 0.05),
            border: `1px solid ${alpha(selectedSeriesData.logoColor, 0.2)}`
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AppleIcon sx={{ color: selectedSeriesData.logoColor, mr: 2, fontSize: 32 }} />
              <Typography variant="h4" sx={{ fontWeight: 800, color: selectedSeriesData.logoColor }}>
                {selectedSeriesData.name}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 2 }}>
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
                      fontWeight: 600,
                      border: `1px solid ${alpha(cat?.color || '#666', 0.2)}`
                    }}
                  />
                );
              })}
            </Stack>
          </Paper>
        )}

         {/* Scrolling Red Message */}
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
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }}
          >
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
        {/* Primary Consumer Section */}
        {renderPrimarySection()}

        {/* Other Category Sections */}
        {selectedSeriesData && (
          <>
            {renderCategorySection('Commercial')}
            {renderCategorySection('Mid-Range')}
            {renderCategorySection('Premium')}
            {renderCategorySection('Gaming')}
          </>
        )}

        {/* Apple Silicon Explanation - Updated colors */}
        <Paper sx={{ mt: 6, p: 3, borderRadius: 3, backgroundColor: '#f8fafc' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            🍎 Apple Silicon Explained
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: alpha('#10B981', 0.05), borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000', mb: 1 }}>
                  M1 Chip
                </Typography>
                <Typography variant="body2">
                  • 8-core CPU, 8-core GPU
                </Typography>
                <Typography variant="body2">
                  • Up to 3.5x faster CPU
                </Typography>
                <Typography variant="body2">
                  • Up to 5x faster graphics
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Best for: Everyday tasks, students
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: alpha('#6366F1', 0.05), borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000', mb: 1 }}>
                  M2 Chip
                </Typography>
                <Typography variant="body2">
                  • Up to 18% faster CPU
                </Typography>
                <Typography variant="body2">
                  • Up to 35% faster GPU
                </Typography>
                <Typography variant="body2">
                  • 40% faster Neural Engine
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Best for: Professionals, creatives
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: alpha('#8B5CF6', 0.05), borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000', mb: 1 }}>
                  M3 Series Chips
                </Typography>
                <Typography variant="body2">
                  • Up to 35% faster CPU
                </Typography>
                <Typography variant="body2">
                  • Up to 65% faster GPU
                </Typography>
                <Typography variant="body2">
                  • Hardware-ray tracing
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Best for: Pro users, gamers
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        {/* Why Choose MacBook - Updated colors */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: alpha('#10B981', 0.05) }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#000000' }}>
            🏆 Why Choose MacBook?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <BatteryChargingFull sx={{ fontSize: 40, color: '#000000', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  All-day Battery
                </Typography>
                <Typography variant="body2">
                  Up to 22 hours of battery life
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <SpeedIcon sx={{ fontSize: 40, color: '#000000', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Apple Silicon
                </Typography>
                <Typography variant="body2">
                  Industry-leading performance per watt
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <CameraAlt sx={{ fontSize: 40, color: '#000000', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Studio Quality
                </Typography>
                <Typography variant="body2">
                  Professional cameras, mics, and displays
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <DeveloperMode sx={{ fontSize: 40, color: '#000000', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  macOS
                </Typography>
                <Typography variant="body2">
                  Intuitive, powerful, and secure
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* MacBook Air vs MacBook Pro - Updated colors */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: '#f1f5f9' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#1e293b' }}>
            📊 MacBook Air vs MacBook Pro
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, backgroundColor: alpha('#10B981', 0.05), borderRadius: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#000000', mb: 2, display: 'flex', alignItems: 'center' }}>
                  <AppleIcon sx={{ mr: 1 }} /> MacBook Air
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Incredibly thin and light (1.24 kg)
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Fanless design (silent operation)
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Up to 18 hours battery life
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Perfect for: Students, professionals, everyday use
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', fontStyle: 'italic', mt: 2 }}>
                  Starting at ₹89,900
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, backgroundColor: alpha('#6366F1', 0.05), borderRadius: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#000000', mb: 2, display: 'flex', alignItems: 'center' }}>
                  <AppleIcon sx={{ mr: 1 }} /> MacBook Pro
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Pro-level performance with active cooling
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Liquid Retina XDR displays with ProMotion
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Studio-quality mics and speakers
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Perfect for: Creators, developers, power users
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', fontStyle: 'italic', mt: 2 }}>
                  Starting at ₹1,69,900
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Apple;