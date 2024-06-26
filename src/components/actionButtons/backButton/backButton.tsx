import React from 'react';
import GenericActionButton from '../../common/genericActionButton/genericActionButton';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';

const BackButton: React.FC = () => {
    const goBack = () => {
        alert('going back');
    }
    return (
        <GenericActionButton ariaLabel='Back button' action={goBack}>
            <ReplyAllRoundedIcon />
        </GenericActionButton>
    )
}

export default BackButton