import React from 'react';
import GenericActionButton from '../../../common/genericActionButton/GenericActionButton';
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone';

const SaveButton: React.FC = () => {
    const saveAndGoToNext = () => {
        alert('Saved and going to next');
    }
    return (
        <GenericActionButton ariaLabel='Back button' action={saveAndGoToNext}>
            <StarRateTwoToneIcon />
        </GenericActionButton>
    )
}

export default SaveButton;