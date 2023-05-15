import { Box } from '@mui/material';
import styled from '@emotion/styled';

const Container = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(350, 1px)', // 3열로 구성
  gridAutoRows: '1px', // 행 높이는 100px로 고정
  // gap: 0.5, // 간격 제거
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  position: 'relative',
  flexWrap: 'wrap',
});

export default Container;
