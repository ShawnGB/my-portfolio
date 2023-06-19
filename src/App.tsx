import CvComponent from './components/CV/CvComponent';
import HeroComponent from './components/Hero/HeroComponent';

function App() {
  return (
    <div className='h-screen fixed bg-background'>
      <HeroComponent />
      <CvComponent />
    </div>
  );
}

export default App;
