import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CvComponent from './components/CV/CvComponent';
import Navbar from './components/Navigation/Navbar';
import AboutMeComponent from './components/About/AboutMeComponent';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='/cv' element={<CvComponent />} />
        <Route path='/about' element={<AboutMeComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
