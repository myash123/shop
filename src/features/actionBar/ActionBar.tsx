    import React from 'react';
    import { Stack, Box } from '@mui/material';
    import { ProductListInterface } from '../../interfaces/ProductInterface';
    import BackButton from '../actionButtons/backButton/BackButton';
    import BuyButton from '../actionButtons/buyButton/BuyButton';
    import DislikeButton from '../actionButtons/dislikeButton/DislikeButton';
    import SaveButton from '../actionButtons/saveButton/SaveButton';

    const ActionBar: React.FC<ProductListInterface> = ({ productList, index }) => {
        return (
            <Box width="500px">
                <Stack bgcolor="blue" direction="row" spacing={2} justifyContent="center">
                    <BackButton productList={productList} index={index}/>
                    <BuyButton productList={productList} index={index}/>
                    <DislikeButton productList={productList} index={index}/>
                    <SaveButton productList={productList} index={index}/>
                </Stack>
            </Box>
        )
    }

    export default ActionBar;
