import React, { useState } from "react";
import Zmind from "../../public/image/ZmindLogo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome bars icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-60 backdrop-blur-md text-black p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src={Zmind}
            alt="Zmind Logo"
            onClick={() => navigate("/")}
            className="h-6 w-18 md:h-9 md:w-18 object-cover cursor-pointer"
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-black text-2xl" />
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            Artikel
          </a>
          <a
            href="#projects"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            Kontak Kami
          </a>
          <a
            href="/About"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            Tentang Kami
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 px-4 py-2 bg-white shadow-md rounded-lg">
          <a
            href="/"
            className="text-black hover:text-gray-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)} // Close menu when an item is clicked
          >
            Artikel
          </a>
          <a
            href="#projects"
            className="text-black hover:text-gray-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontak Kami
          </a>
          <a
            href="/About"
            className="text-black hover:text-gray-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Tentang Kami
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
