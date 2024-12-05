/*
 * This page is responsible for displaying the password options to the user.
*/

import React from 'react';
import { Box, Typography, Slider, Switch, FormControlLabel, Collapse } from '@mui/material';

const PasswordOptions = ({ length, setLength, options, setOptions }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Longueur du mot de passe: {length}
      </Typography>
      <Slider
        value={length}
        min={1}
        max={64}
        onChange={(e, newValue) => setLength(newValue)}
        valueLabelDisplay="auto"
        sx={{ mb: 3 }}
      />
      <Collapse in={true}>
        <FormControlLabel
          control={
            <Switch
              checked={options.includeLowercase}
              onChange={(e) => setOptions({ ...options, includeLowercase: e.target.checked })}
              inputProps={{ 'aria-label': 'Inclure les minuscules' }}
            />
          }
          label="Inclure les minuscules"
        />
      </Collapse>
      <Collapse in={true}>
        <FormControlLabel
          control={
            <Switch
              checked={options.includeUppercase}
              onChange={(e) => setOptions({ ...options, includeUppercase: e.target.checked })}
              inputProps={{ 'aria-label': 'Inclure les majuscules' }}
            />
          }
          label="Inclure les majuscules"
        />
      </Collapse>
      <Collapse in={true}>
        <FormControlLabel
          control={
            <Switch
              checked={options.includeNumbers}
              onChange={(e) => setOptions({ ...options, includeNumbers: e.target.checked })}
              inputProps={{ 'aria-label': 'Inclure les chiffres' }}
            />
          }
          label="Inclure les chiffres"
        />
      </Collapse>
      <Collapse in={true}>
        <FormControlLabel
          control={
            <Switch
              checked={options.includeSymbols}
              onChange={(e) => setOptions({ ...options, includeSymbols: e.target.checked })}
              inputProps={{ 'aria-label': 'Inclure les symboles' }}
            />
          }
          label="Inclure les symboles"
        />
      </Collapse>
    </Box>
  );
};

export default PasswordOptions;
