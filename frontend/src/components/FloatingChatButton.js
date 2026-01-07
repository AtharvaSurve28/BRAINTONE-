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
  Tooltip,
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
    appointmentTime: '',
    message: '',
  });

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

    // Prepare WhatsApp message
    const whatsappNumber = "9082671687"; // Replace with your WhatsApp number
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Appointment Request from BRAINTONE Website*%0A%0A
*👤 Customer Details:*%0A
• *Name:* ${formData.name}%0A
• *Email:* ${formData.email}%0A
• *Phone:* ${formData.phone}%0A
• *Address:* ${formData.address || 'Not provided'}%0A%0A
*📅 Appointment Details:*%0A
• *Date:* ${formData.appointmentDate || 'Not specified'}%0A
• *Time:* ${formData.appointmentTime || 'Not specified'}%0A%0A
*💬 Message:*%0A${formData.message || 'No additional message'}`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSnackbarSeverity('success');
    setSnackbarMessage('Opening WhatsApp to send your appointment request...');
    setSnackbarOpen(true);
    
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
                📅 To book an Personal appointment, click here!
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
                <ChatIcon sx={{ fontSize: 32 }} />
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
              {/* WhatsApp Notification */}
              <Box
                sx={{
                  mb: 4,
                  p: 2,
                  bgcolor: 'rgba(37, 211, 102, 0.1)',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#25D366',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    flexWrap: 'wrap',
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
                    alt="WhatsApp"
                    style={{ width: '20px', height: '20px' }}
                  />
                  Your request will be sent to WhatsApp: 9082671687
                </Typography>
              </Box>

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
                    Customer Details
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

                {/* Appointment Details Section */}
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

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Appointment Date"
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
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Appointment Time"
                        name="appointmentTime"
                        type="time"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccessTimeIcon sx={{ color: '#e74c3c' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
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
                    Additional Message
                  </Typography>

                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Please describe your requirements, laptop issues, or any special requests..."
                  />
                </Box>

                {/* Instructions */}
                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    bgcolor: '#ffecec',
                    borderRadius: '8px',
                    mb: 4,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: '#e74c3c',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 16, color: '#27ae60' }} />
                    How it works:
                  </Typography>
                  <Stack spacing={1.5}>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircleIcon sx={{ fontSize: 16, color: '#27ae60' }} />
                      1. Fill out this form with your details
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircleIcon sx={{ fontSize: 16, color: '#27ae60' }} />
                      2. Click "Send to WhatsApp" button
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircleIcon sx={{ fontSize: 16, color: '#27ae60' }} />
                      3. WhatsApp will open with your message
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircleIcon sx={{ fontSize: 16, color: '#27ae60' }} />
                      4. Just press send to complete your request
                    </Typography>
                  </Stack>
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
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
                        alt="WhatsApp"
                        style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }}
                      />
                    }
                    sx={{
                      px: 4,
                      py: 1.5,
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      color: 'white',
                      fontWeight: 700,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1da851 0%, #0f6d5e 100%)',
                      },
                    }}
                  >
                    Send to WhatsApp
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
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default FloatingChatButton;