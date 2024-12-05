import React, { useEffect, useState } from 'react';
import { TextField, Box, Snackbar, Fade } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AnimatedButton from '../AnimatedButton';

const PasswordGenerator = ({ length, options, password, setPassword }) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const generateValidChars = () => {
    let validChars = '';
    if (options.includeLowercase) validChars += 'abcdefghijklmnopqrstuvwxyz';
    if (options.includeUppercase) validChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.includeNumbers) validChars += '0123456789';
    if (options.includeSymbols) validChars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (validChars === '') validChars = 'abcdefghijklmnopqrstuvwxyz';
    return validChars;
  };

  const getRandomChar = (validChars) => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const randomIndex = array[0] % validChars.length;
    return validChars[randomIndex];
  };

  const handleGeneratePassword = () => {
    const { includeLowercase, includeUppercase, includeNumbers, includeSymbols } = options;
    const categories = [
      includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '',
      includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
      includeNumbers ? '0123456789' : '',
      includeSymbols ? '!@#$%^&*()_+-=[]{}|;:,.<>?' : '',
    ].filter(Boolean);

    if (categories.length === 0) {
      // Fallback si aucune catégorie n'est sélectionnée
      categories.push('abcdefghijklmnopqrstuvwxyz');
    }

    let newPassword = '';
    // Ajoute au moins un caractère de chaque catégorie
    categories.forEach((chars) => {
      newPassword += getRandomChar(chars);
    });

    const allValidChars = categories.join('');
    for (let i = newPassword.length; i < length; i++) {
      newPassword += getRandomChar(allValidChars);
    }

    // Mélange le mot de passe pour éviter l'ordre des catégories
    newPassword = newPassword
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('');

    setPassword(newPassword);
    setVisible(false); // Réinitialise l'animation précédente
    setTimeout(() => setVisible(true), 100); // Déclenche la nouvelle animation
  };

  const handleCopy = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleGeneratePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, options]);

  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Fade in={visible} timeout={500}>
        <TextField
          label="Mot de passe généré"
          value={password}
          InputProps={{ readOnly: true }}
          fullWidth
          margin="normal"
        />
      </Fade>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
        <CopyToClipboard text={password} onCopy={handleCopy}>
          <AnimatedButton variant="outlined" color="primary">
            Copier le mot de passe
          </AnimatedButton>
        </CopyToClipboard>
        <AnimatedButton variant="contained" color="secondary" onClick={handleGeneratePassword}>
          Générer un nouveau mot de passe
        </AnimatedButton>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Mot de passe copié !"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};

export default PasswordGenerator;