import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Diploma Student
        <span className="text-textGreen tracking-wide">@University of Sabaragamuwa</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2020 - Dec 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Completed a diploma in English, which sharpened my language skills across reading, writing, listening, and speaking, 
          similar to the comprehensive preparation for IELTS.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Gained strong foundations in academic and professional English, including grammar, vocabulary, 
          and effective communication techniques.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Acquired the ability to confidently use English in various contexts and enhancing my global communication skills.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
