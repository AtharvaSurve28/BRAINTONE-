import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Fade,
  Slide,
  Zoom,
} from '@mui/material';
import {
  MailOutline,
  Phone,
  LocationOn,
  Instagram,
  Twitter,
  LinkedIn,
  Facebook,
  AccessTime,
  Place,
} from '@mui/icons-material';

const Contact = () => {
  const contactInfo = [
    {
      icon: MailOutline,
      title: 'Email',
      value: 'info@braintone.com',
      color: '#e74c3c',
      link: 'mailto:info@braintone.com',
    },
    {
      icon: Phone,
      title: 'Phone (Fort)',
      value: '+91 81697 98826',
      color: '#c0392b',
      link: 'tel:+918169798826',
    },
    {
      icon: Phone,
      title: 'Phone (Vile Parle)',
      value: '+91 92233 33357',
      color: '#8B0000',
      link: 'tel:+919223333357',
    },
    {
      icon: LocationOn,
      title: 'Fort Location',
      value: 'Kala Ghoda, Fort, Mumbai',
      color: '#e74c3c',
      link: 'https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+17A+Bahubali+Building+Flora+Fountain+Fort+Mumbai',
      mapsLabel: 'View on Google Maps',
    },
    {
      icon: LocationOn,
      title: 'Vile Parle Location',
      value: 'Irla, Vile Parle West, Mumbai',
      color: '#c0392b',
      link: 'https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+Prime+Mall+Irla+Vile+Parle+West+Mumbai',
      mapsLabel: 'View on Google Maps',
    },
    {
      icon: AccessTime,
      title: 'Working Hours',
      value: 'Mon-Sat: 11AM-7PM',
      color: '#8B0000',
      link: null,
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: 'braintone.technology',
      color: '#E1306C',
      link: 'https://www.instagram.com/braintone.technology/',
    },
    {
      icon: Twitter,
      title: 'Twitter',
      value: '@BraintoneL1707',
      color: '#1DA1F2',
      link: 'https://x.com/BraintoneL1707',
    },
    {
      icon: Facebook,
      title: 'Facebook',
      value: 'Braintone Mumbai',
      color: '#4267B2',
      link: 'https://facebook.com/braintone',
    },
    {
      icon: LinkedIn,
      title: 'LinkedIn',
      value: 'Braintone Services',
      color: '#0077B5',
      link: 'https://linkedin.com/company/braintone',
    },
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#fafafa',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated Reddish Background */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 10% 20%, rgba(231, 76, 60, 0.1) 0%, transparent 25%),
          radial-gradient(circle at 90% 10%, rgba(192, 57, 43, 0.08) 0%, transparent 25%),
          radial-gradient(circle at 25% 90%, rgba(139, 0, 0, 0.06) 0%, transparent 30%),
          radial-gradient(circle at 85% 80%, rgba(231, 76, 60, 0.05) 0%, transparent 30%)
        `,
        animation: 'pulseBackground 8s ease-in-out infinite',
        zIndex: 0,
      }} />

      <style jsx="true">{`
        @keyframes pulseBackground {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shadowPulse {
          0%, 100% { box-shadow: 0 4px 12px rgba(231, 76, 60, 0.1); }
          50% { box-shadow: 0 8px 20px rgba(231, 76, 60, 0.2); }
        }
      `}</style>

      {/* Header with Background Image */}
      <Fade in={true} timeout={1000}>
        <Box
          sx={{
            position: 'relative',
            color: 'white',
            py: 12,
            textAlign: 'center',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url("https://www.shutterstock.com/image-photo/customer-service-call-center-contact-600nw-2493101023.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.4)',
              zIndex: 0,
            }
          }}
        >
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
            <Slide direction="down" in={true} timeout={800}>
              <Typography
                variant="h2"
                sx={{ 
                  fontWeight: 900, 
                  mb: 3, 
                  fontSize: { xs: '2.5rem', md: '3.8rem' },
                  color: 'white',
                  textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                  letterSpacing: '1px',
                }}
              >
                Contact Braintone
              </Typography>
            </Slide>
            <Slide direction="up" in={true} timeout={1000}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: '1.3rem', md: '1.8rem' },
                  color: 'white',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                26+ Years of Excellence in Laptop Services
              </Typography>
            </Slide>
            <Slide direction="up" in={true} timeout={1200}>
              <Typography variant="h6" sx={{ 
                maxWidth: '700px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 400,
                color: 'white',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}>
                We're here to help and answer any questions you might have
              </Typography>
            </Slide>
          </Container>
        </Box>
      </Fade>

      {/* Contact Info Cards with Staggered Animation */}
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Fade in={true} timeout={1200}>
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              fontWeight: 800, 
              mb: 6, 
              color: '#8B0000',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, #e74c3c, #c0392b, #8B0000)',
                borderRadius: '2px',
              }
            }}
          >
            Get In Touch
          </Typography>
        </Fade>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {contactInfo.map((info, index) => (
            <Zoom 
              key={index}
              in={true} 
              timeout={800}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card
                component={info.link ? "a" : "div"}
                href={info.link}
                target={info.link ? "_blank" : undefined}
                rel={info.link ? "noopener noreferrer" : undefined}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '220px',
                  width: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                  boxShadow: '0 8px 25px rgba(231, 76, 60, 0.15)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  textDecoration: 'none',
                  cursor: info.link ? 'pointer' : 'default',
                  border: '2px solid rgba(231, 76, 60, 0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'bounce 3s ease-in-out infinite',
                  animationDelay: `${index * 0.3}s`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${info.color}, ${info.color}80)`,
                  },
                  '&:hover': info.link ? {
                    transform: 'translateY(-12px) scale(1.05)',
                    boxShadow: '0 20px 40px rgba(231, 76, 60, 0.25)',
                    background: 'linear-gradient(135deg, #fff5f5 0%, #ffeaea 100%)',
                    border: '2px solid rgba(231, 76, 60, 0.3)',
                    animation: 'none',
                  } : {},
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${info.color} 0%, ${info.color}DD 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    boxShadow: `0 6px 20px ${info.color}50`,
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <info.icon sx={{ fontSize: 32, color: 'white' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#8B0000' }}>
                  {info.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#5d5d5d', mb: 1 }}>
                  {info.value}
                </Typography>
                {info.mapsLabel && (
                  <Typography variant="caption" sx={{ 
                    color: '#e74c3c', 
                    mt: 1, 
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    animation: 'shadowPulse 2s infinite',
                  }}>
                    {info.mapsLabel}
                  </Typography>
                )}
              </Card>
            </Zoom>
          ))}
        </Box>
      </Container>

      {/* Store Locations Section */}
      <Fade in={true} timeout={1400}>
        <Container maxWidth="lg" sx={{ py: 4, position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              fontWeight: 800, 
              mb: 6, 
              color: '#c0392b',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '4px',
                background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
                borderRadius: '2px',
              }
            }}
          >
            Visit Our Stores
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', mb: 8 }}>
            {/* Fort Location Card */}
            <Zoom in={true} timeout={1000}>
              <Card
                component="a"
                href="https://www.google.com/maps/search/?api=1&query=Braintone+17A+Bahubali+Building+Flora+Fountain+Fort+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '280px',
                  width: '420px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                  boxShadow: '0 12px 35px rgba(231, 76, 60, 0.2)',
                  border: '2px solid rgba(231, 76, 60, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'bounce 3s ease-in-out infinite',
                  animationDelay: '0.2s',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
                  },
                  '&:hover': {
                    transform: 'translateY(-15px) scale(1.05)',
                    boxShadow: '0 25px 50px rgba(231, 76, 60, 0.35)',
                    background: 'linear-gradient(135deg, #fff5f5 0%, #ffeaea 100%)',
                    border: '2px solid rgba(231, 76, 60, 0.4)',
                    animation: 'none',
                  },
                }}
              >
                <Place sx={{ 
                  fontSize: 56, 
                  color: '#e74c3c', 
                  mb: 2,
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '0.5s',
                }} />
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#8B0000' }}>
                  Fort Location
                </Typography>
                <Typography variant="h6" sx={{ color: '#e74c3c', mb: 1, fontWeight: 600 }}>
                  Braintone Laptop Services
                </Typography>
                <Typography variant="body1" sx={{ color: '#5d5d5d', mb: 1 }}>
                  1st Floor, 17A, Bahubali Bldg, Flora Fountain
                </Typography>
                <Typography variant="body1" sx={{ color: '#5d5d5d', mb: 3 }}>
                  Phone: 081697 98826
                </Typography>
                <Typography variant="caption" sx={{ 
                  color: '#e74c3c', 
                  fontWeight: 800,
                  backgroundColor: 'rgba(231, 76, 60, 0.1)',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  animation: 'shadowPulse 2s infinite',
                }}>
                  📍 Click to open in Google Maps
                </Typography>
              </Card>
            </Zoom>
            
            {/* Vile Parle Location Card */}
            <Zoom in={true} timeout={1000} style={{ transitionDelay: '300ms' }}>
              <Card
                component="a"
                href="https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+Prime+Mall+Irla+Vile+Parle+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '280px',
                  width: '420px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                  boxShadow: '0 12px 35px rgba(192, 57, 43, 0.2)',
                  border: '2px solid rgba(192, 57, 43, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'bounce 3s ease-in-out infinite',
                  animationDelay: '0.5s',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #c0392b, #8B0000)',
                  },
                  '&:hover': {
                    transform: 'translateY(-15px) scale(1.05)',
                    boxShadow: '0 25px 50px rgba(192, 57, 43, 0.35)',
                    background: 'linear-gradient(135deg, #fff5f5 0%, #ffeaea 100%)',
                    border: '2px solid rgba(192, 57, 43, 0.4)',
                    animation: 'none',
                  },
                }}
              >
                <Place sx={{ 
                  fontSize: 56, 
                  color: '#c0392b', 
                  mb: 2,
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '0.8s',
                }} />
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#8B0000' }}>
                  Vile Parle Location
                </Typography>
                <Typography variant="h6" sx={{ color: '#c0392b', mb: 1, fontWeight: 600 }}>
                  Braintone Laptop Services
                </Typography>
                <Typography variant="body1" sx={{ color: '#5d5d5d', mb: 1 }}>
                  1st Floor, Prime Mall, Irla, Vile Parle West
                </Typography>
                <Typography variant="body1" sx={{ color: '#5d5d5d', mb: 3 }}>
                  Phone: 092233 33357
                </Typography>
                <Typography variant="caption" sx={{ 
                  color: '#c0392b', 
                  fontWeight: 800,
                  backgroundColor: 'rgba(192, 57, 43, 0.1)',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  animation: 'shadowPulse 2s infinite',
                }}>
                  📍 Click to open in Google Maps
                </Typography>
              </Card>
            </Zoom>
          </Box>
        </Container>
      </Fade>

      {/* Footer with Background Image */}
{/* Footer with Midnight Navy Background */}
<Slide direction="up" in={true} timeout={1000}>
  <Box
    component="footer"
    sx={{
      position: 'relative',
      // Removed image and replaced with the custom color
      bgcolor: '#1E1B2E', 
      color: 'white',
      py: 8,
      mt: 8,
      overflow: 'hidden',
      // Subtle top border to separate it from the white body
      borderTop: '1px solid rgba(255,255,255,0.1)',
    }}
  >
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Typography 
        variant="h2" 
        align="center" 
        sx={{ 
          fontWeight: 900, 
          mb: 3, 
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          color: '#e74c3c', // Explicit white color
          letterSpacing: '1px',
        }}
      >
        BRAINTONE
      </Typography>
      <Typography 
        variant="h5" 
        align="center" 
        sx={{ 
          fontSize: { xs: '1.2rem', md: '1.6rem' }, 
          mb: 2,
          fontWeight: 600,
          color: 'white', // Explicit white color
        }}
      >
        Expert Laptop Services Since 1998
      </Typography>
      <Typography 
        variant="body1" 
        align="center" 
        sx={{ 
          fontSize: '1.1rem', 
          mb: 1,
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.9)', // Slightly softer white for body text
        }}
      >
        © {new Date().getFullYear()} Braintone. All rights reserved.
      </Typography>
      <Typography 
        variant="body1" 
        align="center" 
        sx={{ 
          fontSize: '1rem', 
          mt: 2,
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white
        }}
      >
        Mon-Sat: 11AM - 7PM
      </Typography>
    </Container>
  </Box>
</Slide>
    </Box>
  );
};

export default Contact;