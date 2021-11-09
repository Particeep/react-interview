import * as React from 'react';

import './App.css';
import { AppLayout } from './layout/AppLayout'
import Movies from './features/movies/Movies';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    secondary: {
      main: orange[500]
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <Movies />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
