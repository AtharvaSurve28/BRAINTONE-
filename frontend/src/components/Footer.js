import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { Place, Phone, AccessTime, OpenInNew as OpenInNewIcon } from '@mui/icons-material';

const Footer = ({ fullFooter = true }) => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#1a1a2e',
                color: '#ffffff',
                pt: fullFooter ? 8 : 4,
                pb: 3,
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
                                    fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
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
                                    fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size
                                }}
                            >
                                Join 1,00000+ satisfied customers who trust Braintone for their technology needs.
                                Whether you're buying IT hardware, setting up a network, or need expert technical
                                support, we're here to help with 26+ years of experience behind us.
                            </Typography>
                        </Box>

                        {/* Box 1: Visit Us Banner - Full Width */}
                        <Box
                            sx={{
                                mb: 3,
                                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                                borderRadius: 2,
                                p: { xs: 2, md: 3 }, // Responsive padding
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
                        </Box>

                        {/* Box 2: Fort Location */}
                        <Box
                            sx={{
                                mb: 3,
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: 2,
                                p: { xs: 2, md: 3 },
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
                            onClick={() =>
                                window.open(
                                    'https://www.google.com/maps/search/?api=1&query=Braintone+17A+Bahubali+Building+Flora+Fountain+Fort+Mumbai',
                                    '_blank',
                                    'noopener,noreferrer'
                                )
                            }
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    width: '100%',
                                    gap: 3,
                                    textAlign: { xs: 'center', sm: 'left' }, // Center text on mobile
                                }}
                            >
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
                                    <Place sx={{ fontSize: 28 }} />
                                </Box>

                                <Box sx={{ flexGrow: 1, minWidth: 0, width: '100%' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: { xs: 'center', sm: 'space-between' },
                                            alignItems: 'flex-start',
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: '#e74c3c',
                                                fontWeight: 600,
                                                mb: 1,
                                                fontSize: { xs: '1.2rem', md: '1.3rem' },
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1
                                            }}
                                        >
                                            Fort Location
                                            <OpenInNewIcon
                                                sx={{
                                                    color: '#e74c3c',
                                                    fontSize: '1rem',
                                                    opacity: 0.7,
                                                    display: { xs: 'inline-flex', sm: 'none' } // Show inline on mobile
                                                }}
                                            />
                                        </Typography>
                                        <OpenInNewIcon
                                            sx={{
                                                color: '#e74c3c',
                                                fontSize: '1.2rem',
                                                opacity: 0.7,
                                                display: { xs: 'none', sm: 'block' } // Hide on mobile (shown next to title)
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
                                        Address: 1st Floor, 17A, Bahubali Bldg, Flora Fountain, 10/E,
                                        Cawasji Patel St, next to Vardhman Chambers, Kala Ghoda, Fort, Mumbai,
                                        Maharashtra 400001
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'column', sm: 'row' },
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: 2,
                                        }}
                                    >
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
                                                <Phone sx={{ fontSize: 18 }} />
                                            </Box>
                                            <Typography
                                                variant="body1"
                                                sx={{ color: '#ffffff', fontWeight: 500, fontSize: '1rem' }}
                                            >
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

                        {/* Box 3: Vile Parle Location */}
                        <Box
                            sx={{
                                mb: 3,
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: 2,
                                p: { xs: 2, md: 3 },
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
                            onClick={() =>
                                window.open(
                                    'https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+Prime+Mall+Irla+Vile+Parle+West+Mumbai',
                                    '_blank',
                                    'noopener,noreferrer'
                                )
                            }
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    width: '100%',
                                    gap: 3,
                                    textAlign: { xs: 'center', sm: 'left' }
                                }}
                            >
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
                                    <Place sx={{ fontSize: 28 }} />
                                </Box>

                                <Box sx={{ flexGrow: 1, minWidth: 0, width: '100%' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: { xs: 'center', sm: 'space-between' },
                                            alignItems: 'flex-start',
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: '#3498db',
                                                fontWeight: 600,
                                                mb: 1,
                                                fontSize: { xs: '1.1rem', md: '1.3rem' },
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1
                                            }}
                                        >
                                            Vile Parle Location
                                            <OpenInNewIcon
                                                sx={{
                                                    color: '#3498db',
                                                    fontSize: '1rem',
                                                    opacity: 0.7,
                                                    display: { xs: 'inline-flex', sm: 'none' }
                                                }}
                                            />
                                        </Typography>
                                        <OpenInNewIcon
                                            sx={{
                                                color: '#3498db',
                                                fontSize: '1.2rem',
                                                opacity: 0.7,
                                                display: { xs: 'none', sm: 'block' }
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
                                        Address: 1st Floor, Prime Mall, F92/96, Alfa Market, Road, Navpada,
                                        Irla, Vile Parle West, Mumbai, Maharashtra 400056
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'column', sm: 'row' },
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: 2,
                                        }}
                                    >
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
                                                <Phone sx={{ fontSize: 18 }} />
                                            </Box>
                                            <Typography
                                                variant="body1"
                                                sx={{ color: '#ffffff', fontWeight: 500, fontSize: '1rem' }}
                                            >
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

                        {/* Box 4: Working Hours */}
                        <Box
                            sx={{
                                mb: 3,
                                backgroundColor: 'rgba(46, 204, 113, 0.1)',
                                borderRadius: 2,
                                p: { xs: 2, md: 3 },
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
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    gap: { xs: 2, sm: 4 },
                                    textAlign: { xs: 'center', sm: 'left' }
                                }}
                            >
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
                                    <AccessTime sx={{ fontSize: 32 }} />
                                </Box>

                                <Box sx={{ flexGrow: { sm: 1 }, textAlign: { xs: 'center', sm: 'left' } }}>
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
                    </>
                )}

                {/* Box 5: Copyright/Brand - Full Width */}
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
                        mt: fullFooter ? 0 : 4,
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
                        Complete IT Solutions & Services
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
                        © {new Date().getFullYear()} BRAINTONE Technology Pvt Ltd. All rights reserved.
                    </Typography>
                </Box>

                {/* Bottom decorative line */}
                <Box
                    sx={{
                        width: '100%',
                        height: '2px',
                        background:
                            'linear-gradient(90deg, transparent, #e74c3c 20%, #3498db 50%, #2ecc71 80%, transparent)',
                        mt: 4,
                        borderRadius: '2px',
                    }}
                />
            </Container>
            <style jsx="true">{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
        </Box>
    );
};

export default Footer;
