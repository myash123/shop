import { Box } from '@mui/material';
import { ProductInterface } from '../../interfaces/ProductInterface';
import React from 'react';

const ProductDisplay: React.FC<{ product: ProductInterface | null }> = ({ product }) => {
    return (
        <Box height="600px" display="flex" flexDirection="column" alignItems="center">
            {product ? (
                <img src={product.imageSrc} alt="Product image" width="500px"/>
            ) : (
                <p>No product images available.</p>
            )}
        </Box>
    );
}

export default ProductDisplay;
