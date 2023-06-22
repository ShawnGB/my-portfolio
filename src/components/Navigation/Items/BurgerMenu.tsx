type IProps = {
  setMobileMenuOpen: () => void;
};

export default function BurgerMenu({ setMobileMenuOpen }: IProps) {
  return (
    <button
      className='text-3xl text-accent-500 focus:outline-none mr-8 block sm:hidden'
      onClick={setMobileMenuOpen}
    >
      <svg
        className='w-6 h-6 fill-current'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path fillRule='evenodd' d='M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z' />
      </svg>
    </button>
  );
}
