import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import SpeedTestPage from '../pages/SpeedTestPage/SpeedTestPage';
import VisualizationPage from '../pages/VisualizationPage/VisualizationPage';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/speed-test" element={<SpeedTestPage />} />
        <Route path="/visualization" element={<VisualizationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
