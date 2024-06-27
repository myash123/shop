import React from 'react';
import GenericActionButton from '../../../../../common/genericActionButton/GenericActionButton';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const BuyButton: React.FC = () => {
    const goToBuy = () => {
        alert('go to buy screen');
    }
    return (
        <GenericActionButton ariaLabel='Buy button' action={goToBuy}>
            <ShoppingCartTwoToneIcon />
        </GenericActionButton>
    )
}

export default BuyButton;
