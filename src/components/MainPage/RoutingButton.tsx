import { Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const SpeedtestButton = () => {
  return (
    <div>
      <Link to="/speed-test" style={{ textDecoration: 'none' }}>
        <Button
          variant="outlined"
          sx={{
            fontSize: '3rem',
            '@media (max-width:600px)': {
              fontSize: '1.5rem',
            },
            borderRadius: '15px',
            '&:hover': {
              backgroundColor: '#1976d2',
              color: 'white',
            },
          }}
        >
          측정하기
        </Button>
      </Link>
    </div>
  );
};

const VisualizationButton = () => {
  return (
    <div>
      <Link to="/visualization" style={{ textDecoration: 'none' }}>
        <Button
          variant="outlined"
          sx={{
            fontSize: '3rem',
            '@media (max-width:600px)': {
              fontSize: '1.5rem',
            },
            borderRadius: '15px',
            '&:hover': {
              backgroundColor: '#1976d2',
              color: 'white',
            },
          }}
        >
          속도지도
        </Button>
      </Link>
    </div>
  );
};

const RoutingButton = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SpeedtestButton />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <VisualizationButton />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoutingButton;
