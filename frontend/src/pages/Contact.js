import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  TextField,
  Button,
  Grid,
  Stack,
  InputAdornment,
  Alert,
  Snackbar,
  useTheme,
} from '@mui/material';
import {
  MailOutline,
  Phone,
  LocationOn,
  Instagram,
  Twitter,
  LinkedIn,
  Facebook,
  Person,
  Home,
} from '@mui/icons-material';
import AccessTime from '@mui/icons-material/AccessTime';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

const Contact = () => {
  const theme = useTheme();
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp logic
    const BUSINESS_NUMBER = "919082014406";
    const text = `*📋 NEW CONTACT REQUEST - BRAINTONE*%0A%0A*👤 DETAILS:*%0A• *Name:* ${formData.name}%0A• *Email:* ${formData.email}%0A• *Phone:* ${formData.phone}%0A• *Address:* ${formData.address}%0A%0A*💬 MESSAGE:*%0A${formData.message || 'No message provided'}`;
    const whatsappUrl = `https://wa.me/${BUSINESS_NUMBER}?text=${text}`;

    window.open(whatsappUrl, '_blank');

    setSnackbar({
      open: true,
      message: 'Opening WhatsApp to send your request...',
      severity: 'success'
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: '',
    });
  };

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
            minHeight: { xs: '300px', md: '450px' },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url("https://images.unsplash.com/photo-1740560051533-3acef26ace95?q=80&w=2340&auto=format,compress&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Makes image adjustable/centered
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.55)', // Slightly adjusted for clarity
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

      {/* Connect with Us Section */}
      <FadeInSection>
        <Container maxWidth="md" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'text.primary',
                mb: 1,
                letterSpacing: '-1px',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textAlign: 'center'
              }}
            >
              Leave Us a Message
            </Typography>
            <Box sx={{ width: '60px', height: '6px', bgcolor: '#e74c3c', borderRadius: '2px', mx: 'auto' }} />
          </Box>

          <Box sx={{ mt: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="standard"
                    sx={{
                      '& .MuiInput-underline:before': { borderBottomColor: 'rgba(0,0,0,0.1)' },
                      '& .MuiInputLabel-root': { fontSize: '1.1rem', color: 'text.secondary' }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="standard"
                    sx={{
                      '& .MuiInput-underline:before': { borderBottomColor: 'rgba(0,0,0,0.1)' },
                      '& .MuiInputLabel-root': { fontSize: '1.1rem', color: 'text.secondary' }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    variant="standard"
                    sx={{
                      '& .MuiInput-underline:before': { borderBottomColor: 'rgba(0,0,0,0.1)' },
                      '& .MuiInputLabel-root': { fontSize: '1.1rem', color: 'text.secondary' }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address *"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    variant="standard"
                    sx={{
                      '& .MuiInput-underline:before': { borderBottomColor: 'rgba(0,0,0,0.1)' },
                      '& .MuiInputLabel-root': { fontSize: '1.1rem', color: 'text.secondary' }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                      mt: 2,
                      '& .MuiOutlinedInput-root': {
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                        borderRadius: '8px'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 6,
                      py: 1.5,
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #c0392b 0%, #8B0000 100%)',
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </FadeInSection>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>

      <Box>
        <Footer fullFooter={false} />
      </Box>
    </Box>
  );
};

export default Contact;