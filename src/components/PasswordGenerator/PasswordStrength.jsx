import React from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';
import { useEffect } from 'react';

const PasswordStrength = ({ password, onStrengthChange }) => {
  const calculateStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[\W]/.test(password)) strength += 25;
    console.log(strength);
    return strength;
  };

  const strength = calculateStrength(password);

  useEffect(() =>{
    if(onStrengthChange){
      onStrengthChange(strength);
    }
  },[strength, onStrengthChange]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography>Force du mot de passe :</Typography>
      <LinearProgress variant="determinate" value={strength} />
    </Box>
  );
};

export default PasswordStrength;