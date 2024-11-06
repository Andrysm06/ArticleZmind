import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import A5 from "../../../public/image/Artikel5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Artikel5 = () => {
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
            Gizi untuk Kesehatan Mental: Nutrisi Otak dan Pola Makan Sehat
          </h1>

          <img
            src={A5}
            alt="Ilustrasi artikel mengenai tidur"
            className="w-full h-48 sm:h-72 object-cover rounded-lg mb-6"
          />

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Kesehatan mental dan fisik saling berkaitan erat, dan salah satu
            faktor penting yang memengaruhi kesehatan mental adalah nutrisi.
            Makanan yang kita konsumsi memberikan energi dan nutrisi yang
            dibutuhkan oleh otak untuk berfungsi dengan baik.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Nutrisi Penting untuk Kesehatan Otak
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Beberapa nutrisi penting yang mendukung kesehatan otak antara lain:
          </p>
          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Asam lemak omega-3</strong>: Ditemukan dalam ikan berlemak
              seperti salmon, sarden, dan makarel, serta biji chia dan flaxseed.
              Asam lemak omega-3 berperan dalam membangun membran sel otak dan
              membantu mengatur suasana hati.
            </li>
            <li>
              <strong>Vitamin B kompleks</strong>: Terdapat dalam biji-bijian,
              kacang-kacangan, dan daging tanpa lemak. Vitamin B kompleks
              berperan dalam produksi energi sel dan membantu menjaga fungsi
              kognitif.
            </li>
            <li>
              <strong>Vitamin D</strong>: Diproduksi oleh tubuh ketika kulit
              terpapar sinar matahari, dan juga ditemukan dalam ikan berlemak,
              telur, dan produk susu yang diperkaya. Vitamin D berperan dalam
              mengatur suasana hati dan fungsi kekebalan tubuh.
            </li>
            <li>
              <strong>Magnesium</strong>: Ditemukan dalam sayuran hijau berdaun
              gelap, kacang-kacangan, dan biji-bijian. Magnesium membantu
              mengatur aktivitas saraf dan otot, serta mengurangi kecemasan.
            </li>
            <li>
              <strong>Zinc</strong>: Ditemukan dalam daging tanpa lemak,
              kacang-kacangan, dan biji-bijian. Zinc berperan dalam pembelajaran
              dan memori.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Hubungan antara Pola Makan Tidak Sehat dan Gangguan Mood
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Pola makan yang tidak sehat, seperti konsumsi makanan olahan tinggi
            gula, lemak jenuh, dan sodium, serta kekurangan serat, dapat memicu
            peradangan dalam tubuh. Peradangan kronis dikaitkan dengan berbagai
            masalah kesehatan mental, termasuk depresi dan kecemasan. Selain
            itu, fluktuasi gula darah yang drastis akibat konsumsi makanan manis
            dapat menyebabkan perubahan mood yang cepat.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Tips Menyusun Menu Makanan Sehat untuk Kesehatan Mental:
          </h2>
          <ol className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-decimal pl-6">
            <li>
              <strong>Konsumsi makanan utuh</strong>: Utamakan konsumsi
              buah-buahan, sayuran, biji-bijian, kacang-kacangan, dan protein
              tanpa lemak.
            </li>
            <li>
              <strong>Batasi makanan olahan</strong>: Kurangi konsumsi makanan
              cepat saji, makanan kemasan, dan minuman manis.
            </li>
            <li>
              <strong>Perhatikan ukuran porsi</strong>: Jangan makan berlebihan.
            </li>
            <li>
              <strong>Jaga hidrasi</strong>: Minum air putih yang cukup
              sepanjang hari.
            </li>
            <li>
              <strong>Atur jadwal makan</strong>: Makan secara teratur dapat
              membantu menjaga kadar gula darah tetap stabil.
            </li>
            <li>
              <strong>Konsumsi probiotik</strong>: Makanan probiotik seperti
              yogurt dan kimchi dapat membantu menjaga kesehatan usus, yang
              berhubungan dengan kesehatan mental.
            </li>
          </ol>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Contoh menu makanan sehat:
          </h2>
          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Sarapan</strong>: Oatmeal dengan buah-buahan segar dan
              kacang-kacangan.
            </li>
            <li>
              <strong>Makan siang</strong>: Salad sayuran dengan protein tanpa
              lemak (ayam, ikan, atau tahu).
            </li>
            <li>
              <strong>Makan malam</strong>: Nasi merah dengan ikan bakar dan
              sayuran tumis.
            </li>
            <li>
              <strong>Snack</strong>: Buah-buahan, kacang-kacangan, atau yogurt.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel5;
