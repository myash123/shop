import { Container, CssBaseline } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './features/productActions/components/productCard/ProductCard';

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
