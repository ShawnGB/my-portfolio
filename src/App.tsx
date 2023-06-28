import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CvCardList from './components/CV/CvCardList';
import Navbar from './components/Navigation/Navbar';
import AboutMeComponent from './components/About/AboutMeComponent';
import HomeComponent from './components/Home/HomeComponent';
import ContactComonent from './components/Contact/ContactComonent';
import ServiceComponent from './components/Service/ServiceComponent';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className='bg-background dark:bg-darkMode-background w-screen h-screen'>
      <BrowserRouter>
        <Navbar switchTheme={() => setTheme(!theme)} theme={theme} />
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/cv' element={<CvCardList />} />
          <Route path='/about' element={<AboutMeComponent />} />
          <Route path='/contact' element={<ContactComonent />} />
          <Route path='/services' element={<ServiceComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
