import React, { useState } from 'react';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='z-50 w-full h-16 backdrop-filter backdrop-blur-3xl bg-opacity-65 border-b flex items-center justify-center sticky top-0 left-0'>
      <div className='max-w-7xl w-full flex items-center justify-between p-10'>
        <h6 className='font-bold'>E2 BOND</h6>
        <div className="block lg:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <ul className={`flex gap-8  ${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex`}>
          <li><a className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#register">REGISTER</a></li>
          <li><a className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#about">About</a></li>
          <li><a className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#bonds">Bonds</a></li>
          <li><a className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#parites">Parties</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
