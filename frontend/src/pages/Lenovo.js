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
  Build,
  Public,
  PrecisionManufacturing,
  TouchApp,
  BatteryFull
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

const Lenovo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedSeries, setSelectedSeries] = useState('Lenovo IdeaPad');

  // Lenovo Series Data
  const lenovoSeriesData = [
    {
      name: 'Lenovo V Series',
      logoColor: '#E2231A', // Lenovo Red
      description: 'Affordable business laptops with essential productivity features for small businesses.',
      categories: ['Entry Level', 'Commercial'],
      
      // Entry Level Models
      entryLevel: [
        {
          id: 'lenovo-v15-g3-iap',
          name: 'Lenovo V15 G3 IAP',
          types: ['Entry Level', 'Commercial'],
          price: '₹32,999',
          specs: ['Intel i3-1215U', '8GB DDR4 RAM', '256GB SSD', '15.6" FHD Anti-glare', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Small Business Professionals',
          includedIn: ['Entry Level', 'Commercial']
        },
        {
          id: 'lenovo-v14-g4-amn',
          name: 'Lenovo V14 G4 AMN',
          types: ['Entry Level'],
          price: '₹28,999',
          specs: ['AMD Ryzen 3 5300U', '8GB RAM', '512GB SSD', '14" HD Display', 'Radeon Graphics'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Budget Business Computing',
          includedIn: ['Entry Level']
        },
        {
          id: 'lenovo-v15-ada',
          name: 'Lenovo V15 ADA',
          types: ['Entry Level'],
          price: '₹26,499',
          specs: ['AMD 3020e', '4GB RAM', '128GB eMMC', '15.6" HD', 'Windows 11 Home in S Mode'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'First-time Business Users',
          includedIn: ['Entry Level']
        }
      ],
      
      // Commercial Models
      commercial: [
        {
          id: 'lenovo-v15-g3-iap',
          name: 'Lenovo V15 G3 IAP',
          types: ['Entry Level', 'Commercial'],
          price: '₹32,999',
          specs: ['Intel i3-1215U', '8GB DDR4 RAM', '256GB SSD', '15.6" FHD Anti-glare', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Small Business Professionals',
          includedIn: ['Entry Level', 'Commercial']
        },
        {
          id: 'lenovo-v14-g4-ial',
          name: 'Lenovo V14 G4 IAL',
          types: ['Commercial'],
          price: '₹44,999',
          specs: ['Intel i5-1235U', '16GB RAM', '512GB SSD', '14" FHD IPS', 'TPM 2.0 Security'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Deployments',
          includedIn: ['Commercial']
        }
      ]
    },
    {
      name: 'Lenovo IdeaPad',
      logoColor: '#FF6B35', // Orange
      description: 'Versatile laptops for everyday use, perfect for students and home users.',
      categories: ['Entry Level', 'Consumer'],
      
      entryLevel: [
        {
          id: 'lenovo-ideapad-3-15itl6',
          name: 'Lenovo IdeaPad 3',
          types: ['Entry Level', 'Consumer'],
          price: '₹34,999',
          specs: ['Intel i3-1115G4', '8GB DDR4 RAM', '512GB SSD', '15.6" FHD Display', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Home Users',
          includedIn: ['Entry Level', 'Consumer']
        },
        {
          id: 'lenovo-ideapad-1-15amn7',
          name: 'Lenovo IdeaPad 1',
          types: ['Entry Level'],
          price: '₹29,999',
          specs: ['AMD Athlon Silver 7120U', '8GB RAM', '256GB SSD', '15.6" HD Anti-glare', 'AMD Radeon Graphics'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Basic Computing Needs',
          includedIn: ['Entry Level']
        },
        {
          id: 'lenovo-ideapad-flex-5',
          name: 'Lenovo IdeaPad Flex 5',
          types: ['Entry Level'],
          price: '₹39,999',
          specs: ['Intel Pentium Silver N6000', '4GB RAM', '128GB SSD', '14" HD Touch', '2-in-1 Convertible'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Creative Users',
          includedIn: ['Entry Level']
        }
      ],
      
      consumer: [
        {
          id: 'lenovo-ideapad-3-15itl6',
          name: 'Lenovo IdeaPad 3',
          types: ['Entry Level', 'Consumer'],
          price: '₹34,999',
          specs: ['Intel i3-1115G4', '8GB DDR4 RAM', '512GB SSD', '15.6" FHD Display', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Home Users',
          includedIn: ['Entry Level', 'Consumer']
        },
        {
          id: 'lenovo-ideapad-slim-3i',
          name: 'Lenovo IdeaPad Slim 3i',
          types: ['Consumer'],
          price: '₹47,999',
          specs: ['Intel i5-1235U', '8GB RAM', '512GB SSD', '15.6" FHD IPS', 'Backlit Keyboard'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Multimedia Consumption',
          includedIn: ['Consumer']
        }
      ]
    },
    {
      name: 'Lenovo LOQ',
      logoColor: '#00A8E8', // Blue
      description: 'Performance laptops for creators and professionals, offering great value.',
      categories: ['Mid-Range', 'Consumer', 'Commercial'],
      
      midRange: [
        {
          id: 'lenovo-loq-15irh8',
          name: 'Lenovo LOQ 15',
          types: ['Mid-Range', 'Consumer'],
          price: '₹74,999',
          specs: ['Intel i5-13420H', '16GB DDR5', '512GB SSD', '15.6" FHD 144Hz', 'NVIDIA RTX 3050'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Content Creators, Gamers',
          includedIn: ['Mid-Range', 'Consumer']
        },
        {
          id: 'lenovo-loq-16irh8',
          name: 'Lenovo LOQ 16',
          types: ['Mid-Range'],
          price: '₹82,999',
          specs: ['Intel i7-13650HX', '16GB DDR5', '1TB SSD', '16" WQXGA 165Hz', 'NVIDIA RTX 4060'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professional Creatives',
          includedIn: ['Mid-Range']
        }
      ],
      
      consumer: [
        {
          id: 'lenovo-loq-15irh8',
          name: 'Lenovo LOQ 15',
          types: ['Mid-Range', 'Consumer'],
          price: '₹74,999',
          specs: ['Intel i5-13420H', '16GB DDR5', '512GB SSD', '15.6" FHD 144Hz', 'NVIDIA RTX 3050'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Content Creators, Gamers',
          includedIn: ['Mid-Range', 'Consumer']
        },
        {
          id: 'lenovo-loq-15aaph8',
          name: 'Lenovo LOQ 15 AMD',
          types: ['Consumer'],
          price: '₹69,999',
          specs: ['AMD Ryzen 7 7840HS', '16GB DDR5', '512GB SSD', '15.6" FHD 120Hz', 'AMD Radeon 7600S'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Multi-purpose Computing',
          includedIn: ['Consumer']
        }
      ],
      
      commercial: [
        {
          id: 'lenovo-loq-15irp9',
          name: 'Lenovo LOQ 15 Pro',
          types: ['Commercial'],
          price: '₹89,999',
          specs: ['Intel i7-13650HX', '32GB DDR5', '1TB SSD', '15.6" WQXGA 240Hz', 'NVIDIA RTX 4070'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professional Video Editing',
          includedIn: ['Commercial']
        }
      ]
    },
    {
      name: 'Lenovo ThinkPad',
      logoColor: '#000000', // Black
      description: 'Legendary business laptops with unmatched durability, security, and keyboard.',
      categories: ['Commercial', 'Premium'],
      
      commercial: [
        {
          id: 'thinkpad-e14-gen-5',
          name: 'ThinkPad E14 Gen 5',
          types: ['Commercial'],
          price: '₹64,999',
          specs: ['Intel i5-1335U', '16GB RAM', '512GB SSD', '14" FHD Anti-glare', 'ThinkShield Security'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business Professionals',
          includedIn: ['Commercial']
        },
        {
          id: 'thinkpad-l14-gen-4',
          name: 'ThinkPad L14 Gen 4',
          types: ['Commercial'],
          price: '₹72,999',
          specs: ['Intel i7-1355U', '16GB RAM', '1TB SSD', '14" FHD 400 nits', 'vPro Platform'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Enterprise Deployment',
          includedIn: ['Commercial']
        },
        {
          id: 'thinkpad-t14-gen-4',
          name: 'ThinkPad T14 Gen 4',
          types: ['Commercial'],
          price: '₹89,999',
          specs: ['Intel i7-1365U vPro', '16GB LPDDR5', '1TB SSD', '14" WUXGA Touch', 'IR Camera + Fingerprint'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Executives',
          includedIn: ['Commercial']
        }
      ],
      
      premium: [
        {
          id: 'thinkpad-x1-carbon-gen-11',
          name: 'ThinkPad X1 Carbon Gen 11',
          types: ['Premium', 'Commercial'],
          price: '₹1,49,999',
          specs: ['Intel i7-1365U vPro', '32GB LPDDR5', '2TB SSD', '14" OLED 2.8K', 'Carbon Fiber Chassis'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Senior Executives',
          includedIn: ['Premium', 'Commercial']
        },
        {
          id: 'thinkpad-x1-yoga-gen-8',
          name: 'ThinkPad X1 Yoga Gen 8',
          types: ['Premium'],
          price: '₹1,69,999',
          specs: ['Intel i7-1360P vPro', '32GB LPDDR5', '2TB SSD', '14" OLED 2.8K Touch', '360° Convertible'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mobile Professionals',
          includedIn: ['Premium']
        },
        {
          id: 'thinkpad-z13-gen-2',
          name: 'ThinkPad Z13 Gen 2',
          types: ['Premium'],
          price: '₹1,79,999',
          specs: ['AMD Ryzen 7 PRO 7840U', '32GB LPDDR5x', '2TB SSD', '13.3" OLED 2.8K', 'Vegan Leather Cover'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Design-forward Professionals',
          includedIn: ['Premium']
        }
      ]
    },
    {
      name: 'Lenovo Legion',
      logoColor: '#E2231A', // Legion Red
      description: 'High-performance gaming laptops with desktop-grade components and advanced cooling.',
      categories: ['Gaming', 'Premium'],
      
      gaming: [
        {
          id: 'legion-5-pro-16irh8',
          name: 'Legion 5 Pro',
          types: ['Gaming'],
          price: '₹1,09,999',
          specs: ['Intel i7-13700HX', '16GB DDR5', '1TB SSD', '16" WQXGA 165Hz', 'NVIDIA RTX 4060'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mainstream Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'legion-7-pro-16irx9',
          name: 'Legion 7 Pro',
          types: ['Gaming'],
          price: '₹1,59,999',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB SSD', '16" Mini-LED 165Hz', 'NVIDIA RTX 4080'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-end Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'legion-slim-5-16irh8',
          name: 'Legion Slim 5',
          types: ['Gaming'],
          price: '₹94,999',
          specs: ['Intel i5-13500H', '16GB DDR5', '512GB SSD', '16" WQXGA 165Hz', 'NVIDIA RTX 4050'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Portable Gaming',
          includedIn: ['Gaming']
        }
      ],
      
      premium: [
        {
          id: 'legion-7-pro-16irx9',
          name: 'Legion 7 Pro',
          types: ['Gaming', 'Premium'],
          price: '₹1,59,999',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB SSD', '16" Mini-LED 165Hz', 'NVIDIA RTX 4080'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-end Gaming',
          includedIn: ['Gaming', 'Premium']
        },
        {
          id: 'legion-9i-16irx9',
          name: 'Legion 9i',
          types: ['Premium'],
          price: '₹2,49,999',
          specs: ['Intel i9-13980HX', '64GB DDR5', '4TB SSD', '16" Mini-LED 165Hz', 'NVIDIA RTX 4090'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Extreme Gaming/Content Creation',
          includedIn: ['Premium']
        },
        {
          id: 'legion-pro-7i-16irx9',
          name: 'Legion Pro 7i',
          types: ['Premium'],
          price: '₹1,89,999',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB SSD', '16" WQXGA 240Hz', 'NVIDIA RTX 4090'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professional Gamers',
          includedIn: ['Premium']
        }
      ]
    }
  ];

  // Category definitions
  const categories = [
    {
      name: 'Entry Level',
      description: 'Basic performance, essential tasks. Price: ₹25,000-40,000',
      icon: <School />,
      color: '#3B82F6',
      priceRange: '₹25,000-40,000'
    },
    {
      name: 'Mid-Range',
      description: 'Balanced performance for work & media. Price: ₹40,000-90,000',
      icon: <DisplaySettings />,
      color: '#F59E0B',
      priceRange: '₹40,000-90,000'
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
      priceRange: '₹30,000-1,50,000'
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
  const selectedSeriesData = lenovoSeriesData.find(series => series.name === selectedSeries);

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
          Basic performance, essential tasks. Price: ₹25,000-40,000
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
                    to={`/product/lenovo/${model.id}`}
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
                    to={`/product/lenovo/${model.id}`}
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
        background: 'linear-gradient(135deg, #E2231A 0%, #B81D17 50%, #8B1510 100%)',
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
              background: 'linear-gradient(90deg, #FFFFFF, #FFD166, #FFFFFF)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: `${gradientText} 8s ease infinite`,
              mb: 2
            }}
          >
            Lenovo Laptop Series
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
            Engineered for Reliability and Performance
          </Typography>
          <Divider sx={{ width: '100px', height: '3px', background: '#FFD166', mx: 'auto', borderRadius: '2px' }} />
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
            {lenovoSeriesData.map((series) => (
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
            📋 Lenovo Laptop Categories Explained
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
            Note: Lenovo laptops can appear in multiple categories based on their features and target audience.
            For example, ThinkPad X1 Carbon appears in both Commercial and Premium categories.
          </Typography>
        </Paper>

        {/* Lenovo Brand Features */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: alpha('#E2231A', 0.05) }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#E2231A' }}>
            🏆 Why Choose Lenovo Laptops?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Build sx={{ fontSize: 40, color: '#E2231A', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Military Grade Durability
                </Typography>
                <Typography variant="body2">
                  MIL-STD-810H tested for extreme conditions
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <TouchApp sx={{ fontSize: 40, color: '#E2231A', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Legendary Keyboard
                </Typography>
                <Typography variant="body2">
                  Best-in-class typing experience on ThinkPad series
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Security sx={{ fontSize: 40, color: '#E2231A', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  ThinkShield Security
                </Typography>
                <Typography variant="body2">
                  Comprehensive hardware and software security suite
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <BatteryFull sx={{ fontSize: 40, color: '#E2231A', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Rapid Charge
                </Typography>
                <Typography variant="body2">
                  Charge to 80% in just 1 hour with Rapid Charge Pro
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Lenovo Series Comparison */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: '#f1f5f9' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#1e293b' }}>
            📊 Lenovo Series Comparison
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: 'white', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#E2231A', mb: 1 }}>
                  ThinkPad Series
                </Typography>
                <Typography variant="body2">
                  Best for: Business professionals, corporate use
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Key Features: Unmatched durability, security, legendary keyboard
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: 'white', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#E2231A', mb: 1 }}>
                  Legion Series
                </Typography>
                <Typography variant="body2">
                  Best for: Gamers, content creators
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Key Features: Desktop-grade performance, advanced cooling, high refresh rates
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, backgroundColor: 'white', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#FF6B35', mb: 1 }}>
                  IdeaPad Series
                </Typography>
                <Typography variant="body2">
                  Best for: Students, home users
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                  Key Features: Value for money, versatile designs, reliable performance
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Lenovo;