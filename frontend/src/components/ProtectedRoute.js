import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      // Verify token by making a test API call
      try {
        const response = await fetch('/api/admin/laptops', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          // Token is invalid
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminUser');
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

