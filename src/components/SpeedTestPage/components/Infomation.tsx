import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useMediaQuery from '@mui/material/useMediaQuery';

const Infomation = () => {
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography
        variant={isMobile ? 'h3' : 'h4'}
        sx={{
          color: '#1976d2',
          fontWeight: '500',
          mb: 2,
        }}
      >
        인터넷 속도 측정도구
      </Typography>
      <Typography
        variant="h5"
        sx={{ color: '#1976d2', mb: 2, fontWeight: '500' }}
      >
        사용방법
      </Typography>
      <Typography variant="h5" sx={{ color: '#1976d2', mb: 2 }}>
        Floor → Room → <LocationOnIcon /> → Start
      </Typography>
    </Box>
  );
};

export default Infomation;
