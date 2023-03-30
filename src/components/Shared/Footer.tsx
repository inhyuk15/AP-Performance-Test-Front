import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        p: 2,
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <ul>
        <li>이용약관</li>
        <li>개인정보 처리방침</li>
        <li>문의하기</li>
      </ul>
      <p>© 2022 My Site. All rights reserved.</p>
    </Box>
  );
};

export default Footer;
