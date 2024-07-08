import React from 'react';
import GenericActionButton from '../../../common/genericActionButton/GenericActionButton';
import NotInterestedTwoToneIcon from '@mui/icons-material/NotInterestedTwoTone';
import { goToNextProduct } from '../../../services/ProductService';
import { ProductListInterface } from '../../../interfaces/ProductInterface';

const DislikeButton: React.FC<ProductListInterface> = ({ productList, index }) => {
    const handleDislike = () => {
        const nextProduct = goToNextProduct(productList, index);
        if (nextProduct) {
            alert(nextProduct);
        }
    };

    return (
        <GenericActionButton ariaLabel='Dislike button' action={handleDislike}>
            <NotInterestedTwoToneIcon />
        </GenericActionButton>
    );
}

export default DislikeButton;
