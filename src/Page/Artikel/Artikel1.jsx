import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import A1 from "../../../public/image/Artikel1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Artikel1 = () => {
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
            Memahami Depresi Lebih dari Sekadar Sedih
          </h1>

          <img
            src={A1}
            alt="Ilustrasi artikel mengenai depresi"
            className="w-full h-48 sm:h-72 object-cover rounded-lg mb-6"
          />

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Depresi seringkali disamakan dengan perasaan sedih biasa. Namun,
            depresi adalah gangguan suasana hati yang lebih kompleks dan serius.
            Jika kesedihan bersifat sementara dan biasanya dipicu oleh peristiwa
            tertentu, depresi adalah kondisi yang berlangsung lama dan
            mempengaruhi berbagai aspek kehidupan.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Gejala depresi meliputi perasaan sedih yang mendalam dan
            berkepanjangan, kehilangan minat pada aktivitas yang sebelumnya
            disukai, perubahan pola tidur dan makan, kelelahan berlebihan,
            kesulitan berkonsentrasi, serta pikiran negatif dan pesimistis.
            Depresi dapat dipicu oleh berbagai faktor, seperti genetika,
            ketidakseimbangan kimia otak, peristiwa traumatis, stres kronis, dan
            penyakit fisik.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Untuk mengatasi gejala depresi ringan, beberapa tips sederhana dapat
            dilakukan, seperti menjaga pola hidup sehat dengan makan makanan
            bergizi, berolahraga secara teratur, cukup tidur, membatasi konsumsi
            kafein dan alkohol, serta berinteraksi dengan orang-orang terdekat.
            Namun, jika gejala depresi semakin berat dan mengganggu aktivitas
            sehari-hari, penting untuk segera mencari bantuan profesional dari
            psikolog atau psikiater.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel1;
