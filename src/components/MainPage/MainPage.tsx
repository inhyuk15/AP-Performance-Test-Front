import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Title from './Title';
import Summary from './Summary';
import RoutingButton from './RoutingButton';

const mainpageTheme = createTheme({
  palette: {
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Noto Sans KR',
    h4: {
      fontSize: '4rem',
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h5: {
      fontSize: '2rem',
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
        <RoutingButton />
      </ThemeProvider>
    </div>
  );
};

export default MainPage;
