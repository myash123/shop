import React from 'react';
import GenericActionButton from '../../../common/genericActionButton/GenericActionButton';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { ProductListInterface } from '../../../interfaces/ProductInterface';

const BuyButton: React.FC<ProductListInterface> = ({ productList, index }) => {
    const goToBuy = () => {
        alert('go to buy screen');
        console.log(productList, index)
    }
    return (
        <GenericActionButton ariaLabel='Buy button' action={goToBuy}>
            <ShoppingCartTwoToneIcon />
        </GenericActionButton>
    )
}

export default BuyButton;
