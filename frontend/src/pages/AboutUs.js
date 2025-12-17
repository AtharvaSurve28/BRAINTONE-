import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Tabs, 
  Tab, 
  Stack, 
  IconButton,
  Button,
  Divider,
  Chip
} from '@mui/material';
import { 
  People, 
  Visibility, 
  EmojiObjects, 
  Favorite, 
  TrendingUp, 
  CheckCircle, 
  WorkOutline, 
  EmojiEvents,
  MailOutline,
  Phone,
  LocationOn,
  LinkedIn,
  Twitter,
  Facebook,
  Instagram,
  AccessTime,
  Place,
  Laptop,
  ShoppingCart,
  Build,
  Security,
  LocalShipping,
  SupportAgent,
  Star,
  VerifiedUser
} from '@mui/icons-material';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const stats = [
    { icon: People, label: 'Satisfied Customers', value: '25,000+', color: '#e74c3c' },
    { icon: ShoppingCart, label: 'Laptops Sold', value: '15,000+', color: '#c0392b' },
    { icon: TrendingUp, label: 'Years in Business', value: '26+', color: '#d35400' },
    { icon: CheckCircle, label: 'Devices Repaired', value: '35,000+', color: '#e67e22' }
  ];

  const features = [
    {
      icon: <Laptop sx={{ fontSize: 40, color: '#e74c3c' }} />,
      title: 'New Laptops',
      description: 'Latest models from top brands like Dell, HP, Lenovo, Asus, and Apple',
      color: '#ffecec'
    },
    {
      icon: <ShoppingCart sx={{ fontSize: 40, color: '#c0392b' }} />,
      title: 'Pre-Owned Laptops',
      description: 'Quality tested, certified pre-owned laptops with warranty',
      color: '#ffecec'
    },
    {
      icon: <Build sx={{ fontSize: 40, color: '#d35400' }} />,
      title: 'Repair Services',
      description: 'Comprehensive repair services for all laptop brands and models',
      color: '#ffecec'
    },
    {
      icon: <LocalShipping sx={{ fontSize: 40, color: '#e67e22' }} />,
      title: 'Doorstep Service',
      description: 'Pickup and delivery services for repairs across Mumbai',
      color: '#ffecec'
    }
  ];

  const milestones = [
    { year: '1998', event: 'Founded', description: 'Started as a small computer hardware store in Fort, Mumbai' },
    { year: '2005', event: 'Expanded Services', description: 'Added laptop repair services and became authorized service center' },
    { year: '2012', event: 'Second Location', description: 'Opened Vile Parle branch to serve western suburbs' },
    { year: '2018', event: 'Online Platform', description: 'Launched website for online sales and service bookings' },
    { year: '2024', event: '25+ Years', description: 'Celebrating over 25 years of trusted service in Mumbai' }
  ];

  const team = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      description: 'Started Braintone in 1998 with a vision to provide quality computers at affordable prices'
    },
    {
      name: 'Priya Patel',
      role: 'Operations Head',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      description: '20+ years experience in computer hardware and customer service management'
    },
    {
      name: 'Amit Kumar',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Certified laptop repair specialist with expertise in chip-level repairs'
    },
    {
      name: 'Neha Singh',
      role: 'Sales Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
      description: 'Helps customers choose the perfect laptop for their needs and budget'
    }
  ];

  const fortAddress = "1st Floor, 17A, Bahubali Bldg, Flora Fountain, 10/E, Cawasji Patel St, next to Vardhman Chambers, Kala Ghoda, Fort, Mumbai, Maharashtra 400001";
  const fortPhone = "081697 98826";
  
  const villeParleAddress = "1st Floor, Prime Mall, F92/96, Alfa Market, Road, Navpada, Irla, Vile Parle West, Mumbai, Maharashtra 400056";
  const villeParlePhone = "092233 33357";

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#fafafa',
      overflow: 'hidden',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 10% 20%, rgba(231,76,60,0.05) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(192,57,43,0.05) 0%, transparent 20%)',
        zIndex: 0,
      }
    }}>
      {/* Hero Section */}
      <Box sx={{ 
        py: 12,
        background: 'linear-gradient(135deg, #8B0000 0%, #c0392b 50%, #e74c3c 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(255, 69, 69, 0.3) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(255, 0, 0, 0.2) 0%, transparent 50%)',
          animation: 'pulseRed 6s ease-in-out infinite',
        },
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={4} alignItems="center" textAlign="center" sx={{ animation: 'fadeInUp 1s ease' }}>
            <Typography variant="h2" sx={{ 
              fontWeight: 800, 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              background: 'linear-gradient(45deg, #FFD700, #FFFFFF, #FF6B6B, #FFD700)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientText 8s ease infinite',
            }}>
              About Braintone Computers
            </Typography>
            
            <Box sx={{ 
              width: '100px', 
              height: '4px', 
              background: 'linear-gradient(90deg, #FF0000, #FF6B6B, #FF0000)',
              backgroundSize: '200% 100%',
              animation: 'gradientMove 2s linear infinite',
              borderRadius: '2px',
            }} />
            
            <Typography variant="h5" sx={{ 
              maxWidth: '900px',
              lineHeight: 1.6,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}>
              Since 1998, Braintone Computers has been Mumbai's trusted destination for new laptops, 
              quality pre-owned laptops, and expert repair services. We combine 26+ years of experience 
              with cutting-edge technology to provide comprehensive solutions for all your computing needs.
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 2 }}>
              <Chip label="Since 1998" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }} />
              <Chip label="Trusted Brand" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }} />
              <Chip label="Authorized Dealer" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }} />
              <Chip label="Expert Repairs" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }} />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mt: -6, mb: 8, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Card sx={{ 
                textAlign: 'center', 
                p: 3,
                boxShadow: '0 8px 25px rgba(231, 76, 60, 0.2)',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #fff5f5 0%, #ffecec 100%)',
                border: '2px solid',
                borderImage: 'linear-gradient(45deg, #e74c3c, #c0392b, #e74c3c) 1',
                position: 'relative',
                overflow: 'hidden',
                animation: `bounce 2s ease-in-out infinite ${index * 0.1}s`,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 35px rgba(231, 76, 60, 0.3)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #e74c3c, #ff6b6b)',
                },
              }}>
                <stat.icon sx={{ fontSize: 48, color: stat.color, mb: 1, animation: 'pulse 3s ease-in-out infinite' }} />
                <Typography variant="h4" sx={{ 
                  fontWeight: 800, 
                  mb: 1, 
                  color: '#e74c3c',
                  fontSize: { xs: '1.8rem', md: '2.2rem' }
                }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#7f8c8d', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission, Vision, Values Tabs */}
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider', 
          mb: 4,
          background: 'linear-gradient(to right, transparent, rgba(231, 76, 60, 0.1), transparent)',
          py: 1,
          borderRadius: 1
        }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            centered
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none', 
                fontWeight: 600, 
                fontSize: '16px',
                color: '#7f8c8d',
                '&.Mui-selected': {
                  color: '#e74c3c',
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#e74c3c',
                height: 3,
                borderRadius: '2px',
              }
            }}
          >
            <Tab label="Our Mission" />
            <Tab label="Our Vision" />
            <Tab label="Our Values" />
          </Tabs>
        </Box>

        {activeTab === 0 && (
          <Card sx={{ 
            p: { xs: 4, md: 6 }, 
            boxShadow: '0 15px 35px rgba(231, 76, 60, 0.15)', 
            background: 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
            border: '1px solid rgba(231, 76, 60, 0.1)',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
            animation: 'fadeInUp 1s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #e74c3c, #ff6b6b, #e74c3c)',
              backgroundSize: '200% 100%',
              animation: 'gradientMove 3s linear infinite',
            }
          }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #e74c3c, #ff6b6b)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}>
                    <EmojiObjects sx={{ fontSize: 32, color: 'white' }} />
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#2c3e50' }}>
                    Our Mission
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ 
                  mb: 3, 
                  lineHeight: 1.8, 
                  fontSize: '1.1rem', 
                  color: '#34495e',
                  textAlign: 'justify'
                }}>
                  At Braintone Computers, our mission is to bridge the gap between technology and accessibility 
                  by providing high-quality computing solutions that fit every budget. Since our inception in 1998, 
                  we have been committed to making technology accessible to students, professionals, businesses, 
                  and individuals across Mumbai.
                </Typography>
                
                <Typography variant="body1" sx={{ 
                  mb: 3, 
                  lineHeight: 1.8, 
                  fontSize: '1.1rem', 
                  color: '#34495e',
                  textAlign: 'justify'
                }}>
                  We aim to demystify technology by offering expert guidance, transparent pricing, and reliable 
                  after-sales support. Whether you're buying your first laptop, upgrading your business infrastructure, 
                  or repairing a cherished device, we provide solutions that combine quality, affordability, and 
                  peace of mind.
                </Typography>
                
                <Typography variant="body1" sx={{ 
                  lineHeight: 1.8, 
                  fontSize: '1.1rem', 
                  color: '#34495e',
                  textAlign: 'justify',
                  fontStyle: 'italic',
                  borderLeft: '4px solid #e74c3c',
                  pl: 2,
                  py: 1,
                  bgcolor: 'rgba(231, 76, 60, 0.05)'
                }}>
                  "To empower every individual and business with technology that enhances productivity, 
                  creativity, and connectivity - making advanced computing accessible and affordable for all."
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  height: '100%'
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop"
                    alt="Our Mission"
                    style={{
                      width: '100%',
                      maxWidth: '500px',
                      height: 'auto',
                      borderRadius: '12px',
                      boxShadow: '0 15px 35px rgba(231, 76, 60, 0.3)',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
        )}

        {activeTab === 1 && (
          <Card sx={{ 
            p: { xs: 4, md: 6 }, 
            boxShadow: '0 15px 35px rgba(231, 76, 60, 0.15)', 
            background: 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
            border: '1px solid rgba(231, 76, 60, 0.1)',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
            animation: 'fadeInUp 1s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #e74c3c, #ff6b6b, #e74c3c)',
              backgroundSize: '200% 100%',
              animation: 'gradientMove 3s linear infinite',
            }
          }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  height: '100%'
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                    alt="Our Vision"
                    style={{
                      width: '100%',
                      maxWidth: '500px',
                      height: 'auto',
                      borderRadius: '12px',
                      boxShadow: '0 15px 35px rgba(192, 57, 43, 0.3)',
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #c0392b, #e74c3c)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(192, 57, 43, 0.3)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}>
                    <Visibility sx={{ fontSize: 32, color: 'white' }} />
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#2c3e50' }}>
                    Our Vision
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ 
                  mb: 3, 
                  lineHeight: 1.8, 
                  fontSize: '1.1rem', 
                  color: '#34495e',
                  textAlign: 'justify'
                }}>
                  To become Mumbai's most trusted and comprehensive technology partner, recognized for excellence 
                  in laptop sales, pre-owned computing solutions, and repair services. We envision a future where 
                  technology barriers are eliminated, and every individual has access to reliable computing power 
                  that empowers their personal and professional growth.
                </Typography>
                
                <Typography variant="body1" sx={{ 
                  mb: 3, 
                  lineHeight: 1.8, 
                  fontSize: '1.1rem', 
                  color: '#34495e',
                  textAlign: 'justify'
                }}>
                  By 2030, we aim to expand our footprint across Maharashtra while maintaining the personalized 
                  service and community focus that has defined our success since 1998. We're committed to 
                  sustainable technology practices, including responsible recycling and promoting the circular 
                  economy through our quality pre-owned laptop program.
                </Typography>
                
                <Box sx={{ 
                  p: 2, 
                  bgcolor: 'rgba(231, 76, 60, 0.05)', 
                  borderRadius: 2,
                  borderLeft: '4px solid #c0392b'
                }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#c0392b', mb: 1 }}>
                    Future Goals:
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Expand to 10 locations across Mumbai
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Launch comprehensive online platform
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Establish training center for technicians
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Reach 50,000+ satisfied customers
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Card>
        )}

        {activeTab === 2 && (
          <Card sx={{ 
            p: { xs: 4, md: 6 }, 
            boxShadow: '0 15px 35px rgba(231, 76, 60, 0.15)', 
            background: 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
            border: '1px solid rgba(231, 76, 60, 0.1)',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
            animation: 'fadeInUp 1s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #e74c3c, #ff6b6b, #e74c3c)',
              backgroundSize: '200% 100%',
              animation: 'gradientMove 3s linear infinite',
            }
          }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, justifyContent: 'center' }}>
                <Box sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)',
                  animation: 'pulse 2s ease-in-out infinite',
                }}>
                  <Favorite sx={{ fontSize: 32, color: 'white' }} />
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#2c3e50' }}>
                  Our Values
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: '#7f8c8d', fontWeight: 400, mb: 4 }}>
                The principles that have guided us for 26+ years and continue to shape our future
              </Typography>
            </Box>
            <Grid container spacing={3} justifyContent="center">
              {[
                { 
                  title: 'Integrity & Trust', 
                  desc: 'We believe in transparent dealings, honest assessments, and building relationships based on trust. Every transaction and repair is handled with complete honesty and ethical standards.',
                  icon: <VerifiedUser />
                },
                { 
                  title: 'Quality Excellence', 
                  desc: 'From the laptops we sell to the repairs we perform, quality is non-negotiable. We use genuine parts, follow industry best practices, and maintain rigorous quality checks.',
                  icon: <Star />
                },
                { 
                  title: 'Customer First', 
                  desc: 'Our customers are at the heart of everything we do. We listen carefully, understand needs deeply, and provide solutions that genuinely help.',
                  icon: <People />
                },
                { 
                  title: 'Technical Expertise', 
                  desc: 'Continuous learning and skill development ensure our team stays at the forefront of technology trends and repair techniques.',
                  icon: <EmojiObjects />
                },
                { 
                  title: 'Community Commitment', 
                  desc: 'As a Mumbai-based business since 1998, we are deeply committed to serving our local community and supporting local employment.',
                  icon: <Favorite />
                },
                { 
                  title: 'Sustainable Practices', 
                  desc: 'We promote the circular economy through quality pre-owned laptops and responsible e-waste management practices.',
                  icon: <TrendingUp />
                }
              ].map((value, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    sx={{
                      p: 3,
                      width: '100%',
                      background: 'linear-gradient(135deg, #ffecec 0%, #ffcccc 100%)',
                      boxShadow: '0 8px 20px rgba(231, 76, 60, 0.15)',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(231, 76, 60, 0.2)',
                      animation: `bounce 2s ease-in-out infinite ${index * 0.1}s`,
                      '&:hover': { 
                        boxShadow: '0 15px 30px rgba(231, 76, 60, 0.25)',
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #e74c3c, #ff6b6b)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {React.cloneElement(value.icon, { sx: { fontSize: 24, color: 'white' } })}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#e74c3c' }}>
                          {value.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#7f8c8d', lineHeight: 1.6 }}>
                          {value.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card>
        )}
      </Container>

      {/* What We Offer Section */}
      <Box sx={{ 
        background: 'linear-gradient(180deg, #ffffff 0%, #fff5f5 50%, #ffffff 100%)',
        py: 10,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ 
            fontWeight: 800, 
            mb: 2,
            color: '#2c3e50',
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'fadeInUp 1s ease',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #e74c3c, #ff6b6b)',
              borderRadius: 2,
            }
          }}>
            Our Comprehensive Services
          </Typography>
          <Typography variant="h6" align="center" sx={{ 
            color: '#7f8c8d', 
            mb: 6,
            fontWeight: 500,
            animation: 'fadeInUp 1s ease 0.2s both'
          }}>
            Complete solutions for all your computing needs - sales, service, and support
          </Typography>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ 
                  height: '100%',
                  p: 4,
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                  border: '1px solid rgba(231, 76, 60, 0.1)',
                  boxShadow: '0 8px 20px rgba(231, 76, 60, 0.1)',
                  animation: `fadeInUp 1s ease ${0.4 + index * 0.1}s both, bounce 2s ease-in-out infinite ${index * 0.1}s`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 30px rgba(231, 76, 60, 0.2)',
                    borderColor: 'rgba(231, 76, 60, 0.3)',
                  },
                }}>
                  <Stack spacing={3} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: feature.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)',
                        border: '3px solid white',
                        animation: 'pulse 3s ease-in-out infinite',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    
                    <Box>
                      <Typography variant="h5" sx={{ 
                        fontWeight: 700, 
                        mb: 1,
                        color: '#2c3e50',
                        fontSize: '1.3rem'
                      }}>
                        {feature.title}
                      </Typography>
                      
                      <Typography variant="body1" sx={{ 
                        color: '#7f8c8d', 
                        lineHeight: 1.6,
                        fontSize: '1rem',
                        mb: 2
                      }}>
                        {feature.description}
                      </Typography>
                      
                      <Stack spacing={1}>
                        {feature.title === 'New Laptops' && (
                          <>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Latest models from top brands
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Official warranty & support
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Custom configurations available
                            </Typography>
                          </>
                        )}
                        {feature.title === 'Pre-Owned Laptops' && (
                          <>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Thorough quality testing
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> 6-month warranty included
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Budget-friendly options
                            </Typography>
                          </>
                        )}
                        {feature.title === 'Repair Services' && (
                          <>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> All brands & models
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Genuine parts only
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Same-day service available
                            </Typography>
                          </>
                        )}
                        {feature.title === 'Doorstep Service' && (
                          <>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Free pickup & delivery
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Across Mumbai
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Safe & insured handling
                            </Typography>
                          </>
                        )}
                      </Stack>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Journey Section */}
      <Container maxWidth="md" sx={{ py: 10, position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" align="center" sx={{ 
          fontWeight: 800, 
          mb: 2,
          background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'fadeInUp 1s ease'
        }}>
          Our 26+ Year Journey
        </Typography>
        <Typography variant="h6" align="center" sx={{ 
          color: '#7f8c8d', 
          mb: 6,
          fontWeight: 500,
          animation: 'fadeInUp 1s ease 0.2s both'
        }}>
          From a small computer store to Mumbai's trusted technology partner
        </Typography>
        
        <Box sx={{ position: 'relative' }}>
          {/* Timeline Line */}
          <Box sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '100%',
            background: 'linear-gradient(to bottom, #e74c3c, #c0392b)',
            display: { xs: 'none', md: 'block' }
          }} />
          
          {milestones.map((milestone, index) => (
            <Box key={index} sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
              alignItems: 'center',
              mb: 4,
              gap: 3,
              animation: `fadeInUp 1s ease ${0.4 + index * 0.2}s both`
            }}>
              {/* Timeline Dot */}
              <Box sx={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e74c3c, #ff6b6b)',
                border: '4px solid white',
                boxShadow: '0 0 0 4px rgba(231, 76, 60, 0.2)',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                animation: 'pulse 2s ease-in-out infinite'
              }} />
              
              <Card
                sx={{
                  p: 3,
                  boxShadow: '0 8px 20px rgba(231, 76, 60, 0.15)',
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                  border: '1px solid rgba(231, 76, 60, 0.1)',
                  flex: 1,
                  '&:hover': { 
                    boxShadow: '0 12px 28px rgba(231, 76, 60, 0.25)',
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 700, mb: 1 }}>
                  {milestone.year}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#2c3e50' }}>
                  {milestone.event}
                </Typography>
                <Typography variant="body1" sx={{ color: '#7f8c8d' }}>
                  {milestone.description}
                </Typography>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Meet Our Team Section */}
      <Box sx={{ 
        background: 'linear-gradient(180deg, #ffffff 0%, #fff5f5 50%, #ffffff 100%)',
        py: 10,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ 
            fontWeight: 800, 
            mb: 2,
            background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'fadeInUp 1s ease'
          }}>
            Meet Our Expert Team
          </Typography>
          <Typography variant="h6" align="center" sx={{ 
            color: '#7f8c8d', 
            mb: 6,
            fontWeight: 500,
            animation: 'fadeInUp 1s ease 0.2s both'
          }}>
            Dedicated professionals with decades of combined experience in the technology industry
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'white',
                    boxShadow: '0 8px 20px rgba(231, 76, 60, 0.15)',
                    border: '1px solid rgba(231, 76, 60, 0.1)',
                    animation: `fadeInUp 1s ease ${0.4 + index * 0.1}s both, bounce 2s ease-in-out infinite ${index * 0.1}s`,
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 40px rgba(231, 76, 60, 0.25)',
                    },
                  }}
                >
                  <Box sx={{ 
                    position: 'relative', 
                    overflow: 'hidden', 
                    height: 280,
                    flexShrink: 0
                  }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, transparent 60%, rgba(231, 76, 60, 0.3))',
                    }} />
                  </Box>
                  <CardContent sx={{ 
                    p: 3,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                  }}>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 700, 
                      mb: 0.5, 
                      color: '#2c3e50',
                      minHeight: '32px'
                    }}>
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#e74c3c', 
                        fontWeight: 700, 
                        mb: 1.5,
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        letterSpacing: '0.5px',
                        minHeight: '20px'
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontSize: '14px',
                        lineHeight: 1.6,
                        flex: 1,
                        color: '#7f8c8d'
                      }}
                    >
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section with Contact Info */}
{/* CTA Section with Contact Info */}
<Box sx={{ 
  py: 8,
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  color: 'white',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  borderTop: '4px solid #2d7a7a',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #2d7a7a, #3498db, #2ecc71, #2d7a7a)',
    backgroundSize: '300% 100%',
    animation: 'shimmer 4s infinite linear',
  }
}}>
  <Container maxWidth="lg">
    <Stack spacing={6} alignItems="center" sx={{ animation: 'fadeInUp 1s ease' }}>
      <Box>
        <Typography variant="h3" sx={{ 
          fontWeight: 800,
          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          mb: 2
        }}>
          Experience the Braintone Difference
        </Typography>
        
        <Typography variant="h6" sx={{ 
          opacity: 0.95,
          maxWidth: '800px',
          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
          fontWeight: 400,
          mb: 4
        }}>
          Join 25,000+ satisfied customers who trust Braintone for their computing needs. 
          Whether you're buying a new laptop, looking for quality pre-owned options, or need 
          expert repair services, we're here to help with 26+ years of experience behind us.
        </Typography>
      </Box>

      {/* Box 1: Visit Us Banner - Full Width */}
      <Box sx={{ 
        mb: 3,
        backgroundColor: 'rgba(45, 122, 122, 0.1)',
        borderRadius: 2,
        p: 3,
        minHeight: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(45, 122, 122, 0.2)',
        transition: 'all 0.3s ease',
        width: '100%',
        '&:hover': {
          backgroundColor: 'rgba(45, 122, 122, 0.15)',
          transform: 'translateY(-2px)',
        }
      }}>
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#ffffff', 
              fontWeight: 700, 
              mb: 1.5,
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Visit Us for Laptop Repairs
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#b0b0b0', 
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Walk into our store with your laptop for free diagnosis and expert repair services.
          </Typography>
        </Box>
      </Box>

      {/* Box 2: Fort Location - Full Width */}
      <Box sx={{ 
        mb: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 2,
        p: 3,
        minHeight: '120px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid rgba(45, 122, 122, 0.2)',
        transition: 'all 0.3s ease',
        width: '100%',
        '&:hover': {
          backgroundColor: 'rgba(45, 122, 122, 0.08)',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(45, 122, 122, 0.1)',
        }
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          width: '100%',
          gap: 3
        }}>
          <Box sx={{
            minWidth: 60,
            width: 60,
            height: 60,
            borderRadius: '50%',
            backgroundColor: 'rgba(45, 122, 122, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            color: '#e74c3c'
          }}>
            <Place sx={{ fontSize: 28 }} />
          </Box>
          
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#e74c3c', 
                fontWeight: 600,
                mb: 1,
                fontSize: { xs: '1.1rem', md: '1.3rem' }
              }}
            >
              Fort Location
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#b0b0b0', 
                lineHeight: 1.6,
                fontSize: { xs: '0.95rem', md: '1rem' },
                mb: 2
              }}
            >
              Address: 1st Floor, 17A, Bahubali Bldg, Flora Fountain, 10/E, Cawasji Patel St, next to Vardhman Chambers, Kala Ghoda, Fort, Mumbai, Maharashtra 400001
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3498db'
              }}>
                <Phone sx={{ fontSize: 18 }} />
              </Box>
              <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 500, fontSize: '1rem' }}>
                Phone: 081697 98826
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Box 3: Vile Parle Location - Full Width */}
      <Box sx={{ 
        mb: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 2,
        p: 3,
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
        }
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          width: '100%',
          gap: 3
        }}>
          <Box sx={{
            minWidth: 60,
            width: 60,
            height: 60,
            borderRadius: '50%',
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            color: '#3498db'
          }}>
            <Place sx={{ fontSize: 28 }} />
          </Box>
          
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#3498db', 
                fontWeight: 600,
                mb: 1,
                fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}
            >
              Vile Parle Location
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#b0b0b0', 
                lineHeight: 1.6,
                fontSize: { xs: '0.95rem', md: '1rem' },
                mb: 2
              }}
            >
              Address: 1st Floor, Prime Mall, F92/96, Alfa Market, Road, Navpada, Irla, Vile Parle West, Mumbai, Maharashtra 400056
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3498db'
              }}>
                <Phone sx={{ fontSize: 18 }} />
              </Box>
              <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 500, fontSize: '1rem' }}>
                Phone: 092233 33357
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Box 4: Working Hours - Full Width */}
      <Box sx={{ 
        mb: 3,
        backgroundColor: 'rgba(46, 204, 113, 0.1)',
        borderRadius: 2,
        p: 3,
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
        }
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '100%',
          gap: 4
        }}>
          <Box sx={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            backgroundColor: 'rgba(46, 204, 113, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2ecc71'
          }}>
            <AccessTime sx={{ fontSize: 32 }} />
          </Box>
          
          <Box sx={{ textAlign: 'left', flexGrow: 1 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#2ecc71', 
                fontWeight: 600,
                mb: 1,
                fontSize: { xs: '1.2rem', md: '1.4rem' }
              }}
            >
              Working Hours
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#ffffff', 
                fontWeight: 700,
                fontSize: { xs: '1.4rem', md: '1.8rem' }
              }}
            >
              Mon-Sat: 10 AM - 8 PM
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255,255,255,0.8)', 
                mt: 1,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              Sunday: 11 AM - 5 PM (Fort Location Only)
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Box 5: Social Media & Contact - Full Width */}
      <Box sx={{ 
        mb: 3,
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
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(255, 255, 255, 0.1)',
        }
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#ffffff', 
            fontWeight: 600,
            mb: 2,
            fontSize: { xs: '1.2rem', md: '1.4rem' },
            textAlign: 'center'
          }}
        >
          Connect With Us
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
          <IconButton sx={{ 
            color: '#2d7a7a', 
            backgroundColor: 'rgba(45, 122, 122, 0.1)',
            '&:hover': { backgroundColor: 'rgba(45, 122, 122, 0.2)', color: '#3a9a9a' }
          }}>
            <LinkedIn sx={{ fontSize: 28 }} />
          </IconButton>
          <IconButton sx={{ 
            color: '#3498db', 
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            '&:hover': { backgroundColor: 'rgba(52, 152, 219, 0.2)', color: '#5dade2' }
          }}>
            <Twitter sx={{ fontSize: 28 }} />
          </IconButton>
          <IconButton sx={{ 
            color: '#4267B2', 
            backgroundColor: 'rgba(66, 103, 178, 0.1)',
            '&:hover': { backgroundColor: 'rgba(66, 103, 178, 0.2)', color: '#5c7cfa' }
          }}>
            <Facebook sx={{ fontSize: 28 }} />
          </IconButton>
          <IconButton sx={{ 
            color: '#E1306C', 
            backgroundColor: 'rgba(225, 48, 108, 0.1)',
            '&:hover': { backgroundColor: 'rgba(225, 48, 108, 0.2)', color: '#fd79a8' }
          }}>
            <Instagram sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>
        
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: '0.9rem',
            textAlign: 'center'
          }}
        >
          Email: info@braintone.com | Website: www.braintone.com
        </Typography>
      </Box>

      {/* Box 6: CTA Button - Full Width */}
      <Box sx={{ 
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
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(255, 255, 255, 0.1)',
        }
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#ffffff', 
            fontWeight: 600,
            mb: 3,
            fontSize: { xs: '1.2rem', md: '1.4rem' },
            textAlign: 'center'
          }}
        >
          Ready to Get Started?
        </Typography>
        
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(45deg, #FFFFFF 0%, #F5F5F5 50%, #FFFFFF 100%)',
            backgroundSize: '200% 200%',
            color: '#1a1a2e',
            px: 6,
            py: 1.5,
            fontWeight: 700,
            fontSize: '1.1rem',
            animation: 'gradientButton 4s ease infinite',
            '&:hover': {
              background: 'linear-gradient(45deg, #F5F5F5 0%, #FFFFFF 50%, #F5F5F5 100%)',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          Visit Our Store Today
        </Button>
      </Box>

      {/* Box 7: Copyright/Brand - Full Width */}
      <Box sx={{ 
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
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(255, 255, 255, 0.1)',
        }
      }}>
        <Typography 
          variant="h3" 
          sx={{ 
            color: '#ffffff', 
            fontWeight: 900, 
            mb: 2,
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            background: 'linear-gradient(45deg, #e74c3c 30%, #ff7675 50%, #3498db 70%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '1px'
          }}
        >
          BRAINTONE
        </Typography>
        
        <Divider sx={{ 
          width: '200px', 
          my: 2, 
          backgroundColor: 'rgba(45, 122, 122, 0.5)',
          height: '2px'
        }} />
        
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#b0b0b0', 
            mb: 1,
            fontSize: { xs: '1rem', md: '1.1rem' },
            textAlign: 'center'
          }}
        >
          Expert Laptop Repair Services
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: { xs: '0.9rem', md: '1rem' },
            textAlign: 'center',
            mt: 1
          }}
        >
          © 2024 BRAINTONE. All rights reserved.
        </Typography>
      </Box>

      {/* Bottom decorative line */}
      <Box sx={{ 
        width: '100%', 
        height: '2px', 
        background: 'linear-gradient(90deg, transparent, #e74c3c 20%, #3498db 50%, #2ecc71 80%, transparent)',
        mt: 4,
        borderRadius: '2px'
      }} />
    </Stack>
  </Container>

  {/* Add CSS Animations */}
  <style jsx="true">{`
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `}</style>
</Box>

      {/* Add CSS Animations */}
      <style jsx="true">{`
        @keyframes pulseRed {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes gradientButton {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </Box>
  );
};

export default AboutUs;

