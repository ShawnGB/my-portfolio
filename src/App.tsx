import CvComponent from './components/CV/CvComponent';
import HeroComponent from './components/Hero/HeroComponent';

function App() {
  return (
    <div className='h-screen bg-hero bg-cover  bg-no-repeat bg-center bg-fixed '>
      <HeroComponent />
      <CvComponent />
    </div>
  );
}

export default App;
