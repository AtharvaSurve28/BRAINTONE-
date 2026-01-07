import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Modal,
  IconButton,
  TextField,
  Alert,
  Snackbar
} from '@mui/material';
import {
  Build,
  CheckCircle,
  ArrowForward,
  ScreenRotation,
  Keyboard,
  BatteryChargingFull,
  Storage,
  Memory,
  ThermostatAuto,
  Computer,
  DeveloperBoard as CircuitBoard,
  WaterDrop,
  Search,
  Description,
  Handyman,
  VerifiedUser,
  Speed,
  Group,
  AttachMoney,
  Phone,
  AccessTime,
  Place,
  ArrowRightAlt,
  Star,
  Security,
  LocalShipping,
  SupportAgent,
  Schedule as HistoryToggleOff,
  Close
} from '@mui/icons-material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';

const RepairServices = () => {
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [personalRepairModalOpen, setPersonalRepairModalOpen] = React.useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = React.useState('');
  
  // Form state for personal repair modal
  const [formData, setFormData] = React.useState({
    name: '',
    mobile: '',
    address: '',
    laptopBrand: '',
    laptopModel: '',
    laptopIssue: '',
    preferredDate: '',
    preferredTime: '',
  });
  
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

  const openDetails = (title) => {
    setSelectedServiceTitle(title || '');
    setDetailsOpen(true);
  };

  const closeDetails = () => {
    setDetailsOpen(false);
  };

  const openPersonalRepairModal = () => {
    setPersonalRepairModalOpen(true);
  };

  const closePersonalRepairModal = () => {
    setPersonalRepairModalOpen(false);
    // Reset form data
    setFormData({
      name: '',
      mobile: '',
      address: '',
      laptopBrand: '',
      laptopModel: '',
      laptopIssue: '',
      preferredDate: '',
      preferredTime: '',
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.mobile || !formData.address || !formData.laptopIssue) {
      setSnackbarSeverity('error');
      setSnackbarMessage('Please fill in all required fields: Name, Mobile, Address, and Laptop Issue');
      setSnackbarOpen(true);
      return;
    }

    // Prepare WhatsApp message
    const whatsappNumber = "9082671687";
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Personal Repair Service Request from BRAINTONE*%0A%0A
*👤 Customer Details:*%0A
• *Name:* ${formData.name}%0A
• *Mobile:* ${formData.mobile}%0A
• *Address:* ${formData.address}%0A%0A
*💻 Laptop Details:*%0A
• *Brand:* ${formData.laptopBrand || 'Not specified'}%0A
• *Model:* ${formData.laptopModel || 'Not specified'}%0A
• *Issue:* ${formData.laptopIssue}%0A%0A
*📅 Pickup Preferences:*%0A
• *Date:* ${formData.preferredDate || 'Not specified'}%0A
• *Time:* ${formData.preferredTime || 'Not specified'}`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSnackbarSeverity('success');
    setSnackbarMessage('Opening WhatsApp to send your repair request...');
    setSnackbarOpen(true);
    
    // Close modal after a delay
    setTimeout(() => {
      closePersonalRepairModal();
    }, 1500);
  };

  const repairServices = [
    {
      icon: <ScreenRotation />,
      title: "Screen Replacement",
      description: "Connect or support software for devices like USB, wireless access to smartphones.",
      features: [
        "Insert ISO/IEC screens.",
        "Technician register: read.",
        "Insert Bluetooth apps.",
        "Displayable capability by desktop."
      ],
      gradient: 'linear-gradient(135deg, #ffecec 0%, #ffcccc 100%)',
      color: '#e74c3c'
    },
    {
      icon: <Keyboard />,
      title: "Keyboard Repair",
      description: "Start fully automatic and support that is operating with the keyboard adapter.",
      features: [
        "Inhibitor interruptions.",
        "Fully automated interrupts.",
        "Full advanced delivery.",
        "Replace your desired base."
      ],
      gradient: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
      color: '#2980b9'
    },
    {
      icon: <BatteryChargingFull />,
      title: "Battery Replacement",
      description: "Insert a battery into a battery right before opening. Use an optional battery system replacement interface.",
      features: [
        "Output battery replacement.",
        "Overplays further.",
        "Create specific base.",
        "Safety issues diagnostics."
      ],
      gradient: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
      color: '#27ae60'
    },
    {
      icon: <Storage />,
      title: "Hard Drive & SSD",
      description: "Signalable buffer: 3500m internal data from high-end data.",
      features: [
        "Load to save signals.",
        "Deliverability analysis.",
        "Storage control response.",
        "Performance Schedule."
      ],
      gradient: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
      color: '#8e44ad'
    },
    {
      icon: <Memory />,
      title: "RAM Upgrade",
      description: "Insert your battery performance with large signal output (seconds).",
      features: [
        "Memory output (access cost).",
        "Rate compatibility (right).",
        "Performance optimisation.",
        "System security improvement."
      ],
      gradient: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
      color: '#f39c12'
    },
    {
      icon: <ThermostatAuto />,
      title: "Overheating Issues",
      description: "Liquids running up on the clean line, reduce thermal plastic costs causing losses.",
      features: [
        "For rearrange replacement.",
        "Transfer parts reapplication.",
        "Avoiding unnecessary heating or repair."
      ],
      gradient: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
      color: '#00bcd4'
    },
    {
      icon: <Computer />,
      title: "Software & OS Issues",
      description: "Windows® software are delivered by means of installation/authentication and updates.",
      features: [
        "GT-Loadhouse (StandardPlus)",
        "Vehicle management services.",
        "Software troubleshooting.",
        "Driver updates."
      ],
      gradient: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',
      color: '#e91e63'
    },
    {
      icon: <CircuitBoard />,
      title: "Motherboard Repair",
      description: "Compare furniture and cleaning for several storage containers of the new products.",
      features: [
        "Chip-based repair.",
        "Compiling programming.",
        "Power check repair.",
        "Compilation replacement."
      ],
      gradient: 'linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)',
      color: '#3f51b5'
    },
    {
      icon: <WaterDrop />,
      title: "Liquid Damage Repair",
      description: "Dashboard or office may not be kept? Quick switch over your device.",
      features: [
        "Emergency load damage repair.",
        "Compiled cooling & drying.",
        "Contrast removal.",
        "Outoverberry elements."
      ],
      gradient: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)',
      color: '#009688'
    }
  ];

  const repairProcess = [
    {
      icon: <Search />,
      title: "Diagnosis",
      description: "No problem exists through diagnosis directly by means.",
    },
    {
      icon: <Description />,
      title: "Question",
      description: "Your code is transparent under such instructions.",
    },
    {
      icon: <Handyman />,
      title: "Repair",
      description: "Our legacy has never been made up of any other quality parts.",
    },
    {
      icon: <VerifiedUser />,
      title: "Testing",
      description: "Through routine exercises ensure your request perfectly.",
    },
    {
      icon: <Speed />,
      title: "Delivery",
      description: "Your kitchen should not provide comfort as repairs are given.",
    }
  ];

  const whyChooseUs = [
    {
      icon: <Security />,
      title: "Warranty Guaranteed",
      description: "30th day annual retirement plans and replacement plans.",
    },
    {
      icon: <HistoryToggleOff />,
      title: "Fast Turnaround",
      description: "Most repair completed within 5+20 hours.",
    },
    {
      icon: <VerifiedUser />,
      title: "Certified Technicians",
      description: "Expanded and refined procedures.",
    },
    {
      icon: <AttachMoney />,
      title: "Affordable Pricing",
      description: "Compatible rates of the hidden charge.",
    }
  ];

  return (
    <Box sx={{ 
      overflowX: 'hidden',
      bgcolor: '#f8f9fa',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      {/* Personal Repair Service Modal */}
      <Modal
        open={personalRepairModalOpen}
        onClose={closePersonalRepairModal}
        aria-labelledby="personal-repair-modal"
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
                Book Personal Repair Service
              </Typography>
            </Box>
            <IconButton onClick={closePersonalRepairModal} sx={{ color: 'white' }}>
              <Close />
            </IconButton>
          </Box>

          {/* Modal Content */}
          <Box sx={{ p: 4 }}>
            <Typography variant="body1" sx={{ mb: 4, color: '#7f8c8d', textAlign: 'center' }}>
              Fill out the form below to schedule a repair service for your laptop. 
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
                color: '#25D366', 
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
                Your request will be sent to WhatsApp: 9082671687
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
              bgcolor: '#ffecec', 
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
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> 
                  Submit this form
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> 
                  We'll contact you on WhatsApp (9082671687) to confirm
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CheckCircle sx={{ fontSize: 16, color: '#27ae60' }} /> 
                  Schedule repair at your preferred time
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
                onClick={closePersonalRepairModal}
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
                Send to WhatsApp
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* Existing Details Dialog */}
      <Dialog
        open={detailsOpen}
        onClose={closeDetails}
        aria-labelledby="repair-details-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="repair-details-title" sx={{ fontWeight: 800 }}>
          {selectedServiceTitle ? `${selectedServiceTitle} — Details` : 'Repair Service Details'}
        </DialogTitle>
        <DialogContent dividers>
          <Typography sx={{ mb: 2, fontWeight: 700 }}>
            For more details visit our Fort store and Vile Parle store:
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 800, color: '#e74c3c', mb: 0.5 }}>
              Fort Store
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
              1st Floor, 17A, Bahubali Bldg, Flora Fountain, 10/E, Cawasji Patel St, next to Vardhman Chambers, Kala Ghoda, Fort, Mumbai, Maharashtra 400001
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Phone: 081697 98826
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 800, color: '#3498db', mb: 0.5 }}>
              Vile Parle Store
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
              1st Floor, Prime Mall, F92/96, Alfa Market, Road, Navpada, Irla, Vile Parle West, Mumbai, Maharashtra 400056
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Phone: 092233 33357
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            variant="contained"
            onClick={openPersonalRepairModal}
            sx={{
              background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
              color: 'white',
              fontWeight: 600,
              '&:hover': {
                background: 'linear-gradient(135deg, #c0392b 0%, #a93226 100%)',
              },
            }}
          >
            Book a Personal Repair Service
          </Button>
          <Button component={Link} to="/contact" variant="contained" onClick={closeDetails}>
            Contact Us
          </Button>
          <Button onClick={closeDetails} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
     
      {/* Hero Section */}
<Box
  sx={{
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    background: '#8B0000', // Dark red background
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #FF0000, #00FF00, #0000FF, #FF00FF, #FFFF00, #FF0000)',
      backgroundSize: '400% 100%',
      animation: 'shimmer 4s linear infinite',
    }
  }}
>
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', py: 8 }}>
    <Typography 
      variant="h1" 
      sx={{ 
        fontWeight: 800, 
        mb: 3,
        fontSize: { xs: '2.5rem', md: '4rem' },
        background: 'linear-gradient(45deg, #FFD700, #FFFFFF, #87CEEB, #FFD700)',
        backgroundSize: '300% 300%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'gradientText 8s ease infinite',
        lineHeight: 1.2,
        textShadow: '0 4px 8px rgba(0,0,0,0.3)',
        letterSpacing: '0.5px',
      }}
    >
      Expert Laptop Repair Services
    </Typography>
    
    <Divider sx={{ 
      width: '120px', 
      height: '3px', 
      background: 'linear-gradient(90deg, #FF0000, #00FF00, #0000FF, #FF0000)',
      backgroundSize: '300% 100%',
      mx: 'auto', 
      mb: 4,
      animation: 'shimmer 3s linear infinite',
      borderRadius: '2px',
    }} />
    
    <Typography 
      variant="h5" 
      sx={{ 
        mb: 5, 
        fontSize: '1.3rem',
        maxWidth: '800px',
        mx: 'auto',
        lineHeight: 1.6,
        background: 'linear-gradient(45deg, #FFFFFF, #E0E0E0, #FFFFFF)',
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'gradientText 6s ease infinite',
        fontWeight: 400,
        letterSpacing: '0.2px',
      }}
    >
      From screen replacements to software bases, our certified technicians will get your device back in top shape with fast, reliable, and affordable inputs.
    </Typography>
    
    <Button
      variant="contained"
      component={Link}
      to="/contact"
      endIcon={<ArrowForward />}
      sx={{
        background: 'linear-gradient(45deg, #FFFFFF 0%, #F5F5F5 50%, #FFFFFF 100%)',
        backgroundSize: '200% 200%',
        color: '#8B0000',
        px: 6,
        py: 2.5,
        fontSize: '1.1rem',
        textTransform: 'none',
        fontWeight: 700,
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
        animation: 'gradientButton 4s ease infinite',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(139,0,0,0.2), transparent)',
          transition: 'left 0.5s',
        },
        '&:hover::before': {
          left: '100%',
        },
        '&:hover': { 
          color: '#600000',
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 35px rgba(0,0,0,0.4)',
        },
        transition: 'all 0.3s ease',
      }}
    >
      Get Started
    </Button>
  </Container>

  {/* Add CSS Animations */}
  <style jsx="true">{`
    @keyframes shimmer {
      0% { background-position: 0% 0%; }
      100% { background-position: 400% 0%; }
    }
    
    @keyframes gradientText {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes gradientButton {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
</Box>

      {/* Our Repair Services Section */}
<Box sx={{ 
  py: 10,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(231,76,60,0.03) 0%, rgba(52,152,219,0.03) 100%)',
    zIndex: 0,
  },
}}>
  {/* Background Animated Elements */}
  <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: 0,
  }}>
    {/* Animated Gradient Orbs */}
    <Box sx={{
      position: 'absolute',
      top: '10%',
      left: '10%',
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(231,76,60,0.05) 0%, transparent 70%)',
      animation: 'float 8s ease-in-out infinite',
      filter: 'blur(20px)',
    }} />
    <Box sx={{
      position: 'absolute',
      top: '60%',
      right: '15%',
      width: 400,
      height: 400,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(52,152,219,0.05) 0%, transparent 70%)',
      animation: 'float 12s ease-in-out infinite 2s',
      filter: 'blur(25px)',
    }} />
    <Box sx={{
      position: 'absolute',
      bottom: '10%',
      left: '20%',
      width: 250,
      height: 250,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(46,204,113,0.05) 0%, transparent 70%)',
      animation: 'float 10s ease-in-out infinite 1s',
      filter: 'blur(15px)',
    }} />
    
    {/* Animated Particles */}
    <Box sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}>
      {Array.from({ length: 15 }).map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: Math.random() * 10 + 2,
            height: Math.random() * 10 + 2,
            background: i % 3 === 0 ? '#e74c3c' : i % 3 === 1 ? '#3498db' : '#2ecc71',
            borderRadius: '50%',
            opacity: Math.random() * 0.3 + 0.1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `particleFloat ${Math.random() * 15 + 10}s linear infinite ${Math.random() * 5}s`,
          }}
        />
      ))}
    </Box>
  </Box>

  <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 700, 
          mb: 2,
          fontSize: { xs: '2rem', md: '2.8rem' },
          color: '#1a365d',
          position: 'relative',
          display: 'inline-block',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          animation: 'fadeInUp 1s ease',
        }}
      >
        Our Repair Services
      </Typography>
      <Typography 
        variant="h5" 
        sx={{ 
          color: '#666',
          mb: 2,
          fontSize: '1.3rem',
          maxWidth: 700,
          mx: 'auto',
          lineHeight: 1.6,
          animation: 'fadeInUp 1s ease 0.2s',
          animationFillMode: 'both',
        }}
      >
        Professional solutions for all your laptop problems
      </Typography>
    </Box>

    {/* 3x3 Grid Container */}
    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)'
      },
      gap: 4,
    }}>
      {/* Box 1: Screen Replacement */}
      <Box sx={{ 
        height: '520px',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(231, 76, 60, 0.1)',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animation: 'cardBounce 3s ease-in-out infinite',
        transform: 'scale(1)',
        '&:hover': { 
          transform: 'translateY(-8px) scale(1.03)', 
          boxShadow: '0 20px 50px rgba(231,76,60,0.25)',
          borderColor: 'rgba(231, 76, 60, 0.3)',
        }
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #e74c3c, #ff6b6b)',
        }}/>
        
        <Box sx={{ 
          p: 4, 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
        }}>
          <Box sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ffecec 0%, #ffcccc 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e74c3c',
            mb: 3,
            mx: 'auto',
            boxShadow: '0 8px 25px rgba(231,76,60,0.2)',
            border: '3px solid #fff',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05) rotate(5deg)',
            }
          }}>
            <ScreenRotation sx={{ fontSize: 36 }} />
          </Box>
          
          <Typography variant="h5" sx={{ 
            fontWeight: 700, 
            mb: 2, 
            color: '#1a365d', 
            textAlign: 'center', 
            fontSize: '1.4rem',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: '#e74c3c',
            }
          }}>
            Screen Replacement
          </Typography>
          
          <Typography variant="body1" sx={{ 
            color: '#666', 
            mb: 3, 
            textAlign: 'center', 
            fontSize: '0.95rem',
            lineHeight: 1.6,
          }}>
            Cracked or damaged screen? We replace LCD, LED, and touch screens for all laptop brands.
          </Typography>
          
          <Box sx={{ 
            flexGrow: 1,
            mb: 3,
          }}>
            {['Broken LCD/LED screens', 'Touchscreen digitizer repair', 'Display flickering issues', 'Dead pixels and backlight problems'].map((item, idx) => (
              <Box key={idx} sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 1.5,
              }}>
                <CheckCircle sx={{ color: '#e74c3c', fontSize: 20, mr: 2 }} />
                <Typography variant="body2" sx={{ color: '#555', fontSize: '0.9rem' }}>{item}</Typography>
              </Box>
            ))}
          </Box>
          
          <Button
            variant="contained"
            fullWidth
            onClick={() => openDetails('Screen Replacement')}
            sx={{
              background: 'linear-gradient(90deg, #e74c3c, #ff6b6b)',
              color: '#fff',
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #c0392b, #e74c3c)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(231,76,60,0.3)',
              }
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* Box 2: Keyboard Repair */}
      <Box sx={{ 
        height: '520px',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(231, 76, 60, 0.1)',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animation: 'cardBounce 3s ease-in-out infinite 0.1s',
        transform: 'scale(1)',
        '&:hover': { 
          transform: 'translateY(-8px) scale(1.03)', 
          boxShadow: '0 20px 50px rgba(52,152,219,0.25)',
          borderColor: 'rgba(52,152,219,0.3)',
        }
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2980b9, #3498db)',
        }}/>
        
        <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2980b9',
            mb: 3,
            mx: 'auto',
            boxShadow: '0 8px 25px rgba(52,152,219,0.2)',
            border: '3px solid #fff',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05) rotate(5deg)',
            }
          }}>
            <Keyboard sx={{ fontSize: 36 }} />
          </Box>
          
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1a365d', textAlign: 'center', fontSize: '1.4rem' }}>
            Keyboard Repair
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#666', mb: 3, textAlign: 'center', fontSize: '0.95rem' }}>
            Sticky keys, broken keys, or keyboard not responding? We fit or replace laptop keyboards.
          </Typography>
          
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            {['Individual key replacement', 'Full keyboard replacement', 'Liquid damage cleaning', 'Keyboard not detected issues'].map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <CheckCircle sx={{ color: '#2980b9', fontSize: 20, mr: 2 }} />
                <Typography variant="body2" sx={{ color: '#555', fontSize: '0.9rem' }}>{item}</Typography>
              </Box>
            ))}
          </Box>
          
          <Button
            variant="contained"
            fullWidth
            onClick={() => openDetails('Keyboard Repair')}
            sx={{
              background: 'linear-gradient(90deg, #2980b9, #3498db)',
              color: '#fff',
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #1f6394, #2980b9)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(52,152,219,0.3)',
              }
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* Box 3: Battery Replacement */}
      <Box sx={{ 
        height: '520px',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(231, 76, 60, 0.1)',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animation: 'cardBounce 3s ease-in-out infinite 0.2s',
        transform: 'scale(1)',
        '&:hover': { 
          transform: 'translateY(-8px) scale(1.03)', 
          boxShadow: '0 20px 50px rgba(46,204,113,0.25)',
          borderColor: 'rgba(46,204,113,0.3)',
        }
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #27ae60, #2ecc71)',
        }}/>
        
        <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#27ae60',
            mb: 3,
            mx: 'auto',
            boxShadow: '0 8px 25px rgba(46,204,113,0.2)',
            border: '3px solid #fff',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05) rotate(5deg)',
            }
          }}>
            <BatteryChargingFull sx={{ fontSize: 36 }} />
          </Box>
          
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1a365d', textAlign: 'center', fontSize: '1.4rem' }}>
            Battery Replacement
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#666', mb: 3, textAlign: 'center', fontSize: '0.95rem' }}>
            Battery draining fast or not charging? We install genuine replacement batteries.
          </Typography>
          
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            {['Original battery replacement', 'Charging port repair', 'Power adapter issues', 'Battery health diagnostics'].map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <CheckCircle sx={{ color: '#27ae60', fontSize: 20, mr: 2 }} />
                <Typography variant="body2" sx={{ color: '#555', fontSize: '0.9rem' }}>{item}</Typography>
              </Box>
            ))}
          </Box>
          
          <Button
            variant="contained"
            fullWidth
            onClick={() => openDetails('Battery Replacement')}
            sx={{
              background: 'linear-gradient(90deg, #27ae60, #2ecc71)',
              color: '#fff',
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #219653, #27ae60)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(46,204,113,0.3)',
              }
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* Box 4: Hard Drive & SSD */}
      <Box sx={{ 
        height: '520px',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(231, 76, 60, 0.1)',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animation: 'cardBounce 3s ease-in-out infinite 0.3s',
        transform: 'scale(1)',
        '&:hover': { 
          transform: 'translateY(-8px) scale(1.03)', 
          boxShadow: '0 20px 50px rgba(155,89,182,0.25)',
          borderColor: 'rgba(155,89,182,0.3)',
        }
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #8e44ad, #9b59b6)',
        }}/>
        
        <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8e44ad',
            mb: 3,
            mx: 'auto',
            boxShadow: '0 8px 25px rgba(155,89,182,0.2)',
            border: '3px solid #fff',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05) rotate(5deg)',
            }
          }}>
            <Storage sx={{ fontSize: 36 }} />
          </Box>
          
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1a365d', textAlign: 'center', fontSize: '1.4rem' }}>
            Hard Drive & SSD
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#666', mb: 3, textAlign: 'center', fontSize: '0.95rem' }}>
            Upgrade to faster SSD or recover data from failing hard drives.
          </Typography>
          
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            {['HDD to SSD upgrade', 'Data recovery services', 'Storage capacity upgrade', 'System cloning & backup'].map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <CheckCircle sx={{ color: '#8e44ad', fontSize: 20, mr: 2 }} />
                <Typography variant="body2" sx={{ color: '#555', fontSize: '0.9rem' }}>{item}</Typography>
              </Box>
            ))}
          </Box>
          
          <Button
            variant="contained"
            fullWidth
            onClick={() => openDetails('Hard Drive & SSD')}
            sx={{
              background: 'linear-gradient(90deg, #8e44ad, #9b59b6)',
              color: '#fff',
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #7d3c98, #8e44ad)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(155,89,182,0.3)',
              }
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* Box 5: RAM Upgrade */}
      <Box sx={{ 
        height: '520px',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(231, 76, 60, 0.1)',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animation: 'cardBounce 3s ease-in-out infinite 0.4s',
        transform: 'scale(1)',
        '&:hover': { 
          transform: 'translateY(-8px) scale(1.03)', 
          boxShadow: '0 20px 50px rgba(243,156,18,0.25)',
          borderColor: 'rgba(243,156,18,0.3)',
        }
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #f39c12, #f1c40f)',
        }}/>
        
        <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f39c12',
            mb: 3,
            mx: 'auto',
            boxShadow: '0 8px 25px rgba(243,156,18,0.2)',
            border: '3px solid #fff',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05) rotate(5deg)',
            }
          }}>
            <Memory sx={{ fontSize: 36 }} />
          </Box>
          
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1a365d', textAlign: 'center', fontSize: '1.4rem' }}>
            RAM Upgrade
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#666', mb: 3, textAlign: 'center', fontSize: '0.95rem' }}>
            Boost your laptop's performance with RAM upgrade and optimization.
          </Typography>
          
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            {['Memory upgrade (4GB to 32GB)', 'RAM compatibility check', 'Performance optimization', 'System speed improvement'].map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <CheckCircle sx={{ color: '#f39c12', fontSize: 20, mr: 2 }} />
                <Typography variant="body2" sx={{ color: '#555', fontSize: '0.9rem' }}>{item}</Typography>
              </Box>
            ))}
          </Box>
          
          <Button
            variant="contained"
            fullWidth
            onClick={() => openDetails('RAM Upgrade')}
            sx={{
              background: 'linear-gradient(90deg, #f39c12, #f1c40f)',
              color: '#fff',
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #d68910, #f39c12)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(243,156,18,0.3)',
              }
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* Box 6: Overheating Issues */}
      <Box sx={{ 
        height: '520px',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(231, 76, 60, 0.1)',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animation: 'cardBounce 3s ease-in-out infinite 0.5s',
        transform: 'scale(1)',
        '&:hover': { 
          transform: 'translateY(-8px) scale(1.03)', 
          boxShadow: '0 20px 50px rgba(0,188,212,0.25)',
          borderColor: 'rgba(0,188,212,0.3)',
        }
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #00bcd4, #00ced1)',
        }}/>
        
        <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00bcd4',
            mb: 3,
            mx: 'auto',
            boxShadow: '0 8px 25px rgba(0,188,212,0.2)',
            border: '3px solid #fff',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05) rotate(5deg)',
            }
          }}>
            <ThermostatAuto sx={{ fontSize: 36 }} />
          </Box>
          
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1a365d', textAlign: 'center', fontSize: '1.4rem' }}>
            Overheating Issues
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#666', mb: 3, textAlign: 'center', fontSize: '0.95rem' }}>
            Laptop running hot? We clean fans, replace thermal paste, and fix cooling issues.
          </Typography>
          
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            {['Fan cleaning & replacement', 'Thermal paste reapplication', 'Ventilation system cleaning', 'Heat sink repair'].map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <CheckCircle sx={{ color: '#00bcd4', fontSize: 20, mr: 2 }} />
                <Typography variant="body2" sx={{ color: '#555', fontSize: '0.9rem' }}>{item}</Typography>
              </Box>
            ))}
          </Box>
          
          <Button
            variant="contained"
            fullWidth
            onClick={() => openDetails('Overheating Issues')}
            sx={{
              background: 'linear-gradient(90deg, #00bcd4, #00ced1)',
              color: '#fff',
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #00acc1, #00bcd4)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(0,188,212,0.3)',
              }
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* Box 7: Software & OS Issues */}
      <Box sx={{ 
        height: '520px',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(231, 76, 60, 0.1)',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animation: 'cardBounce 3s ease-in-out infinite 0.6s',
        transform: 'scale(1)',
        '&:hover': { 
          transform: 'translateY(-8px) scale(1.03)', 
          boxShadow: '0 20px 50px rgba(233,30,99,0.25)',
          borderColor: 'rgba(233,30,99,0.3)',
        }
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #e91e63, #ff4081)',
        }}/>
        
        <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e91e63',
            mb: 3,
            mx: 'auto',
            boxShadow: '0 8px 25px rgba(233,30,99,0.2)',
            border: '3px solid #fff',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05) rotate(5deg)',
            }
          }}>
            <Computer sx={{ fontSize: 36 }} />
          </Box>
          
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1a365d', textAlign: 'center', fontSize: '1.4rem' }}>
            Software & OS Issues
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#666', mb: 3, textAlign: 'center', fontSize: '0.95rem' }}>
            Windows or software problems? We handle OS installation, virus removal, and updates.
          </Typography>
          
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            {['OS Installation (Windows/Linux)', 'Virus & malware removal', 'Software troubleshooting', 'Driver updates'].map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <CheckCircle sx={{ color: '#e91e63', fontSize: 20, mr: 2 }} />
                <Typography variant="body2" sx={{ color: '#555', fontSize: '0.9rem' }}>{item}</Typography>
              </Box>
            ))}
          </Box>
          
          <Button
            variant="contained"
            fullWidth
            onClick={() => openDetails('Software & OS Issues')}
            sx={{
              background: 'linear-gradient(90deg, #e91e63, #ff4081)',
              color: '#fff',
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #c2185b, #e91e63)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(233,30,99,0.3)',
              }
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* Box 8: Motherboard Repair */}
      <Box sx={{ 
        height: '520px',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(231, 76, 60, 0.1)',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animation: 'cardBounce 3s ease-in-out infinite 0.7s',
        transform: 'scale(1)',
        '&:hover': { 
          transform: 'translateY(-8px) scale(1.03)', 
          boxShadow: '0 20px 50px rgba(63,81,181,0.25)',
          borderColor: 'rgba(63,81,181,0.3)',
        }
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #3f51b5, #5c6bc0)',
        }}/>
        
        <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3f51b5',
            mb: 3,
            mx: 'auto',
            boxShadow: '0 8px 25px rgba(63,81,181,0.2)',
            border: '3px solid #fff',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05) rotate(5deg)',
            }
          }}>
            <CircuitBoard sx={{ fontSize: 36 }} />
          </Box>
          
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1a365d', textAlign: 'center', fontSize: '1.4rem' }}>
            Motherboard Repair
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#666', mb: 3, textAlign: 'center', fontSize: '0.95rem' }}>
            Complex motherboard issues? Our experts diagnose and repair chip-level problems.
          </Typography>
          
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            {['Chip-level repair', 'BIOS chip programming', 'Power circuit repair', 'Component replacement'].map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <CheckCircle sx={{ color: '#3f51b5', fontSize: 20, mr: 2 }} />
                <Typography variant="body2" sx={{ color: '#555', fontSize: '0.9rem' }}>{item}</Typography>
              </Box>
            ))}
          </Box>
          
          <Button
            variant="contained"
            fullWidth
            onClick={() => openDetails('Motherboard Repair')}
            sx={{
              background: 'linear-gradient(90deg, #3f51b5, #5c6bc0)',
              color: '#fff',
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #303f9f, #3f51b5)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(63,81,181,0.3)',
              }
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* Box 9: Liquid Damage Repair */}
      <Box sx={{ 
        height: '520px',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(231, 76, 60, 0.1)',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animation: 'cardBounce 3s ease-in-out infinite 0.8s',
        transform: 'scale(1)',
        '&:hover': { 
          transform: 'translateY(-8px) scale(1.03)', 
          boxShadow: '0 20px 50px rgba(0,150,136,0.25)',
          borderColor: 'rgba(0,150,136,0.3)',
        }
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #009688, #26a69a)',
        }}/>
        
        <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#009688',
            mb: 3,
            mx: 'auto',
            boxShadow: '0 8px 25px rgba(0,150,136,0.2)',
            border: '3px solid #fff',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05) rotate(5deg)',
            }
          }}>
            <WaterDrop sx={{ fontSize: 36 }} />
          </Box>
          
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1a365d', textAlign: 'center', fontSize: '1.4rem' }}>
            Liquid Damage Repair
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#666', mb: 3, textAlign: 'center', fontSize: '0.95rem' }}>
            Spilled water or coffee on your laptop? Quick action can save your device.
          </Typography>
          
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            {['Emergency liquid damage repair', 'Component cleaning & drying', 'Corrosion removal', 'Data recovery attempts'].map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <CheckCircle sx={{ color: '#009688', fontSize: 20, mr: 2 }} />
                <Typography variant="body2" sx={{ color: '#555', fontSize: '0.9rem' }}>{item}</Typography>
              </Box>
            ))}
          </Box>
          
          <Button
            variant="contained"
            fullWidth
            onClick={() => openDetails('Liquid Damage Repair')}
            sx={{
              background: 'linear-gradient(90deg, #009688, #26a69a)',
              color: '#fff',
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #00796b, #009688)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(0,150,136,0.3)',
              }
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>
    </Box>
  </Container>

  {/* Add CSS Animations */}
  <style jsx="true">{`
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-20px) translateX(10px); }
    }
    
    @keyframes particleFloat {
      0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
      10% { opacity: 0.3; }
      90% { opacity: 0.1; }
      100% { transform: translateY(-100vh) translateX(100px) rotate(360deg); opacity: 0; }
    }
    
    @keyframes cardBounce {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-5px) scale(1.005); }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</Box>

{/* Divider Between Sections */}
<Box sx={{ 
  width: '100%', 
  height: '1px', 
  background: 'linear-gradient(90deg, transparent, rgba(231,76,60,0.3), transparent)',
  my: 2,
}} />


{/* Our Simple Repair Process */}
<Box sx={{ 
  py: 10,
  position: 'relative',
  overflow: 'hidden',
  borderBottom: '2px solid #e74c3c',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(231,76,60,0.03) 0%, rgba(52,152,219,0.03) 100%)',
    zIndex: 0,
  },
}}>
  {/* Background Animated Elements */}
  <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: 0,
  }}>
    {/* Animated Gradient Orbs */}
    <Box sx={{
      position: 'absolute',
      top: '20%',
      left: '5%',
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(231,76,60,0.05) 0%, transparent 70%)',
      animation: 'float 8s ease-in-out infinite',
      filter: 'blur(20px)',
    }} />
    <Box sx={{
      position: 'absolute',
      top: '60%',
      right: '10%',
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(52,152,219,0.05) 0%, transparent 70%)',
      animation: 'float 12s ease-in-out infinite 2s',
      filter: 'blur(25px)',
    }} />
    
    {/* Animated Grid Lines */}
    <Box sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        linear-gradient(90deg, rgba(231,76,60,0.02) 1px, transparent 1px),
        linear-gradient(rgba(231,76,60,0.02) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
      animation: 'gridMove 25s linear infinite',
      opacity: 0.4,
    }} />
  </Box>

  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
    <Box sx={{ textAlign: 'center', mb: 10 }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 700, 
          mb: 2,
          fontSize: { xs: '2rem', md: '2.8rem' },
          color: '#1a365d',
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 80,
            height: 4,
            background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
            borderRadius: 2,
          }
        }}
      >
        Our Simple Repair Process
      </Typography>
      <Typography 
        variant="h5" 
        sx={{ 
          color: '#666',
          mb: 2,
          fontSize: '1.3rem',
          maxWidth: 700,
          mx: 'auto',
          lineHeight: 1.6
        }}
      >
        A closer and straightforward process to get you back up on its serving.
      </Typography>
    </Box>

    {/* Horizontal Process Line */}
    <Box sx={{ 
      position: 'relative',
      mb: 8,
      display: { xs: 'none', md: 'block' }
    }}>
      {/* Main Connecting Line */}
      <Box sx={{
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        height: 2,
        background: 'linear-gradient(90deg, rgba(231,76,60,0.2), rgba(231,76,60,0.4), rgba(231,76,60,0.2))',
        zIndex: 1,
      }} />
      
      {/* Animated Progress Line */}
      <Box sx={{
        position: 'absolute',
        top: 40,
        left: 0,
        width: '100%',
        height: 2,
        background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
        zIndex: 2,
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        animation: 'processLine 3s ease-in-out infinite',
      }} />
    </Box>

    {/* Process Steps - Horizontal Layout */}
    <Grid container spacing={{ xs: 4, md: 2 }} justifyContent="center" sx={{ mb: 8 }}>
      {repairProcess.map((step, index) => (
        <Grid item xs={12} sm={6} md={2.4} key={index}>
          <Box sx={{ 
            textAlign: 'center', 
            position: 'relative',
            p: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            {/* Numbered Circle with Connecting Line */}
            <Box sx={{ 
              position: 'relative',
              mb: 3,
              zIndex: 3,
            }}>
              {/* Step Number Circle */}
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  boxShadow: '0 8px 20px rgba(231,76,60,0.3)',
                  border: '4px solid #fff',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -4,
                    left: -4,
                    right: -4,
                    bottom: -4,
                    borderRadius: '50%',
                    border: '2px solid rgba(231, 76, 60, 0.2)',
                    animation: 'pulse 2s infinite',
                  }
                }}
              >
                {index + 1}
              </Box>
              
              {/* Icon inside circle (optional) */}
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                opacity: 0.7,
              }}>
                {React.cloneElement(step.icon, { sx: { fontSize: 24 } })}
              </Box>
            </Box>
            
            {/* Step Title */}
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                color: '#1a365d',
                fontSize: '1.2rem',
                minHeight: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {step.title}
            </Typography>
            
            {/* Step Description */}
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: 1.6
              }}
            >
              {step.description}
            </Typography>
            
            {/* Connecting Line Dots for Mobile */}
            <Box sx={{ 
              display: { xs: 'block', md: 'none' },
              mt: 3,
              position: 'relative',
              height: 40,
              width: '100%',
            }}>
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 2,
                height: 40,
                background: index < repairProcess.length - 1 ? 'linear-gradient(to bottom, #e74c3c, rgba(231,76,60,0.3))' : 'transparent',
              }} />
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: index < repairProcess.length - 1 ? '#e74c3c' : 'transparent',
              }} />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

{/* DIVIDER BORDER between Repair Process and Video Section */}
<Box sx={{ 
  width: '100%', 
  height: '3px', 
  background: 'linear-gradient(90deg, transparent, #e74c3c 20%, #3498db 50%, #e74c3c 80%, transparent)',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
    animation: 'dividerShimmer 2s infinite linear',
  }
}} />

{/* VIDEO SECTION - After Repair Process */}
{/* VIDEO SECTION - After Repair Process */}
<Box sx={{ 
  py: 10,
  background: '#8B0000', // Dark red background
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
    zIndex: 0,
    animation: 'pulseRed 6s ease-in-out infinite',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255, 0, 0, 0.1) 50%, transparent 70%)',
    backgroundSize: '200% 200%',
    animation: 'shimmerRed 3s linear infinite',
    zIndex: 0,
  }
}}>
  {/* Animated Red Particles */}
  <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  }}>
    {Array.from({ length: 20 }).map((_, i) => (
      <Box
        key={i}
        sx={{
          position: 'absolute',
          width: Math.random() * 6 + 2,
          height: Math.random() * 6 + 2,
          background: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}, ${Math.random() * 0.4 + 0.1})`,
          borderRadius: '50%',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `particleFloat ${Math.random() * 10 + 5}s linear infinite ${Math.random() * 3}s`,
          boxShadow: '0 0 8px rgba(255, 69, 69, 0.5)',
        }}
      />
    ))}
  </Box>

  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 800, 
          mb: 3,
          fontSize: { xs: '2.2rem', md: '3rem' },
          color: '#ffffff',
          position: 'relative',
          display: 'inline-block',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 100,
            height: 5,
            background: 'linear-gradient(90deg, #FF0000, #FF6B6B, #FF0000)',
            backgroundSize: '200% 100%',
            borderRadius: 3,
            animation: 'gradientMove 2s linear infinite',
          }
        }}
      >
        Watch Our Repair Process in Action
      </Typography>
      <Typography 
        variant="h5" 
        sx={{ 
          color: '#FFDADA',
          mb: 2,
          fontSize: '1.4rem',
          maxWidth: 700,
          mx: 'auto',
          lineHeight: 1.6,
          fontWeight: 400,
          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }}
      >
        See our certified technicians deliver expert laptop repairs with precision and care.
      </Typography>
    </Box>

    {/* Video Player with Red Glow Effect */}
    <Box sx={{
      maxWidth: 1000,
      mx: 'auto',
      borderRadius: 4,
      overflow: 'hidden',
      boxShadow: '0 0 40px rgba(255, 0, 0, 0.3), 0 25px 70px rgba(0,0,0,0.4)',
      position: 'relative',
      border: '4px solid transparent',
      background: 'linear-gradient(45deg, #8B0000, #B22222) padding-box, linear-gradient(45deg, #FF0000, #FF6B6B, #FF0000) border-box',
      backgroundSize: '200% 200%',
      animation: 'borderGradient 3s linear infinite',
      '&:hover': {
        transform: 'translateY(-8px) scale(1.02)',
        boxShadow: '0 0 60px rgba(255, 0, 0, 0.5), 0 35px 90px rgba(0,0,0,0.5)',
        '&::before': {
          opacity: 1,
        }
      },
      transition: 'all 0.4s ease',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: -10,
        left: -10,
        right: -10,
        bottom: -10,
        background: 'radial-gradient(circle at center, rgba(255, 0, 0, 0.2) 0%, transparent 70%)',
        zIndex: -1,
        opacity: 0,
        transition: 'opacity 0.4s ease',
        filter: 'blur(20px)',
      }
    }}>
      <video
        controls
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          minHeight: '500px',
          backgroundColor: '#000',
          borderRadius: '4px',
        }}
      >
        <source src="/videos/Repair Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>

    {/* Video Info with Red Theme */}
    <Box sx={{ 
      textAlign: 'center', 
      mt: 6,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #FF0000, transparent)',
      }
    }}>
      <Typography 
        variant="body1" 
        sx={{ 
          color: '#FFDADA',
          fontSize: '1.2rem',
          maxWidth: 800,
          mx: 'auto',
          lineHeight: 1.8,
          background: 'rgba(139, 0, 0, 0.3)',
          padding: 4,
          borderRadius: 2,
          borderLeft: '4px solid #FF0000',
          borderRight: '4px solid #FF0000',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
            animation: 'textShimmer 3s infinite',
          }
        }}
      >
        This demonstration video showcases our complete repair workflow from initial diagnosis 
        through precise component replacement to final quality testing. Our certified technicians 
        use state-of-the-art equipment and follow strict protocols to ensure every repair meets 
        our high standards of excellence.
      </Typography>
    </Box>
  </Container>

  {/* Add CSS Animations for Red Theme */}
  <style jsx="true">{`
    @keyframes pulseRed {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }
    
    @keyframes shimmerRed {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }
    
    @keyframes borderGradient {
      0% { background-position: 0% 0%; }
      100% { background-position: 200% 200%; }
    }
    
    @keyframes particleFloat {
      0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
      10% { opacity: 0.6; }
      90% { opacity: 0.2; }
      100% { transform: translateY(-100vh) translateX(100px) scale(0.5); opacity: 0; }
    }
    
    @keyframes textShimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `}</style>
