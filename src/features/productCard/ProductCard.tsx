import React from 'react';
import { Box } from "@mui/material";
import ProductDisplay from '../productDisplay/ProductDisplay';
import ActionBar from "../actionBar/ActionBar";
import { useProducts } from '../../hooks/useProducts';

const ProductCard: React.FC = () => {
    const { productList, index, updateProductIndex } = useProducts();
    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            overflow="hidden"
            sx={{ width: '100%', maxWidth: '500px'}}
        >
            <ProductDisplay product={productList[index]} />
            <ActionBar productList={productList} index={index} updateProductIndex={updateProductIndex} />
        </Box>
    );
}

export default ProductCard;
