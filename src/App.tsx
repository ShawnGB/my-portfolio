import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CvCardList from './components/CV/CvCardList';
import Navbar from './components/Navigation/Navbar';
import AboutMeComponent from './components/About/AboutMeComponent';
import HomeComponent from './components/Home/HomeComponent';
import ContactComonent from './components/Contact/ContactComonent';
import ServiceComponent from './components/Service/ServiceComponent';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/cv' element={<CvCardList />} />
        <Route path='/about' element={<AboutMeComponent />} />
        <Route path='/contact' element={<ContactComonent />} />
        <Route path='/services' element={<ServiceComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
