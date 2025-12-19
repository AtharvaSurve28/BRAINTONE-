// HP.js (Template)
import React from 'react';
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
  alpha,
  Stack
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
  ArrowForward
} from '@mui/icons-material';

// Animations (same as Dell.js)
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

const HP = () => {
  // HP Series Data - You'll need to populate this
  const hpSeries = [
    {
      name: 'Pavilion',
      logoColor: '#0096D6', // HP Blue
      description: 'Versatile laptops for everyday use.',
      categories: ['Entry Level', 'Consumer', 'Mid-Range'],
      models: [
        {
          name: 'HP Pavilion 15',
          type: 'Entry Level',
          price: '₹39,999',
          specs: ['Intel i3', '8GB RAM', '256GB SSD', '15.6" FHD'],
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop'
        }
      ]
    }
    // Add more HP series...
  ];

  // Rest of the component structure (same as Dell.js but with HP data)
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff', overflow: 'hidden', position: 'relative' }}>
      {/* Header Section with HP Blue */}
      <Box sx={{
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0096D6 0%, #0072CE 50%, #005AA7 100%)', // HP gradient
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #0096D6, #7EC8E3, #0096D6, #7EC8E3)',
          backgroundSize: '400% 100%',
          animation: `${shimmer} 6s linear infinite`,
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', py: 8 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.5rem', md: '4rem' },
              letterSpacing: '-1px',
              background: 'linear-gradient(90deg, #FFFFFF, #7EC8E3, #FFFFFF)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: `${gradientText} 8s ease infinite`,
              lineHeight: 1.1,
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              mb: 2,
            }}
          >
            HP Laptops
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.2rem',
              lineHeight: 1.6,
              mb: 4,
              fontWeight: 400,
            }}
          >
            Discover HP's innovative laptop lineup for work, play, and creativity.
          </Typography>
          <Divider sx={{
            width: '100px',
            height: '3px',
            background: 'linear-gradient(90deg, #7EC8E3, #FFFFFF, #7EC8E3)',
            backgroundSize: '300% 100%',
            mx: 'auto',
            mb: 4,
            animation: `${shimmer} 4s linear infinite`,
            borderRadius: '2px',
          }} />
        </Container>
      </Box>
      
      {/* Main Content - Copy the rest from Dell.js and modify */}
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: '#0096D6' }}>
          HP Laptops Page - Add Your Content Here
        </Typography>
        {/* Add your series sections here */}
      </Container>
    </Box>
  );
};

export default HP;