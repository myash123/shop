import React from 'react';
import { Box } from "@mui/material";
import ProductDisplay from '../productDisplay/ProductDisplay';
import ActionBar from "../actionBar/ActionBar";
import { useProducts } from '../../hooks/useProducts';

const ProductCard: React.FC = () => {
    const { productList, index } = useProducts();
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" sx={{ width: '100%', maxWidth: '500px' }}>
            <ProductDisplay product={productList[index]} />
            <ActionBar {...productList} />
        </Box>
    );
}

export default ProductCard;
