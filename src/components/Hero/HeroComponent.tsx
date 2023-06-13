import Shawn from '/public/assets/images/IMG_5789.jpg';

export default function HeroComponent() {
  return (
    <div className='hero_container'>
      <div className='hero_container--headline'>
        <h1>Shawn Gordon Becker</h1>
        <h2>Web & digital product development</h2>
      </div>

      <img src={Shawn} alt="it's me :)" />
    </div>
  );
}
