import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import A6 from "../../../public/image/Artikel6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Artikel6 = () => {
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
            Olahraga sebagai Terapi Alami untuk Stres dan Depresi
          </h1>
          <img
            src={A6}
            alt="Ilustrasi artikel mengenai tidur"
            className="w-full h-48 sm:h-72 object-cover rounded-lg mb-6"
          />

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            <strong>Apa sih manfaat olahraga bagi kesehatan mental?</strong>{" "}
            Olahraga memiliki berbagai manfaat untuk kesehatan mental yang telah
            dibuktikan oleh banyak penelitian. Menurut American Psychological
            Association, aktivitas fisik dapat mengurangi gejala kecemasan dan
            depresi. Saat berolahraga, tubuh melepaskan endorfin, hormon yang
            dikenal sebagai "hormon kebahagiaan," yang dapat meningkatkan
            suasana hati dan memberikan perasaan positif.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Data dari penelitian yang diterbitkan dalam JAMA Psychiatry
            menunjukkan bahwa orang yang secara teratur berolahraga memiliki
            risiko lebih rendah terkena depresi. Bahkan, hanya dengan 20-30
            menit aktivitas fisik moderat dapat meningkatkan suasana hati secara
            signifikan.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            4 Jenis Rekomendasi Olahraga yang Cocok untuk Kesehatan Mental
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Tidak semua jenis olahraga memiliki efek yang sama, tetapi beberapa
            aktivitas terbukti sangat efektif dalam mengurangi stres dan
            meningkatkan mood. Berikut adalah rekomendasi olahraga yang cocok
            untuk kesehatan mental:
          </p>
          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Lari atau Jogging</strong>: Riset menunjukkan bahwa lari
              dapat meningkatkan produksi endorfin, membantu meredakan gejala
              depresi.
            </li>
            <li>
              <strong>Yoga</strong>: Studi di Journal of Alternative and
              Complementary Medicine menunjukkan bahwa yoga dapat mengurangi
              stres dan meningkatkan kesehatan mental secara keseluruhan.
            </li>
            <li>
              <strong>Olahraga Tim</strong>: Kegiatan seperti sepak bola atau
              basket tidak hanya memberikan manfaat fisik, tetapi juga
              meningkatkan interaksi sosial, yang penting untuk kesehatan
              mental.
            </li>
            <li>
              <strong>Berjalan Kaki</strong>: Penelitian menunjukkan bahwa
              berjalan di alam dapat mengurangi gejala kecemasan dan
              meningkatkan suasana hati.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Konsistensi Adalah Kunci!
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Meskipun manfaat olahraga sudah jelas, konsistensi adalah kunci
            untuk mencapai hasil terbaik. Olahraga teratur membantu membangun
            rutinitas yang konsisten dan memiliki efek positif jangka panjang
            terhadap kesehatan mental. Studi menunjukkan bahwa orang yang
            berolahraga setidaknya 3-4 kali seminggu mengalami peningkatan
            suasana hati dan tingkat energi yang signifikan.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel6;
