import React from 'react';
import { Box, Container, Typography, Divider, Grid, Stack, IconButton } from '@mui/material';
import { Place, Phone, Instagram, Twitter, LinkedIn } from '@mui/icons-material'; // Added social icons
import { Link } from 'react-router-dom';

const Footer = ({ fullFooter = true }) => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#2d2d2d', // Lighter black
                color: '#ffffff',
                pt: fullFooter ? 8 : 10,
                pb: fullFooter ? 3 : 8,
                position: 'relative',
                overflow: 'hidden',
                borderTop: '4px solid #e74c3c',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #e74c3c, #3498db, #2ecc71, #e74c3c)',
                    backgroundSize: '300% 100%',
                    animation: 'shimmer 4s infinite linear',
                },
            }}
        >
            <Container maxWidth="lg">
                {fullFooter && (
                    <>
                        {/* Intro Section */}
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 800,
                                    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                                    mb: 2,
                                    color: '#e74c3c', // Brand Red
                                    fontSize: { xs: '2rem', md: '3rem' },
                                }}
                            >
                                Experience the Braintone Difference
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    opacity: 0.95,
                                    maxWidth: '800px',
                                    mx: 'auto',
                                    textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                                    fontWeight: 400,
                                    mb: 4,
                                    lineHeight: 1.6,
                                    fontSize: { xs: '1rem', md: '1.25rem' },
                                }}
                            >
                                Join 1,00,000+ satisfied customers who trust Braintone for their technology needs.
                                Whether you're buying IT hardware, setting up a network, or need expert technical
                                support, we're here to help with 26+ years of experience behind us.
                            </Typography>
                        </Box>

                        {/* Visit Us Banner */}
                        <Box
                            sx={{
                                mb: 8,
                                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                                borderRadius: 2,
                                p: 3,
                                textAlign: 'center',
                                border: '1px solid rgba(231, 76, 60, 0.2)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(231, 76, 60, 0.15)',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: '#ffffff',
                                    fontWeight: 700,
                                    mb: 1.5,
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                }}
                            >
                                Visit Us for Complete IT Solutions
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#b0b0b0',
                                    fontWeight: 400,
                                    fontSize: { xs: '0.9rem', md: '1.2rem' },
                                    maxWidth: '800px',
                                    mx: 'auto',
                                }}
                            >
                                Walk into our store for IT hardware, network setup, repair services and expert consultation.
                            </Typography>
                        </Box>

                        {/* NEW 5-COLUMN COMPACT LAYOUT */}
                        <Grid container spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ mb: 6, textAlign: { xs: 'center', md: 'left' }, alignItems: { xs: 'center', md: 'flex-start' } }} justifyContent="space-between">

                            {/* Column 1: Services */}
                            <Grid item xs={12} md={2} sx={{ borderBottom: { xs: '1px solid rgba(255,255,255,0.1)', md: 'none' }, pb: { xs: 3, md: 0 }, mb: { xs: 3, md: 0 } }}>
                                <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, mb: 2 }}>
                                    Services
                                </Typography>
                                <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
                                    {[
                                        { name: 'New Laptops', path: '/laptops' },
                                        { name: 'Pre-owned Laptops', path: '/services/pre-owned-laptops' },
                                        { name: 'Repair Services', path: '/repair' },
                                        { name: 'All Laptop Accessories', path: '/accessories' },
                                        { name: 'Mac Accessories', path: '/mac-accessories' }
                                    ].map((item) => (
                                        <Typography
                                            key={item.name}
                                            component={Link}
                                            to={item.path}
                                            variant="body2"
                                            sx={{
                                                color: '#e0e0e0', // Off-white
                                                textDecoration: 'none',
                                                display: 'block',
                                                width: '100%',
                                                textAlign: { xs: 'center', md: 'left' },
                                                transition: 'all 0.2s',
                                                '&:hover': {
                                                    color: '#246bceff',
                                                    transform: 'translateX(5px)'
                                                }
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    ))}
                                </Stack>
                            </Grid>

                            {/* Column 2: Address (Width increased for readability) */}
                            <Grid item xs={12} md={4} sx={{ borderBottom: { xs: '1px solid rgba(255,255,255,0.1)', md: 'none' }, pb: { xs: 3, md: 0 }, mb: { xs: 3, md: 0 } }}>
                                <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, mb: 2 }}>
                                    Our Locations
                                </Typography>
                                <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
                                    {/* Fort Address */}
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ color: '#e0e0e0', fontWeight: 600, mb: 0.5 }}>
                                            Fort Store
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#e0e0e0', // Off-white
                                                cursor: 'pointer',
                                                transition: 'color 0.2s',
                                                '&:hover': { color: '#e74c3c' },
                                                lineHeight: 1.6
                                            }}
                                            onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Braintone+17A+Bahubali+Building+Flora+Fountain+Fort+Mumbai', '_blank')}
                                        >
                                            1st Floor, 17A, Bahubali Bldg, Flora Fountain, Fort, Mumbai 400001
                                        </Typography>
                                    </Box>

                                    {/* Vile Parle Address */}
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ color: '#e0e0e0', fontWeight: 600, mb: 0.5 }}>
                                            Vile Parle Store
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#e0e0e0', // Off-white
                                                cursor: 'pointer',
                                                transition: 'color 0.2s',
                                                '&:hover': { color: '#3498db' },
                                                lineHeight: 1.6
                                            }}
                                            onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+Prime+Mall+Irla+Vile+Parle+West+Mumbai', '_blank')}
                                        >
                                            1st Floor, Prime Mall, Irla, Vile Parle West, Mumbai 400056
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Grid>

                            {/* Column 3: Timings */}
                            <Grid item xs={12} md={2} sx={{ borderBottom: { xs: '1px solid rgba(255,255,255,0.1)', md: 'none' }, pb: { xs: 3, md: 0 }, mb: { xs: 3, md: 0 } }}>
                                <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, mb: 2 }}>
                                    Timings
                                </Typography>
                                <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ color: '#e0e0e0', mb: 0.5 }}>
                                            Fort Store
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
                                            Mon-Sat: 11:00 AM - 7:00 PM
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ color: '#e0e0e0', mb: 0.5 }}>
                                            Vile Parle Store
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
                                            Mon-Sun: 11:00 AM - 7:00 PM
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ color: '#e0e0e0', mb: 0.5 }}>
                                            Contact No.
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
                                            9821212912 / 9892001640
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Grid>

                            {/* Column 4: Contact Us (Socials) */}
                            <Grid item xs={12} md={2} sx={{ borderBottom: { xs: '1px solid rgba(255,255,255,0.1)', md: 'none' }, pb: { xs: 3, md: 0 }, mb: { xs: 3, md: 0 } }}>
                                <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, mb: 2 }}>
                                    Contact Us
                                </Typography>
                                <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
                                    <Box component="a" href="https://www.instagram.com/braintone.technology/" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, textDecoration: 'none', color: '#e0e0e0', transition: '0.2s', '&:hover': { color: '#E4405F', transform: 'translateX(5px)' } }}>
                                        <Instagram sx={{ mr: 1, fontSize: 20 }} /> Instagram
                                    </Box>
                                    <Box component="a" href="https://x.com/BraintoneL1707" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, textDecoration: 'none', color: '#e0e0e0', transition: '0.2s', '&:hover': { color: '#1DA1F2', transform: 'translateX(5px)' } }}>
                                        <Twitter sx={{ mr: 1, fontSize: 20 }} /> Twitter
                                    </Box>
                                    <Box component="a" href="#" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, textDecoration: 'none', color: '#e0e0e0', transition: '0.2s', '&:hover': { color: '#0077b5', transform: 'translateX(5px)' } }}>
                                        <LinkedIn sx={{ mr: 1, fontSize: 20 }} /> LinkedIn
                                    </Box>
                                </Stack>
                            </Grid>

                            {/* Column 5: Get to know about us */}
                            <Grid item xs={12} md={2}>
                                <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, mb: 2 }}>
                                    Get to know about us
                                </Typography>
                                <Typography
                                    component={Link}
                                    to="/about"
                                    variant="body1" // increased size slightly for better visibility
                                    sx={{
                                        color: '#e0e0e0',
                                        textDecoration: 'none',
                                        transition: '0.2s',
                                        display: 'block', // Changed from inline-block for better centering
                                        width: '100%',
                                        textAlign: { xs: 'center', md: 'left' },
                                        '&:hover': {
                                            color: '#246bceff',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    About Us
                                </Typography>
                            </Grid>

                        </Grid>
                    </>
                )}

                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.4)', mb: 3 }} />

                {/* Bottom Copyright */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="h2" // Made bigger
                        component="div"
                        sx={{
                            fontWeight: 900,
                            mb: 1,
                            color: '#e74c3c', // Brand Red
                            letterSpacing: '2px',
                            display: 'inline-block',
                            fontSize: { xs: '2.5rem', md: '3rem' } // Explicitly bigger
                        }}
                    >
                        BRAINTONE
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.85rem',
                        }}
                    >
                        © {new Date().getFullYear()} BRAINTONE Technology Pvt Ltd. All rights reserved.
                    </Typography>
                </Box>
            </Container>

            <style jsx="true">{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
        </Box>
    );
};

export default Footer;
