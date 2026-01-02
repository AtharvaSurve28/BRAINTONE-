import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Card,
  CardContent,
  Avatar,
  Tooltip,
  LinearProgress,
  alpha,
  useTheme
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import LaptopIcon from '@mui/icons-material/Laptop';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningIcon from '@mui/icons-material/Warning';
import RefreshIcon from '@mui/icons-material/Refresh';

const AdminDashboard = () => {
  const [laptops, setLaptops] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    categories: {},
    brands: {},
    averagePrice: 0,
    topLaptop: null
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [deleteDialog, setDeleteDialog] = useState({ open: false, laptop: null });
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    fetchLaptops();
  }, []);

  useEffect(() => {
    if (laptops.length > 0) {
      calculateStats();
    }
  }, [laptops]);

  const calculateStats = () => {
    const categories = {};
    const brands = {};
    let totalPrice = 0;
    let topLaptop = laptops[0];

    laptops.forEach(laptop => {
      // Normalize categories - combine all mid-range variations into one
      let category = laptop.category || 'Uncategorized';
      
      // Combine all mid-range variations
      if (category.toLowerCase().includes('mid') || category.toLowerCase().includes('mid-range')) {
        category = 'Mid-Range';
      }
      
      categories[category] = (categories[category] || 0) + 1;

      // Brands
      const brand = laptop.brand || 'Unknown';
      brands[brand] = (brands[brand] || 0) + 1;

      // Total price
      if (laptop.price) {
        totalPrice += laptop.price;
      }

      // Top laptop (highest price)
      if (laptop.price > (topLaptop?.price || 0)) {
        topLaptop = laptop;
      }
    });

    setStats({
      total: laptops.length,
      categories,
      brands,
      averagePrice: laptops.length > 0 ? Math.round(totalPrice / laptops.length) : 0,
      topLaptop
    });
  };

  const fetchLaptops = async () => {
    try {
      setRefreshing(true);
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/laptops', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
        return;
      }

      const data = await response.json();
      setLaptops(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch laptops. Please try again.');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/laptops/${deleteDialog.laptop._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setLaptops(laptops.filter(l => l._id !== deleteDialog.laptop._id));
        setDeleteDialog({ open: false, laptop: null });
      }
    } catch (err) {
      setError('Failed to delete laptop');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const getBrandColor = (brand) => {
    const colors = {
      dell: '#E2231A',
      hp: '#0096D6',
      lenovo: '#E2231A',
      asus: '#000000',
      acer: '#83B81A',
      apple: '#000000',
      msi: '#FF0000',
      samsung: '#1428A0',
      microsoft: '#0078D4',
      unknown: '#666666'
    };
    return colors[brand?.toLowerCase()] || colors.unknown;
  };

  const getCategoryColor = (category) => {
    const colors = {
      gaming: '#FF6B6B',
      business: '#4ECDC4',
      student: '#45B7D1',
      premium: '#96CEB4',
      'mid-range': '#6C5CE7', // Unified mid-range color
      budget: '#FFEAA7',
      workstation: '#DDA0DD',
      '2-in-1': '#98D8C8',
      ultrabook: '#FFA726'
    };
    return colors[category?.toLowerCase()] || '#BDC3C7';
  };

  // Filter and normalize categories
  const filteredLaptops = activeFilter === 'all' 
    ? laptops 
    : laptops.filter(laptop => {
        let category = laptop.category || 'Uncategorized';
        // Normalize to single mid-range category
        if (category.toLowerCase().includes('mid') || category.toLowerCase().includes('mid-range')) {
          category = 'Mid-Range';
        }
        return category.toLowerCase() === activeFilter.toLowerCase();
      });

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)'
      }}>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={60} thickness={4} sx={{ color: '#E2231A', mb: 3 }} />
          <Typography variant="h6" color="text.secondary">
            Loading Dashboard...
          </Typography>
        </Box>
      </Box>
    );
  }

  // Get unique categories from laptops
  const getUniqueCategories = () => {
    const categorySet = new Set();
    laptops.forEach(laptop => {
      let category = laptop.category || 'Uncategorized';
      // Normalize mid-range categories
      if (category.toLowerCase().includes('mid') || category.toLowerCase().includes('mid-range')) {
        category = 'Mid-Range';
      }
      categorySet.add(category);
    });
    return Array.from(categorySet);
  };

  const uniqueCategories = getUniqueCategories();

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8f0f0 0%, #fef0f0 100%)',
      pb: 6 
    }}>
      {/* Header */}
      <Box sx={{ 
        background: 'linear-gradient(90deg, #E2231A 0%, #c41e1a 100%)',
        color: 'white',
        py: 3,
        mb: 4,
        boxShadow: '0 4px 20px rgba(226, 35, 26, 0.15)'
      }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ 
                bgcolor: 'white', 
                width: 48, 
                height: 48,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <DashboardIcon sx={{ color: '#E2231A', fontSize: 28 }} />
              </Avatar>
              <Box>
                <Typography variant="h5" component="h1" fontWeight="bold">
                  BRAINTONE Admin
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.875rem' }}>
                  Laptop Inventory Management
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Tooltip title="Refresh Data">
                <IconButton 
                  onClick={fetchLaptops} 
                  disabled={refreshing}
                  sx={{ 
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
                  }}
                >
                  <RefreshIcon />
                </IconButton>
              </Tooltip>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => navigate('/admin/laptops/new')}
                sx={{ 
                  backgroundColor: 'white',
                  color: '#E2231A',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#f5f5f5'
                  }
                }}
              >
                Add New Laptop
              </Button>
              <Tooltip title="Logout">
                <IconButton 
                  onClick={handleLogout}
                  sx={{ 
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
                  }}
                >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        {refreshing && (
          <LinearProgress 
            sx={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              zIndex: 9999,
              backgroundColor: '#E2231A'
            }} 
          />
        )}

        {/* Error Alert */}
        {error && (
          <Alert 
            severity="error" 
            sx={{ 
              mb: 3, 
              borderRadius: 2,
              animation: 'slideDown 0.3s',
              '@keyframes slideDown': {
                '0%': { transform: 'translateY(-20px)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 }
              }
            }}
            onClose={() => setError('')}
            icon={<WarningIcon />}
          >
            {error}
          </Alert>
        )}

        {/* Filter Chips with dark text */}
        <Paper sx={{ p: 2, mb: 3, borderRadius: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            <Typography variant="subtitle1" sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
              Filter by Category:
            </Typography>
            <Chip
              label="All"
              clickable
              color={activeFilter === 'all' ? 'primary' : 'default'}
              onClick={() => setActiveFilter('all')}
              sx={{ 
                fontWeight: activeFilter === 'all' ? 600 : 500,
                backgroundColor: activeFilter === 'all' ? '#E2231A' : '#f5f5f5',
                color: activeFilter === 'all' ? 'white' : '#333333',
                '&:hover': {
                  backgroundColor: activeFilter === 'all' ? '#c41e1a' : '#e0e0e0'
                }
              }}
            />
            {uniqueCategories.map(category => {
              const isActive = activeFilter === category.toLowerCase();
              const categoryColor = getCategoryColor(category);
              
              return (
                <Chip
                  key={category}
                  label={category}
                  clickable
                  sx={{ 
                    backgroundColor: isActive 
                      ? categoryColor 
                      : alpha(categoryColor, 0.15),
                    color: isActive ? 'white' : '#333333', // Dark text for all categories
                    fontWeight: isActive ? 600 : 500,
                    border: `1px solid ${alpha(categoryColor, 0.3)}`,
                    '&:hover': {
                      backgroundColor: isActive 
                        ? categoryColor 
                        : alpha(categoryColor, 0.25),
                      transform: 'translateY(-1px)'
                    }
                  }}
                  onClick={() => setActiveFilter(category.toLowerCase())}
                />
              );
            })}
          </Box>
        </Paper>

        {/* Laptops Table */}
        <Paper sx={{ 
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          position: 'relative'
        }}>
          <Box sx={{ 
            p: 3, 
            backgroundColor: '#E2231A',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography variant="h6" component="h2" fontWeight="bold">
              <LaptopIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Laptop Inventory ({filteredLaptops.length})
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {activeFilter === 'all' ? 'All Categories' : `Filtered by: ${activeFilter}`}
              </Typography>
              <Chip 
                label={`${filteredLaptops.length} of ${laptops.length}`} 
                size="small" 
                sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
              />
            </Box>
          </Box>
          
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ 
                  backgroundColor: '#fafafa',
                  '& th': { 
                    fontWeight: 600, 
                    fontSize: '0.875rem',
                    borderBottom: '2px solid #eee',
                    color: '#333333'
                  }
                }}>
                  <TableCell>Brand</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Processor</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredLaptops.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ py: 8 }}>
                      <Box sx={{ textAlign: 'center' }}>
                        <LaptopIcon sx={{ fontSize: 60, color: '#ddd', mb: 2 }} />
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                          No laptops found
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                          {activeFilter === 'all' 
                            ? 'Add your first laptop to get started!' 
                            : `No laptops found in "${activeFilter}" category`}
                        </Typography>
                        {activeFilter !== 'all' && (
                          <Button 
                            variant="outlined" 
                            onClick={() => setActiveFilter('all')}
                            sx={{ mr: 2 }}
                          >
                            Show All Laptops
                          </Button>
                        )}
                        <Button 
                          variant="contained" 
                          startIcon={<AddIcon />}
                          onClick={() => navigate('/admin/laptops/new')}
                          sx={{ backgroundColor: '#E2231A' }}
                        >
                          Add New Laptop
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredLaptops.map((laptop) => {
                    // Normalize category for display
                    let displayCategory = laptop.category || 'Uncategorized';
                    if (displayCategory.toLowerCase().includes('mid') || displayCategory.toLowerCase().includes('mid-range')) {
                      displayCategory = 'Mid-Range';
                    }
                    
                    return (
                      <TableRow 
                        key={laptop._id} 
                        hover 
                        sx={{ 
                          '&:hover': { backgroundColor: '#f9f9f9' },
                          transition: 'background-color 0.2s'
                        }}
                      >
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{ 
                              width: 10, 
                              height: 10, 
                              borderRadius: '50%', 
                              backgroundColor: getBrandColor(laptop.brand)
                            }} />
                            <Typography variant="body2" fontWeight={500} color="#333333">
                              {laptop.brand || 'Unknown'}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography variant="body2" fontWeight={500} color="#333333">
                              {laptop.name || 'Unnamed'}
                            </Typography>
                            <Typography variant="caption" color="#666666">
                              {laptop.series || 'No series'}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={displayCategory} 
                            size="small" 
                            sx={{ 
                              backgroundColor: alpha(getCategoryColor(displayCategory), 0.15),
                              color: '#333333', // Dark text for category chips
                              fontWeight: 500,
                              border: `1px solid ${alpha(getCategoryColor(displayCategory), 0.3)}`
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" fontWeight={600} color="#333333">
                            ₹{laptop.price?.toLocaleString() || '0'}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ maxWidth: 200 }}>
                          <Tooltip title={laptop.processor || 'N/A'} arrow>
                            <Typography variant="body2" noWrap color="#333333">
                              {laptop.processor || 'Not specified'}
                            </Typography>
                          </Tooltip>
                        </TableCell>
                        <TableCell align="center">
                          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                            <Tooltip title="Edit">
                              <IconButton
                                size="small"
                                sx={{ 
                                  backgroundColor: alpha('#1976d2', 0.1),
                                  '&:hover': { backgroundColor: alpha('#1976d2', 0.2) }
                                }}
                                onClick={() => navigate(`/admin/laptops/edit/${laptop._id}`)}
                              >
                                <EditIcon fontSize="small" sx={{ color: '#1976d2' }} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton
                                size="small"
                                sx={{ 
                                  backgroundColor: alpha('#E2231A', 0.1),
                                  '&:hover': { backgroundColor: alpha('#E2231A', 0.2) }
                                }}
                                onClick={() => setDeleteDialog({ open: true, laptop })}
                              >
                                <DeleteIcon fontSize="small" sx={{ color: '#E2231A' }} />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Brand Distribution */}
        {Object.keys(stats.brands).length > 0 && (
          <Paper sx={{ p: 3, mt: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom fontWeight={600} color="#333333">
              Brand Distribution
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(stats.brands).map(([brand, count]) => (
                <Grid item xs={6} sm={4} md={3} key={brand}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    backgroundColor: alpha(getBrandColor(brand), 0.05),
                    border: `1px solid ${alpha(getBrandColor(brand), 0.2)}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      backgroundColor: getBrandColor(brand),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Typography variant="caption" sx={{ color: 'white', fontWeight: 'bold' }}>
                        {brand.charAt(0).toUpperCase()}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" fontWeight={600} color="#333333">
                        {brand}
                      </Typography>
                      <Typography variant="body2" color="#666666">
                        {count} {count === 1 ? 'laptop' : 'laptops'}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog 
          open={deleteDialog.open} 
          onClose={() => setDeleteDialog({ open: false, laptop: null })}
          PaperProps={{
            sx: { borderRadius: 3 }
          }}
        >
          <DialogTitle sx={{ 
            backgroundColor: '#fafafa',
            borderBottom: '1px solid #eee',
            fontWeight: 600,
            color: '#333333'
          }}>
            <WarningIcon sx={{ mr: 1, color: '#E2231A', verticalAlign: 'middle' }} />
            Confirm Deletion
          </DialogTitle>
          <DialogContent sx={{ pt: 3 }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Avatar sx={{ 
                bgcolor: alpha('#E2231A', 0.1), 
                width: 60, 
                height: 60,
                mx: 'auto',
                mb: 2
              }}>
                <DeleteIcon sx={{ color: '#E2231A', fontSize: 30 }} />
              </Avatar>
              <Typography variant="h6" gutterBottom color="#333333">
                Delete "{deleteDialog.laptop?.name}"?
              </Typography>
              <Typography variant="body2" color="#666666" paragraph>
                This action will permanently remove the laptop from your inventory.
                This cannot be undone.
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button 
              onClick={() => setDeleteDialog({ open: false, laptop: null })}
              sx={{ 
                color: '#666666',
                '&:hover': { backgroundColor: '#f5f5f5' }
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleDelete} 
              variant="contained"
              startIcon={<DeleteIcon />}
              sx={{ 
                backgroundColor: '#E2231A',
                '&:hover': { backgroundColor: '#c41e1a' }
              }}
            >
              Delete Permanently
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default AdminDashboard;

