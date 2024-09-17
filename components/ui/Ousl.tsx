import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Student
        <span className="text-textGreen tracking-wide">@Open University of Sri Lanka</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2019 - April 2019
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Gained a solid understanding of basic computing concepts, including hardware, 
          software, and operating systems.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed skills in using essential productivity software such as word processors, 
          spreadsheets, and presentation tools.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Enhanced my ability to navigate the digital world, from internet usage to basic troubleshooting and file management.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
