import React from 'react';
import GenericActionButton from '../../../../../common/genericActionButton/GenericActionButton';
import NotInterestedTwoToneIcon from '@mui/icons-material/NotInterestedTwoTone';

const DislikeButton: React.FC = () => {
    const goToNextItem = () => {
        alert('Disliked and going to next');
    }
    return (
        <GenericActionButton ariaLabel='Dislike button' action={goToNextItem}>
            <NotInterestedTwoToneIcon />
        </GenericActionButton>
    )
}

export default DislikeButton;