import React from 'react';
// 이하 코드에서 React를 사용할 수 있습니다.
import { RecoilRoot } from 'recoil';
import AppRouter from './router/AppRouter';
import HandleCookie from './pages/Shared/HandleCookie';

function App() {
  return (
    <div>
      <RecoilRoot>
        <HandleCookie />
        <AppRouter />
      </RecoilRoot>
    </div>
  );
}

export default App;
