    import React from 'react';
    import { Stack, Box } from '@mui/material';
    import BackButton from '../actionButtons/backButton/BackButton';
    import BuyButton from '../actionButtons/buyButton/BuyButton';
    import DislikeButton from '../actionButtons/dislikeButton/DislikeButton';
    import SaveButton from '../actionButtons/saveButton/SaveButton';

    const ActionBar: React.FC = () => {
        return (
            <Box width="500px">
                <Stack bgcolor="blue"  direction="row" spacing={2} justifyContent="center">
                    <BackButton />
                    <BuyButton />
                    <DislikeButton />
                    <SaveButton />
                </Stack>
            </Box>
        )
    }

    export default ActionBar;
