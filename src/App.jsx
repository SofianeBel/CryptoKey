import React, { useState } from 'react';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
import PasswordOptions from './components/PasswordGenerator/PasswordOptions';
import PasswordStrength from './components/PasswordGenerator/PasswordStrength';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [options, setOptions] = useState({
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

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
    </div>
  );
}

export default App;