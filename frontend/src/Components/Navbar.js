import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-[#374151] p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          GWECCC 2025
        </div>

        {/* Hamburger Menu (visible on smaller screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links (hidden on smaller screens, shown on larger screens) */}
        <div className={`md:flex md:items-center space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#schedule" className="text-white hover:text-gray-300">
            Schedule
          </a>
          <a href="#register" className="text-white hover:text-gray-300">
            Register
          </a>
        </div>
      </div>

      {/* Mobile Menu (visible only when the hamburger is clicked) */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <a href="#home" className="block text-white py-2 px-4 hover:bg-blue-500">
          Home
        </a>
        <a href="#about" className="block text-white py-2 px-4 hover:bg-blue-500">
          About
        </a>
        <a href="#schedule" className="block text-white py-2 px-4 hover:bg-blue-500">
          Schedule
        </a>
        <a href="#register" className="block text-white py-2 px-4 hover:bg-blue-500">
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
