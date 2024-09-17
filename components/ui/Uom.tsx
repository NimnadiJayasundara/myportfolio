import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Undergraduate
        <span className="text-textGreen tracking-wide">@University of Moratuwa</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        2021 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Acquired a broad understanding of information technology, including software development, 
          system design, and database management.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed skills in project management, strategic planning, and organizational behavior, 
          integrating technology with business strategies.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engaged in practical projects and real-world applications, enhancing both technical proficiency and managerial 
          capabilities through experiential learning.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
