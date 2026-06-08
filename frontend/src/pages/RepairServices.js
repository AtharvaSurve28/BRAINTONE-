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
  Alert,
  Snackbar,
  TextField,
  useTheme,
  alpha
} from '@mui/material';
import VideoInView from '../components/VideoInView';
import FadeInSection from '../components/FadeInSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
  const theme = useTheme();
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
    selectedTimeSlot: '', // 'Morning' or 'Afternoon'
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
      selectedTimeSlot: '',
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
    if (!formData.name || !formData.mobile || !formData.address || !formData.laptopIssue || !formData.preferredTime) {
      setSnackbarSeverity('error');
      setSnackbarMessage('Please fill in all required fields');
      setSnackbarOpen(true);
      return;
    }

    // Validate Preferred Time range (11 AM - 7 PM)
    if (!formData.selectedTimeSlot) {
      setSnackbarSeverity('error');
      setSnackbarMessage('Please select a time slot (Morning or Afternoon)');
      setSnackbarOpen(true);
      return;
    }

    const validateTime = (timeStr, slot) => {
      if (!timeStr) return true;
      const cleanTime = timeStr.trim().toLowerCase();
      const timeRegex = /^([0-2]?[0-9])(?:[:.]([0-5][0-9]))?\s*(am|pm)?$/i;
      const match = cleanTime.match(timeRegex);
      if (!match) return false;

      let hours = parseInt(match[1]);
      const minutes = match[2] ? parseInt(match[2]) : 0;
      const period = match[3] ? match[3].toUpperCase() : null;

      if (period === 'PM' && hours < 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;

      const timeInMinutes = hours * 60 + minutes;

      if (slot === 'Morning') {
        const startMinutes = 11 * 60; // 11:00 AM
        const endMinutes = 12 * 60;   // 12:00 PM
        return timeInMinutes >= startMinutes && timeInMinutes <= endMinutes;
      } else {
        const startMinutes = 12 * 60; // 12:00 PM
        const endMinutes = 19 * 60;   // 07:00 PM
        return timeInMinutes >= startMinutes && timeInMinutes <= endMinutes;
      }
    };

    if (!validateTime(formData.preferredTime, formData.selectedTimeSlot)) {
      setSnackbarSeverity('error');
      setSnackbarMessage(`Time must be in the ${formData.selectedTimeSlot} slot (${formData.selectedTimeSlot === 'Morning' ? '11 AM - 12 PM' : '12 PM - 7 PM'})`);
      setSnackbarOpen(true);
      return;
    }


    // Prepare WhatsApp message
    const whatsappNumber = "9082014406";

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
• *Slot:* ${formData.selectedTimeSlot || 'Not specified'}%0A
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
      bgcolor: 'background.default',
      transition: 'all 0.4s ease',
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
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', textAlign: 'center' }}>
              Fill out the form below to schedule a repair service for your laptop.
              Our technician will contact you to confirm the details.
            </Typography>

            {/* Removed WhatsApp Number Display */}

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

                <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600, color: 'text.primary' }}>
                  Select Time Slot *
                </Typography>
                <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, mb: 3 }}>
                  <Box
                    onClick={() => setFormData(prev => ({ ...prev, selectedTimeSlot: 'Morning' }))}
                    sx={{
                      flex: 1,
                      p: { xs: 1, sm: 2 },
                      border: '2px solid',
                      borderColor: formData.selectedTimeSlot === 'Morning' ? '#e74c3c' : 'divider',
                      borderRadius: '12px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      bgcolor: formData.selectedTimeSlot === 'Morning' ? 'rgba(231, 76, 60, 0.05)' : 'transparent',
                      transition: '0.3s',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 700, fontSize: { xs: '0.9rem', sm: '1rem' }, color: formData.selectedTimeSlot === 'Morning' ? '#e74c3c' : 'text.primary' }}>
                      Morning
                    </Typography>
                    <Typography variant="caption" sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem' }, color: 'text.secondary', whiteSpace: 'nowrap' }}>
                      11 AM - 12 PM
                    </Typography>
                  </Box>
                  <Box
                    onClick={() => setFormData(prev => ({ ...prev, selectedTimeSlot: 'Afternoon' }))}
                    sx={{
                      flex: 1,
                      p: { xs: 1, sm: 2 },
                      border: '2px solid',
                      borderColor: formData.selectedTimeSlot === 'Afternoon' ? '#e74c3c' : 'divider',
                      borderRadius: '12px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      bgcolor: formData.selectedTimeSlot === 'Afternoon' ? 'rgba(231, 76, 60, 0.05)' : 'transparent',
                      transition: '0.3s',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 700, fontSize: { xs: '0.9rem', sm: '1rem' }, color: formData.selectedTimeSlot === 'Afternoon' ? '#e74c3c' : 'text.primary' }}>
                      Afternoon
                    </Typography>
                    <Typography variant="caption" sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem' }, color: 'text.secondary', whiteSpace: 'nowrap' }}>
                      12 PM - 7 PM
                    </Typography>
                  </Box>
                </Box>

                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label={`Exact Time (${formData.selectedTimeSlot === 'Morning' ? '11 AM - 12 PM' : '12 PM - 7 PM'}) *`}
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleFormChange}
                    required
                    variant="outlined"
                    placeholder="e.g. 11:30 AM"
                    disabled={!formData.selectedTimeSlot}
                  />
                </Stack>
              </Stack>
            </Box>

            {/* Removed Terms and WhatsApp Button section */}

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
              Head office: 10/E, 1st floor, 17A, Patel building / Bahubali building, Cawasji patel street, Horniman circle, Fort, Mumbai - 400001 <br />
              Showroom: Ground floor, 17A, Patel building / Bahubali building, Cawasji patel street, Horniman circle, Fort, Mumbai-400001
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Phone: +91 9820119113
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 800, color: '#3498db', mb: 0.5 }}>
              Vile Parle Store
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
              Showroom: Prime Mall, 1st Floor, Off:no 92/96, opp To Alfa no. 1, Irla Road, Vile parle(w)
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Phone: +91 9819401313
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            width="100%"
            justifyContent="flex-end"
          >
            <Button
              variant="contained"
              onClick={openPersonalRepairModal}
              sx={{
                background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                color: 'white',
                fontWeight: 600,
                width: { xs: '100%', sm: 'auto' },
                py: 1.5,
                fontSize: '0.9rem',
                '&:hover': {
                  background: 'linear-gradient(135deg, #c0392b 0%, #a93226 100%)',
                },
              }}
            >
              Book a Personal Repair Service
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              onClick={closeDetails}
              sx={{
                width: { xs: '100%', sm: 'auto' },
                py: 1.5,
                fontSize: '0.9rem',
              }}
            >
              Contact Us
            </Button>
            <Button
              onClick={closeDetails}
              variant="outlined"
              sx={{
                width: { xs: '100%', sm: 'auto' },
                py: 1.5,
                fontSize: '0.9rem',
              }}
            >
              Close
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>

      {/* Hero Section */}
      <FadeInSection fullWidth>
        <Box sx={{
          position: 'relative',
          color: 'white',
          py: { xs: 6.5, md: 8.5 },
          textAlign: 'center',
          overflow: 'hidden',
          minHeight: { xs: '53vh', md: '43vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.ctfassets.net/16nm6vz43ids/7g9t8d7WaVz7BM1L9RmrCl/9f42265945660d42d58111bf3e169aab/Repair_or_replace_laptop.png?fm=webp&q=65)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.85)',
            zIndex: 0,
            transform: 'scale(1.05)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(90deg, #FF0000, #FF6B6B, #FF0000, #FF6B6B)',
            zIndex: 1,
          }
        }}>



          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', py: 3.5 }}>
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                fontWeight: 800,
                fontSize: { xs: '2.3rem', md: '3.1rem' },
                color: 'white',
                textShadow: '0 4px 12px rgba(0,0,0,0.7)',
                lineHeight: 1.1,
                mb: 2.5,
                letterSpacing: '0.5px',
              }}
            >
              Expert Laptop Repair Services
            </Typography>

            <Divider sx={{
              width: '100px',
              height: '3px',
              background: 'linear-gradient(90deg, #FFD700, #FFFFFF, #FFD700)',
              backgroundSize: '300% 100%',
              mx: 'auto',
              mb: 3.5,
              borderRadius: '2px',
            }} />

            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 400,
                fontSize: { xs: '1.05rem', md: '1.25rem' },
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.45,
                textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                letterSpacing: '0.23px',
                mb: 4,
              }}
            >
              From screen replacements to software fixes, our certified technicians will get your device back in top shape with fast, reliable, and affordable repairs.
            </Typography>

            <Button
              variant="contained"
              component={Link}
              to="/contact"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#8B0000',
                px: 5,
                py: 1.8,
                fontSize: '1rem',
                textTransform: 'none',
                fontWeight: 700,
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(4px)',
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
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get Started
            </Button>
          </Container>
        </Box>
      </FadeInSection>

      <FadeInSection>
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
                  color: 'text.primary',
                  position: 'relative',
                  display: 'inline-block',
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  animation: 'fadeInUp 1s ease',
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
                Our Repair Services
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.primary',
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
              {repairServices.map((service, index) => (
                <Card
                  key={index}
                  onClick={() => openDetails(service.title)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    bgcolor: theme.palette.mode === 'dark' ? alpha('#2a2a2a', 0.8) : 'white',
                    '&:hover': {
                      transform: 'translateY(-15px)',
                      boxShadow: theme.palette.mode === 'dark' ? `0 20px 40px ${alpha(service.color, 0.3)}` : `0 20px 40px ${alpha(service.color, 0.15)}`,
                      borderColor: service.color,
                    }
                  }}
                >
                  <Box sx={{
                    p: 4,
                    background: theme.palette.mode === 'dark' ? `linear-gradient(135deg, ${alpha(service.color, 0.1)} 0%, ${alpha(service.color, 0.05)} 100%)` : 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '10%',
                      width: '80%',
                      height: '4px',
                      background: service.color,
                      borderRadius: '2px',
                      opacity: 0.6
                    }
                  }}>
                    <Box sx={{
                      color: service.color,
                      bgcolor: 'white',
                      p: 2,
                      borderRadius: '16px',
                      display: 'flex',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      transform: 'scale(1.2)'
                    }}>
                      {service.icon}
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 4, flexGrow: 1, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{
                      fontWeight: 800,
                      mb: 2,
                      color: theme.palette.mode === 'dark' ? '#fff' : '#2d3436',
                      transition: 'color 0.3s ease'
                    }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{
                      color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : '#636e72',
                      lineHeight: 1.7,
                      mb: 3,
                      fontSize: '0.95rem'
                    }}>
                      {service.description}
                    </Typography>

                    <Box sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      justifyContent: 'center',
                      mb: 3
                    }}>
                      {service.features.map((feature, i) => (
                        <Chip
                          key={i}
                          label={feature}
                          size="small"
                          sx={{
                            bgcolor: theme.palette.mode === 'dark' ? alpha(service.color, 0.1) : alpha(service.color, 0.05),
                            color: theme.palette.mode === 'dark' ? alpha('#fff', 0.8) : service.color,
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            border: `1px solid ${alpha(service.color, 0.2)}`
                          }}
                        />
                      ))}
                    </Box>

                    <Button
                      variant="text"
                      endIcon={<ArrowForward />}
                      sx={{
                        color: service.color,
                        fontWeight: 700,
                        '&:hover': {
                          bgcolor: 'transparent',
                          transform: 'translateX(5px)',
                          transition: 'all 0.3s ease'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>
      </FadeInSection>

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

    @keyframes shimmer {
      0% { background-position: 0% 0%; }
      100% { background-position: 400% 0%; }
    }

    @keyframes pulseRed {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.1); }
    }

    @keyframes dividerShimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    @keyframes gridMove {
      0% { background-position: 0 0; }
      100% { background-position: 40px 40px; }
    }

    @keyframes processLine {
      0% { transform: scaleX(0); }
      50% { transform: scaleX(1); }
      100% { transform: scaleX(0); transform-origin: right; }
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.6; }
      100% { transform: scale(1.3); opacity: 0; }
    }

    @keyframes shimmerRed {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>

      {/* Divider Between Sections */}
      <Box sx={{
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(231,76,60,0.3), transparent)',
        my: 2,
      }} />

      {/* Our Simple Repair Process Section */}
      <FadeInSection>
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
            background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(231,76,60,0.03) 0%, rgba(52,152,219,0.03) 100%)' : 'white',
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
                  color: 'text.primary',
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
                  color: 'text.primary',
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
                          border: (theme) => theme.palette.mode === 'dark' ? '4px solid #1e1e1e' : '4px solid #fff',
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
                        color: 'text.primary',
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
                        color: 'text.primary',
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
      </FadeInSection>


      {/* VIDEO SECTION */}
      <FadeInSection fullWidth>
        <Box sx={{
          py: 10,
          background: '#8B0000',
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
        }}>
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.2rem', md: '3rem' }, color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                Watch Our Repair Process in Action
              </Typography>
            </Box>
            <Box sx={{ maxWidth: 1000, mx: 'auto', borderRadius: 4, overflow: 'hidden', boxShadow: '0 0 40px rgba(255, 0, 0, 0.3)', position: 'relative' }}>
              <VideoInView
                src="/videos/Repair_Video.mp4"
                poster="https://images.ctfassets.net/16nm6vz43ids/7g9t8d7WaVz7BM1L9RmrCl/9f42265945660d42d58111bf3e169aab/Repair_or_replace_laptop.png?fm=webp&q=65"
                muted
                loop
                playsInline
                playOnClick={true}
                showControlsOnHover={true}
                sx={{
                  width: '100%',
                  display: 'block',
                  backgroundColor: '#000'
                }}
              />
            </Box>
          </Container>
        </Box>
      </FadeInSection>

      {/* Why Choose Us Section */}
      <FadeInSection fullWidth>
        <Box sx={{
          py: 10,
          background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : '#fff',
          position: 'relative',
        }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '2rem', md: '2.8rem' }, color: 'text.primary' }}>
                Why Choose Our Repair Service?
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 4 }}>
              {whyChooseUs.map((item, index) => (
                <Box key={index} sx={{ textAlign: 'center' }}>
                  <Box sx={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(231, 76, 60, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e74c3c', mb: 2, mx: 'auto' }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </FadeInSection>

      <Footer fullFooter={true} />
    </Box>
  );
};

export default RepairServices;