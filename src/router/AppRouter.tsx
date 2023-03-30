import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../components/MainPage/MainPage';
import SpeedTestPage from '../components/SpeedTestPage/SpeedTestPage';
import VisualizationPage from '../components/VisualizationPage/VisualizationPage';

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
