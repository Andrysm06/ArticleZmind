import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Zmind. All rights reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.instagram.com/aliffa.ds/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
