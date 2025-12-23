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
  LightMode,
  Bolt,
  Diamond,
  TravelExplore,
  Speed as SpeedIcon,
  Pages
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

const Acer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedSeries, setSelectedSeries] = useState('Acer Aspire');

  // Acer Series Data
  const acerSeriesData = [
    {
      name: 'Acer Aspire',
      logoColor: '#83B81A', // Acer Green
      description: 'Versatile and affordable laptops for everyday computing, perfect for students and home users.',
      categories: ['Entry Level', 'Consumer'],
      
      // Entry Level Models
      entryLevel: [
        {
          id: 'acer-aspire-3-a315-24p',
          name: 'Acer Aspire 3 A315-24P',
          types: ['Entry Level', 'Consumer'],
          price: '₹31,999',
          specs: ['AMD Ryzen 3 7320U', '8GB LPDDR5 RAM', '512GB SSD', '15.6" FHD Display', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Basic Computing',
          includedIn: ['Entry Level', 'Consumer']
        },
        {
          id: 'acer-aspire-5-a515-56',
          name: 'Acer Aspire 5 A515-56',
          types: ['Entry Level'],
          price: '₹37,999',
          specs: ['Intel i3-1115G4', '8GB DDR4 RAM', '256GB SSD', '15.6" FHD IPS', 'Backlit Keyboard'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Home Users, Office Work',
          includedIn: ['Entry Level']
        },
        {
          id: 'acer-aspire-1-a114-33',
          name: 'Acer Aspire 1 A114-33',
          types: ['Entry Level'],
          price: '₹24,999',
          specs: ['Intel Celeron N4500', '4GB RAM', '128GB eMMC', '14" HD Display', 'Windows 11 in S Mode'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'First-time Users, Basic Tasks',
          includedIn: ['Entry Level']
        },
        {
          id: 'acer-aspire-3-a315-23',
          name: 'Acer Aspire 3 A315-23',
          types: ['Entry Level'],
          price: '₹28,499',
          specs: ['AMD Athlon Silver 3050U', '4GB RAM', '256GB SSD', '15.6" HD Anti-glare', 'AMD Radeon Graphics'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Budget Computing',
          includedIn: ['Entry Level']
        }
      ],
      
      // Consumer Models
      consumer: [
        {
          id: 'acer-aspire-3-a315-24p',
          name: 'Acer Aspire 3 A315-24P',
          types: ['Entry Level', 'Consumer'],
          price: '₹31,999',
          specs: ['AMD Ryzen 3 7320U', '8GB LPDDR5 RAM', '512GB SSD', '15.6" FHD Display', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Basic Computing',
          includedIn: ['Entry Level', 'Consumer']
        },
        {
          id: 'acer-aspire-5-a515-57g',
          name: 'Acer Aspire 5 A515-57G',
          types: ['Consumer'],
          price: '₹54,999',
          specs: ['Intel i5-1240P', '16GB DDR4 RAM', '512GB SSD', '15.6" FHD IPS', 'NVIDIA GeForce MX550'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Multimedia, Light Gaming',
          includedIn: ['Consumer']
        },
        {
          id: 'acer-aspire-7-a715-76g',
          name: 'Acer Aspire 7 A715-76G',
          types: ['Consumer'],
          price: '₹67,999',
          specs: ['Intel i5-12500H', '16GB DDR4 RAM', '512GB SSD', '15.6" FHD 144Hz', 'NVIDIA RTX 3050'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Content Creation, Gaming',
          includedIn: ['Consumer']
        }
      ]
    },
    {
      name: 'Acer Swift',
      logoColor: '#4A6FA5', // Swift Blue
      description: 'Ultra-portable and stylish laptops for professionals on the go.',
      categories: ['Consumer', 'Mid-Range'],
      
      // Consumer Models
      consumer: [
        {
          id: 'acer-swift-3-sf314-511',
          name: 'Acer Swift 3 SF314-511',
          types: ['Consumer'],
          price: '₹59,999',
          specs: ['Intel i5-1335U', '16GB LPDDR5', '512GB SSD', '14" QHD IPS', 'Intel Iris Xe Graphics'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professionals, Students',
          includedIn: ['Consumer']
        },
        {
          id: 'acer-swift-go-14-sf14-71',
          name: 'Acer Swift Go 14',
          types: ['Consumer'],
          price: '₹74,999',
          specs: ['Intel i7-1355U', '16GB LPDDR5', '1TB SSD', '14" OLED 2.8K', '90Hz Refresh Rate'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Consumer']
        },
        {
          id: 'acer-swift-x-sfx14-51g',
          name: 'Acer Swift X SFX14-51G',
          types: ['Consumer'],
          price: '₹82,999',
          specs: ['Intel i7-13700H', '16GB LPDDR5', '1TB SSD', '14" 2.8K OLED', 'NVIDIA RTX 4050'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Content Creators',
          includedIn: ['Consumer']
        }
      ],
      
      // Mid-Range Models
      midRange: [
        {
          id: 'acer-swift-3-sf314-511',
          name: 'Acer Swift 3 SF314-511',
          types: ['Consumer'],
          price: '₹59,999',
          specs: ['Intel i5-1335U', '16GB LPDDR5', '512GB SSD', '14" QHD IPS', 'Intel Iris Xe Graphics'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professionals, Students',
          includedIn: ['Consumer']
        },
        {
          id: 'acer-swift-5-sf514-56t',
          name: 'Acer Swift 5 SF514-56T',
          types: ['Mid-Range'],
          price: '₹89,999',
          specs: ['Intel i7-1360P', '16GB LPDDR5', '1TB SSD', '14" WUXGA Touch', 'Magnesium-Aluminum Alloy'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Executive Professionals',
          includedIn: ['Mid-Range']
        }
      ]
    },
    {
      name: 'Acer TravelMate',
      logoColor: '#5D6D7E', // Business Gray
      description: 'Durable and secure business laptops for mobile professionals.',
      categories: ['Entry Level', 'Commercial'],
      
      // Entry Level Models
      entryLevel: [
        {
          id: 'acer-travelmate-b3-tmb311-31',
          name: 'Acer TravelMate B3 TMB311-31',
          types: ['Entry Level', 'Commercial'],
          price: '₹34,999',
          specs: ['Intel Celeron N4500', '4GB RAM', '128GB eMMC', '11.6" HD Display', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Education, Basic Business',
          includedIn: ['Entry Level', 'Commercial']
        },
        {
          id: 'acer-travelmate-p2-tmp215-52',
          name: 'Acer TravelMate P2 TMP215-52',
          types: ['Entry Level'],
          price: '₹42,999',
          specs: ['Intel i3-1215U', '8GB RAM', '512GB SSD', '15.6" FHD Anti-glare', 'Acer ProShield'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Small Business Professionals',
          includedIn: ['Entry Level']
        }
      ],
      
      // Commercial Models
      commercial: [
        {
          id: 'acer-travelmate-p2-tmp215-52',
          name: 'Acer TravelMate P2 TMP215-52',
          types: ['Entry Level'],
          price: '₹42,999',
          specs: ['Intel i3-1215U', '8GB RAM', '512GB SSD', '15.6" FHD Anti-glare', 'Acer ProShield'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Small Business Professionals',
          includedIn: ['Entry Level']
        },
        {
          id: 'acer-travelmate-p6-tmp614-51',
          name: 'Acer TravelMate P6 TMP614-51',
          types: ['Commercial'],
          price: '₹94,999',
          specs: ['Intel i7-1360P vPro', '16GB LPDDR5', '1TB SSD', '14" WUXGA 400 nits', 'Military Grade Durability'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Executives',
          includedIn: ['Commercial']
        },
        {
          id: 'acer-travelmate-spin-p4-tmp414rn-51',
          name: 'Acer TravelMate Spin P4',
          types: ['Commercial'],
          price: '₹1,09,999',
          specs: ['Intel i7-1360P vPro', '16GB LPDDR5', '1TB SSD', '14" WUXGA Touch', '360° Convertible'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mobile Professionals',
          includedIn: ['Commercial']
        }
      ]
    },
    {
      name: 'Acer Nitro',
      logoColor: '#FF6B6B', // Gaming Red
      description: 'High-performance gaming laptops with powerful graphics and cooling systems.',
      categories: ['Gaming', 'Premium'],
      
      // Gaming Models
      gaming: [
        {
          id: 'acer-nitro-5-an515-58',
          name: 'Acer Nitro 5 AN515-58',
          types: ['Gaming'],
          price: '₹79,999',
          specs: ['Intel i5-12500H', '16GB DDR4', '512GB SSD', '15.6" FHD 144Hz', 'NVIDIA RTX 3050 Ti'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Entry-level Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'acer-nitro-16-an16-41',
          name: 'Acer Nitro 16',
          types: ['Gaming'],
          price: '₹1,09,999',
          specs: ['AMD Ryzen 7 7840HS', '16GB DDR5', '1TB SSD', '16" WQXGA 165Hz', 'NVIDIA RTX 4060'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mainstream Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'acer-nitro-5-an515-46',
          name: 'Acer Nitro 5 AN515-46',
          types: ['Gaming'],
          price: '₹94,999',
          specs: ['AMD Ryzen 7 6800H', '16GB DDR5', '1TB SSD', '15.6" QHD 165Hz', 'NVIDIA RTX 3070 Ti'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-performance Gaming',
          includedIn: ['Gaming']
        }
      ],
      
      // Premium Models
      premium: [
        {
          id: 'acer-nitro-16-an16-41',
          name: 'Acer Nitro 16',
          types: ['Gaming', 'Premium'],
          price: '₹1,09,999',
          specs: ['AMD Ryzen 7 7840HS', '16GB DDR5', '1TB SSD', '16" WQXGA 165Hz', 'NVIDIA RTX 4060'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mainstream Gaming',
          includedIn: ['Gaming', 'Premium']
        },
        {
          id: 'acer-nitro-17-an17-41',
          name: 'Acer Nitro 17',
          types: ['Premium'],
          price: '₹1,39,999',
          specs: ['Intel i7-13700HX', '32GB DDR5', '2TB SSD', '17.3" QHD 240Hz', 'NVIDIA RTX 4070'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Serious Gamers',
          includedIn: ['Premium']
        }
      ]
    },
    {
      name: 'Acer Predator',
      logoColor: '#4ECDC4', // Predator Cyan
      description: 'Ultimate gaming machines with desktop-level performance and advanced cooling technology.',
      categories: ['Gaming', 'Premium'],
      
      // Gaming Models
      gaming: [
        {
          id: 'acer-predator-helios-300-ph315-55',
          name: 'Predator Helios 300 PH315-55',
          types: ['Gaming'],
          price: '₹1,24,999',
          specs: ['Intel i7-13700HX', '16GB DDR5', '1TB SSD', '15.6" QHD 240Hz', 'NVIDIA RTX 4060'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Competitive Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'acer-predator-helios-16-ph16-71',
          name: 'Predator Helios 16',
          types: ['Gaming'],
          price: '₹1,59,999',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB SSD', '16" Mini-LED 250Hz', 'NVIDIA RTX 4080'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-end Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'acer-predator-triton-17-x-ptx17-71',
          name: 'Predator Triton 17 X',
          types: ['Gaming'],
          price: '₹2,19,999',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB SSD', '17" Mini-LED 250Hz', 'NVIDIA RTX 4090'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Extreme Gaming',
          includedIn: ['Gaming']
        }
      ],
      
      // Premium Models
      premium: [
        {
          id: 'acer-predator-helios-16-ph16-71',
          name: 'Predator Helios 16',
          types: ['Gaming', 'Premium'],
          price: '₹1,59,999',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB SSD', '16" Mini-LED 250Hz', 'NVIDIA RTX 4080'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-end Gaming',
          includedIn: ['Gaming', 'Premium']
        },
        {
          id: 'acer-predator-triton-17-x-ptx17-71',
          name: 'Predator Triton 17 X',
          types: ['Premium'],
          price: '₹2,19,999',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB SSD', '17" Mini-LED 250Hz', 'NVIDIA RTX 4090'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Extreme Gaming',
          includedIn: ['Premium']
        },
        {
          id: 'acer-predator-helios-neo-16-phn16-71',
          name: 'Predator Helios Neo 16',
          types: ['Premium'],
          price: '₹1,34,999',
          specs: ['Intel i7-13650HX', '16GB DDR5', '1TB SSD', '16" WQXGA 165Hz', 'NVIDIA RTX 4060'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Performance Gaming',
          includedIn: ['Premium']
        }
      ]
    }
  ];

  // Category definitions
  const categories = [
    {
      name: 'Entry Level',
      description: 'Basic performance, essential tasks. Price: ₹25,000-45,000',
      icon: <School />,
      color: '#3B82F6',
      priceRange: '₹25,000-45,000'
    },
    {
      name: 'Mid-Range',
      description: 'Balanced performance for work & media. Price: ₹45,000-95,000',
      icon: <DisplaySettings />,
      color: '#F59E0B',
      priceRange: '₹45,000-95,000'
    },
    {
      name: 'Consumer',
      description: 'Design, multimedia, portability for personal use.',
      icon: <Monitor />,
      color: '#10B981',
      priceRange: '₹30,000-85,000'
    },
    {
      name: 'Commercial',
      description: 'Security, durability for business use.',
      icon: <Business />,
      color: '#6366F1',
      priceRange: '₹35,000-1,10,000'
    },
    {
      name: 'Gaming',
      description: 'High-performance GPU, high-refresh displays. Price: ₹75,000+',
      icon: <VideogameAsset />,
      color: '#EF4444',
      priceRange: '₹75,000+'
    },
    {
      name: 'Premium',
      description: 'Top-tier performance, best displays, premium build. Price: ₹1,00,000+',
      icon: <WorkspacePremium />,
      color: '#8B5CF6',
      priceRange: '₹1,00,000+'
    }
  ];

  // Get selected series data
  const selectedSeriesData = acerSeriesData.find(series => series.name === selectedSeries);

  // Function to render Entry Level section
  const renderEntryLevelSection = () => {
    const entryLevelModels = selectedSeriesData?.entryLevel || [];
    
    if (entryLevelModels.length === 0) return null;

    return (
      <Paper
        elevation={0}
        sx={{
          mb: 6,
          p: 4,
          borderRadius: 2,
          border: '2px solid',
          borderColor: alpha('#3B82F6', 0.3),
          backgroundColor: alpha('#3B82F6', 0.05),
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Entry Level Header */}
        <Typography variant="h4" sx={{ 
          fontWeight: 800, 
          color: '#3B82F6',
          mb: 1
        }}>
          Entry Level LAPTOPS
        </Typography>
        
        <Typography variant="body1" sx={{ 
          color: 'text.secondary',
          mb: 3,
          fontSize: '1.1rem'
        }}>
          Basic performance, essential tasks. Price: ₹25,000-45,000
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        {/* Entry Level Models List */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            Entry Level Models
          </Typography>
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', mb: 3 }}>
            {entryLevelModels.map((model, index) => (
              <Chip
                key={index}
                label={model.name}
                sx={{
                  backgroundColor: alpha('#3B82F6', 0.1),
                  color: '#3B82F6',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  py: 1.5
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Entry Level Models Grid */}
        <Grid container spacing={3}>
          {entryLevelModels.slice(0, 3).map((model, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                borderRadius: 2,
                boxShadow: 2,
                border: '1px solid',
                borderColor: alpha('#3B82F6', 0.2),
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
                    color: '#3B82F6',
                    fontWeight: 900,
                    mb: 2
                  }}>
                    {model.price}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  {/* Best For */}
                  <Typography variant="body1" sx={{ 
                    color: '#3B82F6',
                    backgroundColor: alpha('#3B82F6', 0.1),
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
                            backgroundColor: '#3B82F6'
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
                    to={`/product/acer/${model.id}`}
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#3B82F6',
                      color: 'white',
                      fontWeight: 700,
                      py: 1.5,
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: '#2563EB'
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
    
    if (models.length === 0 || categoryName === 'Entry Level') return null;

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
                    to={`/product/acer/${model.id}`}
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
      {/* Hero Header */}
      <Box sx={{
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #83B81A 0%, #6A9B16 50%, #517E12 100%)',
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
              background: 'linear-gradient(90deg, #FFFFFF, #C6F6D5, #FFFFFF)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: `${gradientText} 8s ease infinite`,
              mb: 2
            }}
          >
            Acer Laptop Series
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
            Experience Innovation and Performance
          </Typography>
          <Divider sx={{ width: '100px', height: '3px', background: '#C6F6D5', mx: 'auto', borderRadius: '2px' }} />
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
            {acerSeriesData.map((series) => (
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

        {/* Entry Level Section */}
        {renderEntryLevelSection()}

        {/* Other Category Sections */}
        {selectedSeriesData && (
          <>
            {renderCategorySection('Mid-Range')}
            {renderCategorySection('Consumer')}
            {renderCategorySection('Commercial')}
            {renderCategorySection('Gaming')}
            {renderCategorySection('Premium')}
          </>
        )}

        {/* Legend Explanation */}
        <Paper sx={{ mt: 6, p: 3, borderRadius: 3, backgroundColor: '#f8fafc' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            📋 Acer Laptop Categories Explained
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
            Note: Acer laptops are designed for specific user needs. Gaming series like Predator offer desktop-level performance, while Swift focuses on portability.
          </Typography>
        </Paper>

        {/* Acer Brand Features */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: alpha('#83B81A', 0.05) }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#83B81A' }}>
            🏆 Why Choose Acer Laptops?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <LightMode sx={{ fontSize: 40, color: '#83B81A', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Acer Color Intelligence
                </Typography>
                <Typography variant="body2">
                  Optimizes color accuracy and brightness automatically
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Bolt sx={{ fontSize: 40, color: '#83B81A', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Acer CoolBoost
                </Typography>
                <Typography variant="body2">
                  Advanced cooling technology for sustained performance
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <SpeedIcon sx={{ fontSize: 40, color: '#83B81A', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  PredatorSense
                </Typography>
                <Typography variant="body2">
                  Complete control over gaming performance and RGB lighting
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Diamond sx={{ fontSize: 40, color: '#83B81A', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Premium Build Quality
                </Typography>
                <Typography variant="body2">
                  Durable materials and precision engineering
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Acer Series Comparison */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: '#f1f5f9' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#1e293b' }}>
            📊 Acer Series Comparison
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: 'white', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#83B81A', mb: 1 }}>
                  Aspire Series
                </Typography>
                <Typography variant="body2">
                  Best for: Students, home users, everyday computing
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Key Features: Value for money, versatile designs, reliable performance
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: 'white', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#4ECDC4', mb: 1 }}>
                  Predator Series
                </Typography>
                <Typography variant="body2">
                  Best for: Hardcore gamers, content creators
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Key Features: Desktop-level performance, advanced cooling, high refresh rates
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: 'white', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#4A6FA5', mb: 1 }}>
                  Swift Series
                </Typography>
                <Typography variant="body2">
                  Best for: Professionals, students, mobile users
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Key Features: Lightweight, premium design, long battery life
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        {/* Gaming vs Business Comparison */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: alpha('#8B5CF6', 0.05) }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#8B5CF6' }}>
            🎮 Acer Gaming Series Comparison
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, backgroundColor: alpha('#FF6B6B', 0.05), borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#FF6B6B', mb: 2 }}>
                  Acer Nitro Series
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  • Entry to mid-level gaming
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  • Great value for money
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  • Good cooling system
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  • Price: ₹75,000 - ₹1,40,000
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, backgroundColor: alpha('#4ECDC4', 0.05), borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#4ECDC4', mb: 2 }}>
                  Acer Predator Series
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  • High-end to extreme gaming
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  • Best-in-class performance
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  • Advanced cooling (4th/5th Gen AeroBlade)
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  • Price: ₹1,20,000 - ₹2,50,000
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Acer; 


