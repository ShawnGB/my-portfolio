import burgerIcon from '../../../assets/svg/icons/burger-icon.svg';
import closeIcon from '../../../assets/svg/icons/close-icon.svg';

type IProps = {
  setMobileMenuOpen: () => void;
  isMobileMenuOpen: boolean;
};

export default function BurgerMenu({
  setMobileMenuOpen,
  isMobileMenuOpen,
}: IProps) {
  const renderIcon = isMobileMenuOpen ? closeIcon : burgerIcon;

  console.log(renderIcon);
  return (
    <button
      className='text-3xl text-accent-500 dark:text-darkMode-accent-500 focus:outline-none mr-8 block sm:hidden'
      onClick={setMobileMenuOpen}
    >
      <img src={renderIcon} alt='Menu Icon' />
    </button>
  );
}
