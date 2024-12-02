import React, { useEffect } from 'react';
import { Button, TextField, Box } from '@mui/material';

const PasswordGenerator = ({ length, options, password, setPassword }) => {
  const generateValidChars = () => {
    let validChars = '';
    if (options.includeLowercase) validChars += 'abcdefghijklmnopqrstuvwxyz';
    if (options.includeUppercase) validChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.includeNumbers) validChars += '0123456789';
    if (options.includeSymbols) validChars += '!@$=+';
    if (validChars === '') validChars = 'abcdefghijklmnopqrstuvwxyz';
    return validChars;
  };

  const getRandomChar = (validChars) => {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    return validChars[randomIndex];
  };

  const handleGeneratePassword = () => {
    const validChars = generateValidChars();
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += getRandomChar(validChars);
    }
    setPassword(newPassword);
  };

  useEffect(() => {
    handleGeneratePassword();
  }, [length, options]);

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        label="Mot de passe généré"
        value={password}
        InputProps={{ readOnly: true }}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleGeneratePassword}>
        Générer un nouveau mot de passe
      </Button>
    </Box>
  );
};

export default PasswordGenerator;