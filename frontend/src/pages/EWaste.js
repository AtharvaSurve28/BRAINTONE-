import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Stack, List, ListItem, ListItemIcon, ListItemText, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FadeInSection from '../components/FadeInSection';
import Footer from '../components/Footer';

const EWaste = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const itadImages = [
        "https://plus.unsplash.com/premium_photo-1769853836754-edc6199a3bad?q=80&w=2410&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/19285776/pexels-photo-19285776.jpeg",
        "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % itadImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [itadImages.length]);

    const leftServices = [
        "Secure Data Destruction & Sanitization",
        "IT Asset Remarketing & Value Recovery",
        "Certified Environmentally Friendly Recycling"
    ];

    const rightServices = [
        "On-site Data Wiping & Degaussing",
        "Detailed Asset Audit & Reporting",
        "Secure Chain of Custody & Logistics"
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        category: '',
        brand: '',
        city: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const { name, email, mobile, category, brand, city, quantity } = formData;

        if (!name || !email || !mobile) {
            alert('Please fill in the required fields (*)');
            return;
        }

        const message =
            `*New E-waste Inquiry*
----------------
*Name:* ${name}
*Email:* ${email}
*Mobile:* ${mobile}
*Category:* ${category || 'N/A'}
*Brand:* ${brand || 'N/A'}
*City:* ${city || 'N/A'}
*Quantity:* ${quantity || 'N/A'}`;

        const whatsappUrl = `https://wa.me/919082014406?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Box sx={{ bgcolor: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    height: '600px',
                    width: '100%',
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(/images/ewaste-hero.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ maxWidth: '900px', textAlign: 'center', px: 2 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#e74c3c',
                            fontWeight: 800,
                            mb: 2,
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                            lineHeight: 1.1
                        }}
                    >
                        BRAINTONE TECHNOLOGY
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: { xs: '1.1rem', md: '1.6rem' },
                            lineHeight: 1.4,
                        }}
                    >
                        Leading the way in responsible E-waste management and IT Asset Disposition.
                        <br />Sustainable solutions for a cleaner digital future.
                    </Typography>
                </Box>
            </Box>

            {/* Side-by-Side Impact Section */}
            <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">

                    {/* Left Side: Large Round Image */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, pr: { md: 5 } }}>
                        <Box
                            sx={{
                                width: { xs: '280px', sm: '380px', lg: '480px' },
                                height: { xs: '280px', sm: '380px', lg: '480px' },
                                borderRadius: '50%',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                                border: '12px solid #fcfcfc',
                                flexShrink: 0
                            }}
                        >
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1746013189357-e17986c93fb2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="E-waste Impact"
                                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                    </Grid>

                    {/* Right Side: Vertically Stacked Info */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <Box sx={{ maxWidth: '450px', px: { xs: 2, md: 0 } }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 900,
                                    color: '#003366',
                                    mb: 2,
                                    lineHeight: { xs: 1.2, md: 1.1 },
                                    fontSize: { xs: '2.2rem', md: '3.2rem' },
                                    textAlign: { xs: 'center', md: 'left' }
                                }}
                            >
                                Trash is not the <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
                                <span style={{ color: '#e74c3c' }}>right place,</span> <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
                                understand your waste
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '1.15rem',
                                    color: '#444',
                                    lineHeight: 1.6,
                                    mb: 3,
                                    fontWeight: 500
                                }}
                            >
                                At Braintone Technology, we bridge the gap between
                                technology and nature. We ensure your old devices
                                don't end up in landfills.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '1.05rem',
                                    color: '#666',
                                    lineHeight: 1.7,
                                    mb: 4
                                }}
                            >
                                Our certified recycling processes handle everything
                                from data destruction to material recovery, ensuring
                                a 100% eco-friendly lifecycle for all IT assets.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* ITAD Services Section */}
            <Box sx={{ bgcolor: '#f8f9fa', py: { xs: 10, md: 15 }, borderTop: '1px solid #eee', position: 'relative' }}>
                {/* Small Centered Red Divider */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-2px', // Overlaps the border
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80px',
                        height: '4px',
                        bgcolor: '#e74c3c',
                        borderRadius: '2px'
                    }}
                />
                <FadeInSection fullWidth>
                    <Container maxWidth="xl">
                        {/* Title at the top */}
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 800,
                                color: '#003366',
                                mb: 6,
                                textAlign: 'center',
                                fontSize: { xs: '2rem', md: '3.5rem' }
                            }}
                        >
                            Our Secure ITAD Services Include
                        </Typography>

                        {/* 1. Horizontally wide image slider below title */}
                        <Box sx={{ mb: 8 }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: { xs: '250px', md: '400px' },
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    bgcolor: '#fff',
                                    mx: 'auto',
                                    maxWidth: '1000px'
                                }}
                            >
                                {itadImages.map((img, index) => (
                                    <Box
                                        key={index}
                                        component="img"
                                        src={img}
                                        alt={`ITAD Service ${index + 1}`}
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: currentImage === index ? 1 : 0,
                                            transition: 'opacity 1s ease-in-out',
                                            transform: currentImage === index ? 'scale(1)' : 'scale(1.05)',
                                            transitionProperty: 'opacity, transform'
                                        }}
                                    />
                                ))}
                            </Box>

                            {/* Slider Indicators */}
                            <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 3 }}>
                                {itadImages.map((_, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: currentImage === index ? 24 : 8,
                                            height: 8,
                                            borderRadius: 4,
                                            bgcolor: currentImage === index ? '#e74c3c' : '#ccc',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Box>

                        {/* 2. 3 boxes on left and 3 boxes on right */}
                        <Box sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 2, md: 0 } }}>
                            <Grid container spacing={3} justifyContent="center">
                                {/* Left Column - 3 boxes */}
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        {leftServices.map((service, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    p: 3,
                                                    borderRadius: '12px',
                                                    bgcolor: 'white',
                                                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                                                    border: '1px solid #e0e0e0',
                                                    borderLeft: '5px solid #e74c3c',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        boxShadow: '0 8px 25px rgba(231, 76, 60, 0.15)',
                                                        transform: 'translateX(5px)',
                                                        borderLeft: '5px solid #003366'
                                                    }
                                                }}
                                            >
                                                <Box sx={{ mr: 3, flexShrink: 0 }}>
                                                    <CheckCircleOutlineIcon
                                                        sx={{
                                                            color: '#e74c3c',
                                                            fontSize: '2rem',
                                                            mt: 0.5
                                                        }}
                                                    />
                                                </Box>
                                                <Typography
                                                    sx={{
                                                        fontSize: '1.2rem',
                                                        fontWeight: 600,
                                                        color: '#2c3e50',
                                                        lineHeight: 1.5,
                                                        flex: 1
                                                    }}
                                                >
                                                    {service}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Grid>

                                {/* Right Column - 3 boxes */}
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        {rightServices.map((service, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    p: 3,
                                                    borderRadius: '12px',
                                                    bgcolor: 'white',
                                                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                                                    border: '1px solid #e0e0e0',
                                                    borderLeft: '5px solid #e74c3c',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        boxShadow: '0 8px 25px rgba(231, 76, 60, 0.15)',
                                                        transform: 'translateX(5px)',
                                                        borderLeft: '5px solid #003366'
                                                    }
                                                }}
                                            >
                                                <Box sx={{ mr: 3, flexShrink: 0 }}>
                                                    <CheckCircleOutlineIcon
                                                        sx={{
                                                            color: '#e74c3c',
                                                            fontSize: '2rem',
                                                            mt: 0.5
                                                        }}
                                                    />
                                                </Box>
                                                <Typography
                                                    sx={{
                                                        fontSize: '1.2rem',
                                                        fontWeight: 600,
                                                        color: '#2c3e50',
                                                        lineHeight: 1.5,
                                                        flex: 1
                                                    }}
                                                >
                                                    {service}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </FadeInSection>
            </Box>
            {/* Contact Form Section */}
            <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 12 }, borderTop: '1px solid #eee', position: 'relative' }}>
                {/* Small Centered Red Divider */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80px',
                        height: '4px',
                        bgcolor: '#e74c3c',
                        borderRadius: '2px'
                    }}
                />
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            color: '#003366',
                            mb: 6,
                            textAlign: 'center',
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}
                    >
                        Feel free to write
                    </Typography>

                    {/* Form container with centered block layout for mobile */}
                    <Box component="form" noValidate autoComplete="off" sx={{ width: { xs: '90%', sm: '100%' }, maxWidth: { xs: '100%', sm: '500px', md: '900px' }, mx: 'auto' }}>
                        <Grid container spacing={4} justifyContent="center">
                            {/* Row 1: Name & Email */}
                            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'stretch' } }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#444', textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
                                    Name <span style={{ color: '#e74c3c' }}>*</span>
                                </Typography>
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    variant="outlined"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                            bgcolor: 'white',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                            '& fieldset': { borderColor: '#eee' },
                                            '&:hover fieldset': { borderColor: '#e0e0e0' }
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'stretch' } }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#444', textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
                                    Email <span style={{ color: '#e74c3c' }}>*</span>
                                </Typography>
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    variant="outlined"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                            bgcolor: 'white',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                            '& fieldset': { borderColor: '#eee' },
                                            '&:hover fieldset': { borderColor: '#e0e0e0' }
                                        }
                                    }}
                                />
                            </Grid>

                            {/* Row 2: Mobile & Product Category */}
                            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'stretch' } }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#444', textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
                                    Mobile Number <span style={{ color: '#e74c3c' }}>*</span>
                                </Typography>
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    variant="outlined"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                            bgcolor: 'white',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                            '& fieldset': { borderColor: '#eee' },
                                            '&:hover fieldset': { borderColor: '#e0e0e0' }
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'stretch' } }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#444', textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
                                    Product Category
                                </Typography>
                                <FormControl fullWidth>
                                    <Select
                                        displayEmpty
                                        variant="outlined"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        sx={{
                                            borderRadius: '10px',
                                            bgcolor: 'white',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#eee' },
                                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#e0e0e0' }
                                        }}
                                        renderValue={(selected) => {
                                            if (!selected) {
                                                return <Typography sx={{ color: '#aaa', textAlign: 'center' }}>Select Category</Typography>;
                                            }
                                            return <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>{selected}</Box>;
                                        }}
                                    >
                                        <MenuItem value="Laptop">Laptop</MenuItem>
                                        <MenuItem value="Server">Server</MenuItem>
                                        <MenuItem value="Accessories">Accessories</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            {/* Row 3: Brand Name & City */}
                            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'stretch' } }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#444', textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
                                    Brand Name
                                </Typography>
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    variant="outlined"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                            bgcolor: 'white',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                            '& fieldset': { borderColor: '#eee' },
                                            '&:hover fieldset': { borderColor: '#e0e0e0' }
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'stretch' } }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#444', textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
                                    City
                                </Typography>
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    variant="outlined"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                            bgcolor: 'white',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                            '& fieldset': { borderColor: '#eee' },
                                            '&:hover fieldset': { borderColor: '#e0e0e0' }
                                        }
                                    }}
                                />
                            </Grid>

                            {/* Row 4: Quantity */}
                            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'stretch' } }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#444', textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
                                    Quantity
                                </Typography>
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    type="number"
                                    variant="outlined"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                            bgcolor: 'white',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                            '& fieldset': { borderColor: '#eee' },
                                            '&:hover fieldset': { borderColor: '#e0e0e0' }
                                        }
                                    }}
                                />
                            </Grid>

                            {/* Submit Button */}
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={handleSubmit}
                                    sx={{
                                        bgcolor: '#003366',
                                        px: 6,
                                        py: 1.5,
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        borderRadius: '8px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        '&:hover': {
                                            bgcolor: '#e74c3c'
                                        }
                                    }}
                                >
                                    SUBMIT
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};



export default EWaste;