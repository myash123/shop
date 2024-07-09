import React from 'react';
import GenericActionButton from '../../../common/genericActionButton/GenericActionButton';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';

interface BackButtonProps {
    updateProductIndex: (shiftValue: number) => void,
}
const BackButton: React.FC<BackButtonProps> = ({ updateProductIndex }) => {
    const handleGoBack = () => {
        updateProductIndex(-1);
    }
    return (
        <GenericActionButton ariaLabel='Back button' action={handleGoBack}>
            <ReplyAllRoundedIcon />
        </GenericActionButton>
    )
}

export default BackButton