</Box>

 {/* Why Choose Us Section */}
 <Box sx={{ 
  py: 10,
  position: 'relative',
  overflow: 'hidden',
  background: '#fff5f5',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, rgba(255, 235, 235, 0.3) 0%, rgba(255, 245, 245, 0.6) 50%, rgba(255, 235, 235, 0.3) 100%)',
    backgroundSize: '200% 100%',
    animation: 'subtleShift 8s ease-in-out infinite',
    zIndex: 0,
  },
  '@keyframes subtleShift': {
    '0%, 100%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    }
  },
  '@keyframes bounce': {
    '0%, 100%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translateY(-10px)'
    }
  }
}}>
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 700, 
          mb: 3,
          fontSize: { xs: '2rem', md: '2.8rem' },
          color: '#2d3748',
        }}
      >
        Why Choose Our Repair Service?
      </Typography>
    </Box>

    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 4,
      maxWidth: '900px',
      mx: 'auto'
    }}>
      {/* First Row - 3 items */}
      {whyChooseUs.slice(0, 3).map((item, index) => (
        <Box key={index} sx={{ textAlign: 'center', px: 2 }}>
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: index === 0 ? 'rgba(72, 187, 120, 0.15)' :
                        index === 1 ? 'rgba(66, 153, 225, 0.15)' :
                        'rgba(237, 137, 54, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: index === 0 ? '#48bb78' : 
                     index === 1 ? '#4299e1' : 
                     '#ed8936',
              mb: 3,
              mx: 'auto',
              animation: `bounce 2s ease-in-out infinite ${index * 0.2}s`,
            }}
          >
            {React.cloneElement(item.icon, { sx: { fontSize: 48 } })}
          </Box>
          
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              mb: 2,
              color: '#2d3748',
              fontSize: '1.25rem'
            }}
          >
            {item.title}
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#718096',
              lineHeight: 1.6,
              fontSize: '0.95rem'
            }}
          >
            {item.description}
          </Typography>
        </Box>
      ))}

      {/* Empty space in first column of second row */}
      <Box />

      {/* Second Row - Affordable Pricing under Fast Turnaround (middle column) */}
      {whyChooseUs.slice(3, 4).map((item, index) => (
        <Box key={index} sx={{ textAlign: 'center', px: 2 }}>
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: 'rgba(246, 173, 85, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f6ad55',
              mb: 3,
              mx: 'auto',
              animation: 'bounce 2s ease-in-out infinite 0.6s',
            }}
          >
            {React.cloneElement(item.icon, { sx: { fontSize: 48 } })}
          </Box>
          
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              mb: 2,
              color: '#2d3748',
              fontSize: '1.25rem'
            }}
          >
            {item.title}
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#718096',
              lineHeight: 1.6,
              fontSize: '0.95rem'
            }}
          >
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  </Container>
</Box>

      {/* Footer */}
      {/* Footer */}
      <Box component="footer" sx={{ 
  bgcolor: '#1a1a2e', 
  color: '#ffffff', 
  pt: 4, 
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
  }
}}>
  <Container maxWidth="lg">
    {/* Box 1: Visit Us Banner - Full Width */}
    <Box sx={{ 
      mb: 3,
      backgroundColor: 'rgba(231, 76, 60, 0.1)',
      borderRadius: 2,
      p: 3,
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

    {/* Box 2: Fort Location - Full Width with Google Maps Link */}
    <Box sx={{ 
      mb: 3,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: 2,
      p: 3,
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
    onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Braintone+17A+Bahubali+Building+Flora+Fountain+Fort+Mumbai', '_blank', 'noopener,noreferrer')}
    >
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
          backgroundColor: 'rgba(231, 76, 60, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: '#e74c3c'
        }}>
          <Place sx={{ fontSize: 28 }} />
        </Box>
        
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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
            <OpenInNewIcon 
              sx={{ 
                color: '#e74c3c',
                fontSize: '1.2rem',
                opacity: 0.7,
              }} 
            />
          </Box>
          
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
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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

    {/* Box 3: Vile Parle Location - Full Width with Google Maps Link */}
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
        cursor: 'pointer',
      },
    }}
    onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Braintone+Laptop+Services+Prime+Mall+Irla+Vile+Parle+West+Mumbai', '_blank', 'noopener,noreferrer')}
    >
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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
            <OpenInNewIcon 
              sx={{ 
                color: '#3498db',
                fontSize: '1.2rem',
                opacity: 0.7,
              }} 
            />
          </Box>
          
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
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
            Mon-Sat: 11 AM - 7 PM
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255,255,255,0.8)', 
              mt: 1,
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            Visit us during our business hours for immediate assistance
          </Typography>
        </Box>
      </Box>
    </Box>

    {/* Box 5: Copyright/Brand - Full Width */}
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
        backgroundColor: 'rgba(231, 76, 60, 0.5)',
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
  </Container>
</Box>


      {/* Add CSS Animations */}
      <style jsx="true">{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes processLine {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        
        @keyframes dividerShimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </Box>
  );
};

export default RepairServices;