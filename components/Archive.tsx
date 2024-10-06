import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import Image from "next/image";
import company from "../public/assets/images/company.png";
import company4 from "../public/assets/images/company4.png";
import company5 from "../public/assets/images/company5.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Archive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const cards = [
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
    /*
    {
      title: "OREBI e-commerce Shopping store",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      listItem: ["Reactjs", "Tailwind CSS", "getform.io"],
      link: "https://orebishopping.reactbd.com/",
      image: company,
    },
    {
      title: "Noor Online Shopping Store",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      listItem: ["Reactjs", "Tailwind CSS", "redux-toolkit"],
      link: "https://",
      image: company,
    },
    {
      title: "Personalized Blog",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      listItem: ["Nextjs", "Tailwind CSS", "next-auth", "firebase"],
      link: "https://",
      image: company,
    },*/
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-">
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
    
      {/* Uncomment this section if you want to use the Show More/Show Less functionality
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
      */}
    </div>
  );
};

export default Archive;