import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './components/productCard/productCard';

function App() {

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <ProductCard />
      </Container>
    </>
  )
}

export default App
