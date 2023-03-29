import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Title from './Title';
import Summary from './Summary';

const mainpageTheme = createTheme({
  palette: {
    background: {
      default: '#000000',
    },
  },
  typography: {
    fontFamily: 'Noto Sans KR',
    h4: {
      fontSize: '3rem',
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h5: {
      fontSize: '3rem',
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
});

const MainPage = () => {
  return (
    <div>
      <ThemeProvider theme={mainpageTheme}>
        <CssBaseline />
        <Title />
        <Summary />
      </ThemeProvider>
    </div>
  );
};

export default MainPage;
