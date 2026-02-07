import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

const Events = () => {
    return (
        <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Hero Section */}
            <FadeInSection fullWidth>
                <Box
                    sx={{
                        position: 'relative',
                        height: { xs: '300px', md: '450px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        textAlign: 'center',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))',
                            zIndex: 1,
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            background: 'linear-gradient(90deg, #e74c3c, #3498db, #e74c3c)',
                            backgroundSize: '200% 100%',
                            animation: 'shimmer 3s linear infinite',
                            zIndex: 2,
                        }
                    }}
                >
                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                letterSpacing: '-1px',
                                mb: 2,
                                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                color: '#ffffff',
                            }}
                        >
                            On-Site Laptop Events | BRAINTONE
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 400,
                                fontSize: { xs: '1rem', md: '1.5rem' },
                                opacity: 0.9,
                                maxWidth: '800px',
                                mx: 'auto',
                                lineHeight: 1.6,
                            }}
                        >
                            Celebrating Technology, Innovation, and Community
                        </Typography>
                    </Container>
                </Box>
            </FadeInSection>

            {/* Main Content Placeholder */}
            {/* Event Showcase Section */}
            <Box sx={{ py: 8 }}>
                {[
                    {
                        title: "Corporate Tech Seminar",
                        description: "Empowering businesses with the latest in laptop technology. Our seminars provide insights into maximizing productivity and security in the modern workplace. Attendees will learn actionable strategies for integrating advanced hardware solutions into their daily operations, ensuring seamless workflows and enhanced data protection. Join industry leaders and tech experts as they discuss the future of enterprise computing and how to stay ahead in a rapidly evolving digital landscape.",
                        image: "/images/Events/Event1.jpeg"
                    },
                    {
                        title: "Students Tech Seminar",
                        description: "A comprehensive seminar designed to bridge the gap between academic learning and industry demands. Students gain insights into emerging technologies, career opportunities, and practical skills for the modern workforce. This interactive session features expert speakers, live demonstrations, and Q&A segments, providing valuable knowledge to kickstart successful careers in the tech world.",
                        image: "/images/Events/Event2.jpeg"
                    },
                    {
                        title: "E-Sports",
                        description: "Dive into the electrifying world of competitive gaming at our premier E-Sports tournaments. Watch top-tier teams clash in popular titles, showcasing strategy, reflexes, and teamwork. Whether you're a seasoned pro or a passionate fan, experience the intensity of live matches, meet fellow gamers, and witness the future of digital sports unfold.",
                        image: "https://images.unsplash.com/photo-1762028895490-5b777a1f6165?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },
                    {
                        title: "Product Launch Gala",
                        description: "Unveiling the newest innovations in personal computing. Be the first to experience cutting-edge laptops and accessories from top global brands. This exclusive event features live demonstrations, interactive displays, and the opportunity to test drive the latest devices before they hit the market. Discover the next generation of technology that will redefine how you work, play, and create.",
                        image: "/images/Events/Event4.jpeg"
                    },
                    {
                        title: "Community Tech Drive",
                        description: "Bringing technology closer to everyone with special offers and demos. We believe in making digital tools accessible to all. Our community drives focus on bridging the digital divide by offering affordable tech solutions and free educational resources. Come meet our friendly team, ask questions, and find out how the right technology can empower you and your local community.",
                        imgPosition: 'center',
                        image: "/images/Events/Event5.jpeg"
                    }
                ].map((event, index) => (
                    <FadeInSection key={index} fullWidth>
                        <Container
                            maxWidth="lg"
                            sx={{
                                mb: { xs: 8, md: 12 },
                                pb: { xs: 8, md: 12 },
                                borderBottom: index < 4 ? '1px solid rgba(0, 0, 0, 0.2)' : 'none', // Slightly darker border
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                alignItems: 'center',
                                gap: { xs: 4, md: 8 },
                            }}>
                                {/* Text Content */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 3,
                                            fontSize: { xs: '1.75rem', md: '2.25rem' },
                                            color: '#2c3e50',
                                            position: 'relative',
                                            '&::after': {
                                                content: '""',
                                                display: 'block',
                                                width: '60px',
                                                height: '4px',
                                                backgroundColor: '#e74c3c',
                                                mt: 2,
                                                borderRadius: '2px'
                                            }
                                        }}
                                    >
                                        {event.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{
                                            lineHeight: 1.8,
                                            fontSize: '1.1rem',
                                            maxWidth: '600px'
                                        }}
                                    >
                                        {event.description}
                                    </Typography>
                                </Box>

                                {/* Image Content */}
                                <Box sx={{ flex: 1, width: '100%' }}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                            transform: 'perspective(1000px) rotateY(0deg)',
                                            transition: 'transform 0.5s ease',
                                            '&:hover': {
                                                transform: 'perspective(1000px) rotateY(2deg) translateY(-5px)',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                            },
                                            height: { xs: '300px', md: '400px' }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={event.image}
                                            alt={event.title}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: event.imgPosition || 'top',
                                            }}
                                        />
                                        {/* Overlay Gradient */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: '50%',
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                                                opacity: 0.7,
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </FadeInSection>
                ))}
            </Box>

            <Footer />

            <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
        </Box >
    );
};

export default Events;
