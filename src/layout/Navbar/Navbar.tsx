import React from 'react';

type NavbarProps = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({setIsMenuOpen}: NavbarProps) {

  return (
    <div className="w-full h-16 bg-black text-white absolute top-0 left-0 p-2 flex items-center z-[10002]">
      <div className="border h-9 w-9 rounded ml-3 overflow-hidden flex justify-center items-center font-bold text-lg">
        T
      </div>
      <h1 className="ml-3 font-medium text-lg">Turing+</h1>
      <div className="space-y-1.5 ml-auto mr-2 md:hidden" onClick={()=>{
        setIsMenuOpen(prev => !prev)
      }}>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-3 h-0.5 bg-white"></span>
      </div>
    </div>
  );
}

export default Navbar;
