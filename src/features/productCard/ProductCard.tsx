import React from 'react';
import { Box } from "@mui/material";
import ProductDisplay from '../productDisplay/ProductDisplay';
import ActionBar from "../actionBar/ActionBar";

const ProductCard:React.FC = () => {
    return(
        <Box display="flex" flexDirection="column" justifyContent="center" sx={{ width: '100%', maxWidth: '500px'}}>
            <ProductDisplay />
            <ActionBar />
        </Box>
    )
}

export default ProductCard;