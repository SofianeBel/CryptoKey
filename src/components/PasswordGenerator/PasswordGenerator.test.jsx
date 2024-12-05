import { render, screen, fireEvent } from '@testing-library/react';
import PasswordGenerator from './PasswordGenerator';

test('génère un mot de passe correct', () => {
  const setPassword = jest.fn();
  render(
    <PasswordGenerator
      length={12}
      options={{
        includeLowercase: true,
        includeUppercase: true,
        includeNumbers: true,
        includeSymbols: true,
      }}
      password=""
      setPassword={setPassword}
    />
  );

  const button = screen.getByText(/Générer un nouveau mot de passe/i);
  fireEvent.click(button);
  expect(setPassword).toHaveBeenCalled();
}); 