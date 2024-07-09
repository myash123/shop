import React from 'react';
import GenericActionButton from '../../../common/genericActionButton/GenericActionButton';
import CircleNotificationsTwoToneIcon from '@mui/icons-material/CircleNotificationsTwoTone';

const NotificationsButton:React.FC = () => {
    const handleNotificationsButtonClick = () => {
        alert('You clicked notifications');
    }
    return (
        <GenericActionButton ariaLabel='Notification button' action={handleNotificationsButtonClick}>
            <CircleNotificationsTwoToneIcon />
        </GenericActionButton>
    );
}

export default NotificationsButton;