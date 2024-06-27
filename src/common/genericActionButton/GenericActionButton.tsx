import React from 'react';
import { IconButton } from '@mui/material';

interface GenericActionButtonProps {
    ariaLabel: string; 
    children?: React.ReactNode;
    action: () => void;
  }
  
const GenericActionButton:React.FC<GenericActionButtonProps> = ({ ariaLabel, children, action }) => {
    return (
        <IconButton aria-label={ariaLabel} onClick={action}>
            {children}
        </IconButton>
    )
}

export default GenericActionButton;
    