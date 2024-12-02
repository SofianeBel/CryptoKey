import React, { useState } from 'react';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
import PasswordOptions from './components/PasswordGenerator/PasswordOptions';
import PasswordStrength from './components/PasswordGenerator/PasswordStrength';
import { Alert } from '@mui/material';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(14);
  const [options, setOptions] = useState({
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

   // Déterminez la force du mot de passe
   const getPasswordStrength = () => {
    // Logique pour déterminer la force du mot de passe
    if (password.length < 8) return 'faible';
    if (password.length < 12) return 'moyen';
    return 'fort';
  };

  const strength = getPasswordStrength();


  return (
    <div className="App">
      <PasswordOptions
        length={length}
        setLength={setLength}
        options={options}
        setOptions={setOptions}
      />
      <PasswordGenerator
        length={length}
        options={options}
        password={password}
        setPassword={setPassword}
      />
      <PasswordStrength password={password} />
      {strength === 'faible' && (
        <Alert severity = "warning">
                  Le mot de passe est faible. Veuillez le renforcer pour plus de sécurité.
                  </Alert>
                )}
    </div>
  );
}

export default App;