import { Box } from '@mui/material';
import { getProducts } from '../../services/ProductService';
import { ProductInterface } from '../../interfaces/ProductInterface';
import { useEffect, useState } from 'react';

const ProductDisplay = () => {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    useEffect(() => {
        const fetchedProducts = getProducts()
        setProducts(fetchedProducts);
        console.log(products);
    }, []);

    return (
    <Box display="flex" flexDirection="column" alignItems="center">
        {products.length > 0 ? (
            <img src={products[1].imageSrc} alt="Product image" width="500px"/>
        ) : (
            <p>No product images available.</p>
        )}
    </Box>
    );
}

export default ProductDisplay
