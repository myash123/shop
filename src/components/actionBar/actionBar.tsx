import React from 'react';
import { Stack } from '@mui/material';
import BackButton from '../actionButtons/backButton/backButton';
import BuyButton from '../actionButtons/buyButton/buyButton';
import DislikeButton from '../actionButtons/dislikeButton/dislikeButton';
import SaveButton from '../actionButtons/saveButton/saveButton';

const ActionBar: React.FC = () => {
    return (
        <Stack direction="row" spacing={2}>
            <BackButton />
            <BuyButton />
            <DislikeButton />
            <SaveButton />
        </Stack>
    )
}

export default ActionBar;
