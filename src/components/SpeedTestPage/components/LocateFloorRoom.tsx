/* RecoilHook */
import { useRecoilState, useSetRecoilState } from 'recoil';

/* MUI */
import {
  FormControl,
  InputLabel,
  MenuItem,
  Grid,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

/* Atom */
import { floorState, roomState } from '../../../module/Atom';

import F4Rooms from '../../../data/RoomsData/F4Rooms.json';
import F5Rooms from '../../../data/RoomsData/F5Rooms.json';
import F6Rooms from '../../../data/RoomsData/F6Rooms.json';

const SelectionTheme = createTheme({
  typography: {
    fontFamily: 'Noto Sans KR',
    fontSize: 16,
  },
});

const RoomsDefault = () => {
  return (
    <FormControl fullWidth sx={{ width: '142px' }} margin="normal">
      <InputLabel>Room</InputLabel>
      <Select label="Room">
        <MenuItem>층수를 먼저 선택해 주세요.</MenuItem>
      </Select>
    </FormControl>
  );
};

const RoomsValid = ({
  floor,
  roomsArray,
}: {
  floor: string;
  roomsArray: string[];
}) => {
  const [room, setRoom] = useRecoilState(roomState);
  const roomChange = (event: SelectChangeEvent) => {
    setRoom(event.target.value as string);
  };

  return (
    <FormControl fullWidth sx={{ width: '142px' }} margin="normal">
      <InputLabel id={floor}>Room</InputLabel>
      <Select id={room} value={room} label="Room" onChange={roomChange}>
        {roomsArray.map(eachRoom => (
          <MenuItem key={eachRoom} value={eachRoom}>
            {eachRoom}호
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const RoomSplit = ({ floor }: { floor: string }) => {
  switch (floor) {
    case '4':
      return (
        <div>
          <RoomsValid floor="4" roomsArray={F4Rooms} />
        </div>
      );
    case '5':
      return (
        <div>
          <RoomsValid floor="5" roomsArray={F5Rooms} />
        </div>
      );
    case '6':
      return (
        <div>
          <RoomsValid floor="6" roomsArray={F6Rooms} />
        </div>
      );
    default:
      return (
        <div>
          <RoomsDefault />
        </div>
      );
  }
};

const LocateFloorRoom = () => {
  const [floor, setFloor] = useRecoilState(floorState);
  const setRoom = useSetRecoilState(roomState);
  const floorChange = (event: SelectChangeEvent) => {
    setFloor(event.target.value as string);
    setRoom('');
  };

  const floorArray: string[] = ['4', '5', '6'];

  return (
    <ThemeProvider theme={SelectionTheme}>
      <Grid container spacing={2} bgcolor="">
        <Grid
          item
          xs={6}
          sm={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <FormControl
            sx={{
              width: '142px',
            }}
            margin="normal"
          >
            <InputLabel>Floor</InputLabel>
            <Select value={floor} label="Floor" onChange={floorChange}>
              {floorArray.map(eachFloor => (
                <MenuItem key={eachFloor} value={eachFloor}>
                  {eachFloor}층
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <RoomSplit floor={floor} />
        </Grid>
      </Grid>
      <br />
    </ThemeProvider>
  );
};
export default LocateFloorRoom;
