import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import A1 from "../../public/image/Artikel1.jpg";
import A2 from "../../public/image/Artikel2.jpg";
import A3 from "../../public/image/Artikel3.jpg";
import A4 from "../../public/image/Artikel4.jpg";
import A5 from "../../public/image/Artikel5.jpg";
import A6 from "../../public/image/Artikel6.jpg";
import A7 from "../../public/image/Artikel7.jpg";
import A8 from "../../public/image/Artikel8.jpg";
import A9 from "../../public/image/Artikel9.jpg";
import A10 from "../../public/image/Artikel10.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const articles = [
  {
    id: 1,
    title: "Memahami Depresi Lebih dari Sekadar Sedih",
    description: "Deskripsi artikel 1",
    image: A1,
    link: "/Artikel1",
  },
  {
    id: 2,
    title: "Kecemasan Mengelola Kekhawatiran Yang Berlebihan",
    description: "Deskripsi artikel 2",
    image: A2,
    link: "/Artikel2",
  },
  {
    id: 3,
    title: "Tentang Stres, Musuh Senyap Kesejahteraan Kita",
    description: "Deskripsi artikel 3",
    image: A3,
    link: "/Artikel3",
  },
  {
    id: 4,
    title: "Pentingnya Tidur yang Cukup untuk Kesehatan Mental",
    description: "Deskripsi artikel 4",
    image: A4,
    link: "/Artikel4",
  },
  {
    id: 5,
    title: "Gizi untuk Kesehatan Mental",
    description: "Deskripsi artikel 5",
    image: A5,
    link: "/Artikel5",
  },
  {
    id: 6,
    title: "Olahraga sebagai Terapi Alami untuk Stres dan Depresi",
    description: "Deskripsi artikel 6",
    image: A6,
    link: "/Artikel6",
  },
  {
    id: 7,
    title: "Membangun Hubungan Sosial yang Sehat",
    description: "Deskripsi artikel 7",
    image: A7,
    link: "/Artikel7",
  },
  {
    id: 8,
    title: "Mindfulness",
    description: "Apa Itu dan Bagaimana Bisa Membantu Kesehatan Mental?",
    image: A8,
    link: "/Artikel8",
  },
  {
    id: 9,
    title: "Memahami Gangguan Bipolar",
    description: "Deskripsi artikel 9",
    image: A9,
    link: "/Artikel9",
  },
  {
    id: 10,
    title: "Kesehatan Mental di Tempat Kerja",
    description: "Deskripsi artikel 10",
    image: A10,
    link: "/Artikel10",
  },
];

const ArtikelPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 3;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages - 1 ? prevPage + 1 : prevPage
    );
  };

  const displayedArticles = articles.slice(
    currentPage * articlesPerPage,
    currentPage * articlesPerPage + articlesPerPage
  );

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen py-24 bg-gray-100">
        <div className="w-full max-w-5xl p-6 bg-white shadow-lg rounded-3xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800  pb-4">
            Daftar Artikel
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayedArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <Link to={article.link}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition duration-300 ease-in-out hover:scale-110"
                  />
                </Link>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 transition duration-300 ease-in-out hover:text-blue-500">
                    <Link to={article.link}>{article.title}</Link>
                  </h2>
                  <p className="text-gray-600">{article.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="px-4 py-2 text-white font-medium rounded-md transform transition duration-300 ease-in-out hover:scale-105 bg-blue-400 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="px-4 py-2 text-white font-medium rounded-md transform transition duration-300 ease-in-out hover:scale-105 bg-blue-400 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArtikelPage;
