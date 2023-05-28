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
