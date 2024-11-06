import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import A7 from "../../../public/image/Artikel7.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Artikel7 = () => {
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
            Membangun Hubungan Sosial yang Sehat
          </h1>
          <img
            src={A7}
            alt="Ilustrasi artikel mengenai tidur"
            className="w-full h-48 sm:h-72 object-cover rounded-lg mb-6"
          />

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            <strong>
              Pentingnya Hubungan Sosial Untuk Kesehatan Mental dan Tips
              Memperkuatnya.
            </strong>
            <br />
            <br />
            Di dunia yang semakin terhubung secara digital, kita sering kali
            merasa lebih sendirian daripada sebelumnya. Mungkin Anda pernah
            berada di tengah keramaian atau dikelilingi banyak teman di media
            sosial, tetapi tetap merasa hampa. Mengapa ini bisa terjadi?
            Jawabannya mungkin terletak pada kualitas hubungan sosial kita,
            bukan kuantitasnya. Hubungan sosial yang sehat dan bermakna bukan
            hanya penting untuk kesejahteraan emosional kita, tetapi juga
            merupakan pondasi bagi kesehatan mental yang kuat.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Mengapa Hubungan Sosial Penting bagi Kesehatan Mental?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Manusia adalah makhluk sosial. Dari zaman nenek moyang kita, kita
            hidup berkelompok, bergantung satu sama lain untuk bertahan hidup.
            Di zaman modern, kebutuhan ini tetap ada, meskipun kita tidak selalu
            menyadarinya. Hubungan sosial yang baik dapat memberikan rasa aman,
            dukungan emosional, dan membantu kita menghadapi tantangan
            kehidupan. Sebaliknya, isolasi sosial dapat memicu stres, kecemasan,
            dan depresi.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Penelitian menunjukkan bahwa orang yang memiliki hubungan sosial
            yang kuat cenderung memiliki risiko lebih rendah terkena masalah
            kesehatan mental. Sebuah studi bahkan menemukan bahwa isolasi sosial
            dapat berbahaya bagi kesehatan kita setara dengan merokok 15 batang
            rokok sehari. Ini menunjukkan betapa pentingnya memiliki hubungan
            yang mendukung dan bermakna dalam hidup kita.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Namun, tidak semua hubungan sosial bersifat positif. Hubungan yang
            toksik atau tidak sehat justru dapat merusak kesehatan mental kita.
            Oleh karena itu, bukan hanya tentang memiliki banyak teman, tetapi
            tentang membangun hubungan yang saling mendukung dan berempati.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Manfaat Hubungan Sosial yang Sehat
          </h2>
          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-disc pl-6">
            <li>
              <strong>Mengurangi Stres dan Kecemasan:</strong> Berbicara dengan
              teman atau keluarga yang dipercaya dapat membantu meredakan stres.
              Dukungan emosional dari orang-orang yang kita percayai membuat
              kita merasa lebih aman dan dipahami.
            </li>
            <li>
              <strong>Meningkatkan Kebahagiaan:</strong> Interaksi positif
              dengan orang lain merangsang produksi hormon oksitosin, yang
              dikenal sebagai "hormon cinta" atau "hormon kebahagiaan".
              Oksitosin membantu menurunkan stres dan meningkatkan perasaan
              bahagia.
            </li>
            <li>
              <strong>Meningkatkan Rasa Percaya Diri:</strong> Saat kita merasa
              dicintai dan dihargai oleh orang-orang di sekitar kita,
              kepercayaan diri kita pun ikut meningkat. Hubungan sosial yang
              sehat membantu kita merasa lebih berharga dan diterima.
            </li>
            <li>
              <strong>Mengurangi Risiko Depresi:</strong> Orang yang merasa
              terisolasi atau kesepian cenderung lebih rentan terhadap depresi.
              Sebaliknya, hubungan sosial yang kuat dapat berfungsi sebagai
              pelindung alami dari gejala depresi.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Tantangan dalam Mempertahankan Hubungan Sosial
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Di tengah kesibukan hidup, mempertahankan hubungan sosial yang sehat
            seringkali menjadi tantangan. Jadwal yang padat, tanggung jawab
            pekerjaan, dan tuntutan kehidupan lainnya dapat membuat kita lupa
            meluangkan waktu untuk orang-orang terdekat. Akibatnya, kita bisa
            merasa semakin jauh dari orang-orang yang kita sayangi.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Namun, penting untuk diingat bahwa hubungan sosial memerlukan
            perhatian dan upaya yang terus-menerus. Sama seperti tanaman yang
            butuh disiram, hubungan sosial juga butuh "dirawat" agar bisa tumbuh
            dan berkembang.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            5 Tips Memperkuat Hubungan Sosial
          </h2>
          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 list-decimal pl-6">
            <li>
              <strong>Berikan Waktu yang Berkualitas:</strong> Jangan hanya
              bertemu atau berbicara dengan orang lain karena keharusan.
              Luangkan waktu untuk benar-benar hadir saat berinteraksi. Hindari
              distraksi seperti ponsel saat sedang bersama teman atau keluarga,
              dan fokuslah pada percakapan yang ada.
            </li>
            <li>
              <strong>Jadilah Pendengar yang Baik:</strong> Mendengarkan dengan
              penuh perhatian adalah salah satu cara terbaik untuk menunjukkan
              bahwa Anda peduli. Saat seseorang berbicara, hindari memotong atau
              memberikan saran yang tidak diminta. Terkadang, mereka hanya butuh
              didengar dan dipahami.
            </li>
            <li>
              <strong>Saling Memberi Dukungan Emosional:</strong> Semua orang
              memiliki masalah dan tantangan dalam hidup. Saat teman atau
              anggota keluarga Anda sedang menghadapi masa sulit, tawarkan
              dukungan tanpa menghakimi. Kehadiran Anda, baik secara fisik
              maupun emosional, bisa sangat berarti.
            </li>
            <li>
              <strong>Jaga Komunikasi Terbuka:</strong> Keterbukaan adalah kunci
              dalam setiap hubungan. Jangan takut untuk berbicara tentang
              perasaan atau harapan Anda. Ini akan membantu mencegah
              kesalahpahaman dan memastikan bahwa hubungan Anda tetap sehat dan
              transparan.
            </li>
            <li>
              <strong>Lakukan Aktivitas Bersama:</strong> Hubungan yang kuat
              sering kali dibangun melalui pengalaman bersama. Rencanakan
              aktivitas yang dapat dinikmati bersama-sama, seperti
              berjalan-jalan, makan malam, atau bahkan olahraga. Ini tidak hanya
              menyenangkan, tetapi juga memperkuat ikatan antara Anda dan
              orang-orang terdekat.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Mengatasi Tantangan di Era Digital
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Media sosial dan teknologi seharusnya membuat kita lebih terhubung,
            tetapi kenyataannya, seringkali membuat kita merasa lebih
            terisolasi. Menghabiskan waktu berjam-jam di media sosial bisa
            memberikan ilusi bahwa kita memiliki banyak teman, tetapi tanpa
            interaksi yang nyata, hubungan ini bisa terasa hampa.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Cobalah untuk membatasi penggunaan media sosial dan fokus pada
            membangun hubungan tatap muka yang lebih bermakna. Jika tidak
            memungkinkan untuk bertemu secara langsung, tetaplah menjaga
            komunikasi yang berkualitas melalui panggilan telepon atau video
            call.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Kesimpulan: Hubungan Sosial Adalah Kunci Kesehatan Mental
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Hubungan sosial yang sehat adalah salah satu faktor terpenting dalam
            menjaga kesehatan mental kita. Dengan hubungan yang kuat, kita dapat
            menghadapi tantangan hidup dengan lebih baik, merasa lebih bahagia,
            dan memiliki rasa aman yang lebih besar. Sebaliknya, isolasi sosial
            dapat berdampak buruk pada kesehatan mental kita.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Jadi, luangkan waktu untuk merawat hubungan sosial Anda. Hubungi
            teman lama, habiskan waktu dengan keluarga, dan jadilah pendengar
            yang baik. Kesehatan mental Anda akan semakin kuat ketika Anda
            dikelilingi oleh orang-orang yang peduli dan mendukung Anda.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Mulailah dari sekarang, karena hubungan sosial yang baik adalah
            investasi jangka panjang untuk kesejahteraan emosional Anda.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel7;
