import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { keyframes } from '@emotion/react';
import { ArrowForward } from '@mui/icons-material';

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

const gradientButton = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Modified bounce animation - continuous bouncing for all boxes
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// SLOWER Bubble animation for background
const bubbleFloat = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.4;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(-100vh) rotate(180deg); // Slower rotation
    opacity: 0;
  }
`;

const Laptops = () => {
  const navigate = useNavigate(); // Added useNavigate hook

  const brands = [
    {
      name: 'DELL',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop',
      route: '/laptops/dell',
      color: '#E2231A'
    },
    {
      name: 'HP',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      route: '/laptops/hp',
      color: '#E2231A'
    },
    {
      name: 'Lenovo',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
      route: '/laptops/lenovo',
      color: '#E2231A'
    },
    {
      name: 'ASUS',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
      route: '/laptops/asus',
      color: '#E2231A'
    },
    {
      name: 'Acer',
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop',
      route: '/laptops/acer',
      color: '#E2231A'
    },
    {
      name: 'Apple',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
      route: '/laptops/apple',
      color: '#E2231A'
    },
    {
      name: 'MSI',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop', // Changed to MSI laptop image
      route: '/laptops/msi',
      color: '#E2231A' // MSI red color
    },
    {
      name: 'Samsung Galaxy',
      image: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&h=300&fit=crop', // Changed to Samsung laptop image
      route: '/laptops/samsung',
      color: '#E2231A' // Samsung blue color
    },
    {
      name: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
      route: '/laptops/microsoft',
      color: '#E2231A'
    }
  ];

  // Generate bubbles for the background - SLOWER
  const generateBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 20; i++) { // Reduced number of bubbles
      bubbles.push({
        id: i,
        size: Math.random() * 35 + 15,
        left: Math.random() * 100,
        duration: Math.random() * 25 + 20, // MUCH SLOWER: 20-45 seconds
        delay: Math.random() * 15,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    return bubbles;
  };

  const bubbles = generateBubbles();

  // Function to handle brand click
  const handleBrandClick = (brandRoute) => {
    navigate(brandRoute);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Animated Bubbles Background - SLOWER */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}>
        {bubbles.map((bubble) => (
          <Box
            key={bubble.id}
            sx={{
              position: 'absolute',
              left: `${bubble.left}%`,
              bottom: '-50px',
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle at 30% 30%, 
                rgba(255, 120, 120, ${bubble.opacity}) 0%, 
                rgba(180, 30, 30, ${bubble.opacity * 0.6}) 60%, 
                rgba(140, 10, 10, ${bubble.opacity * 0.3}) 100%)`,
              animation: `${bubbleFloat} ${bubble.duration}s ease-in-out infinite`, // Changed to ease-in-out for smoother movement
              animationDelay: `${bubble.delay}s`,
              filter: 'blur(1.5px)',
              boxShadow: `inset 0 0 15px rgba(180, 30, 30, 0.3), 0 0 25px rgba(180, 30, 30, 0.15)`,
            }}
          />
        ))}
      </Box>

      {/* MODIFIED TOP BRANDS HERO SECTION - DARKER RED */}
{/* MODIFIED TOP BRANDS HERO SECTION - CLEAN BACKGROUND IMAGE */}
<Box sx={{ 
  position: 'relative',
  color: 'white',
  py: { xs: 6, md: 8 },
  textAlign: 'center',
  overflow: 'hidden',
  minHeight: '40vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://www.electronicsbazaar.com/pub/media/magefan_blog/image_322.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center 25%',
    backgroundRepeat: 'no-repeat',
    filter: 'brightness(0.4)',
    zIndex: 0,
    transform: 'scale(1.05)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '5px',
    background: 'linear-gradient(90deg, #FF0000, #FF6B6B, #FF0000, #FF6B6B)',
    backgroundSize: '400% 100%',
    animation: `${shimmer} 6s linear infinite`,
    zIndex: 1,
  }
}}>
  
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', py: 6 }}>
    <Typography 
      variant="h1"
      sx={{
        textAlign: 'center',
        fontWeight: 900,
        fontSize: { xs: '2.5rem', md: '4rem' },
        letterSpacing: '-1.5px',
        color: 'white',
        textShadow: '0 4px 12px rgba(0,0,0,0.7)',
        lineHeight: 1.1,
        mb: 2,
        animation: `${floatAnimation} 4s ease-in-out infinite`,
      }}
    >
      Our Top Brands
    </Typography>
    
    <Divider sx={{ 
      width: '120px', 
      height: '4px', 
      background: 'linear-gradient(90deg, #FFD700, #FFFFFF, #FFD700)',
      backgroundSize: '300% 100%',
      mx: 'auto', 
      mb: 3,
      animation: `${shimmer} 4s linear infinite`,
      borderRadius: '2px',
    }} />
    
    <Typography 
      variant="h5"
      sx={{
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.95)',
        fontWeight: 400,
        fontSize: '1.2rem',
        maxWidth: '700px',
        mx: 'auto',
        lineHeight: 1.6,
        textShadow: '0 2px 8px rgba(0,0,0,0.7)',
        letterSpacing: '0.3px',
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '8px 16px',
        borderRadius: '8px',
        backdropFilter: 'blur(4px)',
      }}
    >
      Premium laptops and desktops from world-leading manufacturers
    </Typography>
  </Container>

        {/* Floating decorative elements - darker */}
        <Box sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%)',
          animation: `${floatAnimation} 6s ease-in-out infinite`,
          zIndex: 1,
          filter: 'blur(2px)',
        }} />
        
        <Box sx={{
          position: 'absolute',
          bottom: '30%',
          left: '5%',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          animation: `${floatAnimation} 7s ease-in-out infinite 2s`,
          zIndex: 1,
          filter: 'blur(1px)',
        }} />
        
        {/* Additional floating element */}
        <Box sx={{
          position: 'absolute',
          top: '40%',
          left: '15%',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
          animation: `${floatAnimation} 5s ease-in-out infinite 1.5s`,
          zIndex: 1,
          filter: 'blur(1px)',
        }} />
      </Box>

      {/* Brands Cards Section with continuous bouncing */}
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        {/* Brands Grid - All boxes continuously bouncing */}
        <Grid container spacing={4} justifyContent="center">
          {brands.map((brand, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              <Card 
                onClick={() => handleBrandClick(brand.route)} // Added onClick handler
                sx={{ 
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  borderRadius: 3,
                  boxShadow: '0 4px 30px rgba(139, 0, 0, 0.15)', // Darker red shadow
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: `2px solid ${brand.color}20`, // Brand color with transparency
                  overflow: 'hidden',
                  animation: `${bounceAnimation} 2s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`, // Staggered animation
                  position: 'relative',
                  zIndex: 2,
                  cursor: 'pointer', // Added cursor pointer
                  '&:hover': {
                    boxShadow: `0 20px 50px ${brand.color}40`, // Brand color shadow on hover
                    transform: 'translateY(-15px) scale(1.05)',
                    borderColor: brand.color, // Brand color on hover
                    animationPlayState: 'paused', // Pause animation on hover
                    '& .brand-image': {
                      transform: 'scale(1.15)',
                    },
                    '& .brand-name': {
                      color: brand.color, // Brand color text on hover
                      transform: 'scale(1.05)',
                    },
                    '& .explore-text': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${brand.color}05 0%, ${brand.color}02 100%)`,
                    borderRadius: 3,
                    zIndex: 1,
                  }
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    p: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 250,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 2,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${brand.color}10 0%, ${brand.color}00 100%)`,
                    }
                  }}
                >
                  {/* Explore Button (Visible on hover) */}
                  <Box
                    className="explore-text"
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      left: '50%',
                      transform: 'translateX(-50%) translateY(20px)',
                      backgroundColor: brand.color,
                      color: 'white',
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      opacity: 0,
                      transition: 'all 0.3s ease',
                      zIndex: 3,
                      boxShadow: `0 4px 15px ${brand.color}40`,
                    }}
                  >
                    Explore {brand.name} Laptops →
                  </Box>
                  
                  <CardMedia
                    component="img"
                    image={brand.image}
                    alt={brand.name}
                    className="brand-image"
                    sx={{
                      maxWidth: '80%',
                      maxHeight: 180,
                      objectFit: 'contain',
                      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      zIndex: 2,
                      position: 'relative',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                    }}
                  />
                </Box>
                
                {/* Brand Name */}
                <CardContent 
                  sx={{ 
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    py: 4,
                    px: 3,
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, transparent, ${brand.color}, transparent)`,
                    }
                  }}
                >
                  <Typography 
                    variant="h5"
                    className="brand-name"
                    sx={{
                      fontWeight: 800,
                      color: '#333333',
                      fontSize: '1.8rem',
                      transition: 'all 0.4s ease',
                      letterSpacing: '-0.5px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                  >
                    {brand.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Content Section with enhanced styling */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: 10,
          p: 6,
          borderRadius: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: '2px solid rgba(139, 0, 0, 0.3)', // Darker red border
          position: 'relative',
          overflow: 'hidden',
          maxWidth: '800px',
          mx: 'auto',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 20px 40px rgba(139, 0, 0, 0.15)', // Darker red shadow
          zIndex: 2,
          animation: `${floatAnimation} 4s ease-in-out infinite`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.05) 0%, rgba(139, 0, 0, 0.02) 100%)',
            zIndex: 1,
          }
        }}>
          <Typography 
            variant="h4"
            sx={{ 
              color: '#8B0000', // Darker red
              fontWeight: 800,
              mb: 3,
              fontSize: '2.2rem',
              position: 'relative',
              zIndex: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            New Laptops & Desktops
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#555',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem',
              mb: 4,
              lineHeight: 1.7,
              position: 'relative',
              zIndex: 2,
              fontWeight: 500,
            }}
          >
            Explore the latest Intel and AMD builds for work, gaming, and study. We can customize RAM, SSD, and graphics to match your needs.
          </Typography>
          
          <Button 
            component={Link} 
            to="/contact" 
            variant="contained"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: 2,
              background: 'linear-gradient(45deg, #8B0000 30%, #A52A2A 90%)', // Darker red gradient
              boxShadow: '0 8px 25px rgba(139, 0, 0, 0.4)',
              position: 'relative',
              zIndex: 2,
              animation: `${bounceAnimation} 3s ease-in-out infinite`,
              '&:hover': {
                background: 'linear-gradient(45deg, #600000 30%, #8B0000 90%)',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 30px rgba(139, 0, 0, 0.5)'
              }
            }}
          >
            Get a recommendation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Laptops;