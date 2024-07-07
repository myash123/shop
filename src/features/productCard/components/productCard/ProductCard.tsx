import React from 'react';
import { Container } from "@mui/material";
import ProductImage from '../productImage/ProductImage';
import ActionBar from "../actionBar/ActionBar";

const ProductCard:React.FC = () => {
    return(
        <Container>
            <ProductImage />
            <ActionBar />
        </Container>
    )
}

export default ProductCard;