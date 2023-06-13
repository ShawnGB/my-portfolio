import ContactComonent from '../Contact/ContactComonent';
import Shawn from '/public/assets/images/IMG_5789.jpg';

export default function HeroComponent() {
  return (
    <div className='hero-container'>
      <div className='hero-container__details'>
        <>
          <h1>Shawn Gordon Becker</h1>
          <h2>Web & digital product development</h2>
        </>
        <br />
        <ContactComonent />
      </div>

      {/* <img src={Shawn} alt="it's me :)" /> */}
    </div>
  );
}
