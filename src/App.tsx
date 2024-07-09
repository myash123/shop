import { Container, CssBaseline } from '@mui/material';
import ProductCard from './features/productCard/ProductCard';
import UtilityBar from './features/utilityBar/UtilityBar';

function App() {

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <UtilityBar />
        <ProductCard />
      </Container>
    </>
  )
}

export default App
