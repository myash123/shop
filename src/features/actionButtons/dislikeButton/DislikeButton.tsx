import React from 'react';
import GenericActionButton from '../../../common/genericActionButton/GenericActionButton';
import NotInterestedTwoToneIcon from '@mui/icons-material/NotInterestedTwoTone';
import { goToNextProduct } from '../../../services/ProductService';

const DislikeButton: React.FC = () => {
    return (
        <GenericActionButton ariaLabel='Dislike button' action={goToNextProduct}>
            <NotInterestedTwoToneIcon />
        </GenericActionButton>
    )
}

export default DislikeButton;