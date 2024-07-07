import { Box } from '@mui/material';
import { ProductListInterface } from '../../interfaces/ProductInterface';
import React from 'react';

const ProductDisplay: React.FC<ProductListInterface> = ({ products }) => {
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

export default ProductDisplay;
