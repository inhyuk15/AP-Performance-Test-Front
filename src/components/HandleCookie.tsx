import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { v4 as uuid4 } from 'uuid';
// import { Button } from '@mui/material';

import { cookieState } from '../module/Atom';

const HandleCookie = () => {
  const [cookies, setCookie] = useCookies(['userIdentify']);
  const [cookieRecoilValue, setRecoilCookie] = useRecoilState(cookieState);

  const setCookieFunc = () => {
    const random = uuid4();
    setCookie('userIdentify', random);
  };

  // const getCookieFunc = () => {
  //   console.log('COOKIE', cookies);
  //   return cookies.userIdentify;
  // };

  useEffect(() => {
    if (!cookies.userIdentify) {
      setCookieFunc();
    }
    setRecoilCookie(cookies.userIdentify);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
  // <div>
  //   <Button variant="outlined" onClick={getCookieFunc}>
  //     Button
  //   </Button>
  // </div>
};

export default HandleCookie;
