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
  Chip,
  Modal,
  TextField,
  Alert,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme
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
  VerifiedUser,
  Business,
  Computer,
  NetworkCheck,
  Security as SecurityIcon,
  Cloud,
  Wifi,
  DesignServices,
  Support,
  PriceCheck,
  Discount,
  LocalShipping as DeliveryIcon,
  CardGiftcard,
  Payments,
  Update,
  Close,
  CalendarToday
} from '@mui/icons-material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';


const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [doorstepModalOpen, setDoorstepModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    laptopIssue: '',
    laptopBrand: '',
    laptopModel: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Validate form
    if (!formData.name || !formData.mobile || !formData.address || !formData.laptopIssue) {
      setSnackbarMessage('Please fill all required fields');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    // WhatsApp message format
    const whatsappMessage = `*Doorstep Service Request - Braintone Computers*

*Customer Details:*
👤 Name: ${formData.name}
📱 Mobile: ${formData.mobile}
📍 Address: ${formData.address}

*Laptop Details:*
💻 Brand: ${formData.laptopBrand || 'Not specified'}
🖥️ Model: ${formData.laptopModel || 'Not specified'}
🔧 Issue: ${formData.laptopIssue}

*Pickup Preferences:*
📅 Date: ${formData.preferredDate || 'Flexible'}
⏰ Time: ${formData.preferredTime || 'Flexible'}

*Request Type:* Doorstep Pickup & Repair Service
*Service Area:* Mumbai
*Source:* Website About Us Page`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '919082014406'; // Updated number with country code 91 for India

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // Show success message
    setSnackbarMessage('Opening WhatsApp to send your request to 90820 14406...');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);

    // Close modal and reset form
    setDoorstepModalOpen(false);
    setFormData({
      name: '',
      mobile: '',
      address: '',
      laptopIssue: '',
      laptopBrand: '',
      laptopModel: '',
      preferredDate: '',
      preferredTime: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleCloseModal = () => {
    setDoorstepModalOpen(false);
  };

  const stats = [
    { icon: People, label: 'Satisfied Customers', value: '1,00,000+', color: '#e74c3c' },
    { icon: ShoppingCart, label: 'Laptops Sold', value: '75,000+', color: '#c0392b' },
    { icon: TrendingUp, label: 'Years in Business', value: '26+', color: '#d35400' },
    { icon: CheckCircle, label: 'Devices Repaired', value: '1,00,000+', color: '#e67e22' }
  ];

  const features = [
    {
      icon: <Laptop sx={{ fontSize: 40, color: '#e74c3c' }} />,
      title: 'Brand New Laptops',
      description: 'Latest models from top brands like Dell, HP, Lenovo, Asus, and Apple',
      color: '#ffecec'
    },
    {
      icon: <ShoppingCart sx={{ fontSize: 40, color: '#c0392b' }} />,
      title: 'Refurbished Laptops',
      description: 'Quality tested, certified refurbished laptops with warranty',
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
      description: 'Cash on Delivery available for all services',
      color: '#ffecec'
    }
  ];

  const milestones = [
    { year: '1998', event: 'Founded', description: 'Started as a small computer hardware store in Fort, Mumbai' },
    { year: '2005', event: 'Expanded Services', description: 'Added laptop repair services and became authorized service center' },
    { year: '2012', event: 'Second Location', description: 'Opened Vile Parle branch to serve western suburbs' },
    { year: '2018', event: 'Online Platform', description: 'Launched website for online sales and service bookings' },
    { year: '2024', event: '26+ Years', description: 'Celebrating over 26 years of trusted service in Mumbai' }
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

  const fortAddress = "Head office: 10/E, 1st floor, 17A, Patel building / Bahubali building, Next to Oye kake or Opp Raju Chai Cawasji patel street, Horniman circle, Fort, Mumbai - 400001 | Showroom: Ground floor, 17A, Patel building / Bahubali building, Next to Oye kake or Opp Raju Chai Cawasji patel street, Horniman circle, Fort, Mumbai-400001";
  const fortPhone = "+91 9820119113";

  const villeParleAddress = "Showroom: Prime Mall, 1st Floor, Off:no 92/96, opp To Alfa no. 1, Irla Road, Vile parle(w)";
  const villeParlePhone = "+91 9819401313";

  const reasonsToBuy = [
    {
      title: 'Authorized Multi-Brand Store',
      description: 'Wide range of choice for IT Products, Office Automation Equipments, Audio Video Solutions etc. with all brands under one roof on live demo!',
      icon: <StorefrontIcon />,
      color: '#e74c3c'
    },
    {
      title: 'Cost Effective Pricing',
      description: 'Guaranteed unbeatable prices that are cost-effective for all types of customers',
      icon: <PriceCheck />,
      color: '#27ae60'
    },
    {
      title: 'Professional Services',
      description: 'Satisfactory & guaranteed services from our professional trained technicians and Team Braintone',
      icon: <VerifiedUser />,
      color: '#3498db'
    },
    {
      title: 'Immediate Services',
      description: 'Immediate services offered with no hidden cost from all our branches in Mumbai, saving your valuable time',
      icon: <SupportAgent />,
      color: '#9b59b6'
    },
    {
      title: 'Expert Guidance',
      description: 'Our technical trained sales executives guide you to choose the right brand & products according to your needs with value for money',
      icon: <Business />,
      color: '#f39c12'
    },
    {
      title: 'Special Discounts',
      description: 'Discounts for students, defense, central government & state government employees',
      icon: <Discount />,
      color: '#e67e22'
    },
    {
      title: 'Latest Updates',
      description: 'Regular updates of latest gadgets and our free service offers to our valued clients by email',
      icon: <Update />,
      color: '#1abc9c'
    },
    {
      title: 'Separate Warranty Cards',
      description: 'Own warranty cards claiming its said warranty with direct on-site services from Braintone',
      icon: <CardGiftcard />,
      color: '#d35400'
    },
    {
      title: 'Easy Finance Options',
      description: '0% interest with easy finance options & spot approvals with limited documentation',
      icon: <Payments />,
      color: '#2c3e50'
    },
    {
      title: 'Prompt Delivery',
      description: 'Immediate and prompt delivery of all products and services',
      icon: <DeliveryIcon />,
      color: '#8e44ad'
    },
    {
      title: 'Online Benefits',
      description: 'Official website offering free extended warranty* registrations after purchase',
      icon: <Computer />,
      color: '#16a085'
    }
  ];

  const services = [
    'Workstations', 'Servers', 'Routers', 'Backups', 'Firewalls',
    'Switches', 'Security', 'VPN Connections', 'Anti-Virus',
    'Spam/Spyware', 'Upgrades', 'Wireless Networks', 'Technology Planning',
    'Networking (LAN & WAN)', 'Web Designing & Hosting',
    'Security & Surveillance Solutions', 'Office Automation Solutions',
    'Total Infrastructure Management', 'Project Consulting'
  ];

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
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
      <FadeInSection fullWidth>
        <Box sx={{
          py: 12,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.6)',
            zIndex: 0,
          },
        }}>
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Stack spacing={4} alignItems="center" textAlign="center" sx={{ animation: 'fadeInUp 1s ease' }}>
              <Typography variant="h2" sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                color: 'white',
              }}>
                About Braintone Technology
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
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                color: 'white',
              }}>
                Since 1998, Braintone Technology has been Mumbai's trusted destination for IT Hardware,
                Office Automation, Audio Video Solutions & IT Software Solutions. We provide comprehensive
                technology solutions from sales to support with 26+ years of experience.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 2 }}>
                <Chip label="Since 1998" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }} />
                <Chip label="Authorized Dealer" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }} />
                <Chip label="IT Solutions" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }} />
                <Chip label="Network Experts" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }} />
              </Box>
            </Stack>
          </Container>
        </Box>
      </FadeInSection>


      {/* Stats Section */}
      <FadeInSection fullWidth>
        <Container maxWidth="lg" sx={{ mt: -6, mb: 8, position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Card sx={{
                  textAlign: 'center',
                  p: { xs: 1.5, sm: 3 },
                  boxShadow: '0 8px 25px rgba(231, 76, 60, 0.2)',
                  transition: 'all 0.3s ease',
                  background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1e1e1e 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
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
                  <stat.icon sx={{ fontSize: { xs: 32, md: 48 }, color: stat.color, mb: 1, animation: 'pulse 3s ease-in-out infinite' }} />
                  <Typography variant="h4" sx={{
                    fontWeight: 800,
                    mb: 0.5,
                    color: '#e74c3c',
                    fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.2rem' }
                  }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' }
                  }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FadeInSection>


      {/* Company Overview, Vision, Reasons to Buy Tabs */}
      <FadeInSection>
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
              centered={!isMobile}
              variant={isMobile ? "scrollable" : "standard"}
              scrollButtons={isMobile ? "auto" : false}
              sx={{
                '& .MuiTabs-flexContainer': {
                  justifyContent: isMobile ? 'flex-start' : 'center',
                },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: { xs: '14px', sm: '16px' },
                  color: 'text.primary',
                  minWidth: { xs: 'auto', sm: 160 },
                  px: { xs: 2, sm: 3 },
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
              <Tab label="Company Overview" />
              <Tab label="Our Vision" />
              <Tab label="Reasons to Buy from Braintone" />
            </Tabs>
            {isMobile && (
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textAlign: 'center',
                  color: 'rgba(0, 0, 0, 0.5)',
                  mt: 0.5,
                  fontWeight: 500,
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                ← swipe →
              </Typography>
            )}
          </Box>

          {activeTab === 0 && (
            <Card sx={{
              p: { xs: 2, sm: 4, md: 6 },
              boxShadow: '0 15px 35px rgba(231, 76, 60, 0.15)',
              background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1e1e1e 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
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
                      <Business sx={{ fontSize: 32, color: 'white' }} />
                    </Box>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#2c3e50', fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } }}>
                      Company Overview
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    textAlign: 'justify'
                  }}>
                    <strong>Braintone Technology Pvt Ltd.</strong> was formed in Mumbai in 1998. We are a company providing
                    IT Hardware, Office Automation, Audio Video Solutions & IT Software Solutions ranging from sales of
                    Laptops, Desktops, Servers, Public Address Systems, Projectors, Projector Screens and Total Networking
                    & Security Products at very competitive and affordable prices.
                  </Typography>

                  <Typography variant="body1" sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    textAlign: 'justify'
                  }}>
                    Braintone understands the complexities of a business's infrastructure and how vital it is to the
                    business operations. A network that is not running properly or is down can result in a loss of
                    productivity or revenue. Braintone recognizes the importance of a company's network and responds
                    promptly and accordingly.
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#e74c3c' }}>
                      Our Certified Professionals
                    </Typography>
                    <Typography variant="body1" sx={{
                      mb: 2,
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                      color: 'text.primary',
                      textAlign: 'justify'
                    }}>
                      Our certified professionals are the best in their field, with extensive experience implementing
                      dozens of computer networks for small businesses to large corporations. Whether you have 4 computers
                      or 400 on a network, our specialists can assist you in all aspects of hardware installation,
                      networking, and troubleshooting.
                    </Typography>
                  </Box>

                  <Box sx={{
                    p: 2,
                    bgcolor: 'rgba(231, 76, 60, 0.05)',
                    borderRadius: 2,
                    borderLeft: '4px solid #e74c3c',
                    mb: 3
                  }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#e74c3c', mb: 1 }}>
                      Our Services Include:
                    </Typography>
                    <Grid container spacing={1}>
                      {services.slice(0, 10).map((service, index) => (
                        <Grid item xs={6} sm={4} key={index}>
                          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckCircle sx={{ fontSize: 14, color: '#27ae60' }} /> {service}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Typography variant="body1" sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    textAlign: 'justify',
                    fontStyle: 'italic',
                    borderLeft: '4px solid #e74c3c',
                    pl: 2,
                    py: 1,
                    bgcolor: 'rgba(231, 76, 60, 0.05)'
                  }}>
                    "We take pride in our quick, responsive service to our clients and their computing needs.
                    Braintone Technology Pvt Ltd has been installing and supporting systems for over 26 years.
                    We are Systems Integrators with wide experience of providing efficient and workable hardware
                    and software solutions."
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
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
                      alt="Company Overview"
                      style={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'auto',
                        borderRadius: '12px',
                        boxShadow: '0 15px 35px rgba(231, 76, 60, 0.3)',
                      }}
                    />
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#2c3e50' }}>
                      Technical Expertise
                    </Typography>
                    <Typography variant="body1" sx={{
                      lineHeight: 1.8,
                      fontSize: '1rem',
                      color: 'text.primary',
                      textAlign: 'justify'
                    }}>
                      Our special blend of software, hardware and systems people helps to ensure projects arrive
                      on time and to budget. Wherever high level technical skills are required, Braintone can
                      usually do the job. Once a system is installed, we are able to support it throughout
                      Mumbai, Maharashtra and India.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          )}

          {activeTab === 1 && (
            <Card sx={{
              p: { xs: 2, sm: 4, md: 6 },
              boxShadow: '0 15px 35px rgba(231, 76, 60, 0.15)',
              background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1e1e1e 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
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
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#2c3e50', fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } }}>
                      Our Vision
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    textAlign: 'justify'
                  }}>
                    To become India's most trusted and comprehensive technology partner, recognized for excellence
                    in IT hardware sales, networking solutions, and professional support services. We envision a
                    future where technology barriers are eliminated, and every business has access to reliable
                    computing power that empowers growth and innovation.
                  </Typography>

                  <Typography variant="body1" sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    textAlign: 'justify'
                  }}>
                    By 2030, we aim to expand our footprint across India while maintaining the personalized
                    service and community focus that has defined our success since 1998. We're committed to
                    sustainable technology practices, including responsible e-waste management and promoting
                    energy-efficient solutions.
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
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Expand to 15+ locations across India
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Launch comprehensive B2B enterprise solutions
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Establish training centers for IT professionals
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Reach 50,000+ satisfied corporate clients
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          )}

          {activeTab === 2 && (
            <Card sx={{
              p: { xs: 2, sm: 4, md: 6 },
              boxShadow: '0 15px 35px rgba(231, 76, 60, 0.15)',
              background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1a1a1a 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
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
                    <Star sx={{ fontSize: 32, color: 'white' }} />
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } }}>
                    11 Reasons to Choose Braintone
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, mb: 4 }}>
                  Discover why thousands of customers trust Braintone for their technology needs
                </Typography>
              </Box>

              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                gap: 3,
                mb: 4
              }}>
                {reasonsToBuy.map((reason, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 3,
                      height: '180px',
                      minHeight: '180px',
                      maxHeight: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #2d1a1a 0%, #262626 100%)' : 'linear-gradient(135deg, #ffecec 0%, #ffcccc 100%)',
                      boxShadow: '0 8px 20px rgba(231, 76, 60, 0.15)',
                      border: '1px solid rgba(231, 76, 60, 0.2)',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      animation: `bounce 2s ease-in-out infinite ${index * 0.1}s`,
                      '&:hover': {
                        boxShadow: '0 15px 30px rgba(231, 76, 60, 0.25)',
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      mb: 2,
                      minHeight: '30px',
                    }}>
                      <Box sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #e74c3c, #ff6b6b)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {React.cloneElement(reason.icon, { sx: { fontSize: 20, color: 'white' } })}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{
                          fontWeight: 700,
                          color: '#e74c3c',
                          fontSize: '1rem',
                          lineHeight: 1.2,
                          margin: 0
                        }}>
                          {index + 1}. {reason.title}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" sx={{
                      color: 'text.primary',
                      lineHeight: 1.5,
                      fontSize: '0.85rem',
                      flex: 1,
                      overflowY: 'auto',
                      pr: 1,
                      minHeight: '90px',
                      '&::-webkit-scrollbar': {
                        width: '4px',
                      },
                      '&::-webkit-scrollbar-track': {
                        background: 'rgba(231, 76, 60, 0.1)',
                        borderRadius: '2px',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        background: '#e74c3c',
                        borderRadius: '2px',
                      },
                    }}>
                      {reason.description}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{
                mt: 6,
                p: 3,
                bgcolor: 'rgba(52, 152, 219, 0.05)',
                borderRadius: 2,
                border: '1px solid rgba(52, 152, 219, 0.2)',
                textAlign: 'center'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#3498db' }}>
                  Complete Business Systems
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  Complete Business Systems prides itself on the high technical ability of its staff.
                  We maintain a full complement of skills to allow even the most demanding project to be undertaken.
                  Our expertise covers everything from basic workstations to complex enterprise network solutions.
                </Typography>
              </Box>
            </Card>
          )}
        </Container>
      </FadeInSection>

      {/* What We Offer Section */}
      <FadeInSection fullWidth>
        <Box sx={{
          background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(180deg, #121212 0%, #1a1a1a 50%, #121212 100%)' : 'linear-gradient(180deg, #ffffff 0%, #fff5f5 50%, #ffffff 100%)',
          py: 10,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" sx={{
              fontWeight: 800,
              mb: 2,
              color: 'text.primary',
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
              color: 'text.primary',
              mb: 6,
              fontWeight: 500,
              animation: 'fadeInUp 1s ease 0.2s both'
            }}>
              Complete solutions for all your computing needs - sales, service, and support
            </Typography>

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}>
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 3,
                width: '100%',
                maxWidth: { xs: '400px', sm: '800px', md: '1000px' },
                justifyContent: 'center',
              }}>
                <Box
                  component="button"
                  onClick={() => window.location.href = '/laptops'}
                  sx={{
                    p: 4,
                    height: '280px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1a1a1a 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                    border: '1px solid rgba(231, 76, 60, 0.1)',
                    boxShadow: '0 8px 20px rgba(231, 76, 60, 0.1)',
                    borderRadius: '12px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: `fadeInUp 1s ease 0.4s both, bounce 2s ease-in-out infinite 0s`,
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      boxShadow: '0 20px 40px rgba(231, 76, 60, 0.25)',
                      borderColor: 'rgba(231, 76, 60, 0.3)',
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      }
                    },
                    '&:active': {
                      transform: 'translateY(-5px) scale(1.01)',
                    },
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: (theme) => theme.palette.mode === 'dark' ? 'rgba(231, 76, 60, 0.1)' : '#ffecec',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)',
                      border: (theme) => theme.palette.mode === 'dark' ? '3px solid rgba(255,255,255,0.1)' : '3px solid white',
                      animation: 'pulse 3s ease-in-out infinite',
                      transition: 'all 0.3s ease',
                      mb: 3,
                    }}
                  >
                    <Laptop sx={{ fontSize: 40, color: '#e74c3c' }} />
                  </Box>

                  <Box sx={{ flex: 1, width: '100%' }}>
                    <Typography variant="h5" sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: 'text.primary',
                      fontSize: '1.4rem'
                    }}>
                      Brand New Laptops
                    </Typography>

                    <Typography variant="body1" sx={{
                      color: 'text.primary',
                      lineHeight: 1.6,
                      fontSize: '1rem',
                      mb: 3
                    }}>
                      Latest models from top brands like Dell, HP, Lenovo, Asus, and Apple
                    </Typography>

                    <Stack spacing={1.5}>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Latest models from top brands
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Official warranty & support
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Custom configurations available
                      </Typography>
                    </Stack>
                  </Box>

                  <Box sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: '#e74c3c',
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    }
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Shop Now
                    </Typography>
                    <OpenInNewIcon sx={{ fontSize: 14 }} />
                  </Box>
                </Box>

                <Box
                  component="button"
                  onClick={() => window.location.href = '/refurbished-laptops'}
                  sx={{
                    p: 4,
                    height: '280px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1a1a1a 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                    border: '1px solid rgba(231, 76, 60, 0.1)',
                    boxShadow: '0 8px 20px rgba(231, 76, 60, 0.1)',
                    borderRadius: '12px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: `fadeInUp 1s ease 0.5s both, bounce 2s ease-in-out infinite 0.1s`,
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      boxShadow: '0 20px 40px rgba(231, 76, 60, 0.25)',
                      borderColor: 'rgba(231, 76, 60, 0.3)',
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      }
                    },
                    '&:active': {
                      transform: 'translateY(-5px) scale(1.01)',
                    },
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: (theme) => theme.palette.mode === 'dark' ? 'rgba(231, 76, 60, 0.1)' : '#ffecec',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)',
                      border: (theme) => theme.palette.mode === 'dark' ? '3px solid rgba(255,255,255,0.1)' : '3px solid white',
                      animation: 'pulse 3s ease-in-out infinite',
                      transition: 'all 0.3s ease',
                      mb: 3,
                    }}
                  >
                    <ShoppingCart sx={{ fontSize: 40, color: '#c0392b' }} />
                  </Box>

                  <Box sx={{ flex: 1, width: '100%' }}>
                    <Typography variant="h5" sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: 'text.primary',
                      fontSize: '1.4rem'
                    }}>
                      Refurbished Laptops
                    </Typography>

                    <Typography variant="body1" sx={{
                      color: 'text.primary',
                      lineHeight: 1.6,
                      fontSize: '1rem',
                      mb: 3
                    }}>
                      Quality tested, certified refurbished laptops with warranty
                    </Typography>

                    <Stack spacing={1.5}>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Thorough quality testing
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> 6-month warranty included
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Budget-friendly options
                      </Typography>
                    </Stack>
                  </Box>

                  <Box sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: '#e74c3c',
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    }
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Browse Collection
                    </Typography>
                    <OpenInNewIcon sx={{ fontSize: 14 }} />
                  </Box>
                </Box>
              </Box>

              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 3,
                width: '100%',
                maxWidth: { xs: '400px', sm: '800px', md: '1000px' },
                justifyContent: 'center',
              }}>
                <Box
                  component="button"
                  onClick={() => window.location.href = '/repair'}
                  sx={{
                    p: 4,
                    height: '280px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1a1a1a 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                    border: '1px solid rgba(231, 76, 60, 0.1)',
                    boxShadow: '0 8px 20px rgba(231, 76, 60, 0.1)',
                    borderRadius: '12px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: `fadeInUp 1s ease 0.6s both, bounce 2s ease-in-out infinite 0.2s`,
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      boxShadow: '0 20px 40px rgba(231, 76, 60, 0.25)',
                      borderColor: 'rgba(231, 76, 60, 0.3)',
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      }
                    },
                    '&:active': {
                      transform: 'translateY(-5px) scale(1.01)',
                    },
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: (theme) => theme.palette.mode === 'dark' ? 'rgba(231, 76, 60, 0.1)' : '#ffecec',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)',
                      border: (theme) => theme.palette.mode === 'dark' ? '3px solid rgba(255,255,255,0.1)' : '3px solid white',
                      animation: 'pulse 3s ease-in-out infinite',
                      transition: 'all 0.3s ease',
                      mb: 3,
                    }}
                  >
                    <Build sx={{ fontSize: 40, color: '#d35400' }} />
                  </Box>

                  <Box sx={{ flex: 1, width: '100%' }}>
                    <Typography variant="h5" sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: 'text.primary',
                      fontSize: '1.4rem'
                    }}>
                      Repair Services
                    </Typography>

                    <Typography variant="body1" sx={{
                      color: 'text.primary',
                      lineHeight: 1.6,
                      fontSize: '1rem',
                      mb: 3
                    }}>
                      Comprehensive repair services for all laptop brands and models
                    </Typography>

                    <Stack spacing={1.5}>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> All brands & models
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Genuine parts only
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Same-day service available
                      </Typography>
                    </Stack>
                  </Box>

                  <Box sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: '#e74c3c',
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    }
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Book Service
                    </Typography>
                    <OpenInNewIcon sx={{ fontSize: 14 }} />
                  </Box>
                </Box>

                {/* Doorstep Service Box - UPDATED WITH MODAL */}
                <Box
                  component="button"
                  onClick={() => setDoorstepModalOpen(true)}
                  sx={{
                    p: 4,
                    height: '280px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1a1a1a 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                    border: '1px solid rgba(231, 76, 60, 0.1)',
                    boxShadow: '0 8px 20px rgba(231, 76, 60, 0.1)',
                    borderRadius: '12px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: `fadeInUp 1s ease 0.7s both, bounce 2s ease-in-out infinite 0.3s`,
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      boxShadow: '0 20px 40px rgba(231, 76, 60, 0.25)',
                      borderColor: 'rgba(231, 76, 60, 0.3)',
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      }
                    },
                    '&:active': {
                      transform: 'translateY(-5px) scale(1.01)',
                    },
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: (theme) => theme.palette.mode === 'dark' ? 'rgba(231, 76, 60, 0.1)' : '#ffecec',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)',
                      border: (theme) => theme.palette.mode === 'dark' ? '3px solid rgba(255,255,255,0.1)' : '3px solid white',
                      animation: 'pulse 3s ease-in-out infinite',
                      transition: 'all 0.3s ease',
                      mb: 3,
                    }}
                  >
                    <LocalShipping sx={{ fontSize: 40, color: '#e67e22' }} />
                  </Box>

                  <Box sx={{ flex: 1, width: '100%' }}>
                    <Typography variant="h5" sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: 'text.primary',
                      fontSize: '1.4rem'
                    }}>
                      Doorstep Service
                    </Typography>

                    <Typography variant="body1" sx={{
                      color: 'text.primary',
                      lineHeight: 1.6,
                      fontSize: '1rem',
                      mb: 3
                    }}>
                      Book free pickup & delivery for laptop repairs across Mumbai
                    </Typography>

                    <Stack spacing={1.5}>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Cash on Delivery available for all services
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Across Mumbai
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> Safe & insured handling
                      </Typography>
                    </Stack>
                  </Box>

                  <Box sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: '#e74c3c',
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    }
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Schedule Pickup
                    </Typography>
                    <OpenInNewIcon sx={{ fontSize: 14 }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </FadeInSection>

      {/* Doorstep Service Modal */}
      <Modal
        open={doorstepModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="doorstep-service-modal"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '80%', md: '600px' },
          maxHeight: '90vh',
          overflow: 'auto',
          bgcolor: 'background.paper',
          borderRadius: '12px',
          boxShadow: '0 20px 60px rgba(231, 76, 60, 0.3)',
          p: 0,
        }}>
          {/* Modal Header */}
          <Box sx={{
            p: 3,
            background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocalShipping sx={{ fontSize: 32 }} />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Book Doorstep Service
              </Typography>
            </Box>
            <IconButton onClick={handleCloseModal} sx={{ color: 'white' }}>
              <Close />
            </IconButton>
          </Box>

          {/* Modal Content */}
          <Box sx={{ p: 4 }}>
            <Typography variant="body1" sx={{ mb: 4, color: '#7f8c8d', textAlign: 'center' }}>
              Fill out the form below to schedule a free pickup for your laptop repair.
              Our technician will contact you to confirm the details.
            </Typography>

            {/* Display WhatsApp Number */}
            <Box sx={{
              mb: 4,
              p: 2,
              bgcolor: 'rgba(37, 211, 102, 0.1)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <Typography variant="body2" sx={{
                color: 'text.primary',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1
              }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
                  alt="WhatsApp"
                  style={{ width: '20px', height: '20px' }}
                />
                Your request will be sent to WhatsApp: 90820 14406
              </Typography>
            </Box>

            {/* Customer Details */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{
                mb: 3,
                color: '#e74c3c',
                borderBottom: '2px solid #ffecec',
                pb: 1,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <span>👤</span> Customer Details
              </Typography>

              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Full Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Mobile Number *"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleFormChange}
                  required
                  variant="outlined"
                  type="tel"
                />

                <TextField
                  fullWidth
                  label="Full Address *"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  required
                  multiline
                  rows={3}
                  variant="outlined"
                />
              </Stack>
            </Box>

            {/* Laptop Details */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{
                mb: 3,
                color: '#e74c3c',
                borderBottom: '2px solid #ffecec',
                pb: 1,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <span>💻</span> Laptop Details
              </Typography>

              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Laptop Brand"
                  name="laptopBrand"
                  value={formData.laptopBrand}
                  onChange={handleFormChange}
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Laptop Model"
                  name="laptopModel"
                  value={formData.laptopModel}
                  onChange={handleFormChange}
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Laptop Issue *"
                  name="laptopIssue"
                  value={formData.laptopIssue}
                  onChange={handleFormChange}
                  required
                  multiline
                  rows={3}
                  variant="outlined"
                />
              </Stack>
            </Box>

            {/* Pickup Preferences */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{
                mb: 3,
                color: '#e74c3c',
                borderBottom: '2px solid #ffecec',
                pb: 1,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <span>📅</span> Pickup Preferences
              </Typography>

              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Preferred Date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleFormChange}
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />

                <TextField
                  fullWidth
                  label="Preferred Time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleFormChange}
                  variant="outlined"
                />
              </Stack>
            </Box>

            {/* Terms and WhatsApp Button */}
            <Box sx={{
              mt: 4,
              p: 3,
              bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(231, 76, 60, 0.15)' : '#ffecec',
              borderRadius: '8px',
              mb: 4
            }}>
              <Typography variant="body2" sx={{
                mb: 2,
                color: '#e74c3c',
                fontWeight: 600
              }}>
                ⚡ What happens next?
              </Typography>
              <Stack spacing={1.5}>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: 'text.primary' }}>
                  <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} />
                  Submit this form
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: 'text.primary' }}>
                  <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} />
                  We'll contact you on WhatsApp (90820 14406) to confirm
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: 'text.primary' }}>
                  <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} />
                  Free pickup scheduled from your address
                </Typography>
              </Stack>
            </Box>

            {/* Submit Button */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mt: 4
            }}>
              <Button
                variant="outlined"
                onClick={handleCloseModal}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderColor: '#e74c3c',
                  color: '#e74c3c',
                  fontWeight: 600,
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                startIcon={<img
                  src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
                  alt="WhatsApp"
                  style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }}
                />}
                sx={{
                  px: 4,
                  py: 1.5,
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: 'white',
                  fontWeight: 700,
                }}
              >
                Send to 90820 14406
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{
            width: '100%',
            backgroundColor: snackbarSeverity === 'success' ? '#2ecc71' : '#e74c3c',
            color: 'white'
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Our Journey Section */}
      <FadeInSection>
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
            color: 'text.primary',
            mb: 6,
            fontWeight: 500,
            animation: 'fadeInUp 1s ease 0.2s both'
          }}>
            From a small computer store to Mumbai's trusted technology partner
          </Typography>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline Line - Behind everything */}
            <Box sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: 'linear-gradient(to bottom, #e74c3c, #c0392b)',
              display: { xs: 'none', md: 'block' },
              zIndex: 0, // Place behind everything
            }} />

            {milestones.map((milestone, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  alignItems: 'center',
                  mb: 4,
                  gap: 3,
                  animation: `fadeInUp 1s ease ${0.4 + index * 0.2}s both`,
                  position: 'relative',
                  zIndex: 2, // Higher than timeline line
                }}
              >
                {/* Timeline Dot */}
                <Box sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #e74c3c, #ff6b6b)',
                  border: (theme) => theme.palette.mode === 'dark' ? '4px solid #1a1a1a' : '4px solid white',
                  boxShadow: '0 0 0 4px rgba(231, 76, 60, 0.2)',
                  position: 'relative',
                  zIndex: 3, // Higher than everything
                  flexShrink: 0,
                  animation: 'pulse 2s ease-in-out infinite'
                }} />

                <Card
                  sx={{
                    p: 3,
                    boxShadow: '0 8px 20px rgba(231, 76, 60, 0.15)',
                    transition: 'all 0.3s ease',
                    background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1a1a1a 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                    border: '1px solid rgba(231, 76, 60, 0.1)',
                    flex: 1,
                    position: 'relative',
                    zIndex: 2, // Higher than timeline line
                    '&:hover': {
                      boxShadow: '0 12px 28px rgba(231, 76, 60, 0.25)',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 700, mb: 1 }}>
                    {milestone.year}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
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
      </FadeInSection>

      {/* Our Achievements Section */}
      <FadeInSection fullWidth>
        <Box sx={{
          background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(180deg, #121212 0%, #1a1a1a 50%, #121212 100%)' : 'linear-gradient(180deg, #ffffff 0%, #fff5f5 50%, #ffffff 100%)',
          py: 10,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" sx={{
              fontWeight: 800,
              mb: 2,
              color: 'text.primary',
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
              Our Achievements
            </Typography>
            <Typography variant="h6" align="center" sx={{
              color: 'text.primary',
              mb: 6,
              fontWeight: 500,
              animation: 'fadeInUp 1s ease 0.2s both'
            }}>
              Recognitions and awards that showcase our commitment to excellence
            </Typography>

            {/* Achievements Slider - Restored as "Small Box" */}
            <Box sx={{
              position: 'relative',
              maxWidth: { xs: '100%', md: '1000px' }, // Responsive width
              mx: 'auto',
              mb: 4
            }}>
              {/* Slider Container */}
              <Box sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 15px 35px rgba(231, 76, 60, 0.2)',
                bgcolor: 'background.paper',
                border: (theme) => theme.palette.mode === 'dark' ? '2px solid rgba(255,255,255,0.1)' : '2px solid rgba(231, 76, 60, 0.1)',
              }}>
                {/* Achievement Images */}
                <Box sx={{
                  display: 'flex',
                  transition: 'transform 0.5s ease-in-out',
                  transform: `translateX(-${currentAchievementIndex * 100}%)`,
                }}>
                  {[
                    {
                      image: '/images/Achievements/Achievement1.jpeg',
                      title: 'The 14th DQ Week Premier Partner League Awards 2012',
                      description: 'BRAINTONE TECHNOLOGY has been awarded for BEST IT RETAILER SILVER AWARD'
                    },
                    {
                      image: '/images/Achievements/Achievement2.jpeg',
                      title: "2023 Nominated for India's 5000 Best MSME Awards",
                      description: ''
                    },
                    {
                      image: '/images/Achievements/Achievement3.jpeg',
                      title: "2024 Nominated for India's 5000 Best MSME Awards",
                      description: ''
                    },
                  ].map((achievement, index) => (
                    <Box
                      key={index}
                      sx={{
                        minWidth: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 0, // Remove padding to let image cover box
                      }}
                    >
                      <Box sx={{
                        width: '100%',
                        height: { xs: '300px', sm: '400px', md: '600px' }, // Responsive height
                        position: 'relative'
                      }}>
                        <Box
                          component="img"
                          src={achievement.image}
                          alt={`Achievement ${index + 1}`}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: { xs: index === 2 ? 'contain' : 'cover', md: 'cover' }, // Maintain full view for 3rd image on mobile
                            display: 'block',
                          }}
                        />
                      </Box>

                      {/* Caption Area */}
                      <Box sx={{ p: 3, textAlign: 'center', width: '100%' }}>
                        <Typography variant="h6" sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          mb: 1,
                          fontSize: { xs: '1rem', md: '1.25rem' } // Responsive font size
                        }}>
                          {achievement.title}
                        </Typography>
                        {achievement.description && (
                          <Typography variant="body1" sx={{
                            color: '#e74c3c',
                            fontWeight: 600,
                            fontSize: { xs: '0.875rem', md: '1rem' } // Responsive font size
                          }}>
                            {achievement.description}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Navigation Arrows */}
                <IconButton
                  onClick={() => setCurrentAchievementIndex((prev) =>
                    prev === 0 ? 2 : prev - 1
                  )}
                  sx={{
                    position: 'absolute',
                    left: 10,
                    top: { xs: '30%', md: '50%' }, // Adjust vertically based on height
                    transform: 'translateY(-50%)',
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255, 255, 255, 0.9)',
                    color: '#e74c3c',
                    '&:hover': {
                      bgcolor: '#e74c3c',
                      color: 'white',
                      transform: 'translateY(-50%) scale(1.1)',
                    },
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ArrowBackIosIcon />
                </IconButton>

                <IconButton
                  onClick={() => setCurrentAchievementIndex((prev) =>
                    prev === 2 ? 0 : prev + 1
                  )}
                  sx={{
                    position: 'absolute',
                    right: 10,
                    top: { xs: '30%', md: '50%' }, // Adjust vertically based on height
                    transform: 'translateY(-50%)',
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255, 255, 255, 0.9)',
                    color: '#e74c3c',
                    '&:hover': {
                      bgcolor: '#e74c3c',
                      color: 'white',
                      transform: 'translateY(-50%) scale(1.1)',
                    },
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>

              {/* Dots Indicator */}
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                mt: 3,
              }}>
                {[0, 1, 2].map((index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentAchievementIndex(index)}
                    sx={{
                      width: currentAchievementIndex === index ? 32 : 12,
                      height: 12,
                      borderRadius: '6px',
                      bgcolor: currentAchievementIndex === index ? '#e74c3c' : 'rgba(231, 76, 60, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#e74c3c',
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Container>
        </Box>
      </FadeInSection>

      {/* Meet Our Team Section */}
      <FadeInSection fullWidth>
        <Box sx={{
          background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(180deg, #121212 0%, #1a1a1a 50%, #121212 100%)' : 'linear-gradient(180deg, #ffffff 0%, #fff5f5 50%, #ffffff 100%)',
          py: 10,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" sx={{
              fontWeight: 800,
              mb: 2,
              color: 'text.primary',
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
              Meet Our Expert Team
            </Typography>
            <Typography variant="h6" align="center" sx={{
              color: 'text.primary',
              mb: 6,
              fontWeight: 500,
              animation: 'fadeInUp 1s ease 0.2s both'
            }}>
              Dedicated professionals with decades of combined experience in the technology industry
            </Typography>

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}>
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                gap: 3,
                width: '100%',
                maxWidth: { xs: '400px', sm: '800px', md: '1200px' },
                justifyContent: 'center',
              }}>
                {team.map((member, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 3,
                      height: '360px',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1a1a1a 0%, #262626 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)',
                      border: '1px solid rgba(231, 76, 60, 0.1)',
                      boxShadow: '0 8px 20px rgba(231, 76, 60, 0.1)',
                      borderRadius: '12px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      animation: `fadeInUp 1s ease ${0.4 + index * 0.1}s both, bounce 2s ease-in-out infinite ${index * 0.1}s`,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-10px) scale(1.02)',
                        boxShadow: '0 20px 40px rgba(231, 76, 60, 0.25)',
                        borderColor: 'rgba(231, 76, 60, 0.3)',
                        '& .member-image': {
                          transform: 'scale(1.05)',
                        }
                      },
                    }}
                  >
                    {/* Member Image Container */}
                    <Box sx={{
                      position: 'relative',
                      width: '120px',
                      height: '120px',
                      mb: 3,
                      overflow: 'hidden',
                      borderRadius: '50%',
                      border: (theme) => theme.palette.mode === 'dark' ? '3px solid rgba(255,255,255,0.1)' : '3px solid white',
                      boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)',
                      background: (theme) => theme.palette.mode === 'dark' ? 'rgba(231, 76, 60, 0.1)' : '#ffecec',
                    }}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="member-image"
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
                        background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.2), rgba(192, 57, 43, 0.2))',
                        borderRadius: '50%',
                      }} />
                    </Box>

                    {/* Member Info */}
                    <Box sx={{
                      flex: 1,
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                      <Typography variant="h5" sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: 'text.primary',
                        fontSize: '1.2rem',
                        lineHeight: 1.3
                      }}>
                        {member.name}
                      </Typography>

                      <Typography variant="body1" sx={{
                        color: '#e74c3c',
                        fontWeight: 700,
                        mb: 3,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {member.role}
                      </Typography>

                      <Typography variant="body2" sx={{
                        color: 'text.primary',
                        lineHeight: 1.6,
                        fontSize: '0.9rem',
                        flex: 1
                      }}>
                        {member.description}
                      </Typography>
                    </Box>

                    {/* Decorative Element */}
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #e74c3c, #ff6b6b)',
                    }} />
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Team Description */}
            <Box sx={{
              mt: 6,
              p: 4,
              bgcolor: 'rgba(231, 76, 60, 0.05)',
              borderRadius: 2,
              border: '1px solid rgba(231, 76, 60, 0.2)',
              textAlign: 'center'
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#e74c3c' }}>
                Our Team Philosophy
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 2 }}>
                Each member of our team brings unique expertise and dedication to providing exceptional service.
                With a combined experience of over 80 years in the technology industry, we're committed to
                delivering solutions that exceed your expectations.
              </Typography>
              <Typography variant="body2" sx={{ color: '#7f8c8d', fontStyle: 'italic' }}>
                "Our strength lies in our team's diversity, expertise, and shared commitment to customer satisfaction."
              </Typography>
            </Box>
          </Container>
        </Box>
      </FadeInSection>

      <Footer fullFooter={true} />
    </Box>
  );
};

// Add missing icon component
const StorefrontIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 22h14v-2H5v2zM19 4h-2V2h-2v2H9V2H7v2H5v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4z" />
  </svg>
);

export default AboutUs;