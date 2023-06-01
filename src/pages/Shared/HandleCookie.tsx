import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { v4 as uuid4 } from 'uuid';
// import { Button } from '@mui/material';

import { cookieState } from '../../module/Atom';

const HandleCookie = () => {
  const [cookies, setCookie] = useCookies(['userIdentify']);
  const setRecoilCookie = useSetRecoilState(cookieState);

  const setCookieFunc = () => {
    const random = uuid4();
    setCookie('userIdentify', random);
  };

  useEffect(() => {
    if (!cookies.userIdentify) {
      setCookieFunc();
    }
    setRecoilCookie(cookies.userIdentify);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default HandleCookie;
