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
  Bolt,
  Palette,
  Shield,
  TrendingUp,
  FlashOn,
  Gamepad,
  Diamond,
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

const MSI = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedSeries, setSelectedSeries] = useState('Katana Series');

  // MSI Series Data
  const msiSeriesData = [
    {
      name: 'Katana Series',
      logoColor: '#0096D6', // HP Blue from original
      description: 'Slim gaming laptops with excellent performance-to-price ratio for mainstream gamers.',
      categories: ['Gaming', 'Premium'],
      
      gaming: [
        {
          id: 'msi-katana-15-b12v',
          name: 'MSI Katana 15 B12V',
          types: ['Gaming'],
          price: '₹89,999',
          specs: ['Intel i5-12450H', '16GB DDR5', '512GB NVMe SSD', '15.6" FHD 144Hz', 'RTX 4050 6GB'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Entry-Level Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'msi-katana-17-b13v',
          name: 'MSI Katana 17 B13V',
          types: ['Gaming'],
          price: '₹1,09,999',
          specs: ['Intel i7-13620H', '16GB DDR5', '1TB NVMe SSD', '17.3" FHD 144Hz', 'RTX 4060 8GB'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mainstream Gaming',
          includedIn: ['Gaming']
        }
      ],
      
      premium: [
        {
          id: 'msi-katana-15-b13vgk',
          name: 'MSI Katana 15 B13VGK',
          types: ['Gaming', 'Premium'],
          price: '₹1,29,999',
          specs: ['Intel i7-13620H', '32GB DDR5', '1TB NVMe SSD', '15.6" QHD 165Hz', 'RTX 4070 8GB'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-Performance Gaming',
          includedIn: ['Gaming', 'Premium']
        }
      ]
    },
    {
      name: 'G Series',
      logoColor: '#6B7280', // Gray from original
      description: 'Versatile laptops balancing work, creativity, and gaming for multi-purpose users.',
      categories: ['Consumer', 'Mid-Range', 'Gaming'],
      
      consumer: [
        {
          id: 'msi-modern-14-c13m',
          name: 'MSI Modern 14 C13M',
          types: ['Consumer'],
          price: '₹64,999',
          specs: ['Intel i5-1340P', '16GB LPDDR5', '512GB SSD', '14" FHD IPS', 'Intel Iris Xe'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Everyday Productivity',
          includedIn: ['Consumer']
        },
        {
          id: 'msi-summit-e16-flip',
          name: 'MSI Summit E16 Flip',
          types: ['Consumer', 'Mid-Range'],
          price: '₹1,19,999',
          specs: ['Intel i7-1360P', '16GB LPDDR5', '1TB SSD', '16" QHD+ Touch', '360° Convertible'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Consumer', 'Mid-Range']
        }
      ],
      
      midrange: [
        {
          id: 'msi-prestige-14-evo',
          name: 'MSI Prestige 14 Evo',
          types: ['Mid-Range'],
          price: '₹94,999',
          specs: ['Intel i7-1360P', '16GB LPDDR5', '1TB NVMe SSD', '14" QHD+ 90Hz', 'Intel Evo Certified'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business Professionals',
          includedIn: ['Mid-Range']
        },
        {
          id: 'msi-summit-e16-flip',
          name: 'MSI Summit E16 Flip',
          types: ['Consumer', 'Mid-Range'],
          price: '₹1,19,999',
          specs: ['Intel i7-1360P', '16GB LPDDR5', '1TB SSD', '16" QHD+ Touch', '360° Convertible'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Consumer', 'Mid-Range']
        }
      ],
      
      gaming: [
        {
          id: 'msi-gf63-thin-12uc',
          name: 'MSI GF63 Thin 12UC',
          types: ['Gaming'],
          price: '₹79,999',
          specs: ['Intel i5-12450H', '8GB DDR4', '512GB SSD', '15.6" FHD 144Hz', 'RTX 3050 4GB'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Casual Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'msi-cyborg-15-a12v',
          name: 'MSI Cyborg 15 A12V',
          types: ['Gaming', 'Mid-Range'],
          price: '₹1,04,999',
          specs: ['Intel i7-12650H', '16GB DDR5', '1TB SSD', '15.6" FHD 144Hz', 'RTX 4060 8GB'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mid-Range Gaming',
          includedIn: ['Gaming', 'Mid-Range']
        }
      ]
    },
    {
      name: 'Vector Series',
      logoColor: '#8B5CF6', // Purple from original
      description: 'Premium gaming laptops with extreme performance and advanced cooling for hardcore gamers.',
      categories: ['Gaming', 'Premium'],
      
      gaming: [
        {
          id: 'msi-vector-gp68hx',
          name: 'MSI Vector GP68HX',
          types: ['Gaming'],
          price: '₹1,49,999',
          specs: ['Intel i7-13700HX', '16GB DDR5', '1TB NVMe SSD', '16" QHD+ 240Hz', 'RTX 4070 8GB'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-End Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'msi-vector-gp78hx',
          name: 'MSI Vector GP78HX',
          types: ['Gaming'],
          price: '₹1,79,999',
          specs: ['Intel i9-13980HX', '32GB DDR5', '2TB NVMe SSD', '17" QHD+ 240Hz', 'RTX 4080 12GB'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Extreme Gaming',
          includedIn: ['Gaming']
        }
      ],
      
      premium: [
        {
          id: 'msi-vector-gp78hx-13vi',
          name: 'MSI Vector GP78HX 13VI',
          types: ['Gaming', 'Premium'],
          price: '₹1,99,999',
          specs: ['Intel i9-13980HX', '64GB DDR5', '4TB NVMe SSD', '17" 4K Mini-LED', 'RTX 4090 16GB'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professional Gamers',
          includedIn: ['Gaming', 'Premium']
        }
      ]
    },
    {
      name: 'Raider Series',
      logoColor: '#0F766E', // Teal from original
      description: 'Flagship gaming laptops with revolutionary design, premium build, and top-tier performance.',
      categories: ['Gaming', 'Premium'],
      
      gaming: [
        {
          id: 'msi-raider-ge68hx',
          name: 'MSI Raider GE68HX',
          types: ['Gaming'],
          price: '₹1,69,999',
          specs: ['Intel i7-13700HX', '32GB DDR5', '2TB NVMe SSD', '16" QHD+ 240Hz', 'RTX 4070 8GB'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Enthusiast Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'msi-raider-ge78hx',
          name: 'MSI Raider GE78HX',
          types: ['Gaming'],
          price: '₹2,19,999',
          specs: ['Intel i9-13980HX', '64GB DDR5', '4TB NVMe SSD', '17" 4K 144Hz', 'RTX 4090 16GB'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Ultimate Gaming',
          includedIn: ['Gaming']
        }
      ],
      
      premium: [
        {
          id: 'msi-raider-ge78hx-13vi',
          name: 'MSI Raider GE78HX 13VI',
          types: ['Gaming', 'Premium'],
          price: '₹2,49,999',
          specs: ['Intel i9-13980HX', '96GB DDR5', '8TB NVMe SSD', '17" 4K Mini-LED 144Hz', 'RTX 4090 16GB'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Content Creators & Pro Gamers',
          includedIn: ['Gaming', 'Premium']
        }
      ]
    },
    {
      name: 'Titan Series',
      logoColor: '#C53030', // Red from original
      description: 'Ultimate desktop replacement laptops with extreme performance for professionals and enthusiasts.',
      categories: ['Gaming', 'Premium'],
      
      gaming: [
        {
          id: 'msi-titan-gt77-hx',
          name: 'MSI Titan GT77 HX',
          types: ['Gaming'],
          price: '₹2,99,999',
          specs: ['Intel i9-13980HX', '128GB DDR5', '8TB NVMe SSD (4x2TB)', '17.3" 4K 144Hz Mini-LED', 'RTX 4090 16GB'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Extreme Desktop Replacement',
          includedIn: ['Gaming']
        }
      ],
      
      premium: [
        {
          id: 'msi-titan-gt77-hx-13vi',
          name: 'MSI Titan GT77 HX 13VI',
          types: ['Gaming', 'Premium'],
          price: '₹3,49,999',
          specs: ['Intel i9-13980HX', '128GB DDR5', '16TB NVMe SSD (4x4TB)', '17.3" 4K 144Hz Mini-LED', 'RTX 4090 16GB'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professional Content Creation',
          includedIn: ['Gaming', 'Premium']
        },
        {
          id: 'msi-titan-gt77-hx-13vis',
          name: 'MSI Titan GT77 HX 13VIS Limited',
          types: ['Premium'],
          price: '₹4,99,999',
          specs: ['Intel i9-13980HX', '128GB DDR5', '24TB NVMe SSD', '17.3" 4K Mini-LED 144Hz', 'Dual RTX 4090 16GB'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Server-Level Performance',
          includedIn: ['Premium']
        }
      ]
    },
    {
      name: 'MSI Gaming Series',
      logoColor: '#10B981', // Green from original
      description: 'Ultimate gaming machines with desktop-level performance and advanced cooling.',
      categories: ['Gaming', 'Premium'],
      
      gaming: [
        {
          id: 'msi-gaming-16-wd0000tx',
          name: 'MSI Gaming 16',
          types: ['Gaming'],
          price: '₹1,24,999',
          specs: ['Intel i7-13700HX', '16GB DDR5', '1TB NVMe SSD', '16.1" QHD 165Hz', 'RTX 4060 8GB'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Competitive Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'msi-gaming-17-ck2000tx',
          name: 'MSI Gaming 17',
          types: ['Gaming'],
          price: '₹1,49,999',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB NVMe SSD', '17.3" QHD 240Hz', 'RTX 4080 12GB'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Esports Professionals',
          includedIn: ['Gaming']
        }
      ],
      
      premium: [
        {
          id: 'msi-gaming-17-ck2000tx',
          name: 'MSI Gaming 17',
          types: ['Gaming', 'Premium'],
          price: '₹1,49,999',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB NVMe SSD', '17.3" QHD 240Hz', 'RTX 4080 12GB'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Esports Professionals',
          includedIn: ['Gaming', 'Premium']
        },
        {
          id: 'msi-gaming-transcend-16',
          name: 'MSI Gaming Transcend 16',
          types: ['Premium'],
          price: '₹1,79,999',
          specs: ['Intel i9-13900HX', '64GB DDR5', '4TB NVMe SSD', '16" Mini-LED 240Hz', 'RTX 4090 16GB'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Extreme Gaming',
          includedIn: ['Premium']
        }
      ]
    }
  ];

  // Category definitions - Using EXACT SAME categories as original HP code
  const categories = [
    {
      name: 'Entry Level',
      description: 'Basic performance, essential tasks. Price: ₹10,000-35,000',
      icon: <School />,
      color: '#3B82F6',
      priceRange: '₹10,000-35,000'
    },
    {
      name: 'Mid-Range',
      description: 'Balanced performance for work & media. Price: ₹36,000-60,000',
      icon: <DisplaySettings />,
      color: '#F59E0B',
      priceRange: '₹36,000-60,000'
    },
    {
      name: 'Consumer',
      description: 'Design, multimedia, portability for personal use.',
      icon: <Monitor />,
      color: '#10B981',
      priceRange: '₹30,000-80,000'
    },
    {
      name: 'Commercial',
      description: 'Security, durability for business use.',
      icon: <Business />,
      color: '#6366F1',
      priceRange: '₹35,000-1,00,000'
    },
    {
      name: 'Gaming',
      description: 'High-performance GPU, high-refresh displays. Price: ₹70,000+',
      icon: <VideogameAsset />,
      color: '#EF4444',
      priceRange: '₹70,000+'
    },
    {
      name: 'Premium',
      description: 'Top-tier performance, best displays, premium build. Price: ₹1,20,000+',
      icon: <WorkspacePremium />,
      color: '#8B5CF6',
      priceRange: '₹1,20,000+'
    }
  ];

  // Get selected series data
  const selectedSeriesData = msiSeriesData.find(series => series.name === selectedSeries);

  // Function to render Entry Level section (using same structure as HP code)
  const renderEntryLevelSection = () => {
    // For MSI, we'll use Gaming as the main section since MSI focuses on gaming
    const gamingModels = selectedSeriesData?.gaming || [];
    
    if (gamingModels.length === 0) return null;

    const category = categories.find(c => c.name === 'Gaming');

    return (
      <Paper
        elevation={0}
        sx={{
          mb: 6,
          p: 4,
          borderRadius: 2,
          border: '2px solid',
          borderColor: alpha(category.color, 0.3),
          backgroundColor: alpha(category.color, 0.05),
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Gaming Header */}
        <Typography variant="h4" sx={{ 
          fontWeight: 800, 
          color: category.color,
          mb: 1
        }}>
          GAMING LAPTOPS
        </Typography>
        
        <Typography variant="body1" sx={{ 
          color: 'text.secondary',
          mb: 3,
          fontSize: '1.1rem'
        }}>
          High-performance gaming with dedicated GPUs and high-refresh displays. Price: ₹70,000+
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        {/* Gaming Models List */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            Gaming Models
          </Typography>
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', mb: 3 }}>
            {gamingModels.map((model, index) => (
              <Chip
                key={index}
                label={model.name}
                sx={{
                  backgroundColor: alpha(category.color, 0.1),
                  color: category.color,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  py: 1.5
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Gaming Models Grid */}
        <Grid container spacing={3}>
          {gamingModels.slice(0, 3).map((model, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                borderRadius: 2,
                boxShadow: 2,
                border: '1px solid',
                borderColor: alpha(category.color, 0.2),
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
                    color: category.color,
                    fontWeight: 900,
                    mb: 2
                  }}>
                    {model.price}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  {/* Best For */}
                  <Typography variant="body1" sx={{ 
                    color: category.color,
                    backgroundColor: alpha(category.color, 0.1),
                    p: 1.5,
                    borderRadius: 1,
                    mb: 3,
                    fontWeight: 600,
                    fontStyle: 'italic'
                  }}>
                    ⭐ Best for: {model.bestFor}
                  </Typography>
                  
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
                            backgroundColor: category.color
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
                    to={`/product/msi/${model.id}`}
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: category.color,
                      color: 'white',
                      fontWeight: 700,
                      py: 1.5,
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: '#DC2626'
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

  // Render category section (for other categories) - Using EXACT same function structure as HP
  const renderCategorySection = (categoryName) => {
    const category = categories.find(c => c.name === categoryName);
    const categoryKey = categoryName.toLowerCase().replace(/[ -]/g, '');
    const models = selectedSeriesData?.[categoryKey] || [];
    
    if (models.length === 0 || categoryName === 'Gaming') return null;

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
                {/* Included In Badges */}
                <Box sx={{
                  display: 'flex',
                  gap: 1,
                  p: 1.5,
                  flexWrap: 'wrap',
                  backgroundColor: alpha(category.color, 0.05)
                }}>
                  {model.includedIn.map((type, idx) => (
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
                        fontSize: '0.65rem',
                        height: 20,
                        border: `1px solid ${alpha(
                          categories.find(c => c.name === type)?.color || category.color,
                          0.2
                        )}`
                      }}
                    />
                  ))}
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
                  {/* Name and Price */}
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {model.name}
                  </Typography>
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

                  {/* Specs */}
                  <Box sx={{ mb: 2 }}>
                    {model.specs.map((spec, specIndex) => (
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
                    to={`/product/msi/${model.id}`}
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
      {/* Hero Header - Using EXACT same structure as HP */}
      <Box sx={{
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(#FF0000 100%)',
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
              background: 'linear-gradient(90deg, #FFFFFF, #A7F3D0, #FFFFFF)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: `${gradientText} 8s ease infinite`,
              mb: 2
            }}
          >
            MSI Laptop Series
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
            Organized by Levels and Categories
          </Typography>
          <Divider sx={{ width: '100px', height: '3px', background: '#A7F3D0', mx: 'auto', borderRadius: '2px' }} />
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Series Selection Tabs - Using EXACT same structure as HP */}
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
            {msiSeriesData.map((series) => (
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

        {/* Selected Series Header - Using EXACT same structure as HP */}
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

        {/* Scrolling Red Message - Using EXACT same structure as HP */}
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

        {/* Gaming Section (Replaces Entry Level Section for MSI) */}
        {renderEntryLevelSection()}

        {/* Other Category Sections */}
        {selectedSeriesData && (
          <>
            {renderCategorySection('Mid-Range')}
            {renderCategorySection('Consumer')}
            {renderCategorySection('Commercial')}
            {renderCategorySection('Premium')}
          </>
        )}

        {/* Legend Explanation - Using EXACT same structure as HP */}
        <Paper sx={{ mt: 6, p: 3, borderRadius: 3, backgroundColor: '#f8fafc' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            📋 MSI Laptop Categories Explained
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
            Note: MSI laptops are primarily gaming-focused but can appear in multiple categories based on their features and price range.
          </Typography>
        </Paper>

        {/* MSI Brand Features - Using same structure but MSI-specific content */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: alpha('#0096D6', 0.05) }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0096D6' }}>
            🏆 Why Choose MSI Laptops?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <FlashOn sx={{ fontSize: 40, color: '#0096D6', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Cooler Boost Technology
                </Typography>
                <Typography variant="body2">
                  Advanced thermal solutions for maximum gaming performance
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Gamepad sx={{ fontSize: 40, color: '#0096D6', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Gaming-Optimized
                </Typography>
                <Typography variant="body2">
                  Features designed specifically for gamers and enthusiasts
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Diamond sx={{ fontSize: 40, color: '#0096D6', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Premium Build
                </Typography>
                <Typography variant="body2">
                  High-quality materials and attention to detail
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <TrendingUp sx={{ fontSize: 40, color: '#0096D6', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Performance
                </Typography>
                <Typography variant="body2">
                  Optimized for gaming, content creation, and productivity
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default MSI;