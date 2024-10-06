// File: components/Projects.js

import { interfaceImg, interface2Img, interface3Img } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";

const Projects = () => {
  // Animation Variants

  // Container Variants: Controls the overall animation of the project container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggers the animation of child elements
      },
    },
  };

  // Card Variants: Controls individual project card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  // Image Hover Variants: Controls the hover effect on project images
  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />

      {/* Project Container with Staggered Animation */}
      <motion.div
        className="w-full flex flex-col items-center justify-center gap-28 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Project One */}
        <motion.div className="flex flex-col xl:flex-row gap-6" variants={cardVariants}>
          <motion.a
            className="w-full xl:w-1/2 h-auto relative group"
            href="" // Add the project link here
            target="_blank"
            rel="noopener noreferrer"
            variants={imageVariants}
            whileHover="hover"
          >
            <motion.div>
              <Image
                className="w-full h-full object-contain"
                src={interface2Img}
                alt="Travel Transport Management System"
                layout="responsive"
                priority
              />
              <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </motion.div>
          </motion.a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Individual Project (Ongoing)
              </p>
              <h3 className="text-2xl font-bold">Travel Fleet Management System</h3>
            </div>
            <p className="bg-[#ff8639] text-sm md:text-base p-2 md:p-6 rounded-md text-bodyColor">
              A specialized Transportation Management System (TMS) designed for tourism and travel agencies 
              is needed to streamline these processes, ensuring {" "} 
              <span className="text-[#092850]">
                effective vehicle maintenance, efficient trip management, 
                accurate driver assignment, and optimized route planning 
              </span> 
              {" "}to enhance operational efficiency and improve the customer experience.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Reactjs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/NimnadiJayasundara" // Replace with actual GitHub link
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithub />
              </a>
              {/*
              <a
                className="hover:text-textGreen duration-300"
                href="" // Add YouTube link if available
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube />
              </a>
              */}
              <a
                className="hover:text-textGreen duration-300"
                href="" // Add project live link if available
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Two */}
        <motion.div className="flex flex-col xl:flex-row-reverse gap-6" variants={cardVariants}>
          <motion.a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://imsfrontend.vercel.app/" // Replace with actual project link
            target="_blank"
            rel="noopener noreferrer"
            variants={imageVariants}
            whileHover="hover"
          >
            <motion.div>
              <Image
                className="w-full h-full object-contain"
                src={interfaceImg}
                alt="Intern Management System"
                layout="responsive"
                priority
              />
              <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </motion.div>
          </motion.a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Group Project
              </p>
              <h3 className="text-2xl font-bold">Intern Management System</h3>
            </div>
            <p className="bg-[#ff8639] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md text-bodyColor">
              Second year (2023 - 2024) software project mentored by <span className="text-[#092850]">99X</span>.
              This focuses on developing a platform that enables companies to {" "}
              <span className="text-[#092850]">effectively manage their interns</span>.
              This platform also incorporates mentoring features, allowing for a
              seamless integration of mentoring parties to enhance the intern
              experience.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Reactjs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Tharusha-2000/InternManagementSystemFrontend-using-MERN-stack" // Replace with actual GitHub link
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://imsfrontend.vercel.app/" // Replace with actual live project link
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Three */}
        <motion.div className="flex flex-col xl:flex-row gap-6" variants={cardVariants}>
          <motion.a
            className="w-full xl:w-1/2 h-auto relative group"
            href="" // Add the project link here
            target="_blank"
            rel="noopener noreferrer"
            variants={imageVariants}
            whileHover="hover"
          >
            <motion.div>
              <Image
                className="w-full h-full object-contain"
                src={interface3Img}
                alt="Microcontroller based ICT Project"
                layout="responsive"
                priority
              />
              <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </motion.div>
          </motion.a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Hardware Project
              </p>
              <h3 className="text-2xl font-bold">Microcontroller based ICT Project</h3>
            </div>
            <p className="text-sm md:text-base bg-[#ff8639] p-2 md:p-6 rounded-md text-bodyColor">
              First year (2022 - 2023) hardware project mentored by university, developed a biodegradable plate-making machine using <span className="text-[#092850]">Arduino
                microcontroller and various sensors</span>.
              This focused on creating an eco-friendly solution with
              successfully integrating hardware components to <span className="text-[#092850]">automate and
              optimize</span> the production process.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>C++</li>
              <li>Arduino</li>
              <li>Proteus Simulation</li>
              <li>Easy EDA</li>
              <li>Blender</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/YourGithubRepo" // Replace with actual GitHub link
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithub />
              </a>
              {/*
              <a
                className="hover:text-textGreen duration-300"
                href="" // Add YouTube link if available
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube />
              </a>
              */}
              <a
                className="hover:text-textGreen duration-300"
                href="" // Add project live link if available
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
