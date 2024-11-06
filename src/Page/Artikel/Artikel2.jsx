import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import A2 from "../../../public/image/Artikel2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Artikel2 = () => {
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
            Kecemasan Mengelola Kekhawatiran yang Berlebihan
          </h1>

          <img
            src={A2}
            alt="Ilustrasi artikel mengenai kecemasan"
            className="w-full h-48 sm:h-72 object-cover rounded-lg mb-6"
          />

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Kecemasan adalah respon alami tubuh terhadap stres. Namun, ketika
            kecemasan menjadi berlebihan dan mengganggu aktivitas sehari-hari,
            maka itu bisa menjadi gangguan mental. Ada beberapa jenis kecemasan
            yang umum, antara lain:
          </p>

          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>
                Kecemasan Umum (Generalized Anxiety Disorder - GAD)
              </strong>
              : Merupakan kecemasan yang terus-menerus dan berlebihan terhadap
              berbagai situasi.
            </li>
            <li>
              <strong>Gangguan Panik</strong>: Ditandai dengan serangan panik
              yang tiba-tiba dan intens, disertai gejala fisik seperti jantung
              berdebar, sesak napas, dan pusing.
            </li>
            <li>
              <strong>Fobia Spesifik</strong>: Ketakutan yang berlebihan
              terhadap objek atau situasi tertentu (misalnya, takut pada
              ketinggian, hewan, atau ruang tertutup).
            </li>
            <li>
              <strong>Kecemasan Sosial</strong>: Ketakutan yang intens akan
              penilaian negatif dari orang lain dalam situasi sosial.
            </li>
            <li>
              <strong>Gangguan Obsesif-Kompulsif (OCD)</strong>: Ditandai dengan
              pikiran obsesif yang berulang dan perilaku kompulsif untuk
              mengurangi kecemasan.
            </li>
          </ul>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Teknik relaksasi dapat membantu meredakan gejala fisik dan mental
            yang terkait dengan kecemasan. Beberapa teknik yang efektif antara
            lain:
          </p>

          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Pernapasan Dalam</strong>: Fokus pada pernapasan yang
              lambat dan dalam untuk menenangkan sistem saraf.
            </li>
            <li>
              <strong>Meditasi</strong>: Melatih pikiran untuk fokus pada satu
              hal, seperti pernapasan atau mantra, untuk mengurangi pikiran yang
              kacau.
            </li>
            <li>
              <strong>Yoga</strong>: Kombinasi gerakan fisik dan pernapasan yang
              membantu mengurangi stres dan meningkatkan fleksibilitas.
            </li>
            <li>
              <strong>Visualisasi</strong>: Membayangkan tempat atau situasi
              yang menenangkan untuk mengurangi kecemasan.
            </li>
          </ul>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Salah satu metode yang sangat efektif dalam mengatasi kecemasan
            adalah Terapi Kognitif Perilaku (CBT). Terapi ini membantu individu
            mengidentifikasi dan mengubah pola pikir yang memicu kecemasan.
            Beberapa teknik CBT yang umum digunakan meliputi:
          </p>

          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Reframing</strong>: Mengubah cara berpikir tentang situasi
              yang memicu kecemasan.
            </li>
            <li>
              <strong>Eksposur Bertahap</strong>: Terpapar secara bertahap pada
              situasi yang ditakuti untuk mengurangi ketakutan.
            </li>
            <li>
              <strong>Pelatihan Keterampilan Koping</strong>: Belajar
              keterampilan baru untuk mengatasi stres dan kecemasan.
            </li>
          </ul>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Terapi ini berfokus pada masalah saat ini dan memberikan
            keterampilan praktis yang bisa langsung diterapkan dalam kehidupan
            sehari-hari. Penelitian menunjukkan bahwa CBT sangat efektif dalam
            mengurangi gejala kecemasan.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel2;
