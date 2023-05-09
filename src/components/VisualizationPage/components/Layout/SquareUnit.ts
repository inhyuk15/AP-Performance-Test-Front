import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface SquareUnitProps {
  width: string;
  height: string;
  backgroundColor: string;
  gridColumn: string;
  gridRow: string;
}

const SquareUnit = styled(Box)<SquareUnitProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 0.5px solid #000; */
  background-color: ${props => props.backgroundColor};
  &:hover {
    background-color: gray;
    cursor: pointer;
  }

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
