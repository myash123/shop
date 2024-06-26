import React from 'react';
import GenericActionButton from '../../common/genericActionButton/genericActionButton';
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