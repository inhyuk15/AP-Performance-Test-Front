import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

interface RequiredOption {
  type: string;
  minimum: string;
  recommended: string;
}

const StyledCard = styled(Card)`
  margin: 20px;
  padding: 5px;
  border: 2px solid #3f51b5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CenteredContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center; // 각 항목을 가로 중앙 정렬
`;

const RecommendPerfBox = ({ type, minimum, recommended }: RequiredOption) => {
  return (
    <StyledCard variant="outlined">
      <CenteredContent>
        <Typography variant="h5" component="div">
          {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          최소: {minimum}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          권장: {recommended}
        </Typography>
      </CenteredContent>
    </StyledCard>
  );
};

export default RecommendPerfBox;
