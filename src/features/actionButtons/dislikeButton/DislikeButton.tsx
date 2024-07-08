import React from 'react';
import GenericActionButton from '../../../common/genericActionButton/GenericActionButton';
import NotInterestedTwoToneIcon from '@mui/icons-material/NotInterestedTwoTone';

interface DislikeButtonProps {
    updateProductIndex: () => void;
}

const DislikeButton: React.FC<DislikeButtonProps> = ({ updateProductIndex }) => {
    
    const handleDislike = () => {
        updateProductIndex();
    };

    return (
        <GenericActionButton ariaLabel='Dislike button' action={handleDislike}>
            <NotInterestedTwoToneIcon />
        </GenericActionButton>
    );
}

export default DislikeButton;
