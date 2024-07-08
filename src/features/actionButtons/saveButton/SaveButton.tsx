import React from 'react';
import GenericActionButton from '../../../common/genericActionButton/GenericActionButton';
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone';
import { ProductListInterface } from '../../../interfaces/ProductInterface';

const SaveButton: React.FC<ProductListInterface> = ({ productList, index }) => {
    const saveAndGoToNext = () => {
        alert('Saved and going to next');
        console.log(productList, index);
    }
    return (
        <GenericActionButton ariaLabel='Back button' action={saveAndGoToNext}>
            <StarRateTwoToneIcon />
        </GenericActionButton>
    )
}

export default SaveButton;