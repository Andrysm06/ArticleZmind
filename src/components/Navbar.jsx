import React from "react";
import Zmind from "../../public/image/ZmindLogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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

        <div className="flex space-x-6">
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
    </nav>
  );
};

export default Navbar;
