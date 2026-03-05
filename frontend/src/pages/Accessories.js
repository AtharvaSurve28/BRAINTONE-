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
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

// Animations - EXACTLY SAME as laptops page
const shimmer = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 400% 0%; }
`;

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

// SLOWER Bubble animation for background - SAME as laptops

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

  // 12 Accessories - EXACT SAME STRUCTURE as laptops
  const accessories = [
    {
      id: 1,
      name: 'Laptop Battery',
      description: 'Original & compatible replacement batteries',
      image: '/images/accessories/Battery.jpg',
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
      image: '/images/accessories/Laptop-Charger.png',
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
      image: 'https://images.unsplash.com/photo-1769085795297-b45cc8c92f5b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      image: 'https://images.unsplash.com/photo-1651599732956-88af9a1f2810?w=400&h=300&fit=crop',
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
      image: 'https://i.pinimg.com/1200x/c4/72/88/c47288d7a8a5dcce07a643146b1d30e0.jpg',
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
      image: 'https://uzbl.com/cdn/shop/files/Rugged-protective-hard-shell-clear-transparent-case-Lenovo-chromebook-500e-gen-1.png?v=1749742904&width=1024',
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
        'House-specific Layouts',
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
      image: 'https://images.unsplash.com/photo-1689757855413-9e366c2011f1?w=400&h=300&fit=crop',
      color: '#E2231A',
      startingPrice: '₹800',
      specs: [
        'Neoprene & Polyester',
        'Shock Absorbent',
        'Ultra Slim Design',
        'External Pockets',
        'Handle & Shoulder Strap',
        'Multiple Size Options',
        'House-specific Layouts',
      ],
      bestFor: 'Extra protection in bags, minimal carry',
      brands: 'AmazonBasics, Case Logic, STM',
      warranty: '6 Months Warranty',
    },
    {
      id: 10,
      name: 'Laptop Stands',
      description: 'Ergonomic adjustable stands',
      image: 'https://plus.unsplash.com/premium_photo-1683736986821-e4662912a70d?w=400&h=300&fit=crop',
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
      image: 'https://i.pcmag.com/imagery/roundup-products/07iEy3TBpdO7Tk5FQBsvZz9.fit_lim.size_1050x591.v1731970422.jpg?w=400&h=300&fit=crop',
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
      image: 'https://www.conceptronic.net/media/catalog/product/cache/5dd1050e303ccd126a15d8279a1aa7f2/b/2/b27d4e5f7a4cfd2aa829ec12ff0f10f8243c0596_HUBBIES13G_V1_product_01_high_1.jpg?w=400&h=300&fit=crop',
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



  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: 'background.default',
      overflow: 'hidden',
      position: 'relative',
    }}>

      {/* HERO SECTION - EXACT SAME STRUCTURE as laptops */}
      <FadeInSection fullWidth>
        <Box
          sx={{
            position: 'relative',
            color: 'white',
            py: { xs: 12, md: 14 },
            textAlign: 'center',
            overflow: 'hidden',
            minHeight: { xs: '70vh', md: '60vh' },
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1595388709985-ad3748c82710?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.7)',
              zIndex: 0,
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
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', py: 6 }}>
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '4rem' },
                letterSpacing: '-1.5px',
                color: 'white',
                textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                lineHeight: 1.1,
                mb: 2,
                animation: `${floatAnimation} 4s ease-in-out infinite`,
              }}
            >
              Premium Accessories
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
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                letterSpacing: '0.3px',
              }}
            >
              Enhance your laptop experience with our premium accessories collection
            </Typography>
          </Container>
        </Box>
      </FadeInSection>

      {/* Accessories Cards Section - USING EXACT SAME LAYOUT as laptops */}
      <FadeInSection>
        <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
          {/* Accessories Grid - EXACT SAME as laptops grid */}
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {accessories.map((accessory, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={accessory.id}
                sx={{
                  display: 'flex',
                  transform: [4, 5].includes(accessory.id) ? { xs: 'none', sm: 'translateX(-20px)' } : 'none',
                  transition: 'transform 0.3s ease',
                  '&:hover .accessory-card': {
                    boxShadow: `0 20px 50px ${accessory.color}40`,
                    transform: 'translateY(-10px) scale(1.02)',
                    borderColor: accessory.color,
                    animationPlayState: 'paused',
                    '& .accessory-image': {
                      transform: 'scale(1.15)',
                    },
                    '& .accessory-name': {
                      color: accessory.color,
                      transform: 'scale(1.05)',
                    }
                  }
                }}
              >
                <Card
                  className="accessory-card"
                  onClick={() => handleOpenModal(accessory)}
                  sx={{
                    width: accessory.id === 2 ? { xs: '100%', sm: '120%' } : '100%',
                    height: 420,
                    maxHeight: 420, // STRICT: Force height
                    margin: accessory.id === 2 ? '0 auto' : '0',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.default',
                    borderRadius: 3,
                    boxShadow: '0 4px 30px rgba(139, 0, 0, 0.15)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: `2px solid ${accessory.color}20`,
                    overflow: 'hidden', // STRICT: Hide any overflowing content/images
                    animation: `${bounceAnimation} 2s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                    position: 'relative',
                    zIndex: 2,
                    cursor: 'pointer',
                  }}
                >
                  {/* Image Container - EXACT SAME as laptops */}
                  <Box
                    sx={{
                      backgroundColor: 'background.paper',
                      p: 0,
                      height: 250,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 2,
                      borderBottom: `3px solid ${accessory.color}`,
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
                      loading={index < 6 ? "eager" : "lazy"}
                      className="accessory-image"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 2,
                        position: 'relative',
                        display: 'block',
                      }}
                    />
                  </Box>

                  {/* Card Content - EXACT SAME STRUCTURE as laptops */}
                  <CardContent
                    sx={{
                      textAlign: 'center',
                      backgroundColor: 'background.paper',
                      py: 3,
                      px: 3,
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
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
                        background: `linear-gradient(90deg, transparent, ${accessory.color}, transparent)`,
                      }
                    }}
                  >
                    {/* Name - EXACT SAME as laptops brand name */}
                    <Typography
                      variant="h5"
                      className="accessory-name"
                      sx={{
                        fontWeight: 800,
                        color: 'text.primary',
                        fontSize: '1.8rem',
                        transition: 'all 0.4s ease',
                        letterSpacing: '-0.5px',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        mb: 1,
                      }}
                    >
                      {accessory.name}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.95rem',
                        lineHeight: 1.5,
                        mb: 2,
                        minHeight: '3em', // reserve ~2 lines so all cards align
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {accessory.description}
                    </Typography>

                    {/* Price */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: accessory.color,
                        fontSize: '1.4rem',
                        mt: 1,
                      }}
                    >
                      {accessory.startingPrice}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FadeInSection>

      {/* Bottom Content Section - EXACT SAME as laptops */}
      <FadeInSection>
        <Box sx={{
          textAlign: 'center',
          mt: 10,
          mb: 10,
          p: 6,
          borderRadius: 3,
          backgroundColor: 'background.paper',
          border: '2px solid',
          borderColor: 'divider',
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
              color: 'brandRed.main',
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
              color: 'text.primary',
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
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #e74c3c 30%, #ff7675 90%)'
                : 'linear-gradient(45deg, #8B0000 30%, #A52A2A 90%)',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 8px 25px rgba(231, 76, 60, 0.4)'
                : '0 8px 25px rgba(139, 0, 0, 0.4)',
              position: 'relative',
              zIndex: 2,
              animation: `${bounceAnimation} 3s ease-in-out infinite`,
              '&:hover': {
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #d63031 30%, #e74c3c 90%)'
                  : 'linear-gradient(45deg, #600000 30%, #8B0000 90%)',
                transform: 'translateY(-3px)',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 12px 30px rgba(231, 76, 60, 0.5)'
                  : '0 12px 30px rgba(139, 0, 0, 0.5)'
              }
            }}
          >
            Get Accessories Recommendation
          </Button>
        </Box>
      </FadeInSection>
      <Footer fullFooter={true} />

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
            width: isMobile ? '95%' : 800,
            maxHeight: '90vh',
            overflow: 'auto',
            borderRadius: 3,
            position: 'relative',
            m: 2,
          }}
        >
          {selectedAccessory && (
            <>
              <Box sx={{
                p: { xs: 2.5, sm: 4 },
                bgcolor: selectedAccessory.color,
                color: '#ffffff',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box>
                      <Typography variant={isMobile ? "h5" : "h4"} component="h2" fontWeight="bold">
                        {selectedAccessory.name}
                      </Typography>
                      <Typography variant={isMobile ? "body1" : "h6"} sx={{ mt: 0.5, opacity: 0.9 }}>
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

              <Box sx={{ p: { xs: 2, sm: 4 } }}>
                <Box sx={{
                  textAlign: 'center',
                  mb: { xs: 3, sm: 5 },
                  p: { xs: 3, sm: 4 },
                  bgcolor: alpha(selectedAccessory.color, 0.1),
                  borderRadius: 3,
                  border: `2px dashed ${selectedAccessory.color}`,
                }}>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    Starting from
                  </Typography>
                  <Typography variant={isMobile ? "h3" : "h1"} fontWeight="bold" color={selectedAccessory.color}>
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
                      p: { xs: 3, sm: 4 },
                      bgcolor: selectedAccessory.color,
                      borderRadius: 3,
                      color: '#ffffff',
                      textAlign: 'center',
                      width: { xs: '100%', sm: '80%', md: '70%' },
                      maxWidth: '500px',
                    }}>
                      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom fontWeight="bold">
                        Warranty Included
                      </Typography>
                      <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold">
                        {selectedAccessory.warranty}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                        All our premium accessories come with comprehensive warranty
                      </Typography>
                    </Box>
                  </Box>
                )}

                <Divider sx={{ my: { xs: 3, sm: 5 } }} />
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography variant={isMobile ? "h6" : "h5"} gutterBottom fontWeight="bold" color="#8B0000">
                    Want to Know More?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
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
                  <Typography variant={isMobile ? "h5" : "h4"} gutterBottom fontWeight="bold" color="#8B0000">
                    For Hands-On Experience Visit Our Stores
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
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