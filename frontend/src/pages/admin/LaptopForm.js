import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API_BASE_URL from '../../apiConfig';
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
  Chip,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';


const LaptopForm = () => {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    brand: '',
    series: '',
    category: [],
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
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);


  const brands = ['dell', 'hp', 'lenovo', 'asus', 'acer', 'apple', 'msi', 'samsung', 'microsoft'];
  const categories = ['entry', 'mid-range', 'consumer', 'commercial', 'gaming', 'premium'];

  const brandSeries = {
    dell: ['inspiron', 'vostro', 'latitude', 'xps', 'gseries', 'alienware', 'dc', 'db'],
    hp: ['15s', 'pavilion', 'envy', 'probook', 'omen', 'victus', 'omnibook', 'gseries', 'aio'],
    lenovo: ['ideapad', 'thinkpad', 'legion', 'loq', 'thinkbook', 'vseries', 'yoga', 'aio'],
    asus: ['vivobook', 'zenbook', 'rog', 'tuf', 'expertbook', 'creator nb', 'aio'],
    acer: ['aspire', 'swift', 'predator', 'nitro', 'travelmate'],
    apple: ['macbookair', 'macbookpro'],
    msi: ['katana', 'stealth', 'vector', 'crosshair', 'summit', 'prestige', 'thin', 'modern', 'venture', 'cyborg', 'gseries', 'raider', 'titan'],
    samsung: ['galaxybook', 'galaxybookpro', 'galaxybook2in1'],
    microsoft: ['surfacepro', 'surfacelaptop', 'surface go']
  };

  useEffect(() => {
    if (isEdit) {
      fetchLaptop();
    }
    return () => {
      // Clean up previews
      previews.forEach(url => URL.revokeObjectURL(url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchLaptop = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/admin/laptops/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return;
      }

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to fetch laptop details');
      }

      const laptop = await response.json();

      // Convert arrays to strings for form
      setFormData({
        ...laptop,
        images: Array.isArray(laptop.images) ? laptop.images : [], // Keep as array for editing check
        specs: Array.isArray(laptop.specs) ? laptop.specs.join(', ') : laptop.specs || '',
        category: Array.isArray(laptop.category) ? laptop.category : (laptop.category ? [laptop.category] : []),
        price: laptop.price || '',
      });

      if (Array.isArray(laptop.images)) {
        setPreviews(laptop.images.map(img => img.startsWith('http') ? img : `${API_BASE_URL}${img}`));
      }
    } catch (err) {
      console.error('Error fetching laptop:', err);
      setError(err.message || 'Failed to fetch laptop');
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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Check total limit (existing + newly selected)
    const currentTotal = previews.length;
    const remaining = 4 - currentTotal;

    if (remaining <= 0) {
      setError('Maximum 4 images allowed');
      return;
    }

    const filesToAdd = files.slice(0, remaining);

    // Important: We store the file objects in an array that matches the order in previews
    // To make removal easier, let's keep track which preview is a file
    const newPreviews = filesToAdd.map(file => ({
      url: URL.createObjectURL(file),
      file: file
    }));

    setPreviews(prev => [...prev, ...newPreviews.map(p => p.url)]);
    setSelectedFiles(prev => [...prev, ...filesToAdd]);
  };

  const removeImage = (index) => {
    const previewToRemove = previews[index];

    // Revoke object URL if it's a local one
    if (previewToRemove.startsWith('blob:')) {
      URL.revokeObjectURL(previewToRemove);

      // Calculate which file in selectedFiles to remove
      // It's the Nth blob in the previews array
      const blobIndexBefore = previews.slice(0, index).filter(p => p.startsWith('blob:')).length;
      setSelectedFiles(prev => prev.filter((_, i) => i !== blobIndexBefore));
    }

    setPreviews(prev => prev.filter((_, i) => i !== index));

    // Also remove from formData.images if it was an existing server image
    if (!previewToRemove.startsWith('blob:')) {
      setFormData(prev => ({
        ...prev,
        images: Array.isArray(prev.images) ? prev.images.filter(img => {
          const fullUrl = img.startsWith('http') ? img : `${API_BASE_URL}${img}`;
          return fullUrl !== previewToRemove;
        }) : []
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('adminToken');

      const formDataToSend = new FormData();

      // Append all text fields
      Object.keys(formData).forEach(key => {
        if (key === 'images') return; // Handled below
        if (key === 'specs') {
          const specsArray = formData.specs.split(',').map(spec => spec.trim()).filter(Boolean);
          formDataToSend.append('specs', JSON.stringify(specsArray));
        } else if (key === 'category') {
          formDataToSend.append('category', JSON.stringify(formData.category));
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Append files
      if (selectedFiles.length > 0) {
        selectedFiles.forEach(file => {
          formDataToSend.append('images', file);
        });
      }

      // Send the list of existing Cloudinary images we want to keep
      if (isEdit) {
        const existingImages = previews
          .filter(p => !p.startsWith('blob:'))
          .map(p => p.replace(API_BASE_URL, '')); // Strip base URL for DB consistency

        formDataToSend.append('existingImages', JSON.stringify(existingImages));
      }

      const url = isEdit ? `${API_BASE_URL}/api/admin/laptops/${id}` : `${API_BASE_URL}/api/admin/laptops`;
      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataToSend,
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
        const errorMessage = typeof data.message === 'object'
          ? JSON.stringify(data.message)
          : (data.message || 'Failed to save laptop');
        setError(errorMessage);
      }
    } catch (err) {
      console.error('Submit error:', err);
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
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  select
                  label="Brand *"
                  name="brand"
                  value={formData.brand || ''}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">
                    <em>Select Brand</em>
                  </MenuItem>
                  {brands.map((brand) => (
                    <MenuItem key={brand} value={brand}>
                      {brand.toUpperCase()}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  select
                  label="Series"
                  name="series"
                  value={formData.series || ''}
                  onChange={handleChange}
                  disabled={!formData.brand}
                >
                  <MenuItem value="">
                    <em>{formData.brand ? 'Select Series' : 'Select Brand First'}</em>
                  </MenuItem>
                  {formData.brand && brandSeries[formData.brand]?.map((series) => (
                    <MenuItem key={series} value={series}>
                      {series}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  select
                  label="Category"
                  name="category"
                  value={formData.category} // Ensure it is an array
                  onChange={handleChange}
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} size="small" />
                        ))}
                      </Box>
                    ),
                  }}
                >
                  <MenuItem value="" disabled>
                    <em>Select Categories</em>
                  </MenuItem>
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Price (₹)"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Laptop Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Processor"
                  name="processor"
                  value={formData.processor}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="RAM"
                  name="ram"
                  value={formData.ram}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Storage"
                  name="storage"
                  value={formData.storage}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Display"
                  name="display"
                  value={formData.display}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Graphics"
                  name="graphics"
                  value={formData.graphics}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  select
                  label="Condition"
                  name="condition"
                  value={formData.condition || ''}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Select Condition</em>
                  </MenuItem>
                  <MenuItem value="new">New</MenuItem>
                  <MenuItem value="used">Used</MenuItem>
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Warranty"
                  name="warranty"
                  value={formData.warranty}
                  onChange={handleChange}
                  placeholder="e.g., 1 Year On-site"
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Keyboard"
                  name="keyboard"
                  value={formData.keyboard}
                  onChange={handleChange}
                  placeholder="e.g., Backlit, RGB"
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Laptop Color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="e.g., Silver, Carbon Black"
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Operating System"
                  name="os"
                  value={formData.os}
                  onChange={handleChange}
                  placeholder="e.g., Windows 11 Home"
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Best For"
                  name="bestFor"
                  value={formData.bestFor}
                  onChange={handleChange}
                  placeholder="e.g., Students, Gaming, Business Professionals"
                />
              </Grid>

              <Grid size={12}>
                <Typography variant="subtitle1" gutterBottom fontWeight="600">
                  Laptop Photos (Max 4)
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  sx={{ py: 2, mb: 2, borderStyle: 'dashed' }}
                >
                  Upload Photos
                  <input
                    type="file"
                    hidden
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Button>

                {previews.length > 0 && (
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    {previews.map((url, index) => (
                      <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                        <Paper
                          sx={{
                            height: 120,
                            width: '100%',
                            backgroundImage: `url(${url})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            borderRadius: 2,
                            border: '1px solid #ddd',
                            position: 'relative',
                            bgcolor: '#fff'
                          }}
                        >
                          <IconButton
                            size="small"
                            onClick={() => removeImage(index)}
                            sx={{
                              position: 'absolute',
                              top: 4,
                              right: 4,
                              bgcolor: 'rgba(255, 255, 255, 0.8)',
                              '&:hover': {
                                bgcolor: 'rgba(255, 0, 0, 0.1)',
                                color: 'error.main'
                              }
                            }}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                )}
                <Typography variant="caption" color="textSecondary">
                  {isEdit ? 'Uploading new photos will replace existing ones.' : 'Please upload clear photos of the laptop.'}
                </Typography>
              </Grid>


              <Grid size={12}>
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

              <Grid size={12}>
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

