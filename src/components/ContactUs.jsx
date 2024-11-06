import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen py-12 bg-gray-100">
        <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-xl">
          <button
            onClick={() => {
              console.log("Back button clicked");
              window.history.back();
            }}
            className="flex items-center text-black px-4 py-3 rounded-md hover:text-gray-600 transition duration-300 mb-6 sm:mb-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go back"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
            Kembali
          </button>

          <h1 className="text-3xl font-semibold text-center mb-8">
            Hubungi Kami
          </h1>

          <div className="flex justify-center space-x-8 mb-6">
            <a
              href="https://www.instagram.com/aliffa.ds/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} size="3x" />
            </a>
          </div>

          <address className="text-center">
            <p className="mb-4">
              <strong>Alamat:</strong>
              <br />
              Grand Slipi Tower <br />
              Jl. Letjen S. Parman No.24 Lt. 5, RT.1/RW.4, Palmerah, Kec.
              Palmerah <br />
              Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480, Indonesia
            </p>

            <p className="mb-4">
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/08123456789"
                className="text-blue-500 hover:underline"
                aria-label="WhatsApp contact"
              >
                08123456789
              </a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:Zmind@gmail.com"
                className="text-blue-500 hover:underline"
                aria-label="Email contact"
              >
                Zmind@gmail.com
              </a>
            </p>
          </address>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
