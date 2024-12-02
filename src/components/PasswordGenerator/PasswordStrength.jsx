import React from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';

const PasswordStrength = ({ password }) => {
  const calculateStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[\W]/.test(password)) strength += 25;
    return strength;
  };

  const strength = calculateStrength(password);

  return (
    <Box sx={{ p: 2 }}>
      <Typography>Force du mot de passe :</Typography>
      <LinearProgress variant="determinate" value={strength} />
    </Box>
  );
};

export default PasswordStrength;