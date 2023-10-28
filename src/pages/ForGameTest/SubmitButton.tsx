import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)`
  margin-top: 15px;
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 20px;
  &:hover {
    background-color: #303f9f;
  }
`;

const CenteredContainer = styled('div')`
  display: flex;
  justify-content: center;
`;

interface ButtonProps {
  text: string;
  url: string;
  onClick: () => void;
}

const SubmitButton = ({ text, url, onClick }: ButtonProps) => {
  return (
    <CenteredContainer>
      <Link
        to={url}
        onClick={e => {
          if (onClick) {
            onClick();
          }
        }}
      >
        <StyledButton variant="contained">{text}</StyledButton>
      </Link>
    </CenteredContainer>
  );
};

export default SubmitButton;
