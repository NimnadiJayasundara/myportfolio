import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import Image from "next/image";
import company from "../public/assets/images/company.png";
import company4 from "../public/assets/images/company4.png";
import company5 from "../public/assets/images/company5.png";
import ifsSportsDay1 from "../public/assets/images/ifsSportsDay1.jpg";
import ifsSportsDay2 from "../public/assets/images/ifsSportsDay2.jpg";
import ifsSportsDay3 from "../public/assets/images/ifsSportsDay3.jpg";
import mwfmCrsDay1 from "../public/assets/images/mwfmCrsDay1.jpg";
import mwfmCrsDay2 from "../public/assets/images/mwfmCrsDay2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Archive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const cards = [
    {
      title: "IFS Table Tennis Team 2025",
      des: "Proud to stand with the IFS Table Tennis team in our kit at Sports Day. Being a team member strengthened connections with colleagues and showed how collaboration and a positive mindset carry from the office onto the court.",
      listItem: ["Tabel Tennis", "Sports Day"],
      link: "#",
      image: ifsSportsDay3,
    },
    {
      title: "IFS Sports Day – Table Tennis Team Member",
      des: "Represented IFS R&D International as a Table Tennis team member at IFS Sports Day. It was a memorable chance to compete alongside colleagues, enjoy the matches, and be part of the wider IFS sports community beyond work.",
      listItem: ["IFS Sports Day", "Table Tennis"],
      link: "#",
      image: ifsSportsDay1,
    },
    {
      title: "On Court with the IFS Earth Kingdom Team Squad",
      des: "Joined the IFS Table Tennis team on court during Sports Day, sharing the energy of the games and supporting one another as we represented the company. The day highlighted teamwork, sportsmanship, and the fun of competing together.",
      listItem: ["Team Earth", "IFS"],
      link: "#",
      image: ifsSportsDay2,
    },
    {
      title: "MWFM CRS Day – Matara Beach Clean 2025",
      des: "Took part in MWFM CRS Day at the Matara Beach Clean 2025 with IFS Service and Asset Management, Utilities WFM Team Sri Lanka. The day brought the team together to give back to the community, care for the coastline, and spend time beyond day-to-day work.",
      listItem: ["MWFM CRS Day", "Matara Beach Clean 2025"],
      link: "#",
      image: mwfmCrsDay1,
    },
    {
      title: "IFS Utilities WFM Team – Service & Asset Management",
      des: "Joined colleagues from IFS Service and Asset Management, Utilities WFM Team Sri Lanka, for a beach clean at Matara. It was a meaningful CRS activity that strengthened team bonds while contributing to a cleaner, more sustainable local environment.",
      listItem: ["IFS MWFM", "Sri Lanka"],
      link: "#",
      image: mwfmCrsDay2,
    },
    {
      title: "Understanding Software Firm Functions",
      des: "This involves gaining insights into their approach to developing and deploying software solutions, focusing on innovation, and addressing industry-specific needs and challenges through technology. We had the opportunity to work with Sysco Labs at Level 1.",
      listItem: [""],
      link: "https://",
      image: company4,
    },
    {
      title: "Collaborate with the firm during the Future Career",
      des: "We had the valuable opportunity to collaborate with the firm during the Future Career Programme, where we engaged in various activities that enhanced our professional skills and network. This experience not only allowed us to connect with industry experts but also equipped us with insights into career development and the skills necessary for success in our future endeavors.",
      listItem: [""],
      link: "https://www./",
      image: company,
    },
    {
      title: "Teamwork through Volunteering at Family Aurudu",
      des: "We had the valuable opportunity to be involved as external volunteering organizers for the Family Aurudu event at Sysco Lab. It allowed us to connect with each other, foster teamwork, and contribute to the success of the event while gaining meaningful experiences in organizing and collaboration.",
      listItem: [""],
      link: "https://",
      image: company5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="archive" className="max-w-contentContainer mx-auto px-4 py-10">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Activities
        </h2>
        
      </div>
      <div className="relative w-full mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ArchiveCard
              title={cards[currentIndex].title}
              des={cards[currentIndex].des}
              listItem={cards[currentIndex].listItem}
              link={cards[currentIndex].link}
              image={cards[currentIndex].image}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-16">
          <button onClick={handlePrev} className="p-2 bg-[#f4f4f5] rounded-full hover:bg-gray-700 transition">
            <FaArrowLeft className="text-textGreen" />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-16">
          <button onClick={handleNext} className="p-2 bg-[#f4f4f5] rounded-full hover:bg-gray-700 transition">
            <FaArrowRight className="text-textGreen" />
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-textGreen" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    
    </div>
  );
};

export default Archive;