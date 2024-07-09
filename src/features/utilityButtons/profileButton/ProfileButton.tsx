import React from 'react';
import GenericActionButton from '../../../common/genericActionButton/GenericActionButton';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';

const ProfileButton:React.FC = () => {
    const handleProfileButtonClick = () => {
        alert('You clicked on your profile');
    }
    return (
        <GenericActionButton ariaLabel='Profile button' action={handleProfileButtonClick}>
            <AccountBoxTwoToneIcon />
        </GenericActionButton>
    );
}

export default ProfileButton;