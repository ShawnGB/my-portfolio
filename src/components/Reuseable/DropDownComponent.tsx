// import { useState } from 'react';

// type SelectOption = {
//   key?: string | null;
// };

// type IProps = { options: SelectOption[] };

// export default function DropDownComponent({ options, onSelect }: IProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionSelect = (option: string | null) => {
//     setSelectedOption(option);
//     onSelect(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className='relative'>
//       <button
//         type='button'
//         className='w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
//         onClick={toggleDropdown}
//       >
//         {selectedOption || 'Select an option'}
//         <svg
//           className='w-5 h-5 absolute top-2 right-3 text-gray-400 pointer-events-none'
//           xmlns='http://www.w3.org/2000/svg'
//           viewBox='0 0 20 20'
//           fill='currentColor'
//           aria-hidden='true'
//         >
//           <path fillRule='evenodd' d='M6 8l4 4 4-4H6z' />
//         </svg>
//       </button>
//       {isOpen && (
//         <div className='absolute w-full mt-1 bg-white rounded-md shadow-lg'>
//           {options.map((option) => (
//             <button
//               key={option}
//               type='button'
//               className='block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none'
//               onClick={() => handleOptionSelect(option)}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
