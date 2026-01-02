import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SecurityIcon from '@mui/icons-material/Security';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [warningText, setWarningText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const navigate = useNavigate();
  
  const warningMessages = [
    "⚠️ Note: Do not share credentials with anyone.",
    "⚠️ Warning: Restricted access only.",
    "⚠️ Security: Log out after each session.",
    "⚠️ Alert: Unauthorized access is prohibited."
  ];

  // Typing/Erasing Effect for Warning
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % warningMessages.length;
      const fullText = warningMessages[i];
      
      if (!isDeleting) {
        setWarningText(fullText.substring(0, warningText.length + 1));
        setTypingSpeed(100);
        
        if (warningText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setWarningText(fullText.substring(0, warningText.length - 1));
        setTypingSpeed(50);
        
        if (warningText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [warningText, isDeleting, loopNum, typingSpeed, warningMessages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminUser', JSON.stringify(data.admin));
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(-45deg, #f8f0f0, #fff5f5, #fef0f0, #ffeaea)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 8s ease infinite',
        py: 2,
        '@keyframes gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      }}
    >
      <Container maxWidth="xs">
        {/* Security Warning with Typing Effect */}
        <Box
          sx={{
            mb: 3,
            p: 2,
            borderRadius: 1.5,
            backgroundColor: 'rgba(226, 35, 26, 0.08)',
            border: '1px solid rgba(226, 35, 26, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            height: '52px',
            animation: 'pulse 3s infinite',
            '@keyframes pulse': {
              '0%': { boxShadow: '0 0 0 0 rgba(226, 35, 26, 0.2)' },
              '70%': { boxShadow: '0 0 0 8px rgba(226, 35, 26, 0)' },
              '100%': { boxShadow: '0 0 0 0 rgba(226, 35, 26, 0)' }
            }
          }}
        >
          <SecurityIcon sx={{ 
            color: '#E2231A', 
            fontSize: 22,
            animation: 'iconPulse 2s infinite',
            '@keyframes iconPulse': {
              '0%, 100%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.1)' }
            }
          }} />
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#E2231A', 
              fontWeight: 500, 
              fontSize: '0.85rem',
              minHeight: '20px',
              fontFamily: "'Courier New', monospace",
              letterSpacing: '0.5px'
            }}
          >
            {warningText}
            <Box 
              component="span" 
              sx={{ 
                animation: 'blink 1s infinite',
                '@keyframes blink': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0 }
                }
              }}
            >
              ▋
            </Box>
          </Typography>
        </Box>

        <Paper 
          elevation={0}
          sx={{ 
            p: 4, 
            borderRadius: 3,
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 32px rgba(226, 35, 26, 0.15)',
            border: '1px solid rgba(226, 35, 26, 0.15)',
            position: 'relative',
            minHeight: '420px',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: 'linear-gradient(90deg, #E2231A, #FF6B6B, #E2231A)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s infinite linear',
              borderRadius: '3px 3px 0 0',
              '@keyframes shimmer': {
                '0%': { backgroundPosition: '-200% 0' },
                '100%': { backgroundPosition: '200% 0' }
              }
            }
          }}
        >
          {/* Logo Section */}
          <Box sx={{ textAlign: 'center', mb: 3.5 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'auto',
                padding: '10px 24px',
                borderRadius: 2,
                backgroundColor: '#E2231A',
                mb: 2,
                animation: 'logoPulse 2.5s infinite',
                '@keyframes logoPulse': {
                  '0%': { 
                    transform: 'scale(1)', 
                    boxShadow: '0 0 0 0 rgba(226, 35, 26, 0.4)' 
                  },
                  '70%': { 
                    transform: 'scale(1.02)', 
                    boxShadow: '0 0 0 12px rgba(226, 35, 26, 0)' 
                  },
                  '100%': { 
                    transform: 'scale(1)', 
                    boxShadow: '0 0 0 0 rgba(226, 35, 26, 0)' 
                  }
                }
              }}
            >
              <Typography 
                sx={{ 
                  fontSize: 24, 
                  fontWeight: 900, 
                  color: 'white',
                  letterSpacing: '1px',
                  fontFamily: "'Segoe UI', 'Roboto', sans-serif",
                  background: 'linear-gradient(to right, #ffffff, #ffeaea)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                BRAINTONE
              </Typography>
            </Box>
            <Typography variant="h5" component="h1" fontWeight="bold" sx={{ mb: 0.5 }}>
              Admin Portal
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
              Secure Authentication Required
            </Typography>
          </Box>

          {/* Error Alert */}
          {error && (
            <Alert 
              severity="error" 
              sx={{ 
                mb: 2.5, 
                py: 1,
                fontSize: '0.875rem',
                animation: 'shake 0.5s',
                '@keyframes shake': {
                  '0%, 100%': { transform: 'translateX(0)' },
                  '25%': { transform: 'translateX(-4px)' },
                  '75%': { transform: 'translateX(4px)' }
                }
              }}
              onClose={() => setError('')}
            >
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <Box sx={{ mb: 2.5 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fefafa',
                    borderRadius: 2,
                    height: '48px',
                    '&:hover fieldset': {
                      borderColor: '#E2231A',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E2231A',
                      borderWidth: 2,
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: '#E2231A', fontSize: 22 }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Password Field */}
            <Box sx={{ mb: 2.5 }}>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fefafa',
                    borderRadius: 2,
                    height: '48px',
                    '&:hover fieldset': {
                      borderColor: '#E2231A',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E2231A',
                      borderWidth: 2,
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: '#E2231A', fontSize: 22 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ 
                          color: '#E2231A',
                          '&:hover': { backgroundColor: 'rgba(226, 35, 26, 0.08)' }
                        }}
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Remember Me Only */}
            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    sx={{
                      color: '#E2231A',
                      '&.Mui-checked': { color: '#E2231A' },
                    }}
                  />
                }
                label={<Typography variant="body2">Remember this device</Typography>}
              />
            </Box>

            {/* Login Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                py: 1.25,
                backgroundColor: '#E2231A',
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                position: 'relative',
                overflow: 'hidden',
                height: '48px',
                '&:hover': {
                  backgroundColor: '#c41e1a',
                  '&::before': {
                    transform: 'translateX(100%)',
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.8s',
                }
              }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Sign In to Dashboard'
              )}
            </Button>
          </form>

          {/* Footer Note */}
          <Box sx={{ mt: 3, pt: 2.5, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <Typography variant="caption" align="center" sx={{ color: '#9e9e9e', fontSize: '0.75rem' }}>
              By logging in, you agree to our{' '}
              <Box 
                component="span" 
                sx={{ 
                  color: '#E2231A', 
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  '&:hover': { opacity: 0.8 }
                }}
                onClick={() => window.open('/terms', '_blank')}
              >
                Terms
              </Box>{' '}
              &{' '}
              <Box 
                component="span" 
                sx={{ 
                  color: '#E2231A', 
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  '&:hover': { opacity: 0.8 }
                }}
                onClick={() => window.open('/privacy', '_blank')}
              >
                Privacy Policy
              </Box>
            </Typography>
          </Box>
        </Paper>

        {/* Copyright Footer */}
        <Box sx={{ textAlign: 'center', mt: 2.5 }}>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Braintone • Restricted Access
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLogin;