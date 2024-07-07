import { Container, CssBaseline } from '@mui/material';
import ProductCard from './features/productCard/ProductCard';

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
