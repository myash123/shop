import React from 'react';
import GenericActionButton from '../../../common/genericActionButton/GenericActionButton';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
import { ProductListInterface } from '../../../interfaces/ProductInterface';

const BackButton: React.FC<ProductListInterface> = ({ productList, index }) => {
    const goBack = () => {
        alert('going back');
        console.log(productList, index);
    }
    return (
        <GenericActionButton ariaLabel='Back button' action={goBack}>
            <ReplyAllRoundedIcon />
        </GenericActionButton>
    )
}

export default BackButton