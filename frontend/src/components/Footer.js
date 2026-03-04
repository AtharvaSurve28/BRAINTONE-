import React from 'react';
import { Box, Container, Typography, Divider, Grid, Stack, IconButton } from '@mui/material';
import { Place, Phone, Instagram, Twitter, LinkedIn, Facebook, WhatsApp } from '@mui/icons-material'; // Added social icons
import { Link } from 'react-router-dom';

const Footer = ({ fullFooter = true }) => {
    return (
        <Box
            component="footer"
            role="contentinfo"
            sx={{
                bgcolor: '#000000',
                color: '#ffffff',
                pt: fullFooter ? 8 : 10,
                pb: fullFooter ? 3 : 8,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Short horizontal line for dark mode */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px', // Short width
                height: '1px',
                bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
                display: (theme) => theme.palette.mode === 'dark' ? 'block' : 'none',
            }} />

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
                                    color: 'brandRed.main',
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
                        {/* Brand Logos Section */}
                        <Box
                            sx={{
                                mb: 6,
                                py: 4,
                                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                flexWrap: 'nowrap',
                                justifyContent: { xs: 'flex-start', md: 'center' },
                                alignItems: 'center',
                                gap: { xs: 3, md: 4 }, // Increased gap for mobile swipe clarity
                                position: 'relative',
                                pb: 6,
                                pl: { xs: 6, md: 18 }, // Shifted right as requested
                                pr: { xs: 4, md: 10 },
                                overflowX: 'scroll',
                                cursor: 'grab',
                                touchAction: 'pan-x', // Explicitly allow horizontal touch swipe
                                WebkitOverflowScrolling: 'touch', // Smooth momentum scroll on iOS
                                userSelect: 'none', // Prevent image selection during swipe
                                '&:active': { cursor: 'grabbing' },
                                '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar for clean look
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                                borderBottom: { xs: '1.5px solid rgba(255, 255, 255, 0.3)', md: 'none' }, // Continuous border under logos for mobile
                                boxShadow: { xs: 'none', md: '0 5px 15px rgba(255, 255, 255, 0.1)' },
                            }}
                        >
                            {[
                                { name: 'Apple', src: '/images/brand-logos/apple-icon.png' },
                                { name: 'Dell', src: '/images/brand-logos/dell.png' },
                                { name: 'HP', src: '/images/brand-logos/hp.png' },
                                { name: 'Lenovo', src: '/images/brand-logos/lenovo.png' },
                                { name: 'Asus', src: '/images/brand-logos/asus.png' },
                                { name: 'Acer', src: '/images/brand-logos/acer.png' },
                                { name: 'Microsoft', src: '/images/brand-logos/microsoft.png' },
                                { name: 'Samsung', src: '/images/brand-logos/samsung.png' },
                                { name: 'MSI', src: '/images/brand-logos/msi.png' },
                            ].map((brand) => (
                                <Box
                                    key={brand.name}
                                    component="img"
                                    src={brand.src}
                                    alt={brand.name}
                                    sx={{
                                        height: {
                                            xs: brand.name === 'MSI' ? 85 : brand.name === 'Asus' ? 75 : ['Acer', 'Microsoft'].includes(brand.name) ? 65 : 55,
                                            md: brand.name === 'MSI' ? 100 : brand.name === 'Asus' ? 90 : ['Acer', 'Microsoft'].includes(brand.name) ? 70 : 50
                                        },
                                        width: 'auto',
                                        flexShrink: 0, // Prevent shrinking
                                        ml: brand.name === 'MSI' ? { xs: 2, md: 4 } : 0, // Shift MSI a bit right to balance
                                        filter: ['Apple', 'Asus'].includes(brand.name) ? 'brightness(0) invert(1)' : 'none',
                                        opacity: 0.9,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            opacity: 1,
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                />
                            ))}

                            {/* Short horizontal line under logos - DESKTOP ONLY */}
                            <Box sx={{
                                display: { xs: 'none', md: 'block' },
                                position: 'absolute',
                                bottom: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '90%',
                                maxWidth: '1000px',
                                height: '1.5px',
                                bgcolor: 'rgba(255, 255, 255, 0.4)',
                                boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
                            }} />
                        </Box>

                        {/* Swipe Indicator for Mobile */}
                        <Typography
                            variant="caption"
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                textAlign: 'center',
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontStyle: 'italic',
                                fontSize: '0.75rem',
                                mt: -4,
                                mb: 4,
                                letterSpacing: '1px'
                            }}
                        >
                            swipe &larr; &rarr;
                        </Typography>

                        {/* NEW 5-COLUMN COMPACT LAYOUT */}
                        <Grid container spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ mb: 6, textAlign: { xs: 'center', md: 'left' }, alignItems: { xs: 'center', md: 'flex-start' } }} justifyContent="space-between">

                            {/* Column 1: Services */}
                            <Grid item xs={12} md={2} sx={{ borderBottom: { xs: '1px solid rgba(255,255,255,0.1)', md: 'none' }, pb: { xs: 3, md: 0 }, mb: { xs: 3, md: 0 } }}>
                                <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, mb: 2 }}>
                                    Services
                                </Typography>
                                <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
                                    {[
                                        { name: 'Brand New Laptops', path: '/laptops' },
                                        { name: 'Refurbished Laptops', path: '/services/refurbished-laptops' },
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
                                            <strong>Head office:</strong> 10/E, 1st floor, 17A, <br />
                                            Patel building / Bahubali building, <br />
                                            Horniman circle, Fort, Mumbai - 400001 <br />
                                            <strong>Showroom:</strong> Ground floor, 17A, <br />
                                            Patel building / Bahubali building, <br />
                                            Fort, Mumbai - 400001
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
                                            <strong>Showroom:</strong> Prime Mall, 1st Floor, <br />
                                            Off:no 92/96, Irla Road, <br />
                                            Vile parle(w)
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
                                        <Typography variant="body2" sx={{ color: '#e0e0e0', lineHeight: 1.6 }}>
                                            +91 9820119113 / +91 9819401313 <br />
                                            +91 9320522227 / +91 9869148656
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
                                    <Box component="a" href="https://www.facebook.com/profile.php?id=61587490744034" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook Profile" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, textDecoration: 'none', color: '#e0e0e0', transition: '0.2s', '&:hover': { color: '#4267B2', transform: 'translateX(5px)' } }}>
                                        <Facebook aria-hidden="true" sx={{ mr: 1, fontSize: 20 }} /> Facebook
                                    </Box>
                                    <Box component="a" href="https://www.instagram.com/braintone.technology/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram Profile" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, textDecoration: 'none', color: '#e0e0e0', transition: '0.2s', '&:hover': { color: '#E4405F', transform: 'translateX(5px)' } }}>
                                        <Instagram aria-hidden="true" sx={{ mr: 1, fontSize: 20 }} /> Instagram
                                    </Box>
                                    <Box component="a" href="https://x.com/BraintoneL1707" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter Profile" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, textDecoration: 'none', color: '#e0e0e0', transition: '0.2s', '&:hover': { color: '#1DA1F2', transform: 'translateX(5px)' } }}>
                                        <Twitter aria-hidden="true" sx={{ mr: 1, fontSize: 20 }} /> Twitter
                                    </Box>
                                    <Box component="a" href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn Profile" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, textDecoration: 'none', color: '#e0e0e0', transition: '0.2s', '&:hover': { color: '#0077b5', transform: 'translateX(5px)' } }}>
                                        <LinkedIn aria-hidden="true" sx={{ mr: 1, fontSize: 20 }} /> LinkedIn
                                    </Box>
                                    <Box component="a" href="https://wa.me/919082014406" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, textDecoration: 'none', color: '#e0e0e0', transition: '0.2s', '&:hover': { color: '#25D366', transform: 'translateX(5px)' } }}>
                                        <WhatsApp aria-hidden="true" sx={{ mr: 1, fontSize: 20 }} /> WhatsApp
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
                            color: 'brandRed.main',
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

        </Box>
    );
};

export default Footer;
