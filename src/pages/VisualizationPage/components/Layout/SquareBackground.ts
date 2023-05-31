import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface SquareBackgroundProps {
  width: string;
  height: string;
  backgroundColor: string;
  gridColumn: string;
  gridRow: string;
}

const SquareUnit = styled(Box)<SquareBackgroundProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 0.5px solid #000; */
  background-color: ${props => props.backgroundColor};
  ${props =>
    props.gridColumn &&
    css`
      grid-column: ${props.gridColumn};
    `}
  ${props =>
    props.gridRow &&
    css`
      grid-row: ${props.gridRow};
    `}
`;

export default SquareUnit;
