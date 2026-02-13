import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, IconButton, Paper, Stack, Button, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Divider } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import Diversity1Icon from '@mui/icons-material/Diversity1'; // Community
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'; // NGO
import EastIcon from '@mui/icons-material/East';
import GroupAddIcon from '@mui/icons-material/GroupAdd'; // Invite
import PlaceIcon from '@mui/icons-material/Place';
import CloseIcon from '@mui/icons-material/Close';

const BannerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedBanner, setSelectedBanner] = useState(null);

    const banners = [
        {
            id: 1,
            badge: "STUDENT DISCOUNT",
            badgeIcon: <SchoolIcon fontSize="small" />,
            badgeColor: "#e8f0fe",
            badgeTextColor: "#1a73e8",
            title: "Back to School Ready",
            description: "Flash your student ID and get special discounts on all hardware repairs and software optimizations.",
            modalTitle: "Student Discount Program",
            modalDesc: "At BRAINTONE, we understand that students rely heavily on their laptops for education, projects, and research. To support your academic journey, we offer exclusive pricing for students on all repair services and upgrades. We want to ensure that technical issues never stand in the way of your learning.",
            btnText: "View Details",
            btnColor: "#ef4444", // Reddish
            btnIcon: <EastIcon />,
            image: "https://plus.unsplash.com/premium_photo-1733306464128-d6b80ed2f2e2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Students
            theme: "light",

        },
        {
            id: 2,
            badge: "CORPORATE DISCOUNT",
            badgeIcon: <BusinessIcon fontSize="small" />,
            badgeColor: "#f1f5f9",
            badgeTextColor: "#475569",
            title: "Business Grade Support",
            description: "Keep your team productive with our B2B maintenance packages, priority onsite service, and bulk repair rates.",
            modalTitle: "Corporate & B2B Solutions",
            modalDesc: "Businesses require minimal downtime to maintain productivity. BRAINTONE offers specialized enterprise packages designed to keep your office running smoothly. From bulk maintenance to priority on-site support, we provide cost-effective solutions tailored to meet the demands of modern businesses.",
            btnText: "View Details",
            btnColor: "#1e1e1e", // Black
            btnIcon: <BusinessIcon />, // using generic icon for quote
            image: "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Office
            theme: "dark",
        },
        {
            id: 3,
            badge: "REFERRAL DISCOUNT",
            badgeIcon: <GroupAddIcon fontSize="small" />,
            badgeColor: "#dcfce7",
            badgeTextColor: "#166534",
            title: "Spread the Word",
            description: "Know someone with a cracked screen? Refer a friend and both of you will receive service credits.",
            modalTitle: "Referral Rewards Program",
            modalDesc: "Good service is worth sharing! We value our community and want to reward you for trusting us. When you refer a friend or family member to BRAINTONE, you both benefit. It's our way of saying thank you for helping us grow and serving more customers with quality repairs.",
            btnText: "View Details",
            btnColor: "#dc2626", // Red
            btnIcon: <GroupAddIcon />,
            image: "https://plus.unsplash.com/premium_photo-1663051303500-c85bef3f05f6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Friends
            theme: "light",
        },
        {
            id: 4,
            badge: "NGO DISCOUNT",
            badgeIcon: <VolunteerActivismIcon fontSize="small" />,
            badgeColor: "#ffedd5",
            badgeTextColor: "#9a3412",
            title: "Supporting the Mission",
            description: "We offer specialized pricing and priority support for registered non-profits and community organizations.",
            modalTitle: "Non-Profit Partnership",
            modalDesc: "BRAINTONE is committed to giving back to the community. We recognize the incredible work done by NGOs and non-profit organizations. To support your mission, we provide discounted rates on hardware and services, ensuring that your resources can be directed towards what matters most—helping others.",
            btnText: "View Details",
            btnColor: "#ea580c", // Orange
            btnIcon: <VolunteerActivismIcon />,
            image: "https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Community
            theme: "light",
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
    };

    const handleOpen = (banner) => {
        setSelectedBanner(banner);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!open) { // Pause auto-slide when modal is open
                handleNext();
            }
        }, 5000); // 5 seconds per slide

        return () => clearInterval(interval);
    }, [open]);

    return (
        <Box sx={{
            position: 'relative',
            zIndex: 5,
            mt: -6,
            mb: 8
        }}>
            <Container maxWidth="lg">
                <Paper
                    elevation={4}
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 4,
                        bgcolor: '#fff',
                        height: { xs: 'auto', md: 360 }, // Fixed height on desktop, auto on mobile
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    }}
                >
                    {/* Slider Content Wrapper - Flex Container for sliding effect */}
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                        role="region"
                        aria-label="Promotion slider"
                    >
                        {banners.map((banner, index) => (
                            <Box
                                key={banner.id}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`Slide ${index + 1} of ${banners.length}: ${banner.title}`}
                                sx={{
                                    minWidth: '100%',
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: { xs: 'column-reverse', md: 'row' }, // Stack vertically on mobile
                                }}
                            >
                                {/* LEFT CONTENT */}
                                <Box sx={{
                                    flex: 1,
                                    p: { xs: 3, sm: 4, md: 6 }, // Further reduced padding on mobile
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: { xs: 'center', md: 'flex-start' }, // Centered on mobile
                                    textAlign: { xs: 'center', md: 'left' }, // Center text on mobile
                                    bgcolor: '#fff',
                                }}>
                                    {/* Badge */}
                                    <Chip
                                        icon={banner.badgeIcon}
                                        label={banner.badge}
                                        sx={{
                                            bgcolor: banner.badgeColor,
                                            color: banner.badgeTextColor,
                                            fontWeight: 700,
                                            mb: 1.5,
                                            px: 0.5,
                                            height: { xs: 28, md: 32 },
                                            fontSize: { xs: '0.7rem', md: '0.8125rem' },
                                            '& .MuiChip-icon': { color: banner.badgeTextColor, fontSize: { xs: '0.9rem', md: '1.1rem' } }
                                        }}
                                    />

                                    {/* Title */}
                                    <Typography variant="h2" sx={{
                                        fontWeight: 800,
                                        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.5rem' }, // Scaled down for mobile
                                        lineHeight: 1.2,
                                        mb: 1.5,
                                        color: '#0f172a'
                                    }}>
                                        {banner.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography variant="body1" sx={{
                                        fontSize: { xs: '0.9rem', md: '1rem' },
                                        color: '#475569',
                                        mb: 3,
                                        maxWidth: '450px',
                                        lineHeight: 1.5
                                    }}>
                                        {banner.description}
                                    </Typography>

                                    {/* CTA Button */}
                                    <Button
                                        variant="contained"
                                        onClick={() => handleOpen(banner)}
                                        endIcon={<EastIcon />}
                                        sx={{
                                            bgcolor: banner.btnColor,
                                            color: '#fff',
                                            py: { xs: 1, md: 1.5 },
                                            px: { xs: 3, md: 4 },
                                            borderRadius: 2,
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            fontSize: { xs: '0.85rem', md: '1rem' },
                                            boxShadow: `0 4px 14px ${banner.btnColor}66`,
                                            '&:hover': {
                                                bgcolor: banner.btnColor,
                                                filter: 'brightness(0.9)',
                                                transform: 'translateY(-2px)',
                                                boxShadow: `0 6px 20px ${banner.btnColor}88`,
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {banner.btnText}
                                    </Button>
                                </Box>

                                {/* RIGHT IMAGE */}
                                <Box sx={{
                                    flex: { xs: 'none', md: 1 },
                                    height: { xs: 180, sm: 220, md: '100%' }, // Reduced height on mobile
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <Box
                                        component="img"
                                        src={banner.image}
                                        alt=""
                                        loading="lazy"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 6s ease',
                                            transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)',
                                        }}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    {/* Navigation Buttons - Absolute positioned outside the sliding box */}
                    <IconButton
                        onClick={handlePrev}
                        aria-label="Previous slide"
                        sx={{
                            position: 'absolute',
                            left: { xs: 10, md: 30 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            bgcolor: 'rgba(255,255,255,0.8)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            '&:hover': { bgcolor: '#fff', transform: 'translateY(-50%) scale(1.1)' },
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <ArrowBackIosNewIcon aria-hidden="true" fontSize="small" />
                    </IconButton>

                    <IconButton
                        onClick={handleNext}
                        aria-label="Next slide"
                        sx={{
                            position: 'absolute',
                            right: { xs: 10, md: 30 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            bgcolor: 'rgba(255,255,255,0.8)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            '&:hover': { bgcolor: '#fff', transform: 'translateY(-50%) scale(1.1)' },
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <ArrowForwardIosIcon aria-hidden="true" fontSize="small" />
                    </IconButton>

                    {/* Dots Indicator */}
                    <Stack
                        direction="row"
                        spacing={1}
                        role="tablist"
                        aria-label="Slide selection"
                        sx={{
                            position: 'absolute',
                            bottom: { xs: 15, md: 20 },
                            left: { xs: '50%', md: 0 },
                            width: { xs: 'auto', md: '50%' },
                            justifyContent: 'center',
                            transform: { xs: 'translateX(-50%)', md: 'none' },
                            zIndex: 10
                        }}
                    >
                        {banners.map((_, idx) => (
                            <Box
                                key={idx}
                                role="tab"
                                aria-selected={idx === currentIndex}
                                aria-label={`Go to slide ${idx + 1}`}
                                tabIndex={0}
                                onClick={() => setCurrentIndex(idx)}
                                onKeyPress={(e) => { if (e.key === 'Enter') setCurrentIndex(idx); }}
                                sx={{
                                    width: idx === currentIndex ? 24 : 8, // Elongate active dot
                                    height: 8,
                                    borderRadius: 4,
                                    bgcolor: idx === currentIndex ? banners[currentIndex].btnColor : '#cbd5e1', // Match button color
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        ))}
                    </Stack>
                </Paper>
            </Container>

            {/* INFO MODAL */}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
                scroll="paper"
                PaperProps={{
                    sx: { borderRadius: 3, p: 1 }
                }}
            >
                {selectedBanner && (
                    <>
                        <DialogTitle sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            pb: 1
                        }}>
                            <Typography variant="h5" fontWeight={700}>
                                {selectedBanner.modalTitle}
                            </Typography>
                            <IconButton onClick={handleClose} size="small">
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent dividers sx={{ borderTop: 'none' }}>
                            {/* Description */}
                            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                                {selectedBanner.modalDesc}
                            </Typography>

                            <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 3, color: '#64748b' }}>
                                For more details on eligibility and rates, please visit one of our stores.
                            </Typography>

                            <Divider sx={{ mb: 3 }}>
                                <Chip label="VISIT OUR STORES" size="small" />
                            </Divider>

                            {/* Store Locations */}
                            <Stack spacing={2}>
                                {/* Store 1 : Fort */}
                                <Paper
                                    variant="outlined"
                                    onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Braintone+17A+Bahubali+Building+Flora+Fountain+Fort+Mumbai', '_blank')}
                                    sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        display: 'flex',
                                        gap: 2,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            borderColor: '#e74c3c',
                                            bgcolor: 'rgba(231, 76, 60, 0.04)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(231, 76, 60, 0.1)'
                                        }
                                    }}
                                >
                                    <PlaceIcon sx={{ color: '#e74c3c', mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#e74c3c' }}>
                                            Fort Location
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            1st Floor, 17A, Bahubali Bldg, Flora Fountain, Fort, Mumbai
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: '#e74c3c', mt: 1, display: 'block', fontWeight: 600 }}>
                                            Tap to view on Google Maps →
                                        </Typography>
                                    </Box>
                                </Paper>

                                {/* Store 2 : Vile Parle */}
                                <Paper
                                    variant="outlined"
                                    onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+Prime+Mall+Irla+Vile+Parle+West+Mumbai', '_blank')}
                                    sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        display: 'flex',
                                        gap: 2,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            borderColor: '#3498db',
                                            bgcolor: 'rgba(52, 152, 219, 0.04)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(52, 152, 219, 0.1)'
                                        }
                                    }}
                                >
                                    <PlaceIcon sx={{ color: '#3498db', mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#3498db' }}>
                                            Vile Parle Location
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            1st Floor, Prime Mall, Irla, Vile Parle West, Mumbai
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: '#3498db', mt: 1, display: 'block', fontWeight: 600 }}>
                                            Tap to view on Google Maps →
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Stack>
                        </DialogContent>
                        <DialogActions sx={{ p: 2, pt: 1 }}>
                            <Button onClick={handleClose} variant="contained" sx={{ bgcolor: '#0f172a', textTransform: 'none', borderRadius: 2 }}>
                                Close details
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default BannerSlider;
