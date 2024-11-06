import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import A9 from "../../../public/image/Artikel9.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Artikel9 = () => {
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
            Memahami Gangguan Bipolar, Gejala, Pengobatan, dan Dukungan
          </h1>

          <img
            src={A9}
            alt="Ilustrasi artikel mengenai gangguan bipolar"
            className="w-full h-48 sm:h-72 object-cover rounded-lg mb-6"
          />

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Apa Itu Gangguan Bipolar?
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Gangguan bipolar adalah gangguan mood yang ditandai dengan perubahan
            suasana hati yang ekstrem, mulai dari euforia (mania) hingga depresi
            berat. Gangguan ini dapat memengaruhi emosi, pikiran, perilaku, dan
            pola tidur seseorang.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Gejala Gangguan Bipolar
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Gangguan bipolar memiliki dua fase utama: mania dan depresi. Berikut
            adalah gejalanya:
          </p>

          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Mania:</strong> Kegembiraan berlebihan, energi tinggi,
              kebutuhan tidur menurun, bicara cepat, pikiran melayang, perilaku
              impulsif.
            </li>
            <li>
              <strong>Depresi:</strong> Kesedihan mendalam, perasaan kehilangan,
              perubahan nafsu makan, masalah tidur, dan pikiran untuk menyakiti
              diri sendiri.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Pentingnya Pengobatan dan Dukungan Sosial
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Gangguan bipolar dapat berhasil ditangani dengan kombinasi
            pengobatan (obat-obatan dan psikoterapi) dan dukungan sosial.
            Perawatan yang tepat dapat membantu menstabilkan suasana hati dan
            mengurangi gejala-gejala yang ada. Pengobatan yang teratur dan
            dukungan yang diberikan oleh keluarga atau teman sangat penting
            dalam proses pemulihan.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Tips Mengatasi Gangguan Bipolar
          </h2>

          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Jalin Komunikasi Terbuka:</strong> Ciptakan suasana aman
              untuk berbagi perasaan dan pikiran tanpa takut dihakimi.
            </li>
            <li>
              <strong>Rekomendasikan Pengobatan:</strong> Ajak orang yang Anda
              sayangi untuk menemui psikolog atau mendapatkan perawatan medis.
            </li>
            <li>
              <strong>Merawat Diri Sendiri:</strong> Menjaga diri sendiri juga
              penting agar Anda dapat memberikan dukungan yang berkelanjutan.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Kesimpulan
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Gangguan bipolar adalah kondisi yang serius, namun dengan pengobatan
            yang tepat, pasien dapat menjalani kehidupan yang produktif dan
            memuaskan.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel9;
