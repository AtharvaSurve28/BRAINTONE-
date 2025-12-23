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
  TrendingUp
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

const HP = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedSeries, setSelectedSeries] = useState('HP 15s Series');

  // HP Series Data
  const hpSeriesData = [
    {
      name: 'HP 15s Series',
      logoColor: '#0096D6', // HP Blue
      description: 'Essential laptops for everyday computing, perfect for students and home users.',
      categories: ['Entry Level', 'Consumer'],
      
      // Entry Level Models
      entryLevel: [
        {
          id: 'hp-15s-fq5000tu',
          name: 'HP 15s-fq5000TU',
          types: ['Entry Level', 'Consumer'],
          price: '₹29,999',
          specs: ['Intel i3-1215U', '8GB DDR4 RAM', '512GB SSD', '15.6" FHD Display', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Basic Computing',
          includedIn: ['Entry Level', 'Consumer']
        },
        {
          id: 'hp-15s-eq2000au',
          name: 'HP 15s-eq2000AU',
          types: ['Entry Level'],
          price: '₹34,999',
          specs: ['AMD Ryzen 3 5300U', '8GB RAM', '256GB SSD', '15.6" HD Anti-glare', 'AMD Radeon Graphics'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Home Users, Office Work',
          includedIn: ['Entry Level']
        },
        {
          id: 'hp-15s-du3000tu',
          name: 'HP 15s-du3000TU',
          types: ['Entry Level'],
          price: '₹27,499',
          specs: ['Intel Celeron N4500', '4GB RAM', '128GB eMMC', '15.6" HD Display', 'Windows 11 in S Mode'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'First-time Users',
          includedIn: ['Entry Level']
        }
      ],
      
      // Consumer Models
      consumer: [
        {
          id: 'hp-15s-fq5000tu',
          name: 'HP 15s-fq5000TU',
          types: ['Entry Level', 'Consumer'],
          price: '₹29,999',
          specs: ['Intel i3-1215U', '8GB DDR4 RAM', '512GB SSD', '15.6" FHD Display', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Basic Computing',
          includedIn: ['Entry Level', 'Consumer']
        },
        {
          id: 'hp-15s-fq2000tx',
          name: 'HP 15s-fq2000TX',
          types: ['Consumer'],
          price: '₹42,999',
          specs: ['Intel i5-1235U', '8GB RAM', '512GB SSD', '15.6" FHD Micro-edge', 'Intel Iris Xe'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Multimedia Consumption',
          includedIn: ['Consumer']
        }
      ]
    },
    {
      name: 'HP G Series',
      logoColor: '#6B7280', // Gray
      description: 'Affordable business laptops with essential productivity features for SMBs.',
      categories: ['Entry Level', 'Commercial'],
      
      entryLevel: [
        {
          id: 'hp-245-g9',
          name: 'HP 245 G9',
          types: ['Entry Level', 'Commercial'],
          price: '₹31,999',
          specs: ['AMD Ryzen 3 5425U', '8GB RAM', '256GB SSD', '14" HD Display', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Small Business Professionals',
          includedIn: ['Entry Level', 'Commercial']
        },
        {
          id: 'hp-255-g9',
          name: 'HP 255 G9',
          types: ['Entry Level'],
          price: '₹35,999',
          specs: ['AMD Athlon Gold 3150U', '8GB RAM', '512GB SSD', '15.6" FHD', 'Business Class Durability'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Budget Business Use',
          includedIn: ['Entry Level']
        }
      ],
      
      commercial: [
        {
          id: 'hp-245-g9',
          name: 'HP 245 G9',
          types: ['Entry Level', 'Commercial'],
          price: '₹31,999',
          specs: ['AMD Ryzen 3 5425U', '8GB RAM', '256GB SSD', '14" HD Display', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Small Business Professionals',
          includedIn: ['Entry Level', 'Commercial']
        },
        {
          id: 'hp-250-g9',
          name: 'HP 250 G9',
          types: ['Commercial'],
          price: '₹44,999',
          specs: ['Intel i5-1235U', '16GB RAM', '512GB SSD', '15.6" FHD Anti-glare', 'HP Wolf Security'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Deployments',
          includedIn: ['Commercial']
        }
      ]
    },
    {
      name: 'Pavilion Series',
      logoColor: '#8B5CF6', // Purple
      description: 'Stylish and powerful laptops for multimedia and creative work.',
      categories: ['Mid-Range', 'Consumer'],
      
      midRange: [
        {
          id: 'hp-pavilion-15-eg2000tu',
          name: 'HP Pavilion 15-eg2000TU',
          types: ['Mid-Range', 'Consumer'],
          price: '₹54,999',
          specs: ['Intel i5-1240P', '16GB RAM', '512GB SSD', '15.6" FHD IPS', 'Backlit Keyboard'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Mid-Range', 'Consumer']
        },
        {
          id: 'hp-pavilion-x360-14-dy0000tu',
          name: 'HP Pavilion x360',
          types: ['Mid-Range'],
          price: '₹59,999',
          specs: ['Intel i5-1235U', '8GB RAM', '512GB SSD', '14" FHD Touch', '360° Convertible'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Creatives',
          includedIn: ['Mid-Range']
        }
      ],
      
      consumer: [
        {
          id: 'hp-pavilion-15-eg2000tu',
          name: 'HP Pavilion 15-eg2000TU',
          types: ['Mid-Range', 'Consumer'],
          price: '₹54,999',
          specs: ['Intel i5-1240P', '16GB RAM', '512GB SSD', '15.6" FHD IPS', 'Backlit Keyboard'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Mid-Range', 'Consumer']
        },
        {
          id: 'hp-pavilion-gaming-15-dk2000tx',
          name: 'HP Pavilion Gaming 15',
          types: ['Consumer'],
          price: '₹67,999',
          specs: ['Intel i5-12500H', '8GB RAM', '512GB SSD', '15.6" FHD 144Hz', 'NVIDIA RTX 3050'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Casual Gaming, Multimedia',
          includedIn: ['Consumer']
        }
      ]
    },
    {
      name: 'ProBook Series',
      logoColor: '#0F766E', // Teal
      description: 'Professional business laptops with enterprise-grade security and durability.',
      categories: ['Mid-Range', 'Commercial'],
      
      midRange: [
        {
          id: 'hp-probook-450-g9',
          name: 'HP ProBook 450 G9',
          types: ['Mid-Range', 'Commercial'],
          price: '₹56,999',
          specs: ['Intel i5-1235U', '8GB RAM', '512GB SSD', '15.6" FHD Anti-glare', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business Professionals',
          includedIn: ['Mid-Range', 'Commercial']
        },
        {
          id: 'hp-probook-440-g9',
          name: 'HP ProBook 440 G9',
          types: ['Mid-Range'],
          price: '₹61,999',
          specs: ['Intel i7-1255U', '16GB RAM', '1TB SSD', '14" FHD 400 nits', 'HP Sure View Privacy'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Executives',
          includedIn: ['Mid-Range']
        }
      ],
      
      commercial: [
        {
          id: 'hp-probook-450-g9',
          name: 'HP ProBook 450 G9',
          types: ['Mid-Range', 'Commercial'],
          price: '₹56,999',
          specs: ['Intel i5-1235U', '8GB RAM', '512GB SSD', '15.6" FHD Anti-glare', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business Professionals',
          includedIn: ['Mid-Range', 'Commercial']
        },
        {
          id: 'hp-probook-x360-435-g9',
          name: 'HP ProBook x360 435 G9',
          types: ['Commercial'],
          price: '₹69,999',
          specs: ['AMD Ryzen 7 5825U', '16GB RAM', '1TB SSD', '13.3" FHD Touch', 'HP Tamper Lock'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mobile Professionals',
          includedIn: ['Commercial']
        }
      ]
    },
    {
      name: 'Spectre x360 Series',
      logoColor: '#C53030', // Red
      description: 'Premium convertible laptops with cutting-edge design and performance.',
      categories: ['Premium', 'Commercial', 'Consumer'],
      
      premium: [
        {
          id: 'hp-spectre-x360-14-ef2000tu',
          name: 'HP Spectre x360 14',
          types: ['Premium', 'Consumer'],
          price: '₹1,29,999',
          specs: ['Intel i7-1355U', '16GB LPDDR5', '1TB SSD', '14" OLED 2.8K Touch', 'Bang & Olufsen Audio'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Premium', 'Consumer']
        },
        {
          id: 'hp-spectre-x360-16-f2000tu',
          name: 'HP Spectre x360 16',
          types: ['Premium'],
          price: '₹1,59,999',
          specs: ['Intel i7-1360P', '32GB RAM', '2TB SSD', '16" OLED 3K+ Touch', 'NVIDIA RTX 4050'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Content Creators',
          includedIn: ['Premium']
        }
      ],
      
      commercial: [
        {
          id: 'hp-spectre-x360-14-ef2055tu',
          name: 'HP Spectre x360 14 Enterprise',
          types: ['Premium', 'Commercial'],
          price: '₹1,34,999',
          specs: ['Intel i7-1360P vPro', '16GB RAM', '1TB SSD', '14" WUXGA+ Touch', 'HP Wolf Security Pro'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Enterprise Executives',
          includedIn: ['Premium', 'Commercial']
        }
      ],
      
      consumer: [
        {
          id: 'hp-spectre-x360-14-ef2000tu',
          name: 'HP Spectre x360 14',
          types: ['Premium', 'Consumer'],
          price: '₹1,29,999',
          specs: ['Intel i7-1355U', '16GB LPDDR5', '1TB SSD', '14" OLED 2.8K Touch', 'Bang & Olufsen Audio'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Premium', 'Consumer']
        }
      ]
    },
    {
      name: 'Victus Series',
      logoColor: '#DC2626', // Red
      description: 'Performance-focused gaming laptops for serious gamers.',
      categories: ['Gaming', 'Premium'],
      
      gaming: [
        {
          id: 'hp-victus-15-fa0000tx',
          name: 'HP Victus 15',
          types: ['Gaming'],
          price: '₹74,999',
          specs: ['Intel i5-13500H', '16GB DDR5', '512GB SSD', '15.6" FHD 144Hz', 'NVIDIA RTX 3050'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mainstream Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'hp-victus-16-d0000tx',
          name: 'HP Victus 16',
          types: ['Gaming'],
          price: '₹89,999',
          specs: ['AMD Ryzen 7 7840HS', '16GB DDR5', '1TB SSD', '16.1" FHD 165Hz', 'NVIDIA RTX 4060'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-Performance Gaming',
          includedIn: ['Gaming']
        }
      ],
      
      premium: [
        {
          id: 'hp-victus-16-d1000tx',
          name: 'HP Victus 16 Premium',
          types: ['Gaming', 'Premium'],
          price: '₹1,09,999',
          specs: ['Intel i7-13700HX', '32GB DDR5', '2TB SSD', '16.1" QHD 165Hz', 'NVIDIA RTX 4070'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Hardcore Gamers',
          includedIn: ['Gaming', 'Premium']
        }
      ]
    },
    {
      name: 'OMEN Series',
      logoColor: '#10B981', // Green
      description: 'Ultimate gaming machines with desktop-level performance and advanced cooling.',
      categories: ['Gaming', 'Premium'],
      
      gaming: [
        {
          id: 'hp-omen-16-wd0000tx',
          name: 'HP Omen 16',
          types: ['Gaming'],
          price: '₹1,24,999',
          specs: ['Intel i7-13700HX', '16GB DDR5', '1TB SSD', '16.1" QHD 165Hz', 'NVIDIA RTX 4060'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Competitive Gaming',
          includedIn: ['Gaming']
        },
        {
          id: 'hp-omen-17-ck2000tx',
          name: 'HP Omen 17',
          types: ['Gaming'],
          price: '₹1,49,999',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB SSD', '17.3" QHD 240Hz', 'NVIDIA RTX 4080'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Esports Professionals',
          includedIn: ['Gaming']
        }
      ],
      
      premium: [
        {
          id: 'hp-omen-17-ck2000tx',
          name: 'HP Omen 17',
          types: ['Gaming', 'Premium'],
          price: '₹1,49,999',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB SSD', '17.3" QHD 240Hz', 'NVIDIA RTX 4080'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Esports Professionals',
          includedIn: ['Gaming', 'Premium']
        },
        {
          id: 'hp-omen-transcend-16',
          name: 'HP Omen Transcend 16',
          types: ['Premium'],
          price: '₹1,79,999',
          specs: ['Intel i9-13900HX', '64GB DDR5', '4TB SSD', '16" Mini-LED 240Hz', 'NVIDIA RTX 4090'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Extreme Gaming',
          includedIn: ['Premium']
        }
      ]
    }
  ];

  // Category definitions
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
  const selectedSeriesData = hpSeriesData.find(series => series.name === selectedSeries);

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
          Basic performance, essential tasks. Price: ₹10,000-35,000
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
                    to={`/product/hp/${model.id}`}
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
                    to={`/product/hp/${model.id}`}
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
        background: 'linear-gradient(135deg, #0096D6 0%, #0076A8 50%, #00587A 100%)',
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
            HP Laptop Series
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
            Organized by Levels and Categories
          </Typography>
          <Divider sx={{ width: '100px', height: '3px', background: '#A7F3D0', mx: 'auto', borderRadius: '2px' }} />
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
            {hpSeriesData.map((series) => (
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
            📋 HP Laptop Categories Explained
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
            Note: HP laptops can appear in multiple categories based on their features and price range.
            For example, HP Spectre x360 can appear in both Premium and Commercial categories.
          </Typography>
        </Paper>

        {/* HP Brand Features */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: alpha('#0096D6', 0.05) }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0096D6' }}>
            🏆 Why Choose HP Laptops?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Shield sx={{ fontSize: 40, color: '#0096D6', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  HP Wolf Security
                </Typography>
                <Typography variant="body2">
                  Enterprise-grade security built into hardware and BIOS
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Bolt sx={{ fontSize: 40, color: '#0096D6', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Fast Charge
                </Typography>
                <Typography variant="body2">
                  Charge up to 50% in just 30 minutes with HP Fast Charge
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Palette sx={{ fontSize: 40, color: '#0096D6', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Premium Design
                </Typography>
                <Typography variant="body2">
                  Sleek, durable designs with premium materials
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
                  Optimized performance with HP Command Center
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default HP;