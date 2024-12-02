/*
 * This page is responsible for displaying the password options to the user.
*/

import React from 'react';
import { Box, Typography, Slider, Switch, FormControlLabel } from '@mui/material';

const PasswordOptions = ({ length, setLength, options, setOptions }) => {
  return (
    <Box>
      <Typography>Longueur du mot de passe: {length}</Typography>
      <Slider
        value={length}
        min={1}
        max={64}
        onChange={(e, newValue) => setLength(newValue)}
        valueLabelDisplay="auto"
      />
      <FormControlLabel
        control={
          <Switch
            checked={options.includeLowercase}
            onChange={(e) => setOptions({ ...options, includeLowercase: e.target.checked })}
          />
        }
        label="Inclure les minuscules"
      />
      <FormControlLabel
        control={
          <Switch
            checked={options.includeUppercase}
            onChange={(e) => setOptions({ ...options, includeUppercase: e.target.checked })}
          />
        }
        label="Inclure les majuscules"
      />
      <FormControlLabel
        control={
          <Switch
            checked={options.includeNumbers}
            onChange={(e) => setOptions({ ...options, includeNumbers: e.target.checked })}
          />
        }
        label="Inclure les chiffres"
      />
      <FormControlLabel
        control={
          <Switch
            checked={options.includeSymbols}
            onChange={(e) => setOptions({ ...options, includeSymbols: e.target.checked })}
          />
        }
        label="Inclure les symboles"
      />
    </Box>
  );
};

export default PasswordOptions;
