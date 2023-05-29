import React, { FC, useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { useRecoilValue } from 'recoil';
import { floorState } from '../../../module/Atom';
import F4Layout from './Layout/F4Layout';
import F5Layout from './Layout/F5Layout';
import F6Layout from './Layout/F6Layout';

const FloorSelectPage: FC = () => {
  const userChoosedFloor = useRecoilValue(floorState);
  const [floor, setFloor] = useState<number | null>(
    parseInt(userChoosedFloor, 10)
  );

  const floorLayouts: { [key: number]: FC } = {
    4: F4Layout,
    5: F5Layout,
    6: F6Layout,
  };

  const handleChange = (event: SelectChangeEvent<number>) => {
    const selectedFloor = Number(event.target.value);
    setFloor(selectedFloor);
    console.log(`현재 층수: ${selectedFloor}`);
  };

  const SelectedLayout = floor ? floorLayouts[floor] : null;

  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column', // 수직 방향으로 배치
      }}
    >
      <Box style={{ marginBottom: '16px' }}>
        <FormControl fullWidth sx={{ width: '200px' }} margin="normal">
          <InputLabel id="floor-select-label">층 선택</InputLabel>
          <Select
            labelId="floor-select-label"
            id="floor-select"
            value={floor || ''}
            onChange={handleChange}
            label="층 선택"
            renderValue={selected => (
              <div style={{ textAlign: 'center' }}>{selected}층</div>
            )}
            sx={{ width: '200px', height: '60px', fontSize: '2rem' }}
          >
            <MenuItem value={4}>4층</MenuItem>
            <MenuItem value={5}>5층</MenuItem>
            <MenuItem value={6}>6층</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>{SelectedLayout && <SelectedLayout />}</Box>
    </Container>
  );
};

export default FloorSelectPage;
