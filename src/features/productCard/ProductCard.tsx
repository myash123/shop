import React from 'react';
import { Box } from "@mui/material";
import ProductDisplay from '../productDisplay/ProductDisplay';
import ActionBar from "../actionBar/ActionBar";
import { useProducts } from '../../hooks/useProducts';

const ProductCard:React.FC = () => {
    const products = useProducts();
    return(
        <Box display="flex" flexDirection="column" justifyContent="center" sx={{ width: '100%', maxWidth: '500px'}}>
            <ProductDisplay products={products}/>
            <ActionBar />
        </Box>
    )
}

export default ProductCard;