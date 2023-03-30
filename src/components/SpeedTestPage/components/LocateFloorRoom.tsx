/* RecoilHook */
import { useRecoilState } from 'recoil';

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
  const F1Rooms: string[] = [
    '101',
    '102',
    '103',
    '104',
    '105',
    '106',
    '107',
    '108',
    '109',
    '110',
    '111',
    '112',
    '113',
    '114',
  ];

  const F2Rooms: string[] = [
    '201',
    '202',
    '203',
    '204',
    '205',
    '206',
    '207',
    '208',
    '209',
    '210',
    '211',
    '212',
    '213',
    '214',
    '215',
    '215-1',
  ];

  const F3Rooms: string[] = [
    '301',
    '302',
    '303',
    '304',
    '305',
    '306',
    '307',
    '308',
    '309',
    '310',
    '311',
    '312',
    '313',
    '314',
    '315',
    '316',
    '317',
    '318',
    '319',
    '320',
  ];

  const F4Rooms: string[] = [
    '401',
    '402',
    '403',
    '404',
    '405',
    '406',
    '407',
    '408',
    '409',
    '410',
    '411',
    '412',
    '413',
    '414',
    '415',
    '416',
  ];

  const F5Rooms: string[] = [
    '501',
    '502',
    '503',
    '504',
    '505',
    '506',
    '507',
    '508',
    '509',
    '510',
    '511',
    '512',
    '513',
    '514',
    '515',
    '516',
    '517',
    '518',
    '519',
    '520',
    '521',
    '522',
    '523',
    '524',
    '525',
    '526',
    '527',
    '528',
    '529',
    '530',
    '531',
    '532',
    '533',
  ];

  const F6Rooms: string[] = [
    '601',
    '602',
    '603',
    '604',
    '605',
    '606',
    '607',
    '608',
    '609',
    '610',
    '611',
    '612',
    '613',
    '614',
    '615',
    '616',
    '617',
    '618',
    '619',
    '620',
    '621',
    '622',
    '623',
    '624',
    '625',
    '626',
    '627',
    '628',
    '629',
    '630',
    '631',
    '632',
    '633',
  ];

  switch (floor) {
    case '1':
      return (
        <div>
          <RoomsValid floor="1" roomsArray={F1Rooms} />
        </div>
      );
    case '2':
      return (
        <div>
          <RoomsValid floor="1" roomsArray={F2Rooms} />
        </div>
      );
    case '3':
      return (
        <div>
          <RoomsValid floor="3" roomsArray={F3Rooms} />
        </div>
      );
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
  const floorChange = (event: SelectChangeEvent) => {
    setFloor(event.target.value as string);
  };

  const floorArray: string[] = ['1', '2', '3', '4', '5', '6'];

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
