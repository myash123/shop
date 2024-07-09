import React from 'react';
import { Box, Stack } from '@mui/material';
import NotificationsButton from '../utilityButtons/notificationsButton/NotificationsButton';
import ProfileButton from '../utilityButtons/profileButton/ProfileButton';

const UtilityBar:React.FC = () => {
    return (
        <Box width="500px">
            <Stack bgcolor="red" direction="row" spacing={2} justifyContent="right">
                <NotificationsButton />
                <ProfileButton />
            </Stack>
        </Box>
    )
}

export default UtilityBar;