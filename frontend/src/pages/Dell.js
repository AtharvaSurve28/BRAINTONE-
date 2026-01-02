// frontend/src/pages/Dell.js - FIXED
import React from 'react';
import DynamicBrandTemplate from '../components/DynamicBrandTemplate'; // ← ONE "../" only!

const Dell = () => {
  return <DynamicBrandTemplate brandId="dell" />;
};

export default Dell;