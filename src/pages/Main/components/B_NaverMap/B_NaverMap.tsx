import { useState } from 'react';
import { Button } from '@mui/material';
import PopupVisMap from './B_PopupVisMap';

const NaverMap = () => {
  const buildingName = `공대 5호관`;
  const [popupOpen, setPopupOpen] = useState(false);
  const popupOpenClick = () => {
    setPopupOpen(true);
  };
  const popupCloseClick = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={popupOpenClick}>
        클릭시 시각화 지도 팝업.
      </Button>
      <PopupVisMap
        buildingName={buildingName}
        open={popupOpen}
        popUpCloseClick={popupCloseClick}
      />
    </div>
  );
};

export default NaverMap;
