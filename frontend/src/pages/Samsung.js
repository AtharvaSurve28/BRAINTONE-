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
  Smartphone,
  Tablet,
  Devices,
  SmartDisplay,
  ConnectedTv,
  PhoneAndroid,
  Laptop,
  CameraAlt
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

const Samsung = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedSeries, setSelectedSeries] = useState('Galaxy Book Series');

  // Samsung Series Data
  const samsungSeriesData = [
    {
      name: 'Galaxy Book Series',
      logoColor: '#0096D6', // Samsung Blue
      description: 'Versatile laptops designed for productivity, creativity, and seamless ecosystem integration.',
      categories: ['Entry Level', 'Consumer', 'Mid-Range', 'Commercial', 'Premium'],
      
      // Entry Level Models
      entrylevel: [
        {
          id: 'samsung-galaxy-book-go',
          name: 'Galaxy Book Go',
          types: ['Entry Level'],
          price: '₹29,999',
          specs: ['Qualcomm Snapdragon 7c', '4GB LPDDR4X', '128GB eUFS', '14" FHD Display', 'Windows 11 in S Mode'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Basic Computing, Students',
          includedIn: ['Entry Level']
        },
        {
          id: 'samsung-galaxy-book2-go',
          name: 'Galaxy Book2 Go',
          types: ['Entry Level', 'Consumer'],
          price: '₹34,999',
          specs: ['Snapdragon 7c Gen 2', '8GB RAM', '256GB SSD', '14" FHD', '22+ hours battery'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mobile Professionals',
          includedIn: ['Entry Level', 'Consumer']
        }
      ],
      
      // Consumer Models
      consumer: [
        {
          id: 'samsung-galaxy-book2-go',
          name: 'Galaxy Book2 Go',
          types: ['Entry Level', 'Consumer'],
          price: '₹34,999',
          specs: ['Snapdragon 7c Gen 2', '8GB RAM', '256GB SSD', '14" FHD', '22+ hours battery'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mobile Professionals',
          includedIn: ['Entry Level', 'Consumer']
        },
        {
          id: 'samsung-galaxy-book2-360',
          name: 'Galaxy Book2 360',
          types: ['Consumer', 'Mid-Range'],
          price: '₹64,999',
          specs: ['Intel i5-1235U', '8GB LPDDR4X', '512GB SSD', '13.3" FHD AMOLED Touch', 'S Pen Included'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Consumer', 'Mid-Range']
        }
      ],
      
      // Mid-Range Models
      midrange: [
        {
          id: 'samsung-galaxy-book2-360',
          name: 'Galaxy Book2 360',
          types: ['Consumer', 'Mid-Range'],
          price: '₹64,999',
          specs: ['Intel i5-1235U', '8GB LPDDR4X', '512GB SSD', '13.3" FHD AMOLED Touch', 'S Pen Included'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Consumer', 'Mid-Range']
        },
        {
          id: 'samsung-galaxy-book2-pro-360',
          name: 'Galaxy Book2 Pro 360',
          types: ['Mid-Range', 'Commercial'],
          price: '₹89,999',
          specs: ['Intel i7-1260P', '16GB LPDDR5', '1TB NVMe SSD', '15.6" AMOLED Touch', 'Intel Evo Platform'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business & Creative Work',
          includedIn: ['Mid-Range', 'Commercial']
        }
      ],
      
      // Commercial Models
      commercial: [
        {
          id: 'samsung-galaxy-book2-pro-360',
          name: 'Galaxy Book2 Pro 360',
          types: ['Mid-Range', 'Commercial'],
          price: '₹89,999',
          specs: ['Intel i7-1260P', '16GB LPDDR5', '1TB NVMe SSD', '15.6" AMOLED Touch', 'Intel Evo Platform'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business & Creative Work',
          includedIn: ['Mid-Range', 'Commercial']
        },
        {
          id: 'samsung-galaxy-book3-ultra',
          name: 'Galaxy Book3 Ultra',
          types: ['Commercial', 'Premium'],
          price: '₹1,39,999',
          specs: ['Intel i7-13700H', '16GB LPDDR5', '512GB SSD', '16" Dynamic AMOLED 2X', 'NVIDIA RTX 4050'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Enterprise Professionals',
          includedIn: ['Commercial', 'Premium']
        }
      ],
      
      // Premium Models
      premium: [
        {
          id: 'samsung-galaxy-book3-ultra',
          name: 'Galaxy Book3 Ultra',
          types: ['Commercial', 'Premium'],
          price: '₹1,39,999',
          specs: ['Intel i7-13700H', '16GB LPDDR5', '512GB SSD', '16" Dynamic AMOLED 2X', 'NVIDIA RTX 4050'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Enterprise Professionals',
          includedIn: ['Commercial', 'Premium']
        },
        {
          id: 'samsung-galaxy-book3-pro-360',
          name: 'Galaxy Book3 Pro 360',
          types: ['Premium'],
          price: '₹1,29,999',
          specs: ['Intel i7-1360P', '16GB LPDDR5', '1TB NVMe SSD', '16" 3K AMOLED Touch', 'S Pen Pro Included'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Premium Content Creation',
          includedIn: ['Premium']
        }
      ]
    },
    {
      name: 'Galaxy Book Go Series',
      logoColor: '#6B7280', // Gray
      description: 'Lightweight, always-connected laptops powered by Snapdragon for exceptional battery life.',
      categories: ['Entry Level', 'Consumer'],
      
      entrylevel: [
        {
          id: 'samsung-galaxy-book-go-np340',
          name: 'Galaxy Book Go NP340',
          types: ['Entry Level'],
          price: '₹26,999',
          specs: ['Snapdragon 7c Gen 1', '4GB RAM', '128GB eMMC', '14" HD Display', 'Windows 11 Home in S Mode'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'First-time Users, Students',
          includedIn: ['Entry Level']
        },
        {
          id: 'samsung-galaxy-book-go-5g',
          name: 'Galaxy Book Go 5G',
          types: ['Entry Level', 'Consumer'],
          price: '₹41,999',
          specs: ['Snapdragon 8cx Gen 2', '8GB RAM', '256GB SSD', '14" FHD', '5G Connectivity'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mobile Connectivity',
          includedIn: ['Entry Level', 'Consumer']
        }
      ],
      
      consumer: [
        {
          id: 'samsung-galaxy-book-go-5g',
          name: 'Galaxy Book Go 5G',
          types: ['Entry Level', 'Consumer'],
          price: '₹41,999',
          specs: ['Snapdragon 8cx Gen 2', '8GB RAM', '256GB SSD', '14" FHD', '5G Connectivity'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mobile Connectivity',
          includedIn: ['Entry Level', 'Consumer']
        }
      ]
    },
    {
      name: 'Galaxy Book2 Series',
      logoColor: '#8B5CF6', // Purple
      description: 'Convertible laptops with AMOLED displays and S Pen support for ultimate creativity.',
      categories: ['Consumer', 'Mid-Range', 'Commercial'],
      
      consumer: [
        {
          id: 'samsung-galaxy-book2-360-13',
          name: 'Galaxy Book2 360 13"',
          types: ['Consumer'],
          price: '₹59,999',
          specs: ['Intel i5-1235U', '8GB RAM', '256GB SSD', '13.3" FHD AMOLED', '360° Convertible'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Creative Work',
          includedIn: ['Consumer']
        }
      ],
      
      midrange: [
        {
          id: 'samsung-galaxy-book2-pro',
          name: 'Galaxy Book2 Pro',
          types: ['Mid-Range'],
          price: '₹74,999',
          specs: ['Intel i5-1240P', '16GB LPDDR5', '512GB SSD', '13.3" FHD AMOLED', 'Intel Iris Xe'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professional Work',
          includedIn: ['Mid-Range']
        },
        {
          id: 'samsung-galaxy-book2-pro-360-13',
          name: 'Galaxy Book2 Pro 360 13"',
          types: ['Mid-Range', 'Consumer'],
          price: '₹82,999',
          specs: ['Intel i7-1260P', '16GB RAM', '512GB SSD', '13.3" FHD AMOLED Touch', 'S Pen'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Mid-Range', 'Consumer']
        }
      ],
      
      commercial: [
        {
          id: 'samsung-galaxy-book2-business',
          name: 'Galaxy Book2 Business',
          types: ['Commercial'],
          price: '₹94,999',
          specs: ['Intel i7-1260P vPro', '16GB RAM', '512GB SSD', '15.6" FHD', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Deployments',
          includedIn: ['Commercial']
        }
      ]
    },
    {
      name: 'Galaxy Book3 Series',
      logoColor: '#0F766E', // Teal
      description: 'Premium laptops with cutting-edge displays and performance for professionals.',
      categories: ['Mid-Range', 'Commercial', 'Premium'],
      
      midrange: [
        {
          id: 'samsung-galaxy-book3',
          name: 'Galaxy Book3',
          types: ['Mid-Range'],
          price: '₹69,999',
          specs: ['Intel i5-1340P', '8GB LPDDR5', '512GB SSD', '15.6" FHD Display', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Everyday Productivity',
          includedIn: ['Mid-Range']
        },
        {
          id: 'samsung-galaxy-book3-360',
          name: 'Galaxy Book3 360',
          types: ['Mid-Range', 'Consumer'],
          price: '₹84,999',
          specs: ['Intel i7-1360P', '16GB LPDDR5', '512GB SSD', '15.6" FHD AMOLED Touch', 'S Pen'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Versatile Computing',
          includedIn: ['Mid-Range', 'Consumer']
        }
      ],
      
      commercial: [
        {
          id: 'samsung-galaxy-book3-pro',
          name: 'Galaxy Book3 Pro',
          types: ['Commercial'],
          price: '₹1,04,999',
          specs: ['Intel i7-1360P', '16GB LPDDR5', '1TB SSD', '14" AMOLED 90Hz', 'Intel Evo Certified'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business Professionals',
          includedIn: ['Commercial']
        }
      ],
      
      premium: [
        {
          id: 'samsung-galaxy-book3-pro-360',
          name: 'Galaxy Book3 Pro 360',
          types: ['Premium'],
          price: '₹1,29,999',
          specs: ['Intel i7-1360P', '16GB LPDDR5', '1TB NVMe SSD', '16" 3K AMOLED Touch', 'S Pen Pro Included'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Premium Content Creation',
          includedIn: ['Premium']
        },
        {
          id: 'samsung-galaxy-book3-ultra-premium',
          name: 'Galaxy Book3 Ultra',
          types: ['Premium'],
          price: '₹1,69,999',
          specs: ['Intel i9-13900H', '32GB LPDDR5', '1TB NVMe SSD', '16" 3K AMOLED 120Hz', 'NVIDIA RTX 4070'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professional Creators',
          includedIn: ['Premium']
        }
      ]
    },
    {
      name: 'Galaxy Book Pro Series',
      logoColor: '#C53030', // Red
      description: 'Ultra-thin and light laptops with AMOLED displays for premium mobile computing.',
      categories: ['Mid-Range', 'Premium'],
      
      midrange: [
        {
          id: 'samsung-galaxy-book-pro-13',
          name: 'Galaxy Book Pro 13"',
          types: ['Mid-Range'],
          price: '₹79,999',
          specs: ['Intel i5-1135G7', '8GB LPDDR4X', '512GB SSD', '13.3" FHD AMOLED', 'Intel Iris Xe'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Portable Professionals',
          includedIn: ['Mid-Range']
        }
      ],
      
      premium: [
        {
          id: 'samsung-galaxy-book-pro-360-15',
          name: 'Galaxy Book Pro 360 15"',
          types: ['Premium'],
          price: '₹1,19,999',
          specs: ['Intel i7-1165G7', '16GB LPDDR4X', '1TB SSD', '15.6" FHD AMOLED Touch', 'S Pen Included'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Executive Professionals',
          includedIn: ['Premium']
        }
      ]
    },
    {
      name: 'Galaxy Book Odyssey Series',
      logoColor: '#10B981', // Green
      description: 'Powerful laptops designed for gaming and intensive creative workloads.',
      categories: ['Premium'],
      
      premium: [
        {
          id: 'samsung-galaxy-book-odyssey',
          name: 'Galaxy Book Odyssey',
          types: ['Premium'],
          price: '₹1,49,999',
          specs: ['Intel i7-11800H', '16GB DDR4', '512GB SSD', '15.6" FHD 144Hz', 'NVIDIA RTX 3050 Ti'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Gaming & Content Creation',
          includedIn: ['Premium']
        },
        {
          id: 'samsung-galaxy-book-odyssey-pro',
          name: 'Galaxy Book Odyssey Pro',
          types: ['Premium'],
          price: '₹1,89,999',
          specs: ['Intel i9-11900H', '32GB DDR4', '1TB SSD', '15.6" QHD 165Hz', 'NVIDIA RTX 3070'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professional Gaming',
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
  const selectedSeriesData = samsungSeriesData.find(series => series.name === selectedSeries);

  // Function to render Entry Level section
  const renderEntryLevelSection = () => {
    const entryLevelModels = selectedSeriesData?.entrylevel || [];
    
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
                    to={`/product/samsung/${model.id}`}
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
                    to={`/product/samsung/${model.id}`}
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
        background: 'linear-gradient(#1428A0 , #1D4ED8 100%)',
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
            Samsung Laptop Series
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
            {samsungSeriesData.map((series) => (
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
            📋 Samsung Laptop Categories Explained
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
            Note: Samsung laptops can appear in multiple categories based on their features and price range.
            Galaxy Book series offers comprehensive coverage from entry-level to premium devices.
          </Typography>
        </Paper>

        {/* Samsung Brand Features */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: alpha('#0096D6', 0.05) }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0096D6' }}>
            🏆 Why Choose Samsung Laptops?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Devices sx={{ fontSize: 40, color: '#0096D6', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Samsung Ecosystem
                </Typography>
                <Typography variant="body2">
                  Seamless integration with Galaxy phones, tablets, and wearables
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <SmartDisplay sx={{ fontSize: 40, color: '#0096D6', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  AMOLED Displays
                </Typography>
                <Typography variant="body2">
                  Industry-leading AMOLED screens with vibrant colors and deep blacks
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <CameraAlt sx={{ fontSize: 40, color: '#0096D6', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  S Pen Integration
                </Typography>
                <Typography variant="body2">
                  Precision stylus for drawing, note-taking, and creative work
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <TrendingUp sx={{ fontSize: 40, color: '#0096D6', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Long Battery Life
                </Typography>
                <Typography variant="body2">
                  Optimized power efficiency with fast charging support
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Samsung Galaxy Ecosystem Integration */}
        <Paper sx={{ mt: 4, p: 3, borderRadius: 3, backgroundColor: alpha('#8B5CF6', 0.05) }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#8B5CF6' }}>
            🌐 Samsung Galaxy Ecosystem Features
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#8B5CF6' }}>
                  Quick Share
                </Typography>
                <Typography variant="body2">
                  Instantly share files between Galaxy devices
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#8B5CF6' }}>
                  Second Screen
                </Typography>
                <Typography variant="body2">
                  Use your Galaxy tablet as a second monitor
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#8B5CF6' }}>
                  Samsung Flow
                </Typography>
                <Typography variant="body2">
                  Continuity between phone and laptop
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Samsung;