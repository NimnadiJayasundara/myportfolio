import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 relative"
    >
      {/* Existing Text Section */}
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col text-textLight"
      >
        Hansi Nimnadi
        <span className="text-textDark mt-2 lgl:mt-4">
          a web developer..
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I enjoy creating things that live on the internet. Passionate about creating innovative IT solutions,
        I aim to contribute to projects that enhance productivity while ensuring creativity and societal well-being.<br></br>{" "}
        <a href="https://www.linkedin.com/in/hansi-nimnadi/" target="_blank">
          {" "}
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a href="https://github.com/NimnadiJayasundara" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my project!
        </motion.button>
      </a>

      {/* Add IT-related Symbols with Animation */}
      <motion.svg
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-40 top-20 text-textGreen w-16 h-20 opacity-100 sm:w-8 sm:h-12 sm:opacity-50 sm:right-8 sm:top-8"
        width="80"
        height="80"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Laptop Icon */}
        <rect x="4" y="20" width="56" height="32" rx="2" ry="2"></rect>
        <line x1="4" y1="48" x2="60" y2="48"></line>
        <path d="M8 48v4a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4v-4"></path>
      </motion.svg>

      <motion.svg
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-60 top-60 text-textGreen w-16 h-16 opacity-100 sm:w-8 sm:h-12 sm:opacity-50 sm:right-8 sm:top-24"
        width="80"
        height="80"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Code Brackets Icon */}
        <polyline points="16 16 4 32 16 48"></polyline>
        <polyline points="48 16 60 32 48 48"></polyline>
      </motion.svg>

      <motion.svg
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.5 }}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-40 bottom-40 text-textGreen w-16 h-20 opacity-100 sm:w-8 sm:h-12 sm:opacity-50 sm:right-8 sm:top-30"
        width="80"
        height="80"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Cloud Icon */}
        <path d="M48 32a8 8 0 0 0-8-8c-2.83 0-5.29 1.5-6.63 3.63A10 10 0 0 0 18 28a10 10 0 0 0-9.54 13.22"></path>
        <polyline points="16 44 8 44 8 54"></polyline>
        <polyline points="24 44 32 44 32 54"></polyline>
        <polyline points="48 44 56 44 56 54"></polyline>
      </motion.svg>

      <motion.svg
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 4.5 }}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 bottom-20 text-textGreen w-20 h-20 opacity-100 sm:w-8 sm:h-12 sm:opacity-50 sm:right-8 sm:top-30"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="20" width="56" height="24" rx="2" ry="2"></rect>
        <line x1="8" y1="32" x2="56" y2="32"></line>
        <line x1="16" y1="36" x2="24" y2="36"></line>
        <line x1="28" y1="36" x2="36" y2="36"></line>
        <line x1="40" y1="36" x2="48" y2="36"></line>
      </motion.svg>


      {/* Database Icon */}
      <motion.svg
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.5 }}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-60 text-textGreen w-20 h-20 opacity-100 sm:w-8 sm:h-12 sm:opacity-50 sm:right-8 sm:top-40"
        width="80"
        height="80"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="32" cy="12" rx="20" ry="8"></ellipse>
        <path d="M12 12v20c0 4 8 8 20 8s20-4 20-8V12"></path>
        <line x1="12" y1="32" x2="12" y2="44"></line>
        <line x1="52" y1="32" x2="52" y2="44"></line>
        <path d="M12 44c0 4 8 8 20 8s20-4 20-8"></path>
        </motion.svg>
    </section>
  );
};

export default Banner;