import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Vous pouvez changer en 'dark' pour un thème sombre
    primary: {
      main: '#1976d2', // Bleu moderne
    },
    secondary: {
      main: '#dc004e', // Rose vif
    },
    background: {
      default: '#f5f5f5', // Gris clair pour le fond
      paper: '#ffffff', // Blanc pour les cartes et surfaces
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  transitions: {
    duration: {
      standard: 300,
    },
  },
});

export default theme; 