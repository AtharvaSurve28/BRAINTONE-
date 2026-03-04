import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
} from '@mui/material';
import {
  MailOutline,
  Phone,
  LocationOn,
  Instagram,
  Twitter,
  LinkedIn,
  Facebook,
} from '@mui/icons-material';
import Place from '@mui/icons-material/Place';
import AccessTime from '@mui/icons-material/AccessTime';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

const Contact = () => {
  const contactInfo = [
    {
      icon: MailOutline,
      title: 'Email',
      value: 'shital@braintoneindia.com',
      color: '#e74c3c',
      link: 'mailto:shital@braintoneindia.com',
    },
    {
      icon: Phone,
      title: 'Phone (Fort)',
      value: '+91 9820119113',
      color: '#c0392b',
      link: 'tel:+919820119113',
    },
    {
      icon: Phone,
      title: 'Phone (Vile Parle)',
      value: '+91 9819401313',
      color: '#8B0000',
      link: 'tel:+919819401313',
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
      link: 'https://www.facebook.com/profile.php?id=61587490744034',
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
      bgcolor: 'background.default',
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
      <FadeInSection fullWidth>
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
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.6)',
              zIndex: 0,
            }
          }}
        >
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
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
          </Container>
        </Box>
      </FadeInSection>

      {/* Contact Info Cards with Staggered Animation */}
      <FadeInSection>
        <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 800,
              mb: 6,
              color: 'brandRed.main',
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

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {contactInfo.map((info, index) => (
              <Box
                key={index}
                sx={{
                  '&:hover .contact-card': info.link ? {
                    transform: 'translateY(-10px) scale(1.02)',
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 20px 40px rgba(0, 0, 0, 0.6)' : '0 20px 40px rgba(231, 76, 60, 0.25)',
                    background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #262626 0%, #333333 100%)' : 'linear-gradient(135deg, #fff5f5 0%, #ffeaea 100%)',
                    border: '2px solid rgba(231, 76, 60, 0.3)',
                    animationPlayState: 'paused',
                  } : {},
                }}
              >
                <Card
                  className="contact-card"
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
                    background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1e1e1e 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.4)' : '0 8px 25px rgba(231, 76, 60, 0.15)',
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
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'brandRed.main' }}>
                    {info.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
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
              </Box>
            ))}
          </Box>
        </Container>
      </FadeInSection>

      {/* Store Locations Section */}
      <FadeInSection>
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

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', alignItems: 'stretch', mb: 8 }}>
            {/* Fort Location Card */}
            <Box sx={{
              flex: '1 1 420px',
              maxWidth: '500px',
              width: '420px',
              '&:hover .location-card': {
                transform: 'translateY(-10px) scale(1.02)',
                boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 25px 50px rgba(0, 0, 0, 0.6)' : '0 25px 50px rgba(231, 76, 60, 0.35)',
                background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #262626 0%, #333333 100%)' : 'linear-gradient(135deg, #fff5f5 0%, #ffeaea 100%)',
                border: '2px solid rgba(231, 76, 60, 0.4)',
                animationPlayState: 'paused',
              },
            }}>
              <Card
                className="location-card"
                component="a"
                href="https://www.google.com/maps/search/?api=1&query=Braintone+17A+Bahubali+Building+Flora+Fountain+Fort+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 3,
                  textAlign: 'center',
                  minHeight: '300px',
                  width: '100%',
                  height: '100%',
                  background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1e1e1e 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                  boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 12px 35px rgba(0, 0, 0, 0.4)' : '0 12px 35px rgba(231, 76, 60, 0.2)',
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
                }}
              >
                <Place sx={{
                  fontSize: 40,
                  color: '#e74c3c',
                  mb: 1.5,
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '0.5s',
                }} />
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: '#8B0000', fontSize: '1.5rem' }}>
                  Fort Location
                </Typography>
                <Typography sx={{ color: '#e74c3c', mb: 0.5, fontWeight: 700, fontSize: '1rem' }}>
                  Braintone Laptop Services
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1, fontSize: '0.85rem', lineHeight: 1.4 }}>
                  Head office: 10/E, 1st floor, 17A, Patel building / Bahubali building, Next to Oye kake or Opp Raju Chai Cawasji patel street, Horniman circle, Fort, Mumbai - 400001 <br />
                  Showroom: Ground floor, 17A, Patel building / Bahubali building, Next to Oye kake or Opp Raju Chai Cawasji patel street, Horniman circle, Fort, Mumbai-400001
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 2, fontSize: '0.9rem', fontWeight: 600 }}>
                  Phone: +91 9820119113
                </Typography>
                <Typography variant="caption" sx={{
                  color: '#e74c3c',
                  fontWeight: 800,
                  backgroundColor: 'rgba(231, 76, 60, 0.1)',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  animation: 'shadowPulse 2s infinite',
                  fontSize: '0.75rem'
                }}>
                  📍 Click to open in Google Maps
                </Typography>
              </Card>
            </Box>

            <Box sx={{
              flex: '1 1 420px',
              maxWidth: '500px',
              width: '420px',
              '&:hover .location-card': {
                transform: 'translateY(-10px) scale(1.02)',
                boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 25px 50px rgba(0, 0, 0, 0.6)' : '0 25px 50px rgba(192, 57, 43, 0.35)',
                background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #262626 0%, #333333 100%)' : 'linear-gradient(135deg, #fff5f5 0%, #ffeaea 100%)',
                border: '2px solid rgba(192, 57, 43, 0.4)',
                animationPlayState: 'paused',
              },
            }}>
              <Card
                className="location-card"
                component="a"
                href="https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+Prime+Mall+Irla+Vile+Parle+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 3,
                  textAlign: 'center',
                  minHeight: '300px',
                  width: '100%',
                  height: '100%',
                  background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1e1e1e 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                  boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 12px 35px rgba(0, 0, 0, 0.4)' : '0 12px 35px rgba(192, 57, 43, 0.2)',
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
                }}
              >
                <Place sx={{
                  fontSize: 40,
                  color: '#c0392b',
                  mb: 1.5,
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '0.8s',
                }} />
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: '#8B0000', fontSize: '1.5rem' }}>
                  Vile Parle Location
                </Typography>
                <Typography sx={{ color: '#c0392b', mb: 0.5, fontWeight: 700, fontSize: '1rem' }}>
                  Braintone Laptop Services
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1, fontSize: '0.85rem', lineHeight: 1.4 }}>
                  Showroom: Prime Mall, 1st Floor, Off:no 92/96, opp To Alfa no. 1, Irla Road, Vile parle(w)
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 2, fontSize: '0.9rem', fontWeight: 600 }}>
                  Phone: +91 9819401313
                </Typography>
                <Typography variant="caption" sx={{
                  color: '#c0392b',
                  fontWeight: 800,
                  backgroundColor: 'rgba(192, 57, 43, 0.1)',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  animation: 'shadowPulse 2s infinite',
                  fontSize: '0.75rem'
                }}>
                  📍 Click to open in Google Maps
                </Typography>
              </Card>
            </Box>
          </Box>
        </Container>
      </FadeInSection>

      <Box>
        <Footer fullFooter={false} />
      </Box>
    </Box>
  );
};

export default Contact;