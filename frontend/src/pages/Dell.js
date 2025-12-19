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
  Rocket
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

// Scrolling text animation
const scrollLeftToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Dell = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedSeries, setSelectedSeries] = useState('Inspiron');

  // Complete Dell Series Data with all series
  const dellSeriesData = [
    {
      name: 'Inspiron',
      logoColor: '#007DB8',
      description: 'Versatile laptops for everyday use, from students to professionals. Perfect balance of performance and value.',
      categories: ['Entry Level', 'Mid-Range', 'Consumer', 'Commercial', 'Premium'],
      
      // Entry Level Models ONLY (Row 1) - ₹10,000-32,000
      entryLevel: [
        {
          id: 'inspiron-15-3520',
          name: 'Inspiron 15 3520',
          types: ['Entry Level'],
          price: '₹28,999',
          specs: ['Intel i3-1115G4', '8GB DDR4 RAM', '256GB SSD', '15.6" HD Display', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Basic Computing',
          includedIn: ['Entry Level']
        },
        {
          id: 'inspiron-14-3420',
          name: 'Inspiron 14 3420',
          types: ['Entry Level'],
          price: '₹31,999',
          specs: ['Intel Pentium Gold 7505', '8GB RAM', '512GB HDD', '14" HD Display', 'Windows 11S'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'First-time Users',
          includedIn: ['Entry Level']
        },
        {
          id: 'inspiron-11-3195',
          name: 'Inspiron 11 3195',
          types: ['Entry Level'],
          price: '₹24,999',
          specs: ['AMD Athlon Silver 3050U', '4GB RAM', '128GB eMMC', '11.6" HD Touch', 'Convertible'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Portable Basic Use',
          includedIn: ['Entry Level']
        },
        {
          id: 'inspiron-3000-15',
          name: 'Inspiron 3000 Series 15',
          types: ['Entry Level', 'Consumer'],
          price: '₹26,999',
          specs: ['Intel Celeron N4020', '4GB DDR4 RAM', '128GB SSD', '15.6" HD Anti-glare', 'Windows 11 Home in S Mode'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Basic Computing, Students',
          includedIn: ['Entry Level', 'Consumer']
        },
        {
          id: 'inspiron-14-3000',
          name: 'Inspiron 14 3000 Series',
          types: ['Entry Level'],
          price: '₹29,499',
          specs: ['AMD Athlon Gold 3150U', '8GB RAM', '256GB SSD', '14" HD Display', 'AMD Radeon Graphics'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Everyday Computing, Web Browsing',
          includedIn: ['Entry Level']
        }
      ],
      
      // Mid-Range Models ONLY (Row 2) - ₹33,000-50,000
      midRange: [
        {
          id: 'inspiron-14-5410',
          name: 'Inspiron 14 5410',
          types: ['Mid-Range', 'Consumer'],
          price: '₹42,999',
          specs: ['Intel i5-1135G7', '8GB RAM', '512GB SSD', '14" FHD Display', 'Intel Iris Xe'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Everyday Computing',
          includedIn: ['Mid-Range', 'Consumer']
        },
        {
          id: 'inspiron-15-5510',
          name: 'Inspiron 15 5510',
          types: ['Mid-Range', 'Consumer'],
          price: '₹46,999',
          specs: ['Intel i5-11300H', '8GB RAM', '512GB SSD', '15.6" FHD Display', 'NVIDIA MX450'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Multimedia Use',
          includedIn: ['Mid-Range', 'Consumer']
        }
      ],
      
      // Consumer Models ONLY (Row 3) - ₹33,000-50,000
      consumer: [
        {
          id: 'inspiron-14-5410',
          name: 'Inspiron 14 5410',
          types: ['Mid-Range', 'Consumer'],
          price: '₹42,999',
          specs: ['Intel i5-1135G7', '8GB RAM', '512GB SSD', '14" FHD Display', 'Intel Iris Xe'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Everyday Computing',
          includedIn: ['Mid-Range', 'Consumer']
        },
        {
          id: 'inspiron-15-5510',
          name: 'Inspiron 15 5510',
          types: ['Mid-Range', 'Consumer'],
          price: '₹46,999',
          specs: ['Intel i5-11300H', '8GB RAM', '512GB SSD', '15.6" FHD Display', 'NVIDIA MX450'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Multimedia Use',
          includedIn: ['Mid-Range', 'Consumer']
        },
        {
          id: 'inspiron-14-2in1-5410',
          name: 'Inspiron 14 2-in-1',
          types: ['Consumer'],
          price: '₹49,999',
          specs: ['Intel i5-1135G7', '8GB RAM', '512GB SSD', '14" FHD Touch', '360° Hinge'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Creative Professionals',
          includedIn: ['Consumer']
        }
      ],
      
      // Commercial Models ONLY (Row 4) - ₹33,000-50,000
      commercial: [
        {
          id: 'inspiron-14-5420-business',
          name: 'Inspiron 14 5420 Business',
          types: ['Commercial'],
          price: '₹48,999',
          specs: ['Intel i5-1235U', '8GB DDR4 RAM', '512GB NVMe SSD', '14" FHD Anti-glare', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business Professionals',
          includedIn: ['Commercial']
        },
        {
          id: 'inspiron-15-5520-business',
          name: 'Inspiron 15 5520 Business',
          types: ['Commercial'],
          price: '₹44,999',
          specs: ['Intel i3-1215U', '8GB RAM', '512GB SSD', '15.6" FHD', 'TPM 2.0 Security'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Small Businesses',
          includedIn: ['Commercial']
        }
      ]
    },
    {
      name: 'Vostro',
      logoColor: '#1E3A8A',
      description: 'Business-ready laptops with essential security features at affordable prices. Built for SMBs.',
      categories: ['Entry Level', 'Mid-Range', 'Commercial'],
      
      // Entry Level Models ONLY (Row 1) - ₹10,000-32,000
      entryLevel: [
        {
          id: 'vostro-3425-basic',
          name: 'Vostro 3425',
          types: ['Entry Level', 'Commercial'],
          price: '₹29,999',
          specs: ['AMD Ryzen 3 5300U', '8GB RAM', '256GB SSD', '14" HD Display', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Startups, Budget Business',
          includedIn: ['Entry Level', 'Commercial']
        },
        {
          id: 'vostro-3520-essential',
          name: 'Vostro 3520',
          types: ['Entry Level', 'Commercial'],
          price: '₹31,999',
          specs: ['Intel i3-1215U', '8GB RAM', '512GB SSD', '15.6" FHD', 'Basic Security Suite'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Entry-level Business',
          includedIn: ['Entry Level', 'Commercial']
        },
        {
          id: 'vostro-3000-3520',
          name: 'Vostro 3000 Series 3520',
          types: ['Entry Level', 'Commercial'],
          price: '₹27,999',
          specs: ['Intel Pentium Silver N6000', '4GB DDR4 RAM', '128GB SSD', '15.6" HD Display', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Small Business Professionals',
          includedIn: ['Entry Level', 'Commercial']
        },
        {
          id: 'vostro-14-3000',
          name: 'Vostro 14 3000 Series',
          types: ['Entry Level'],
          price: '₹30,499',
          specs: ['Intel Core i3-1115G4', '8GB RAM', '256GB SSD', '14" FHD Anti-glare', 'TPM 2.0 Security'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business Essentials',
          includedIn: ['Entry Level']
        }
      ],
      
      // Mid-Range Models ONLY (Row 2) - ₹33,000-50,000
      midRange: [
        {
          id: 'vostro-3420-pro',
          name: 'Vostro 3420',
          types: ['Mid-Range', 'Commercial', 'Consumer'],
          price: '₹42,999',
          specs: ['Intel i5-1235U', '8GB RAM', '512GB SSD', '14" FHD Anti-glare', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Small Businesses',
          includedIn: ['Mid-Range', 'Commercial', 'Consumer']
        },
        {
          id: 'vostro-3520-business',
          name: 'Vostro 3520 Business',
          types: ['Mid-Range', 'Commercial'],
          price: '₹46,499',
          specs: ['Intel i5-1240P', '8GB RAM', '512GB SSD', '15.6" FHD', 'Fingerprint Sensor'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Users',
          includedIn: ['Mid-Range', 'Commercial']
        }
      ],
      
      // Consumer Models ONLY (Row 3) - ₹33,000-50,000
      consumer: [
        {
          id: 'vostro-3420-pro',
          name: 'Vostro 3420',
          types: ['Mid-Range', 'Commercial', 'Consumer'],
          price: '₹42,999',
          specs: ['Intel i5-1235U', '8GB RAM', '512GB SSD', '14" FHD Anti-glare', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Small Businesses',
          includedIn: ['Mid-Range', 'Commercial', 'Consumer']
        }
      ],
      
      // Commercial Models ONLY (Row 4) - ₹33,000-50,000
      commercial: [
        {
          id: 'vostro-3420-pro',
          name: 'Vostro 3420',
          types: ['Mid-Range', 'Commercial', 'Consumer'],
          price: '₹42,999',
          specs: ['Intel i5-1235U', '8GB RAM', '512GB SSD', '14" FHD Anti-glare', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Small Businesses',
          includedIn: ['Mid-Range', 'Commercial', 'Consumer']
        },
        {
          id: 'vostro-3520-business',
          name: 'Vostro 3520 Business',
          types: ['Mid-Range', 'Commercial'],
          price: '₹46,499',
          specs: ['Intel i5-1240P', '8GB RAM', '512GB SSD', '15.6" FHD', 'Fingerprint Sensor'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Users',
          includedIn: ['Mid-Range', 'Commercial']
        }
      ]
    },
    {
      name: 'Latitude',
      logoColor: '#0F766E',
      description: 'Enterprise-grade laptops built for productivity, security, and business continuity. IT-managed ready.',
      categories: ['Entry Level', 'Mid-Range', 'Consumer', 'Commercial', 'Premium'],
      
      // Entry Level Models ONLY (Row 1) - ₹10,000-32,000
      entryLevel: [
        {
          id: 'latitude-3420',
          name: 'Latitude 3420',
          types: ['Entry Level', 'Commercial'],
          price: '₹31,999',
          specs: ['Intel i3-1115G4', '8GB RAM', '256GB SSD', '14" HD Display', 'Windows 11 Pro'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Budget Enterprise',
          includedIn: ['Entry Level', 'Commercial']
        },
        {
          id: 'latitude-3520',
          name: 'Latitude 3520',
          types: ['Entry Level', 'Commercial'],
          price: '₹28,999',
          specs: ['Intel i5-1135G7', '8GB RAM', '512GB SSD', '15.6" FHD', 'Dell Optimizer'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Entry-level Corporate',
          includedIn: ['Entry Level', 'Commercial']
        },
        {
          id: 'latitude-3000-3520',
          name: 'Latitude 3000 Series 3520',
          types: ['Entry Level', 'Commercial'],
          price: '₹29,999',
          specs: ['Intel Core i3-1115G4', '8GB DDR4 RAM', '256GB SSD', '15.6" FHD Display', 'Dell Pro Support'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'IT-Managed Business/Education',
          includedIn: ['Entry Level', 'Commercial']
        },
        {
          id: 'dell-pro-essential-3420',
          name: 'Dell Pro Essential 3420',
          types: ['Entry Level', 'Commercial'],
          price: '₹32,499',
          specs: ['Intel i5-1135G7', '8GB RAM', '512GB SSD', '14" FHD Anti-glare', 'Windows 11 Pro + Security Suite'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Professional/Educational IT Environments',
          includedIn: ['Entry Level', 'Commercial']
        }
      ],
      
      // Mid-Range Models ONLY (Row 2) - ₹33,000-50,000
      midRange: [
        {
          id: 'latitude-5430',
          name: 'Latitude 5430',
          types: ['Mid-Range', 'Commercial', 'Consumer'],
          price: '₹46,999',
          specs: ['Intel i5-1240P', '8GB RAM', '512GB SSD', '14" FHD', 'Dell Optimizer AI'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Deployment',
          includedIn: ['Mid-Range', 'Commercial', 'Consumer']
        },
        {
          id: 'latitude-5530',
          name: 'Latitude 5530',
          types: ['Mid-Range', 'Commercial'],
          price: '₹49,999',
          specs: ['Intel i5-12500H', '8GB RAM', '512GB SSD', '14" FHD 300 nits', 'Dell ExpressCharge'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Power Users',
          includedIn: ['Mid-Range', 'Commercial']
        }
      ],
      
      // Consumer Models ONLY (Row 3) - ₹33,000-50,000
      consumer: [
        {
          id: 'latitude-5430',
          name: 'Latitude 5430',
          types: ['Mid-Range', 'Commercial', 'Consumer'],
          price: '₹46,999',
          specs: ['Intel i5-1240P', '8GB RAM', '512GB SSD', '14" FHD', 'Dell Optimizer AI'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Deployment',
          includedIn: ['Mid-Range', 'Commercial', 'Consumer']
        },
        {
          id: 'latitude-2in1-5400',
          name: 'Latitude 5400 2-in-1',
          types: ['Consumer'],
          price: '₹44,999',
          specs: ['Intel i5-10210U', '8GB RAM', '512GB SSD', '14" FHD Touch', '360° Hinge'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Business & Personal Use',
          includedIn: ['Consumer']
        }
      ],
      
      // Commercial Models ONLY (Row 4) - ₹33,000-50,000
      commercial: [
        {
          id: 'latitude-5430',
          name: 'Latitude 5430',
          types: ['Mid-Range', 'Commercial', 'Consumer'],
          price: '₹46,999',
          specs: ['Intel i5-1240P', '8GB RAM', '512GB SSD', '14" FHD', 'Dell Optimizer AI'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Corporate Deployment',
          includedIn: ['Mid-Range', 'Commercial', 'Consumer']
        },
        {
          id: 'latitude-5530',
          name: 'Latitude 5530',
          types: ['Mid-Range', 'Commercial'],
          price: '₹49,999',
          specs: ['Intel i5-12500H', '8GB RAM', '512GB SSD', '14" FHD 300 nits', 'Dell ExpressCharge'],
          image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Power Users',
          includedIn: ['Mid-Range', 'Commercial']
        }
      ],
      
      // Premium Models ONLY (Row 6) - Above ₹70,000
      premium: [
        {
          id: 'latitude-7330',
          name: 'Latitude 7330',
          types: ['Premium', 'Commercial'],
          price: '₹1,24,999',
          specs: ['Intel i7-1265U vPro', '16GB LPDDR5', '512GB SSD', '13.3" FHD', 'Smart Card + Fingerprint'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Executive Use',
          includedIn: ['Premium', 'Commercial']
        },
        {
          id: 'latitude-9430-2in1',
          name: 'Latitude 9430 2-in-1',
          types: ['Premium'],
          price: '₹1,65,000',
          specs: ['Intel i7-1265U vPro', '32GB LPDDR5', '1TB SSD', '14" QHD+ Touch', '5G Connectivity'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'C-suite Executives',
          includedIn: ['Premium']
        }
      ]
    },
    {
      name: 'XPS',
      logoColor: '#7C3AED',
      description: 'Premium ultrabooks with cutting-edge design, exceptional performance, and stunning displays.',
      categories: ['Consumer', 'Premium'],
      
      // Entry Level Models ONLY (Row 1) - ₹10,000-32,000
      entryLevel: [
        {
          id: 'xps-basic-13',
          name: 'Dell XPS Basic 13',
          types: ['Entry Level', 'Consumer'],
          price: '₹31,999',
          specs: ['Intel Core i3-1115G4', '8GB LPDDR4x RAM', '256GB NVMe SSD', '13.4" FHD+ InfinityEdge', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Entry-level Premium Users',
          includedIn: ['Entry Level', 'Consumer']
        },
        {
          id: 'dell-ai-basic-14',
          name: 'Dell AI Basic 14',
          types: ['Entry Level'],
          price: '₹29,999',
          specs: ['Intel Core i3-1215U', '8GB RAM', '256GB SSD', '14" FHD Display', 'AI-powered Performance'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Students, Home Users',
          includedIn: ['Entry Level']
        }
      ],
      
      // Consumer Models ONLY (Row 3) - ₹51,000-70,000
      consumer: [
        {
          id: 'xps-13-9315',
          name: 'XPS 13 9315',
          types: ['Consumer'],
          price: '₹64,999',
          specs: ['Intel i5-1230U', '16GB LPDDR5', '512GB SSD', '13.4" FHD+ InfinityEdge', 'Windows 11 Home'],
          image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Premium Home Use',
          includedIn: ['Consumer']
        },
        {
          id: 'xps-15-9520',
          name: 'XPS 15 9520',
          types: ['Consumer'],
          price: '₹68,999',
          specs: ['Intel i7-12700H', '16GB RAM', '512GB SSD', '15.6" FHD+ 500 nits', 'NVIDIA RTX 3050 Ti'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-end Consumers',
          includedIn: ['Consumer']
        }
      ],
      
      // Premium Models ONLY (Row 6) - Above ₹70,000
      premium: [
        {
          id: 'xps-13-plus-9320',
          name: 'XPS 13 Plus 9320',
          types: ['Premium'],
          price: '₹1,49,999',
          specs: ['Intel i7-1280P', '32GB LPDDR5', '2TB NVMe SSD', '13.4" OLED 4K Touch', 'Carbon Fiber'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Design Professionals',
          includedIn: ['Premium']
        },
        {
          id: 'xps-15-9530-oled',
          name: 'XPS 15 9530 OLED',
          types: ['Premium'],
          price: '₹1,89,999',
          specs: ['Intel i9-13900H', '64GB DDR5', '4TB SSD', '15.6" OLED 3.5K', 'NVIDIA RTX 4070'],
          image: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Content Creation, 4K Editing',
          includedIn: ['Premium']
        }
      ]
    },
    {
      name: 'G Series',
      logoColor: '#DC2626',
      description: 'High-performance gaming laptops with dedicated graphics, advanced cooling, and high refresh rates.',
      categories: ['Gaming', 'Premium'],
      
      // Entry Level Models ONLY (Row 1) - ₹10,000-32,000
      entryLevel: [
        {
          id: 'g3-15-basic',
          name: 'G3 15 Gaming Basic',
          types: ['Entry Level', 'Gaming'],
          price: '₹31,999',
          specs: ['Intel Core i5-10300H', '8GB DDR4 RAM', '256GB SSD + 1TB HDD', '15.6" FHD 120Hz', 'NVIDIA GTX 1650'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Entry-level Gaming',
          includedIn: ['Entry Level', 'Gaming']
        }
      ],
      
      // Gaming Models ONLY (Row 5) - ₹51,000-70,000
      gaming: [
        {
          id: 'g15-5520-entry',
          name: 'G15 5520',
          types: ['Gaming', 'Consumer'],
          price: '₹64,999',
          specs: ['Intel i5-12500H', '8GB RAM', '512GB SSD', '15.6" FHD 120Hz', 'NVIDIA RTX 3050'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Entry-level Gaming',
          includedIn: ['Gaming', 'Consumer']
        },
        {
          id: 'g15-5535-special',
          name: 'G15 5535 Special Edition',
          types: ['Gaming'],
          price: '₹68,999',
          specs: ['AMD Ryzen 7 7840HS', '16GB DDR5', '1TB SSD', '15.6" FHD 165Hz', 'AMD Radeon RX 7600S'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Esports Gaming',
          includedIn: ['Gaming']
        }
      ],
      
      // Consumer Models ONLY (Row 3) - ₹51,000-70,000
      consumer: [
        {
          id: 'g15-5520-entry',
          name: 'G15 5520',
          types: ['Gaming', 'Consumer'],
          price: '₹64,999',
          specs: ['Intel i5-12500H', '8GB RAM', '512GB SSD', '15.6" FHD 120Hz', 'NVIDIA RTX 3050'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Entry-level Gaming',
          includedIn: ['Gaming', 'Consumer']
        }
      ],
      
      // Premium Models ONLY (Row 6) - Above ₹70,000
      premium: [
        {
          id: 'g15-5530-gaming',
          name: 'G15 5530 Gaming',
          types: ['Premium', 'Gaming'],
          price: '₹1,05,999',
          specs: ['Intel i7-13650HX', '16GB DDR5', '1TB NVMe SSD', '15.6" QHD 165Hz', 'NVIDIA RTX 4060'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Mainstream Gaming',
          includedIn: ['Premium', 'Gaming']
        },
        {
          id: 'g16-7630',
          name: 'G16 7630',
          types: ['Premium', 'Gaming'],
          price: '₹1,35,000',
          specs: ['Intel i9-13900HX', '32GB DDR5', '2TB SSD', '16" QHD+ 240Hz', 'NVIDIA RTX 4070'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-end Gaming',
          includedIn: ['Premium', 'Gaming']
        }
      ]
    },
    {
      name: 'Alienware',
      logoColor: '#10B981',
      description: 'Ultimate gaming machines with desktop-level performance, advanced cooling, and AlienFX RGB lighting.',
      categories: ['Gaming', 'Premium'],
      
      // Entry Level Models ONLY (Row 1) - ₹10,000-32,000
      entryLevel: [
        {
          id: 'alienware-m15-basic',
          name: 'Alienware m15 Basic',
          types: ['Entry Level', 'Gaming'],
          price: '₹32,999',
          specs: ['Intel Core i5-11400H', '8GB DDR4 RAM', '256GB SSD', '15.6" FHD 144Hz', 'NVIDIA GTX 1650 Ti'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Entry-level Gaming Enthusiasts',
          includedIn: ['Entry Level', 'Gaming']
        }
      ],
      
      // Gaming Models ONLY (Row 5) - ₹51,000-70,000
      gaming: [
        {
          id: 'alienware-m15-r7',
          name: 'Alienware m15 R7',
          types: ['Gaming'],
          price: '₹69,999',
          specs: ['Intel i7-12700H', '16GB DDR5', '1TB SSD', '15.6" FHD 165Hz', 'NVIDIA RTX 3060'],
          image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Competitive Gaming',
          includedIn: ['Gaming']
        }
      ],
      
      // Premium Models ONLY (Row 6) - Above ₹70,000
      premium: [
        {
          id: 'alienware-m16-r2',
          name: 'Alienware m16 R2',
          types: ['Premium', 'Gaming'],
          price: '₹1,89,999',
          specs: ['Intel i7-13700HX', '32GB DDR5', '2TB SSD', '16" QHD 240Hz', 'NVIDIA RTX 4070'],
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop&auto=format',
          bestFor: 'High-performance Gaming',
          includedIn: ['Premium', 'Gaming']
        },
        {
          id: 'alienware-m18-r1',
          name: 'Alienware m18 R1',
          types: ['Premium', 'Gaming'],
          price: '₹2,75,000',
          specs: ['Intel i9-13900HX', '64GB DDR5', '4TB NVMe RAID 0', '18" QHD+ 165Hz', 'NVIDIA RTX 4090'],
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&auto=format',
          bestFor: 'Extreme Gaming',
          includedIn: ['Premium', 'Gaming']
        }
      ]
    }
  ];

  // Category definitions - All 6 categories including Premium
  const categories = [
    {
      name: 'Entry Level',
      description: 'Basic performance, essential tasks. Price: ₹10,000-32,000',
      icon: <School />,
      color: '#3B82F6',
      priceRange: '₹10,000-32,000'
    },
    {
      name: 'Mid-Range',
      description: 'Balanced performance for work & media. Price: ₹33,000-50,000',
      icon: <DisplaySettings />,
      color: '#F59E0B',
      priceRange: '₹33,000-50,000'
    },
    {
      name: 'Consumer',
      description: 'Design, multimedia, portability for personal use.',
      icon: <Monitor />,
      color: '#10B981',
      priceRange: '₹33,000-70,000'
    },
    {
      name: 'Commercial',
      description: 'Security, durability for business use.',
      icon: <Business />,
      color: '#6366F1',
      priceRange: '₹33,000-70,000'
    },
    {
      name: 'Gaming',
      description: 'High-performance GPU, high-refresh displays. Price: ₹51,000+',
      icon: <VideogameAsset />,
      color: '#EF4444',
      priceRange: '₹51,000+'
    },
    {
      name: 'Premium',
      description: 'Top-tier performance, best displays, premium build. Price: ₹70,000+',
      icon: <WorkspacePremium />,
      color: '#8B5CF6',
      priceRange: '₹70,000+'
    }
  ];

  // Get selected series data
  const selectedSeriesData = dellSeriesData.find(series => series.name === selectedSeries);

  // NEW: Function to render Entry Level section like in your image
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
          backgroundColor: alpha('#3B82F6', 0.05), // Light blue background
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
          Basic performance, essential tasks. Price: ₹10,000-32,000
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        {/* Entry Level Models List */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            Entry Level
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

        {/* Entry Level Models Grid - Show first 2-3 models like in your image */}
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
                    to={`/product/dell/${model.id}`}
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
    const models = selectedSeriesData?.[categoryName.toLowerCase().replace(/[ -]/g, '')] || [];
    
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
                    to={`/product/dell/${model.id}`}
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
        background: 'linear-gradient(135deg, #007DB8 0%, #005A8A 50%, #003B5C 100%)',
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
              background: 'linear-gradient(90deg, #FFFFFF, #90E0EF, #FFFFFF)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: `${gradientText} 8s ease infinite`,
              mb: 2
            }}
          >
            Dell Laptop Series
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
            Organized by Levels and Categories
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
            {dellSeriesData.map((series) => (
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
                {selectedSeriesData.name} Series
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

        {/* NEW: Entry Level Section (like in your image) */}
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
    </Box>
  );
};

export default Dell;