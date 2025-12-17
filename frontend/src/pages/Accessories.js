import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Accessories = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="flex-start">
          <Typography variant="h4" fontWeight={700}>
            Accessories
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Mice, keyboards, headsets, bags, chargers, docks, and more. Everything you need to stay productive and protected.
          </Typography>
          <Button component={Link} to="/contact" variant="contained" color="primary">
            Ask for availability
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Accessories;

