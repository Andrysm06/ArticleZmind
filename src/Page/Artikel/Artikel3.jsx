import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import A3 from "../../../public/image/Artikel3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Artikel3 = () => {
  return (
    <>
      <Navbar />
      <div className="py-24 bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-black px-4 py-3 rounded-md hover:text-gray-600 transition duration-300 mb-6 sm:mb-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go back"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
            Kembali
          </button>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-4 sm:mb-6">
            Tentang Stres: Musuh Senyap Kesejahteraan Kita
          </h1>

          <img
            src={A3}
            alt="Ilustrasi artikel mengenai stres"
            className="w-full h-48 sm:h-72 object-cover rounded-lg mb-6"
          />

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Stres, sebuah respons alami tubuh terhadap tekanan, telah menjadi
            bagian tak terpisahkan dari kehidupan modern. Sumber stres bisa
            bermacam-macam, mulai dari tuntutan pekerjaan, masalah keuangan,
            hingga perubahan dalam hubungan pribadi. Jika tidak dikelola dengan
            baik, stres dapat menimbulkan dampak buruk bagi kesehatan fisik dan
            mental. Dalam jangka pendek, stres dapat menyebabkan sakit kepala,
            gangguan tidur, dan penurunan konsentrasi. Namun, dalam jangka
            panjang, stres kronis dapat memicu berbagai penyakit serius seperti
            penyakit jantung, tekanan darah tinggi, dan gangguan kecemasan.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Untuk mengatasi stres, beberapa strategi manajemen stres dapat
            diterapkan, seperti teknik pernapasan dalam, meditasi, yoga, atau
            sekadar meluangkan waktu untuk melakukan aktivitas yang
            menyenangkan. Selain itu, penting juga untuk menjaga pola hidup
            sehat dengan makan makanan bergizi, berolahraga secara teratur, dan
            cukup istirahat. Dengan mengelola stres dengan baik, kita dapat
            meningkatkan kualitas hidup dan mencapai kesejahteraan yang optimal.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel3;
