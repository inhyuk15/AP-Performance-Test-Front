import { Box } from '@mui/material';
import styled from '@emotion/styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useRecoilState } from 'recoil';
import { locationClassState } from '../../../module/Atom';

const Container = styled(Box)({
  width: 300,
  height: 300,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  position: 'relative',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const Square = styled(Box)({
  width: '33.33%',
  height: '33.33%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
  '&:hover': {
    backgroundColor: '#1976d2',
    cursor: 'pointer',
  },
});

const LocateFrame = () => {
  const [locationClass, setLocationClass] = useRecoilState(locationClassState);

  const handleSquareClick = (id: number) => {
    setLocationClass(id.toString());
  };

  const squares = Array.from({ length: 9 }, (_, i) => i + 1).map(id => (
    <Square
      key={id}
      onClick={() => handleSquareClick(id)}
      sx={{
        '&:hover': {
          '& svg': {
            color: 'white',
          },
        },
      }}
    >
      {locationClass === id.toString() && (
        <LocationOnIcon
          sx={{
            color: '#1976d2',
          }}
        />
      )}
    </Square>
  ));

  return (
    <div>
      <Container>{squares}</Container>
    </div>
  );
};

export default LocateFrame;
