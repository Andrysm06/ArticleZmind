import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import A4 from "../../../public/image/Artikel4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Artikel4 = () => {
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
            Pentingnya Tidur yang Cukup untuk Kesehatan Mental
          </h1>

          <img
            src={A4}
            alt="Ilustrasi artikel mengenai tidur"
            className="w-full h-48 sm:h-72 object-cover rounded-lg mb-6"
          />

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Bagaimana Kualitas Tidur dapat Mempengaruhi Kesehatan Mental?
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Kualitas tidur memiliki peran krusial dalam menjaga kesehatan
            mental. Tidur yang cukup dan berkualitas membantu otak untuk
            memproses informasi, mengatur emosi, dan memperkuat memori. Ketika
            seseorang mengalami tidur yang tidak memadai, berbagai masalah
            kesehatan mental dapat muncul, seperti kecemasan, depresi, dan
            gangguan mood. Penelitian menunjukkan bahwa individu yang memiliki
            pola tidur yang terganggu cenderung lebih rentan terhadap stres dan
            kesulitan dalam mengelola emosi. Dengan tidur yang cukup, otak dapat
            berfungsi dengan optimal, memungkinkan seseorang untuk berpikir
            jernih dan merespons situasi dengan lebih baik.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Dampak Gangguan Tidur yang Umum Terjadi
          </h2>

          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Insomnia</strong>, kondisi di mana seseorang mengalami
              kesulitan untuk tertidur, dampaknya sering dikaitkan dengan
              peningkatan risiko depresi dan kecemasan.
            </li>
            <li>
              <strong>Sleep apnea</strong>, gangguan serius di mana pernapasan
              berhenti secara berkala selama tidur menyebabkan kelelahan kronis,
              yang mempengaruhi kinerja harian dan kesehatan mental.
            </li>
            <li>
              <strong>Restless legs syndrome</strong>, menyebabkan sensasi tidak
              nyaman di kaki yang memicu keinginan untuk terus menggerakkannya
              dan kehilangan konsentrasi.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Tips untuk Meningkatkan Kualitas Tidur
          </h2>

          <ol className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-decimal pl-6">
            <li>
              <strong>Tetapkan Jadwal Tidur Teratur</strong>: Tidur dan bangun
              di waktu yang sama setiap hari membantu mengatur ritme sirkadian
              tubuh.
            </li>
            <li>
              <strong>Ciptakan Lingkungan Tidur yang Nyaman</strong>: Pastikan
              kamar tidur gelap, tenang, dan sejuk. Investasikan pada kasur dan
              bantal yang nyaman.
            </li>
            <li>
              <strong>Hindari Kafein dan Alkohol Sebelum Tidur</strong>: Kafein
              dan alkohol bisa mengganggu tidur, jadi hindari konsumsi beberapa
              jam sebelum tidur.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel4;
