import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    Divider,
    Modal,
    IconButton,
    Paper,
    Chip,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

const MacAccessories = () => {
    const [activeSeries, setActiveSeries] = useState('MacBook Air');
    const [openModal, setOpenModal] = useState(false);
    const [selectedAccessory, setSelectedAccessory] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const seriesOptions = ['MacBook Air', 'MacBook Pro', 'iMac'];

    const macbookAirAccessories = [
        {
            name: "Apple USB-C to MagSafe 3 Cable (2m)",
            price: "₹4,500",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MLYV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1652733066465",
            info: "This 2-meter charging cable features a magnetic MagSafe 3 connector that helps guide the plug to the power port of your Mac laptop. Optimized for fast charging, the cable is woven for long-lasting durability and strength."
        },
        {
            name: "Apple 35W Dual USB-C Port Compact Power Adapter",
            price: "₹5,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MNWM3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1651767660993",
            info: "The 35W Dual USB-C Port Compact Power Adapter allows you to charge two devices at the same time, whether you’re at home, in the office, or on the go. The compact size and folding prongs make it easy to pack and store."
        },
        {
            name: "Apple Magic Keyboard",
            price: "₹11,900",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXCL3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=S1pkeVJDY2FBQ0dESk1WYXJ4V1Yxd2tuVHYzMERCZURia3c5SzJFOTlPam52L09kbzNiSStKOHg1RWFmMk9ZeHNPTTVzYTczc3ZWbTJwM0wxQ1JUSEE",
            info: "Magic Keyboard delivers a remarkably comfortable and precise typing experience. It’s also wireless and rechargeable, with an incredibly long-lasting internal battery that will power your keyboard for about a month or more between charges."
        },
        {
            name: "Apple Magic Mouse",
            price: "₹8,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2E3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1623254802000",
            info: "Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk. The Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents."
        },
        {
            name: "Apple Magic Trackpad",
            price: "₹12,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2D3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1623254802000",
            info: "Wireless and rechargeable, Magic Trackpad includes the full range of Multi-Touch gestures and Force Touch technology. Sensors under the trackpad surface detect subtle differences in the amount of pressure you apply."
        },
        {
            name: "Apple USB-C to Digital AV Multiport Adapter",
            price: "₹7,900",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUF82?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=YmMwQzNsVURnT3pTTnp0WFkycEJRZ2tuVHYzMERCZURia3c5SzJFOTlPaWI2elFubVhUMUdUbUxPYVZ3Z2lNVkY4YUNnMDBSMVJabFdYMHdOQjdTOHc",
            info: "The USB-C Digital AV Multiport Adapter lets you connect your USB-C enabled Mac or iPad to an HDMI display, while also connecting a standard USB device and a USB-C charging cable. Connect to any monitor or TV with ease."
        },
        {
            name: "Apple Leather Sleeve for MacBook Air 13\"",
            price: "₹15,900",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HSEL2?wid=890&hei=890&fmt=jpeg&qlt=90&.v=UFNXd2d3WFRiSkhDZllERmN3eERxNHExblZJSGFXSFVPMUE2c2RxMy8rTHFKS3krSVB6RjVHTGZhZWdoYTB6OVVuT1hZdGhsYmhRaXUyTEJKYUlPeWc",
            info: "Crafted from high-quality European leather with a soft microfiber lining. This sleeve protects your MacBook Air wherever you take it, offering a premium feel and slim profile that fits perfectly in any bag."
        }
    ];

    const macbookProAccessories = [
        {
            name: "Apple Thunderbolt 4 Pro Cable (3m)",
            price: "₹10,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP32?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1646777935441",
            info: "This 3-meter cable features a black braided design that coils without tangling and supports Thunderbolt 4, Thunderbolt 3, and USB 4 data transfer up to 40Gb/s, DisplayPort video output (HBR3), and charging up to 100W."
        },
        {
            name: "Apple Magic Keyboard with Touch ID & Numeric Keypad",
            price: "₹16,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2C3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1623190473000",
            info: "Magic Keyboard with Touch ID and Numeric Keypad delivers a remarkably comfortable and precise typing experience. It features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys."
        },
        {
            name: "Apple Magic Trackpad",
            price: "₹12,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2D3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1623254802000",
            info: "Magic Trackpad is wireless and rechargeable, and it includes the full range of Multi-Touch gestures and Force Touch technology. Sensors under the trackpad surface detect subtle differences in the amount of pressure you apply."
        },
        {
            name: "Apple Magic Mouse",
            price: "₹8,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2E3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1623254802000",
            info: "Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk. The Multi-Touch surface allows you to perform simple gestures such as swiping between web pages."
        },
        {
            name: "Apple 140W USB-C Power Adapter",
            price: "₹9,500",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MLYU3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1633549074000",
            info: "The 140W USB-C Power Adapter offers fast, efficient charging at home, in the office, or on the go. It’s compatible with numerous USB-C charging cables. Apple recommends pairing this power adapter with your 16-inch MacBook Pro."
        },
        {
            name: "Apple Thunderbolt 3 to Thunderbolt 2 Adapter",
            price: "₹5,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMEL2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1477508603000",
            info: "The Thunderbolt 3 (USB-C) to Thunderbolt 2 Adapter lets you connect Thunderbolt and Thunderbolt 2 devices — such as external hard drives and Thunderbolt docks — to any of the Thunderbolt 3 (USB-C) / USB4 ports on your Mac."
        },
        {
            name: "Apple Leather Sleeve for MacBook Pro 16\"",
            price: "₹17,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWV92?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1569427357000",
            info: "Crafted from high-quality European leather with a soft microfiber lining. This sleeve protects your MacBook Pro 16-inch wherever you take it, offering a premium feel and slim profile that fits perfectly in any bag."
        }
    ];

    const imacAccessories = [
        {
            name: "Apple Magic Keyboard with Touch ID & Numeric Keypad",
            price: "₹16,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK293?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1652732734837",
            info: "Magic Keyboard with Touch ID and Numeric Keypad delivers a remarkably comfortable and precise typing experience. It features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys."
        },
        {
            name: "Apple Magic Mouse",
            price: "₹8,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2E3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1623254802000",
            info: "Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk. The Multi-Touch surface allows you to perform simple gestures such as swiping between web pages."
        },
        {
            name: "Apple Magic Trackpad",
            price: "₹12,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2D3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1623254802000",
            info: "Magic Trackpad is wireless and rechargeable, and it includes the full range of Multi-Touch gestures and Force Touch technology. Sensors under the trackpad surface detect subtle differences in the amount of pressure you apply."
        },
        {
            name: "Apple USB-C Digital AV Multiport Adapter",
            price: "₹7,900",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUF82?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1562947231454",
            info: "The USB-C Digital AV Multiport Adapter lets you connect your USB-C enabled Mac or iPad to an HDMI display, while also connecting a standard USB device and a USB-C charging cable. Supports 4K video output."
        }
    ];

    const handleOpenModal = (accessory) => {
        setSelectedAccessory(accessory);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedAccessory(null);
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: 'auto', md: '75vh' },
                    minHeight: { xs: '400px', md: '450px' },
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                    backgroundImage: 'url("/images/mac_hero_bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: { xs: 'center', md: '70% center' },
                    backgroundColor: '#f5f5f7',
                    py: { xs: 8, md: 0 },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)',
                        zIndex: 1
                    }
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                    <FadeInSection>
                        <Box sx={{ maxWidth: '800px', color: '#1d1d1f', textAlign: 'left' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: { xs: 2, md: 3 } }}>
                                <Box
                                    component="img"
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                    alt="Apple"
                                    sx={{
                                        width: { xs: 35, md: 50 },
                                        height: { xs: 35, md: 50 },
                                        objectFit: 'contain'
                                    }}
                                />
                                <Typography
                                    variant="overline"
                                    sx={{
                                        fontSize: { xs: '0.75rem', md: '1rem' },
                                        fontWeight: 600,
                                        letterSpacing: { xs: '2px', md: '3px' },
                                        color: '#86868b'
                                    }}
                                >
                                    PREMIUM ACCESSORIES
                                </Typography>
                            </Box>

                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 900,
                                    fontSize: { xs: '2.4rem', md: '5rem' },
                                    mb: { xs: 1.5, md: 2 },
                                    lineHeight: 1.1,
                                    letterSpacing: { xs: '-1px', md: '-2px' },
                                    color: '#1d1d1f'
                                }}
                            >
                                Elevate Your <br />
                                <span style={{ color: '#000000' }}>Mac Experience</span>
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#424245',
                                    maxWidth: '600px',
                                    lineHeight: { xs: 1.5, md: 1.6 },
                                    fontWeight: 400,
                                    fontSize: { xs: '1rem', md: '1.4rem' }
                                }}
                            >
                                Discover a curated collection of premium accessories designed specifically for your MacBook.
                            </Typography>
                        </Box>
                    </FadeInSection>
                </Container>
            </Box>

            {/* Series Selection Section */}
            <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
                <FadeInSection>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 800,
                            color: '#1d1d1f',
                            mb: 4,
                            letterSpacing: '0.5px'
                        }}
                    >
                        SELECT SERIES:
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 3, md: 6 },
                            borderBottom: '1px solid #e5e5e7',
                            pb: 0.5,
                            mb: { xs: 4, md: 6 },
                            overflowX: 'auto',
                            whiteSpace: 'nowrap',
                            scrollbarWidth: 'none', // Firefox
                            '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
                            px: { xs: 1, md: 0 },
                            mx: { xs: -1, md: 0 }
                        }}
                    >
                        {seriesOptions.map((series) => (
                            <Box
                                key={series}
                                onClick={() => setActiveSeries(series)}
                                sx={{
                                    cursor: 'pointer',
                                    position: 'relative',
                                    pb: 1.5,
                                    flexShrink: 0,
                                    '&::after': activeSeries === series ? {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '3px',
                                        backgroundColor: '#000',
                                        borderRadius: '2px'
                                    } : {}
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        color: activeSeries === series ? '#1d1d1f' : '#86868b',
                                        transition: 'color 0.3s ease',
                                        fontSize: { xs: '1.1rem', md: '1.5rem' },
                                        '&:hover': {
                                            color: '#1d1d1f'
                                        }
                                    }}
                                >
                                    {series}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </FadeInSection>

                {/* MacBook Air Content - ALL BOXES SAME SIZE */}
                {activeSeries === 'MacBook Air' && (
                    <FadeInSection>
                        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ justifyContent: 'center' }}>
                            {macbookAirAccessories.map((item, idx) => (
                                <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box
                                        onClick={() => handleOpenModal({ ...item, title: "MacBook Air Essential" })}
                                        sx={{
                                            bgcolor: '#ffffff',
                                            borderRadius: 4,
                                            width: '100%',
                                            maxWidth: 320, // Restore width constraint
                                            height: '460px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            cursor: 'pointer',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                            margin: '0 auto',
                                            border: '1px solid rgba(0,0,0,0.03)',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 12px 30px rgba(0,0,0,0.1)'
                                            }
                                        }}
                                    >
                                        {/* IMAGE SECTION - FIXED HEIGHT */}
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: '260px', // FIXED
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                bgcolor: '#ffffff',
                                                overflow: 'hidden',
                                                p: 2
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={item.image}
                                                alt={item.name}
                                                sx={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    maxWidth: '90%',
                                                    maxHeight: '90%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </Box>

                                        <Divider sx={{ mx: 2, opacity: 0.6 }} />

                                        {/* TEXT SECTION - FIXED HEIGHT */}
                                        <Box
                                            sx={{
                                                p: 3,
                                                height: '200px', // FIXED
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                flex: '0 0 auto'
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: '#1d1d1f',
                                                    fontSize: '1.05rem',
                                                    lineHeight: 1.3,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    height: '4.2em', // Fixed for 3 lines
                                                    width: '100%',
                                                    maxWidth: '160px', // Forced narrow wrap for requested density
                                                    margin: '0 auto',
                                                    mb: 1
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#86868b',
                                                    fontSize: '0.85rem',
                                                    lineHeight: 1.4,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    height: '2.8em' // Fixed for 2 lines
                                                }}
                                            >
                                                Official Apple Accessory
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </FadeInSection>
                )}

                {/* MacBook Pro Content - ALL BOXES SAME SIZE */}
                {activeSeries === 'MacBook Pro' && (
                    <FadeInSection>
                        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ justifyContent: 'center' }}>
                            {macbookProAccessories.map((item, idx) => (
                                <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box
                                        onClick={() => handleOpenModal({ ...item, title: "MacBook Pro Performance" })}
                                        sx={{
                                            bgcolor: '#ffffff',
                                            borderRadius: 4,
                                            width: '100%',
                                            maxWidth: 320, // Restore width constraint
                                            height: '460px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            cursor: 'pointer',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                            margin: '0 auto',
                                            border: '1px solid rgba(0,0,0,0.03)',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 12px 30px rgba(0,0,0,0.1)'
                                            }
                                        }}
                                    >
                                        {/* IMAGE SECTION - FIXED HEIGHT */}
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: '260px', // FIXED
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                bgcolor: '#ffffff',
                                                overflow: 'hidden',
                                                p: 2
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={item.image}
                                                alt={item.name}
                                                sx={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    maxWidth: '90%',
                                                    maxHeight: '90%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </Box>

                                        <Divider sx={{ mx: 2, opacity: 0.6 }} />

                                        {/* TEXT SECTION - FIXED HEIGHT */}
                                        <Box
                                            sx={{
                                                p: 3,
                                                height: '200px', // FIXED
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                flex: '0 0 auto'
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: '#1d1d1f',
                                                    fontSize: '1.05rem',
                                                    lineHeight: 1.3,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    height: '4.2em', // Fixed for 3 lines
                                                    width: '100%',
                                                    maxWidth: '160px', // Forced narrow wrap for requested density
                                                    margin: '0 auto',
                                                    mb: 1
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#86868b',
                                                    fontSize: '0.85rem',
                                                    lineHeight: 1.4,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    height: '2.8em' // Fixed for 2 lines
                                                }}
                                            >
                                                Performance Grade Gear
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </FadeInSection>
                )}

                {/* iMac Content - ALL BOXES SAME SIZE */}
                {activeSeries === 'iMac' && (
                    <FadeInSection>
                        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ justifyContent: 'center' }}>
                            {imacAccessories.map((item, idx) => (
                                <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box
                                        onClick={() => handleOpenModal({ ...item, title: "iMac Essential" })}
                                        sx={{
                                            bgcolor: '#ffffff',
                                            borderRadius: 4,
                                            width: '100%',
                                            maxWidth: 320,
                                            height: '460px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            cursor: 'pointer',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                            margin: '0 auto',
                                            border: '1px solid rgba(0,0,0,0.03)',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 12px 30px rgba(0,0,0,0.1)'
                                            }
                                        }}
                                    >
                                        {/* IMAGE SECTION - FIXED HEIGHT */}
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: '260px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                bgcolor: '#ffffff',
                                                overflow: 'hidden',
                                                p: 2
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={item.image}
                                                alt={item.name}
                                                sx={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    maxWidth: '90%',
                                                    maxHeight: '90%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </Box>

                                        <Divider sx={{ mx: 2, opacity: 0.6 }} />

                                        {/* TEXT SECTION - FIXED HEIGHT */}
                                        <Box
                                            sx={{
                                                p: 3,
                                                height: '200px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                flex: '0 0 auto'
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: '#1d1d1f',
                                                    fontSize: '1.05rem',
                                                    lineHeight: 1.3,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    height: '4.2em',
                                                    width: '100%',
                                                    maxWidth: '160px',
                                                    margin: '0 auto',
                                                    mb: 1
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#86868b',
                                                    fontSize: '0.85rem',
                                                    lineHeight: 1.4,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    height: '2.8em'
                                                }}
                                            >
                                                Desktop Lifestyle Gear
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </FadeInSection>
                )}
            </Container>

            <Footer fullFooter={true} />

            {/* Modal */}
            <Modal open={openModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Paper sx={{ width: isMobile ? '95%' : 600, p: { xs: 3, md: 4 }, borderRadius: 6, outline: 'none', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
                    {selectedAccessory && (
                        <>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#1d1d1f', pr: 4 }}>{selectedAccessory.name}</Typography>
                                    <Chip label={selectedAccessory.title} size="small" sx={{ mt: 1, fontWeight: 600, bgcolor: '#f5f5f7', color: '#1d1d1f' }} />
                                </Box>
                                <IconButton onClick={handleCloseModal} sx={{ position: 'absolute', right: 16, top: 16, bgcolor: '#f5f5f7', '&:hover': { bgcolor: '#e8e8ed' } }}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 4 }, mb: 4 }}>
                                <Box sx={{ width: { xs: '100%', sm: 180 }, height: { xs: 160, sm: 180 }, bgcolor: '#ffffff', borderRadius: 4, border: '1px solid #f2f2f2', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <img src={selectedAccessory.image} alt={selectedAccessory.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#1d1d1f', fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>Product Features</Typography>
                                    <Typography variant="body1" sx={{ color: '#424245', lineHeight: 1.5, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                                        {selectedAccessory.info}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ position: 'relative', my: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Divider sx={{ position: 'absolute', width: '100%', zIndex: 0 }} />
                                <Chip
                                    label="VISIT OUR STORES"
                                    sx={{
                                        position: 'relative',
                                        zIndex: 1,
                                        bgcolor: '#e8eaed',
                                        color: '#1d1d1f',
                                        fontWeight: 700,
                                        fontSize: '0.75rem',
                                        letterSpacing: '0.05em',
                                        height: '24px'
                                    }}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                                {/* Fort Location Card */}
                                <Box
                                    component="a"
                                    href="https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+17A+Bahubali+Building+Flora+Fountain+Fort+Mumbai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: { xs: 2, sm: 2.5 },
                                        p: { xs: 2, sm: 2.5 },
                                        borderRadius: 3,
                                        border: '1px solid #e0e0e0',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                        '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderColor: '#e74c3c' }
                                    }}
                                >
                                    <LocationOnIcon sx={{ fontSize: { xs: 28, sm: 36 }, color: '#e74c3c', mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#e74c3c', fontSize: { xs: '1.1rem', sm: '1.25rem' }, mb: 0.5 }}>
                                            Fort Location
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#424245', lineHeight: 1.4, mb: 1.5, fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                                            1st Floor, 17A, Bahubali Bldg, Flora Fountain, Fort, Mumbai
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#e74c3c', fontWeight: 700, fontSize: '0.85rem' }}>
                                            Tap to view on Google Maps →
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Vile Parle Location Card */}
                                <Box
                                    component="a"
                                    href="https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+Prime+Mall+Irla+Vile+Parle+West+Mumbai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: { xs: 2, sm: 2.5 },
                                        p: { xs: 2, sm: 2.5 },
                                        borderRadius: 3,
                                        border: '1px solid #e0e0e0',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                        '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderColor: '#0071e3' }
                                    }}
                                >
                                    <LocationOnIcon sx={{ fontSize: { xs: 28, sm: 36 }, color: '#0071e3', mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#0071e3', fontSize: { xs: '1.1rem', sm: '1.25rem' }, mb: 0.5 }}>
                                            Vile Parle Location
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#424245', lineHeight: 1.4, mb: 1.5, fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                                            1st Floor, Prime Mall, Irla, Vile Parle West, Mumbai
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#0071e3', fontWeight: 700, fontSize: '0.85rem' }}>
                                            Tap to view on Google Maps →
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Button
                                component={Link}
                                to="/contact"
                                variant="contained"
                                fullWidth
                                sx={{
                                    py: 2,
                                    borderRadius: 3,
                                    bgcolor: '#0071e3', // Apple Blue
                                    textTransform: 'none',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        bgcolor: '#0077ed',
                                        boxShadow: '0 4px 15px rgba(0,113,227,0.3)'
                                    }
                                }}
                            >
                                Contact Braintone Team
                            </Button>
                        </>
                    )}
                </Paper>
            </Modal>
        </Box>
    );
};

export default MacAccessories;