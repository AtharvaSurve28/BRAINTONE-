import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  MenuItem,
  Grid,
  Alert,
  CircularProgress,
  Chip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

const LaptopForm = () => {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    brand: '',
    series: '',
    category: '',
    name: '',
    price: '',
    processor: '',
    ram: '',
    storage: '',
    display: '',
    graphics: '',
    images: '',
    bestFor: '',
    condition: 'new',
    specs: ''
  });

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const brands = ['dell', 'hp', 'lenovo', 'asus', 'acer', 'apple', 'msi', 'samsung', 'microsoft'];
  const categories = ['entry', 'mid-range', 'consumer', 'commercial', 'gaming', 'premium'];
  
  const brandSeries = {
    dell: ['inspiron', 'vostro', 'latitude', 'xps', 'gseries', 'alienware'],
    hp: ['15s', 'pavilion', 'envy', 'probook', 'omen', 'victus', 'gseries'],
    lenovo: ['ideapad', 'thinkpad', 'legion', 'loq', 'thinkbook', 'vseries', 'yoga'],
    asus: ['vivobook', 'zenbook', 'rog', 'tuf', 'proart'],
    acer: ['aspire', 'swift', 'predator', 'nitro', 'travelmate'],
    apple: ['macbookair', 'macbookpro'],
    msi: ['katana', 'gseries', 'victor', 'raider', 'titan'],
    samsung: ['galaxybook', 'galaxybookpro', 'galaxybook2in1'],
    microsoft: ['surfacepro', 'surfacelaptop', 'surface go']
  };

  useEffect(() => {
    if (isEdit) {
      fetchLaptop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchLaptop = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/laptops/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return;
      }

      const laptop = await response.json();
      
      // Convert arrays to strings for form
      setFormData({
        ...laptop,
        images: Array.isArray(laptop.images) ? laptop.images.join(', ') : laptop.images || '',
        specs: Array.isArray(laptop.specs) ? laptop.specs.join(', ') : laptop.specs || '',
        price: laptop.price || '',
      });
    } catch (err) {
      setError('Failed to fetch laptop');
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('adminToken');
      
      // Convert form data to API format
      const submitData = {
        ...formData,
        price: Number(formData.price),
        images: formData.images.split(',').map(url => url.trim()).filter(Boolean),
        specs: formData.specs.split(',').map(spec => spec.trim()).filter(Boolean),
      };

      const url = isEdit ? `/api/admin/laptops/${id}` : '/api/admin/laptops';
      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(submitData),
      });

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return;
      }

      const data = await response.json();

      if (response.ok) {
        setSuccess(isEdit ? 'Laptop updated successfully!' : 'Laptop added successfully!');
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1500);
      } else {
        setError(data.message || 'Failed to save laptop');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/admin/dashboard')}
              sx={{ mr: 2 }}
            >
              Back
            </Button>
            <Typography variant="h4" component="h1" fontWeight="bold">
              {isEdit ? 'Edit Laptop' : 'Add New Laptop'}
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 3 }}>
              {success}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Brand *"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                >
                  {brands.map((brand) => (
                    <MenuItem key={brand} value={brand}>
                      {brand.toUpperCase()}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Series *"
                  name="series"
                  value={formData.series}
                  onChange={handleChange}
                  required
                  disabled={!formData.brand}
                >
                  {formData.brand && brandSeries[formData.brand]?.map((series) => (
                    <MenuItem key={series} value={series}>
                      {series}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Category *"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Price (₹) *"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Laptop Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Processor"
                  name="processor"
                  value={formData.processor}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="RAM"
                  name="ram"
                  value={formData.ram}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Storage"
                  name="storage"
                  value={formData.storage}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Display"
                  name="display"
                  value={formData.display}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Graphics"
                  name="graphics"
                  value={formData.graphics}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                >
                  <MenuItem value="new">New</MenuItem>
                  <MenuItem value="used">Used</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Best For"
                  name="bestFor"
                  value={formData.bestFor}
                  onChange={handleChange}
                  placeholder="e.g., Students, Gaming, Business Professionals"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Images (comma separated URLs)"
                  name="images"
                  value={formData.images}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Specs (comma separated)"
                  name="specs"
                  value={formData.specs}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  placeholder="Intel i5-1235U, 16GB RAM, 512GB SSD, Windows 11"
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate('/admin/dashboard')}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={loading ? <CircularProgress size={20} /> : <SaveIcon />}
                    disabled={loading}
                  >
                    {isEdit ? 'Update' : 'Add'} Laptop
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default LaptopForm;

