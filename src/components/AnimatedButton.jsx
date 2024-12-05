import React from 'react';
import { Button } from '@mui/material';

const AnimatedButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default AnimatedButton; 