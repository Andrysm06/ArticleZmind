import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const TentangKami = () => {
  console.log("Rendering TentangKami component");

  return (
    <div>
      <Navbar />
      <div className="py-24 bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8">
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-4 sm:mb-6">
            Tentang Z Mind
          </h1>

          <div className="flex items-center justify-center">
            <img
              src="/image/ZmindLogo.png"
              alt="Ilustrasi Z Mind"
              className="h-10 sm:h-20 object-cover rounded-lg mb-4"
              onLoad={() => console.log("ZmindLogo image loaded")}
              onError={() => console.error("Failed to load ZmindLogo image")}
            />
          </div>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Berawal dari keinginan untuk membuat jutaan orang tersenyum kembali,
            Z Mind kemudian tumbuh sepenuhnya menjadi perusahaan kesehatan
            mental terbaik di Indonesia. Perjalanan kami untuk menyediakan
            solusi kesehatan mental di Indonesia bermula dari menghubungkan
            orang-orang yang sedang berjuang dengan masalah pribadinya bersama
            Psikolog.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Yang Mengawali Langkah Z Mind
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Gangguan emosional yang terus meningkat di Indonesia, ditambah
            dengan masih minimnya bantuan kesehatan mental yang tersedia,
            semakin memperburuk keadaan. Berikut adalah statistik yang
            mencerminkan pentingnya upaya ini:
          </p>

          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>19 juta</strong> orang mengalami gangguan emosional.
            </li>
            <li>
              <strong>56 juta</strong> orang berpotensi memiliki gangguan
              emosional.
            </li>
            <li>
              <strong>18,5 juta</strong> orang belum mencari bantuan untuk
              mengatasi masalah kesehatan mental mereka.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Ratusan Ribu Masalah Pribadi Telah Diselesaikan oleh Z Mind
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Bermula dari layanan konseling, Z Mind kini menyediakan layanan
            meditasi untuk membantu orang-orang menjaga kesehatan mental mereka
            dengan lebih baik.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            "Z Mind berkomitmen untuk meningkatkan standar layanan kesehatan
            mental di Indonesia."
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Visi Kami
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Mewujudkan ketenangan pikiran dan menorehkan senyuman pada semua
            orang.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Misi Kami
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Menyediakan layanan dan edukasi kesehatan mental dengan cara yang
            efektif, efisien, dan dapat diakses oleh seluruh masyarakat
            Indonesia.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TentangKami;
