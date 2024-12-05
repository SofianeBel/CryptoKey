import React from 'react';
import { LinearProgress, Typography, Box, Grow } from '@mui/material';
import { useEffect } from 'react';

const PasswordStrength = React.memo(({ password, onStrengthChange }) => {
  const calculateStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += (password.length - 8) * 2;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 20;
    if (/[\W]/.test(password)) strength += 20;
    strength = Math.min(strength, 100);
    console.log(strength);
    return strength;
  };

  const strength = calculateStrength(password);

  useEffect(() => {
    if (onStrengthChange) {
      onStrengthChange(strength);
    }
  }, [strength, onStrengthChange]);

  const getColor = (value) => {
    if (value < 40) return 'error';
    if (value < 70) return 'warning';
    return 'success';
  };

  return (
    <Grow in={true} timeout={500}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Force du mot de passe :
        </Typography>
        <LinearProgress variant="determinate" value={strength} color={getColor(strength)} />
      </Box>
    </Grow>
  );
});

export default PasswordStrength;