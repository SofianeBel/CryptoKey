import React, { useState } from 'react';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
import PasswordOptions from './components/PasswordGenerator/PasswordOptions';
import PasswordStrength from './components/PasswordGenerator/PasswordStrength';
import { Alert, Container, Grid, Typography, Card, CardContent } from '@mui/material';

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

  const handleStrengthChange = (newStrength) => {
    setStrength(newStrength);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Générateur de Mots de Passe
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <PasswordOptions
                length={length}
                setLength={setLength}
                options={options}
                setOptions={setOptions}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordGenerator
                length={length}
                options={options}
                password={password}
                setPassword={setPassword}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordStrength password={password} onStrengthChange={handleStrengthChange} />
            </Grid>
            {strength <= 50 && (
              <Grid item xs={12}>
                <Alert severity="warning">
                  Le mot de passe est faible. Veuillez le renforcer pour plus de sécurité.
                </Alert>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;