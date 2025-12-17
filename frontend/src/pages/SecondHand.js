import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SecondHand = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="flex-start">
          <Typography variant="h4" fontWeight={700}>
            Refurbished & 2nd Hand
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Budget-friendly systems, cleaned, tested, and backed by warranty. Ideal for students, offices, and everyday use.
          </Typography>
          <Button component={Link} to="/contact" variant="contained" color="primary">
            Check current stock
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default SecondHand;

