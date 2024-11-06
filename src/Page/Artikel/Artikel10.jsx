import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import A10 from "../../../public/image/Artikel10.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Artikel10 = () => {
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
            Kesehatan Mental di Tempat Kerja: Tantangan dan Solusi
          </h1>

          <img
            src={A10}
            alt="Ilustrasi artikel mengenai kesehatan mental di tempat kerja"
            className="w-full h-48 sm:h-72 object-cover rounded-lg mb-6"
          />

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Masalah Kesehatan Mental di Tempat Kerja
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Kesehatan mental di tempat kerja menjadi isu yang semakin serius.
            Tekanan kerja yang tinggi, tenggat waktu yang ketat, dan lingkungan
            kerja yang kompetitif dapat berdampak buruk pada kesehatan mental
            karyawan. Berikut adalah beberapa masalah yang sering terjadi:
          </p>

          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Beban Kerja yang Berlebihan:</strong> Terlalu banyak tugas
              dalam waktu singkat dapat menyebabkan stres dan kelelahan.
            </li>
            <li>
              <strong>Tekanan untuk Bekerja:</strong> Kebutuhan untuk selalu
              memberikan hasil terbaik bisa menyebabkan kecemasan dan ketakutan
              akan kegagalan.
            </li>
            <li>
              <strong>Kurangnya Dukungan Sosial:</strong> Kurangnya hubungan
              baik dengan rekan kerja dan atasan dapat membuat karyawan merasa
              terisolasi dan kesepian.
            </li>
            <li>
              <strong>Kurangnya Fleksibilitas:</strong> Jadwal kerja yang kaku
              dan kurangnya pilihan untuk menyesuaikan jam kerja dapat
              mengganggu keseimbangan hidup.
            </li>
            <li>
              <strong>Diskriminasi dan Penindasan:</strong> Pengalaman
              diskriminasi dan penindasan di tempat kerja dapat menyebabkan
              trauma psikologis.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Tips Menjaga Kesehatan Mental di Tempat Kerja
          </h2>

          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Mengelola Stres:</strong> Lakukan aktivitas santai seperti
              meditasi, yoga, atau jalan-jalan untuk meredakan stres.
            </li>
            <li>
              <strong>Jaga Hidup Seimbang:</strong> Luangkan waktu untuk
              keluarga, teman, dan hobi di luar pekerjaan.
            </li>
            <li>
              <strong>Berkomunikasi dengan Manajer Anda:</strong> Jika merasa
              kewalahan atau membutuhkan dukungan, bicaralah dengan manajer
              Anda.
            </li>
            <li>
              <strong>Berolahraga Secara Teratur:</strong> Olahraga dapat
              membantu mengurangi stres dan meningkatkan mood.
            </li>
            <li>
              <strong>Membangun Hubungan Positif dengan Rekan Kerja:</strong>{" "}
              Bangun jaringan sosial positif di tempat kerja.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Pentingnya Lingkungan Kerja yang Mendukung Kesehatan Mental
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Perusahaan berperan penting dalam menciptakan lingkungan kerja yang
            mendukung kesehatan mental karyawannya. Berikut adalah beberapa
            langkah yang bisa diambil perusahaan untuk mencapainya:
          </p>

          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Meningkatkan Keseimbangan Kehidupan Kerja:</strong>{" "}
              Memberikan fleksibilitas di tempat kerja, seperti bekerja dari
              rumah dan jam kerja yang fleksibel.
            </li>
            <li>
              <strong>Menciptakan Budaya Kerja Positif:</strong> Lingkungan
              kerja yang saling menghormati, terbuka, dan mendukung.
            </li>
            <li>
              <strong>Menyediakan Program Tunjangan Karyawan:</strong> Misalnya
              yoga, meditasi, program konseling, dan lain-lain.
            </li>
            <li>
              <strong>Mendidik Karyawan tentang Kesehatan Mental:</strong>{" "}
              Memberikan informasi tentang tanda-tanda penyakit mental dan
              sumber daya yang tersedia.
            </li>
          </ul>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Kesehatan mental yang baik sangat penting untuk produktivitas dan
            kesejahteraan karyawan. Dengan memahami tantangan yang ada dan
            menerapkan tips di atas, dapat menciptakan lingkungan kerja yang
            lebih sehat dan mendukung
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel10;
