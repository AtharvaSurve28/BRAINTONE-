// components/FloatingChatButton.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Grid,
  InputAdornment,
  Alert,
  Snackbar,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingChatButton = () => {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    appointmentDate: '',
    selectedTimeSlot: '', // 'Morning' or 'Afternoon'
    appointmentTime: '',
    message: '',
  });

  // YOUR BUSINESS WHATSAPP NUMBER - Message will be sent TO this number
  const BUSINESS_WHATSAPP_NUMBER = "919082014406"; // India: 91 + 9082014406

  // Tooltip animation effect
  useEffect(() => {
    const tooltipInterval = setInterval(() => {
      // Show tooltip for 2 seconds
      setShowTooltip(true);

      // Hide after 2 seconds
      const hideTimeout = setTimeout(() => {
        setShowTooltip(false);
      }, 2000);

      // Clear hide timeout when component unmounts
      return () => clearTimeout(hideTimeout);
    }, 5000); // Show every 5 seconds (2 seconds visible + 3 seconds hidden)

    // Hide tooltip after initial 2 seconds
    const initialHide = setTimeout(() => {
      setShowTooltip(false);
    }, 2000);

    return () => {
      clearInterval(tooltipInterval);
      clearTimeout(initialHide);
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setShowTooltip(false); // Hide tooltip when modal opens
  };

  const handleClose = () => {
    setOpen(false);
    // Reset form on close
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      appointmentDate: '',
      selectedTimeSlot: '',
      appointmentTime: '',
      message: '',
    });
  };

  const handleChange = (e) => {
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
    if (!formData.name || !formData.email || !formData.phone) {
      setSnackbarSeverity('error');
      setSnackbarMessage('Please fill in all required fields: Name, Email, and Phone');
      setSnackbarOpen(true);
      return;
    }

    // Validate phone number (only digits)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setSnackbarSeverity('error');
      setSnackbarMessage('Please enter a valid phone number (at least 10 digits)');
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
      if (!timeStr) return true; // Optional field in this form
      const timeRegex = /^(0?[1-9]|1[0-2])(:([0-5][0-9]))?\s*(AM|PM|am|pm)$/i;
      const match = timeStr.match(timeRegex);
      if (!match) return false;

      let hours = parseInt(match[1]);
      const minutes = match[3] ? parseInt(match[3]) : 0;
      const period = match[4].toUpperCase();

      if (period === 'PM' && hours !== 12) hours += 12;
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

    if (formData.appointmentTime && !validateTime(formData.appointmentTime, formData.selectedTimeSlot)) {
      setSnackbarSeverity('error');
      setSnackbarMessage(`Time must be in the ${formData.selectedTimeSlot} slot (${formData.selectedTimeSlot === 'Morning' ? '11 AM - 12 PM' : '12 PM - 7 PM'})`);
      setSnackbarOpen(true);
      return;
    }

    // Format the message for WhatsApp
    const whatsappMessage = `*📋 NEW APPOINTMENT REQUEST - BRAINTONE*%0A%0A
*👤 CUSTOMER DETAILS:*%0A
• *Name:* ${formData.name}%0A
• *Email:* ${formData.email}%0A
• *Phone:* ${formData.phone}%0A
• *Address:* ${formData.address || 'Not provided'}%0A%0A
*📅 APPOINTMENT DETAILS:*%0A
• *Date:* ${formData.appointmentDate || 'Not specified'}%0A
• *Slot:* ${formData.selectedTimeSlot || 'Not specified'}%0A
• *Time:* ${formData.appointmentTime || 'Not specified'}%0A%0A
*💬 MESSAGE:*%0A${formData.message || 'No additional message'}%0A%0A
*🕒 Submitted:* ${new Date().toLocaleString()}`;

    // Create WhatsApp URL - Message will be sent TO your business number
    const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    const newWindow = window.open(whatsappUrl, '_blank');

    // Check if popup was blocked
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup was blocked
      setSnackbarSeverity('warning');
      setSnackbarMessage('Popup blocked! Please click this link to send message: ' +
        `<a href="${whatsappUrl}" target="_blank" style="color: white; text-decoration: underline;">Open WhatsApp</a>`);
      setSnackbarOpen(true);
    } else {
      // Popup opened successfully
      setSnackbarSeverity('success');
      setSnackbarMessage('Opening WhatsApp to send appointment request to BRAINTONE...');
      setSnackbarOpen(true);
    }

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      appointmentDate: '',
      appointmentTime: '',
      message: '',
    });

    // Close modal after a delay
    setTimeout(() => {
      handleClose();
    }, 1500);
  };

  // Get today's date for min date
  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <>
      {/* Floating Chat Button with Animated Tooltip */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        {/* Animated Tooltip */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 70,
            right: 0,
            opacity: showTooltip ? 1 : 0,
            transform: showTooltip ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.3s ease-in-out',
            pointerEvents: 'none',
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 1.5,
              borderRadius: 2,
              backgroundColor: '#e74c3c',
              color: 'white',
              position: 'relative',
              maxWidth: 200,
              boxShadow: '0 4px 20px rgba(231,76,60,0.4)',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                right: 20,
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #e74c3c',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  lineHeight: 1.2,
                }}
              >
                📅 Book Appointment / Contact Us
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Chat Button */}
        <IconButton
          onClick={handleOpen}
          sx={{
            width: 56,
            height: 56,
            background: 'linear-gradient(45deg, #e74c3c 30%, #c0392b 90%)',
            color: '#fff',
            boxShadow: '0 4px 20px rgba(231,76,60,0.4)',
            animation: 'float 3s ease-in-out infinite',
            '&:hover': {
              background: 'linear-gradient(45deg, #c0392b 30%, #a93226 90%)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <ChatIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Box>

      {/* Add CSS animation for floating effect */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      {/* Chat Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '95%', sm: '90%', md: '600px' },
              maxHeight: '90vh',
              overflow: 'auto',
              bgcolor: 'background.paper',
              borderRadius: '12px',
              boxShadow: '0 20px 60px rgba(231, 76, 60, 0.3)',
              p: 0,
            }}
          >
            {/* Modal Header */}
            <Box
              sx={{
                p: 3,
                background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <WhatsAppIcon sx={{ fontSize: 32 }} />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Book Appointment / Contact Us
                </Typography>
              </Box>
              <IconButton onClick={handleClose} sx={{ color: 'white' }}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Modal Content */}
            <Box sx={{ p: { xs: 3, md: 4 } }}>


              <form onSubmit={handleSubmit}>
                {/* Customer Details Section */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      color: '#e74c3c',
                      borderBottom: '2px solid #ffecec',
                      pb: 1,
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 20 }} />
                    Your Details
                  </Typography>

                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Full Name *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      placeholder="Enter your full name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon sx={{ color: '#e74c3c' }} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address *"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          placeholder="example@email.com"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon sx={{ color: '#e74c3c' }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number *"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          placeholder="98XXX XXXXX"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PhoneIcon sx={{ color: '#e74c3c' }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>

                    <TextField
                      fullWidth
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      multiline
                      rows={3}
                      variant="outlined"
                      placeholder="Your complete address for service"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HomeIcon sx={{ color: '#e74c3c' }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Stack>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      color: '#e74c3c',
                      borderBottom: '2px solid #ffecec',
                      pb: 1,
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <CalendarTodayIcon sx={{ fontSize: 20 }} />
                    Appointment Details
                  </Typography>

                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Preferred Date"
                      name="appointmentDate"
                      type="date"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarTodayIcon sx={{ color: '#e74c3c' }} />
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        min: getTodayDate(),
                      }}
                    />

                    <Box>
                      <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600, color: '#e74c3c' }}>
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
                          <Typography variant="body1" sx={{ fontWeight: 700, fontSize: { xs: '0.85rem', sm: '1rem' }, color: formData.selectedTimeSlot === 'Morning' ? '#e74c3c' : 'text.primary' }}>
                            Morning
                          </Typography>
                          <Typography variant="caption" sx={{ fontSize: { xs: '0.6rem', sm: '0.75rem' }, color: 'text.secondary', whiteSpace: 'nowrap' }}>
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
                          <Typography variant="body1" sx={{ fontWeight: 700, fontSize: { xs: '0.85rem', sm: '1rem' }, color: formData.selectedTimeSlot === 'Afternoon' ? '#e74c3c' : 'text.primary' }}>
                            Afternoon
                          </Typography>
                          <Typography variant="caption" sx={{ fontSize: { xs: '0.6rem', sm: '0.75rem' }, color: 'text.secondary', whiteSpace: 'nowrap' }}>
                            12 PM - 7 PM
                          </Typography>
                        </Box>
                      </Box>

                      <TextField
                        fullWidth
                        label={`Preferred Time (${formData.selectedTimeSlot === 'Morning' ? '11 AM - 12 PM' : '12 PM - 7 PM'})`}
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        variant="outlined"
                        placeholder="e.g. 11:30 AM"
                        disabled={!formData.selectedTimeSlot}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccessTimeIcon sx={{ color: '#e74c3c' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Stack>
                </Box>

                {/* Message Section */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      color: '#e74c3c',
                      borderBottom: '2px solid #ffecec',
                      pb: 1,
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <ChatIcon sx={{ fontSize: 20 }} />
                    Additional Information
                  </Typography>

                  <TextField
                    fullWidth
                    label="Describe your requirements"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Please describe:
• Type of laptop/service needed
• Specific issues/problems
• Urgency level
• Any special requests"
                  />
                </Box>



                {/* Action Buttons */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    mt: 4,
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={handleClose}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderColor: '#e74c3c',
                      color: '#e74c3c',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: '#c0392b',
                        backgroundColor: 'rgba(231, 76, 60, 0.04)',
                      },
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={
                      <WhatsAppIcon sx={{ color: 'white' }} />
                    }
                    sx={{
                      px: 4,
                      py: 1.5,
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      color: 'white',
                      fontWeight: 700,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1da851 0%, #0f6d5e 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Send to BRAINTONE WhatsApp
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Fade>
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
            backgroundColor: snackbarSeverity === 'success' ? '#25D366' : '#e74c3c',
            color: 'white',
            '& .MuiAlert-icon': {
              color: 'white',
            },
          }}
          iconMapping={{
            success: <WhatsAppIcon />,
            error: <CloseIcon />,
            warning: <WhatsAppIcon />,
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: snackbarMessage }} />
        </Alert>
      </Snackbar>
    </>
  );
};

export default FloatingChatButton;