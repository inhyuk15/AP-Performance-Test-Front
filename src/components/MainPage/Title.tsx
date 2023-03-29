import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import { Box, Typography, AppBar, Toolbar } from '@mui/material';

const Title = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <AppBar
        position="relative"
        color="primary"
        sx={{
          boxShadow: 'none',
          backgroundColor: 'black',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'center',
            pt: 2,
            pb: 2,
          }}
        >
          <NetworkCheckIcon
            sx={{
              color: '#FFD700',
              width: '40px',
              height: '40px',
              marginRight: '12px',
              '@media (min-width:600px)': {
                width: '60px',
                height: '60px',
              },
            }}
          />
          <Typography variant="h4" sx={{ color: '#FFD700' }}>
            CNU WIFI 속도 시각화
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Title;
