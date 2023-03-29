import { RecoilRoot } from 'recoil';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </div>
  );
}

export default App;
