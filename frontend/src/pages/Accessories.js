import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Divider,
  Modal,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack,
  useMediaQuery,
  useTheme,
  alpha,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Animations - EXACTLY SAME as reference
const shimmer = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 400% 0%; }
`;

const gradientText = keyframes`
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
    transform: translateY(-100vh) rotate(180deg);
    opacity: 0;
  }
`;

const Accessories = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Google Maps URLs
  const locationMaps = {
    fort: 'https://www.google.com/maps/search/?api=1&query=Braintone+17A+Bahubali+Building+Flora+Fountain+Fort+Mumbai',
    vileParle: 'https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+Prime+Mall+Irla+Vile+Parle+West+Mumbai'
  };

  const openGoogleMaps = (locationType) => {
    const url = locationMaps[locationType];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // 12 Accessories for 4x3 layout
  const accessories = [
    {
      id: 1,
      name: 'Laptop Battery',
      description: 'Original & compatible replacement batteries',
      image: 'https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹1,500',
      specs: [
        'Original & OEM Batteries',
        'High Capacity Options',
        '6-12 Month Warranty',
        'Fast Charging Support',
        'Compatible with all brands',
        'Safety Certified',
      ],
      bestFor: 'Replacing old batteries, improving laptop mobility',
      brands: 'Dell, HP, Lenovo, Apple, Asus',
      warranty: '6 Months Warranty',
    },
    {
      id: 2,
      name: 'Laptop Chargers',
      description: 'Genuine & universal charging solutions',
      image: 'https://images.unsplash.com/photo-1590958127793-1d14f5c69d3e?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹800',
      specs: [
        'Original & Universal Chargers',
        '45W to 130W Power Options',
        'Fast Charging Technology',
        'Multiple Tip Options',
        'Overload Protection',
        'Compact & Portable',
      ],
      bestFor: 'Replacement chargers, travel chargers, backup power',
      brands: 'Dell, HP, Lenovo, Apple, Acer',
      warranty: '6 Months Warranty',
    },
    {
      id: 3,
      name: 'Cooling Fan',
      description: 'Laptop cooling pads & vacuum coolers',
      image: 'https://images.unsplash.com/photo-1597817101557-c55e4f8c0c8f?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹900',
      specs: [
        'Multi-fan Cooling Pads',
        'Adjustable Height & Angle',
        'USB Powered',
        'Quiet Operation',
        'LED Lighting Options',
        'Portable Design',
      ],
      bestFor: 'Gaming laptops, overheating issues, summer use',
      brands: 'Deepcool, Havit, Cooler Master',
      warranty: '6 Months Warranty',
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      description: 'High-precision gaming & productivity mice',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹1,200',
      specs: [
        'Programmable Buttons',
        'RGB Lighting',
        'High DPI (up to 16000)',
        'Wired & Wireless Options',
        'Ergonomic Design',
        'Braided Cables',
      ],
      bestFor: 'Gamers, graphic designers, programmers',
      brands: 'Logitech, Razer, Corsair, SteelSeries',
      warranty: '6 Months Warranty',
    },
    {
      id: 5,
      name: 'Laptop Skins',
      description: 'Premium vinyl skins for protection & style',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹600',
      specs: [
        '3M Vinyl Material',
        'Scratch Resistant',
        'Easy Application',
        'No Residue Removal',
        'Hundreds of Designs',
        'Custom Cutting',
      ],
      bestFor: 'Personalization, scratch protection, brand new look',
      brands: 'dbrand, MightySkins, Skinit',
      warranty: 'NA (Consumable)',
    },
    {
      id: 6,
      name: 'Hard Shell Covers',
      description: 'Durable hard covers for MacBooks',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹1,800',
      specs: [
        'Polycarbonate Material',
        'Perfect Fit for MacBooks',
        'Snap-on Installation',
        'Ventilation Cutouts',
        'Transparent & Colors',
        'Anti-Scratch Coating',
      ],
      bestFor: 'MacBook Air/Pro protection, style enhancement',
      brands: 'Incase, Speck, Kuzy, i-Blason',
      warranty: '6 Months Warranty',
    },
    {
      id: 7,
      name: 'Keyboard Guards',
      description: 'Silicone keyboard protectors',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹400',
      specs: [
        'Food-Grade Silicone',
        'Spill Protection',
        'Anti-microbial',
        'Easy to Clean',
        'Transparent & Colors',
        'Country-specific Layouts',
      ],
      bestFor: 'Spill protection, dust prevention, hygiene',
      brands: 'Generic & Brand Specific',
      warranty: 'NA (Consumable)',
    },
    {
      id: 8,
      name: 'Laptop Bags',
      description: 'Exclusive designer laptop bags',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹2,500',
      specs: [
        'Water-Resistant Material',
        'Padded Laptop Compartment',
        'Multiple Pockets',
        'Shoulder Strap Included',
        'Business & Casual Styles',
        'Durable Zippers',
      ],
      bestFor: 'Professionals, students, travelers',
      brands: 'American Tourister, Skybags, HP, Dell',
      warranty: '6 Months Warranty',
    },
    {
      id: 9,
      name: 'Laptop Sleeves',
      description: 'Slim protective sleeves',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹800',
      specs: [
        'Neoprene & Polyester',
        'Shock Absorbent',
        'Ultra Slim Design',
        'External Pockets',
        'Handle & Shoulder Strap',
        'Multiple Size Options',
      ],
      bestFor: 'Extra protection in bags, minimal carry',
      brands: 'AmazonBasics, Case Logic, STM',
      warranty: '6 Months Warranty',
    },
    {
      id: 10,
      name: 'Laptop Stands',
      description: 'Ergonomic adjustable stands',
      image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹1,500',
      specs: [
        'Aluminum & Steel Build',
        'Height & Angle Adjustable',
        'Portable & Foldable',
        'Cable Management',
        'Heat Dissipation Design',
        'Non-Slip Base',
      ],
      bestFor: 'Better posture, cooling, desk setup',
      brands: 'Rain Design, Nulaxy, NEXSTAND',
      warranty: '6 Months Warranty',
    },
    {
      id: 11,
      name: 'Docking Station',
      description: 'Multi-port connectivity hubs',
      image: 'https://images.unsplash.com/photo-1596656871186-6c5c7c9e8c2d?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹3,500',
      specs: [
        'USB-C/Thunderbolt 3',
        'Multiple USB Ports',
        'HDMI/DisplayPort',
        'Ethernet Port',
        'SD Card Reader',
        'Power Delivery',
      ],
      bestFor: 'Multi-monitor setup, connectivity expansion',
      brands: 'Dell, HP, CalDigit, Anker',
      warranty: '6 Months Warranty',
    },
    {
      id: 12,
      name: 'USB-C Hubs',
      description: 'Multi-port adapters & converters',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹1,800',
      specs: [
        '4K HDMI Support',
        'USB 3.0/3.1 Ports',
        'SD/TF Card Slots',
        'Compact Design',
        'Plug & Play',
        'Power Delivery Support',
      ],
      bestFor: 'Modern laptops, MacBooks, connectivity on go',
      brands: 'Anker, UGREEN, Satechi, HyperDrive',
      warranty: '6 Months Warranty',
    },
  ];

  const handleOpenModal = (accessory) => {
    setSelectedAccessory(accessory);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedAccessory(null);
  };

  const handleContactButton = () => {
    handleCloseModal();
  };

  // Generate bubbles for the background - SLOWER (SAME as reference)
  const generateBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 20; i++) {
      bubbles.push({
        id: i,
        size: Math.random() * 35 + 15,
        left: Math.random() * 100,
        duration: Math.random() * 25 + 20,
        delay: Math.random() * 15,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    return bubbles;
  };

  const bubbles = generateBubbles();

  // Card Component with FIXED HEIGHT for all boxes
  const AccessoryCard = ({ accessory, index }) => (
    <Box sx={{ 
      height: '400px', // FIXED HEIGHT FOR ALL BOXES
      width: '100%',
      display: 'flex',
    }}>
      <Card 
        onClick={() => handleOpenModal(accessory)}
        sx={{ 
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          borderRadius: 3,
          boxShadow: '0 4px 30px rgba(139, 0, 0, 0.15)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          border: `2px solid ${accessory.color}20`,
          overflow: 'hidden',
          animation: `${bounceAnimation} 2s ease-in-out infinite`,
          animationDelay: `${index * 0.2}s`,
          position: 'relative',
          zIndex: 2,
          cursor: 'pointer',
          '&:hover': {
            boxShadow: `0 20px 50px ${accessory.color}40`,
            transform: 'translateY(-15px) scale(1.05)',
            borderColor: accessory.color,
            animationPlayState: 'paused',
            '& .accessory-image': {
              transform: 'scale(1.15)',
            },
            '& .accessory-name': {
              color: accessory.color,
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
            background: `linear-gradient(135deg, ${accessory.color}05 0%, ${accessory.color}02 100%)`,
            borderRadius: 3,
            zIndex: 1,
          }
        }}
      >
        {/* Image Container - FIXED HEIGHT */}
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            p: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '220px', // FIXED HEIGHT
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
              background: `linear-gradient(135deg, ${accessory.color}10 0%, ${accessory.color}00 100%)`,
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
              backgroundColor: accessory.color,
              color: 'white',
              px: 3,
              py: 1,
              borderRadius: 2,
              fontSize: '0.9rem',
              fontWeight: 600,
              opacity: 0,
              transition: 'all 0.3s ease',
              zIndex: 3,
              boxShadow: `0 4px 15px ${accessory.color}40`,
            }}
          >
            View Details →
          </Box>
          
          <CardMedia
            component="img"
            image={accessory.image}
            alt={accessory.name}
            className="accessory-image"
            sx={{
              maxWidth: '80%',
              maxHeight: '140px',
              objectFit: 'contain',
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 2,
              position: 'relative',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
            }}
          />
        </Box>
        
        {/* Card Content - FIXED HEIGHT */}
        <CardContent 
          sx={{ 
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            py: 3,
            px: 3,
            height: '180px', // FIXED HEIGHT
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1,
            position: 'relative',
            zIndex: 2,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: `linear-gradient(90deg, transparent, ${accessory.color}, transparent)`,
            }
          }}
        >
          {/* Title with fixed height */}
          <Box sx={{ 
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography 
              variant="h5"
              className="accessory-name"
              sx={{
                fontWeight: 800,
                color: '#333333',
                fontSize: '1.5rem',
                transition: 'all 0.4s ease',
                letterSpacing: '-0.5px',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                lineHeight: 1.2,
              }}
            >
              {accessory.name}
            </Typography>
          </Box>
          
          {/* Description with fixed height */}
          <Box sx={{ 
            minHeight: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography 
              variant="body2"
              sx={{
                color: '#666',
                fontSize: '0.9rem',
                lineHeight: 1.4,
              }}
            >
              {accessory.description}
            </Typography>
          </Box>
          
          {/* Price section */}
          <Box>
            <Typography 
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: '0.85rem',
                mb: 0.5,
              }}
            >
              Starting from
            </Typography>
            <Typography 
              variant="h6"
              sx={{
                fontWeight: 700,
                color: accessory.color,
                fontSize: '1.4rem',
              }}
            >
              {accessory.startingPrice}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Animated Bubbles Background - SLOWER (SAME as reference) */}
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
              animation: `${bubbleFloat} ${bubble.duration}s ease-in-out infinite`,
              animationDelay: `${bubble.delay}s`,
              filter: 'blur(1.5px)',
              boxShadow: `inset 0 0 15px rgba(180, 30, 30, 0.3), 0 0 25px rgba(180, 30, 30, 0.15)`,
            }}
          />
        ))}
      </Box>

      {/* HERO SECTION - EXACTLY SAME as reference */}
      <Box sx={{ 
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 50%, #8B0000 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)',
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
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', py: 10 }}>
          <Typography 
            variant="h1"
            sx={{
              textAlign: 'center',
              fontWeight: 900,
              fontSize: { xs: '2.8rem', md: '5rem' },
              letterSpacing: '-1.5px',
              background: 'linear-gradient(90deg,rgb(253, 141, 141), #FFFF00,rgb(253, 117, 117))',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: `${gradientText} 10s ease infinite, ${floatAnimation} 4s ease-in-out infinite`,
              lineHeight: 1.1,
              textShadow: '0 6px 12px rgba(0,0,0,0.4)',
              mb: 3,
            }}
          >
            Premium Accessories
          </Typography>
          
          <Divider sx={{ 
            width: '150px', 
            height: '4px', 
            background: 'linear-gradient(90deg, #FFD700, #FFFFFF, #FFD700)',
            backgroundSize: '300% 100%',
            mx: 'auto', 
            mb: 5,
            animation: `${shimmer} 4s linear infinite`,
            borderRadius: '2px',
          }} />
          
          <Typography 
            variant="h5"
            sx={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.95)',
              mt: 3,
              fontWeight: 400,
              fontSize: '1.4rem',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.7,
              background: 'linear-gradient(45deg, #FFECB3, #FFFFFF, #FFECB3)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: `${gradientText} 8s ease infinite`,
              letterSpacing: '0.3px',
              mb: 6,
            }}
          >
            Enhance your laptop experience with our premium accessories collection
          </Typography>
        </Container>

        {/* Floating decorative elements - darker (SAME as reference) */}
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

      {/* Accessories Cards Section with continuous bouncing - ALL 12 BOXES SAME SIZE */}
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        {/* Accessories Grid - All boxes continuously bouncing and SAME SIZE */}
        <Grid container spacing={4} justifyContent="center">
          {accessories.map((accessory, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              <AccessoryCard accessory={accessory} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Bottom Content Section - SAME as reference */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: 10,
          p: 6,
          borderRadius: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: '2px solid rgba(139, 0, 0, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          maxWidth: '800px',
          mx: 'auto',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 20px 40px rgba(139, 0, 0, 0.15)',
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
              color: '#8B0000',
              fontWeight: 800,
              mb: 3,
              fontSize: '2.2rem',
              position: 'relative',
              zIndex: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Premium Accessories Collection
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
            From laptop batteries to docking stations, we have all the accessories you need to enhance your laptop experience. Quality products with warranty included.
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
              background: 'linear-gradient(45deg, #8B0000 30%, #A52A2A 90%)',
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
            Get Accessories Recommendation
          </Button>
        </Box>
      </Container>

      {/* Footer - Same as before */}
      <Box
        component="footer"
        sx={{
          bgcolor: '#1a1a2e',
          color: '#ffffff',
          pt: 4,
          pb: 3,
          position: 'relative',
          overflow: 'hidden',
          borderTop: '4px solid #e74c3c',
        }}
      >
        <Container maxWidth="lg">
          {/* Visit Us Banner */}
          <Box
            sx={{
              mb: 3,
              backgroundColor: 'rgba(231, 76, 60, 0.1)',
              borderRadius: 2,
              p: 3,
              minHeight: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(231, 76, 60, 0.2)',
              transition: 'all 0.3s ease',
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgba(231, 76, 60, 0.15)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box sx={{ textAlign: 'center', width: '100%' }}>
              <Typography
                variant="h4"
                sx={{
                  color: '#ffffff',
                  fontWeight: 700,
                  mb: 1.5,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Visit Us for Accessories & Repairs
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#b0b0b0',
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                Walk into our store for genuine accessories and expert laptop repair services.
              </Typography>
            </Box>
          </Box>

          {/* Fort Location */}
          <Box
            sx={{
              mb: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 2,
              p: 3,
              minHeight: '120px',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(231, 76, 60, 0.2)',
              transition: 'all 0.3s ease',
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgba(231, 76, 60, 0.08)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(231, 76, 60, 0.1)',
                cursor: 'pointer',
              },
            }}
            onClick={() => openGoogleMaps('fort')}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%', gap: 3 }}>
              <Box
                sx={{
                  minWidth: 60,
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(231, 76, 60, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#e74c3c',
                }}
              >
                <PlaceIcon sx={{ fontSize: 28 }} />
              </Box>

              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#e74c3c',
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                    }}
                  >
                    Fort Location
                  </Typography>
                  <OpenInNewIcon 
                    sx={{ 
                      color: '#e74c3c',
                      fontSize: '1.2rem',
                      opacity: 0.7,
                    }} 
                  />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#b0b0b0',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    mb: 2,
                  }}
                >
                  Address: 1st Floor, 17A, Bahubali Bldg, Flora Fountain, 10/E, Cawasji Patel St, next to Vardhman Chambers, Kala Ghoda, Fort, Mumbai, Maharashtra 400001
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(52, 152, 219, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#3498db',
                      }}
                    >
                      <PhoneIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 500, fontSize: '1rem' }}>
                      Phone: 081697 98826
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#e74c3c',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    View on Maps
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Vile Parle Location */}
          <Box
            sx={{
              mb: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 2,
              p: 3,
              minHeight: '120px',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(52, 152, 219, 0.2)',
              transition: 'all 0.3s ease',
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgba(52, 152, 219, 0.08)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(52, 152, 219, 0.1)',
                cursor: 'pointer',
              },
            }}
            onClick={() => openGoogleMaps('vileParle')}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%', gap: 3 }}>
              <Box
                sx={{
                  minWidth: 60,
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(52, 152, 219, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#3498db',
                }}
              >
                <PlaceIcon sx={{ fontSize: 28 }} />
              </Box>

              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#3498db',
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                    }}
                  >
                    Vile Parle Location
                  </Typography>
                  <OpenInNewIcon 
                    sx={{ 
                      color: '#3498db',
                      fontSize: '1.2rem',
                      opacity: 0.7,
                    }} 
                  />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#b0b0b0',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    mb: 2,
                  }}
                >
                  Address: 1st Floor, Prime Mall, F92/96, Alfa Market, Road, Naypada, Irla, Vile Parle West, Mumbai, Maharashtra 400056
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(52, 152, 219, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#3498db',
                      }}
                    >
                      <PhoneIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 500, fontSize: '1rem' }}>
                      Phone: 092233 33357
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#3498db',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    View on Maps
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Working Hours */}
          <Box
            sx={{
              mb: 3,
              backgroundColor: 'rgba(46, 204, 113, 0.1)',
              borderRadius: 2,
              p: 3,
              minHeight: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(46, 204, 113, 0.2)',
              transition: 'all 0.3s ease',
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgba(46, 204, 113, 0.15)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(46, 204, 113, 0.1)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: 4 }}>
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(46, 204, 113, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2ecc71',
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 32 }} />
              </Box>

              <Box sx={{ textAlign: 'left', flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#2ecc71',
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                  }}
                >
                  Working Hours
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: { xs: '1.4rem', md: '1.8rem' },
                  }}
                >
                  Mon-Sat: 11 AM - 7 PM
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    mt: 1,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Visit us during our business hours for immediate assistance
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Copyright/Brand */}
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 2,
              p: 3,
              minHeight: '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#ffffff',
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                background: 'linear-gradient(45deg, #e74c3c 30%, #ff7675 50%, #3498db 70%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '1px',
              }}
            >
              BRAINTONE
            </Typography>

            <Divider
              sx={{
                width: '200px',
                my: 2,
                backgroundColor: 'rgba(231, 76, 60, 0.5)',
                height: '2px',
              }}
            />

            <Typography
              variant="h6"
              sx={{
                color: '#b0b0b0',
                mb: 1,
                fontSize: { xs: '1rem', md: '1.1rem' },
                textAlign: 'center',
              }}
            >
              Expert Laptop Accessories & Repair Services
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: { xs: '0.9rem', md: '1rem' },
                textAlign: 'center',
                mt: 1,
              }}
            >
              © 2024 BRAINTONE. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Popup Modal - Keep the same */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="accessory-modal-title"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Paper
          sx={{
            width: isMobile ? '100%' : 800,
            maxHeight: '90vh',
            overflow: 'auto',
            borderRadius: 3,
            position: 'relative',
          }}
        >
          {selectedAccessory && (
            <>
              <Box sx={{ 
                p: 4, 
                bgcolor: selectedAccessory.color,
                color: '#ffffff',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box>
                      <Typography variant="h4" component="h2" fontWeight="bold">
                        {selectedAccessory.name}
                      </Typography>
                      <Typography variant="h6" sx={{ mt: 0.5, opacity: 0.9 }}>
                        {selectedAccessory.description}
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton 
                    onClick={handleCloseModal} 
                    sx={{ 
                      color: '#ffffff',
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ p: 4 }}>
                <Box sx={{ 
                  textAlign: 'center', 
                  mb: 5,
                  p: 4,
                  bgcolor: alpha(selectedAccessory.color, 0.1),
                  borderRadius: 3,
                  border: `2px dashed ${selectedAccessory.color}`,
                }}>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Starting from
                  </Typography>
                  <Typography variant="h1" fontWeight="bold" color={selectedAccessory.color}>
                    {selectedAccessory.startingPrice}
                  </Typography>
                </Box>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                      <CheckCircleIcon sx={{ mr: 1, color: selectedAccessory.color }} />
                      Specifications
                    </Typography>
                    <List>
                      {selectedAccessory.specs.map((spec, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <CheckCircleIcon sx={{ color: selectedAccessory.color }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={spec} 
                            primaryTypographyProps={{ fontWeight: 'medium' }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h5" gutterBottom fontWeight="bold">
                        Popular Brands
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {selectedAccessory.brands}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h5" gutterBottom fontWeight="bold">
                        Best For
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {selectedAccessory.bestFor}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {selectedAccessory.warranty !== 'NA (Consumable)' && (
                  <Box sx={{ 
                    mt: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 5,
                  }}>
                    <Box sx={{ 
                      p: 4, 
                      bgcolor: selectedAccessory.color,
                      borderRadius: 3,
                      color: '#ffffff',
                      textAlign: 'center',
                      width: { xs: '100%', sm: '80%', md: '70%' },
                      maxWidth: '500px',
                    }}>
                      <Typography variant="h5" gutterBottom fontWeight="bold">
                        Warranty Included
                      </Typography>
                      <Typography variant="h3" fontWeight="bold">
                        {selectedAccessory.warranty}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 2, opacity: 0.9 }}>
                        All our premium accessories come with comprehensive warranty
                      </Typography>
                    </Box>
                  </Box>
                )}

                <Divider sx={{ my: 5 }} />
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography variant="h5" gutterBottom fontWeight="bold" color="#8B0000">
                    Want to Know More?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                    Contact our team for personalized recommendations and bulk orders
                  </Typography>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    onClick={handleContactButton}
                    size="large"
                    startIcon={<ContactPhoneIcon />}
                    sx={{ 
                      px: 6,
                      py: 1.5,
                      bgcolor: '#8B0000',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      '&:hover': {
                        bgcolor: '#A52A2A',
                        transform: 'scale(1.05)',
                      }
                    }}
                  >
                    CONTACT US
                  </Button>
                </Box>

                <Divider sx={{ my: 5 }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" gutterBottom fontWeight="bold" color="#8B0000">
                    For Hands-On Experience Visit Our Stores
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                    See and feel the quality of our accessories in person
                  </Typography>
                  
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                    <Button
                      variant="outlined"
                      startIcon={<PlaceIcon />}
                      onClick={() => openGoogleMaps('fort')}
                      sx={{ 
                        color: '#e74c3c',
                        borderColor: '#e74c3c',
                        '&:hover': {
                          backgroundColor: 'rgba(231, 76, 60, 0.1)',
                          borderColor: '#e74c3c',
                        }
                      }}
                    >
                      Fort Location
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<PlaceIcon />}
                      onClick={() => openGoogleMaps('vileParle')}
                      sx={{ 
                        color: '#3498db',
                        borderColor: '#3498db',
                        '&:hover': {
                          backgroundColor: 'rgba(52, 152, 219, 0.1)',
                          borderColor: '#3498db',
                        }
                      }}
                    >
                      Vile Parle Location
                    </Button>
                  </Stack>
                  
                  <Button
                    variant="contained"
                    onClick={handleCloseModal}
                    size="large"
                    sx={{ 
                      px: 6,
                      py: 1.5,
                      bgcolor: '#8B0000',
                      color: 'white',
                      fontWeight: 'bold',
                      '&:hover': {
                        bgcolor: '#A52A2A',
                      }
                    }}
                  >
                    CLOSE
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Paper>
      </Modal>
    </Box>
  );
};

export default Accessories;

