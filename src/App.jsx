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
  const [strength, setStrength] = useState(0);

  const handleStrengthChange = (newStrength) =>{
    setStrength(newStrength);
  }


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
      <PasswordStrength password={password} onStrengthChange={handleStrengthChange}/>
      {strength <= 50 && (
        <Alert severity = "warning">
                  Le mot de passe est faible. Veuillez le renforcer pour plus de sécurité.
        </Alert>
                )}
    </div>
  );
}

export default App;