import React, { useState } from "react";
import Zminds from "../../public/image/ZmindLogo.png";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import faTimes

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-60 backdrop-blur-md text-black p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src={Zminds}
            alt="Zmind Logo"
            onClick={() => navigate("/")}
            className="h-6 w-18 md:h-9 md:w-18 object-cover cursor-pointer transition-transform duration-300 hover:scale-110" // Added scale and transition classes
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="text-black text-2xl"
            />
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-black hover:text-gray-600 transition duration-300 hover:scale-105"
          >
            Artikel
          </a>
          <a
            href="#projects"
            className="text-black hover:text-gray-600 transition duration-300 hover:scale-105"
          >
            Kontak Kami
          </a>
          <Link
            to="/Zmind"
            className="text-black hover:text-gray-600 transition duration-300 hover:scale-105"
          >
            Tentang Kami
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 px-4 py-2 bg-white shadow-md rounded-lg">
          <a
            href="/"
            className="text-black hover:text-gray-600 transition duration-300 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            Artikel
          </a>
          <a
            href="#projects"
            className="text-black hover:text-gray-600 transition duration-300 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontak Kami
          </a>
          <Link
            to="/Zmind"
            className="text-black hover:text-gray-600 transition duration-300 hover:scale-105"
          >
            Tentang Kami
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
