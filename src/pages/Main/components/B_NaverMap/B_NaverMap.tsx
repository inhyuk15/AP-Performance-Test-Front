/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import PopupVisMap from './B_PopupVisMap';
import {
  BUILDING_POSITION,
  setPeopleCntInBuilding,
  IPeopleCntInBuilding,
} from './buildingInfo';

declare global {
  interface Window {
    naver: any;
  }
}

const NaverMap = () => {
  const [buildingName, setBuildingName] = useState(`building`);
  const [popupOpen, setPopupOpen] = useState(false);
  const [isMapLoaded, setMapLoaded] = useState(false);
  const [isCntLoaded, setCntLoaded] = useState(false);
  const [peopleCntInBuilding, setPeopleCnt] = useState<IPeopleCntInBuilding>(
    {}
  );
  // const [isUserCntLoaded, setUserCntLoaded] = useState(false);
  const popupOpenClick = () => {
    setPopupOpen(true);
  };
  const popupCloseClick = () => {
    setPopupOpen(false);
  };
  useEffect(() => {
    const fetchPeopleCnt = async () => {
      const updatedPeopleCnt = await setPeopleCntInBuilding(
        peopleCntInBuilding
      );
      setPeopleCnt(updatedPeopleCnt);
      setCntLoaded(true);
    };

    fetchPeopleCnt();
  }, [peopleCntInBuilding, setCntLoaded]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=xb8e5g3zzc&submodules=visualization';
    script.async = true;

    script.onload = () => {
      setMapLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // map의 marker관련 로직
  useEffect(() => {
    if (isCntLoaded && isMapLoaded && window.naver && window.naver.maps) {
      const cnuRange = new window.naver.maps.LatLngBounds(
        new window.naver.maps.LatLng(36.363848, 127.339154),
        new window.naver.maps.LatLng(36.371013, 127.3482)
      );
      const mapOptions = {
        center: new window.naver.maps.LatLng(36.366699, 127.344995),
        zoom: 19,
        maxBounds: cnuRange,
      };

      const map = new window.naver.maps.Map('map', mapOptions);

      const markers = [];
      const infoWindows = [];

      for (const key in BUILDING_POSITION) {
        const position = new window.naver.maps.LatLng(
          BUILDING_POSITION[key][0],
          BUILDING_POSITION[key][1]
        );

        const marker = new window.naver.maps.Marker({
          map,
          position,
          title: key,
          icon: {
            url: '/location-pin.png',
            size: new window.naver.maps.Size(32, 32),
          },
          zIndex: 100,
        });

        const infoWindow = new window.naver.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:10px;">${peopleCntInBuilding[key]}명</b></div>`,
        });

        markers.push(marker);
        infoWindows.push(infoWindow);
      }

      const updateMarkers = (map, markers) => {
        const mapBounds = map.getBounds();
        let marker;
        let position;

        for (let i = 0; i < markers.length; i++) {
          marker = markers[i];
          position = marker.getPosition();

          if (mapBounds.hasLatLng(position)) {
            showMarker(map, marker);
          } else {
            hideMarker(map, marker);
          }
        }
      };

      const showMarker = (map, marker) => {
        if (marker.getMap()) {
          return;
        }
        marker.setMap(map);
      };

      const hideMarker = (map, marker) => {
        if (!marker.getMap()) return;
        marker.setMap(null);
      };
      const getClickHandler = seq => {
        return function (e) {
          setBuildingName(e.overlay.title);
          console.log(e);
          popupOpenClick();
        };
      };
      const getMouseOverHandler = seq => {
        return function (e) {
          const marker = markers[seq];
          const infoWindow = infoWindows[seq];

          if (infoWindow.getMap()) {
            infoWindow.close();
          } else {
            infoWindow.open(map, marker);
          }
        };
      };

      for (let i = 0; i < markers.length; i += 1) {
        window.naver.maps.Event.addListener(
          markers[i],
          'mouseover',
          getMouseOverHandler(i)
        );
        window.naver.maps.Event.addListener(
          markers[i],
          'click',
          getClickHandler(i)
        );
      }

      window.naver.maps.Event.addListener(map, 'idle', function () {
        updateMarkers(map, markers);
      });
    }
  }, [isCntLoaded, isMapLoaded]);

  return (
    <div>
      <PopupVisMap
        buildingName={buildingName}
        open={popupOpen}
        popUpCloseClick={popupCloseClick}
      />
      <Container
        id="map"
        sx={{
          width: '60%',
          height: '600px',
          textAlign: 'center',
        }}
      />
    </div>
  );
};

export default NaverMap;
