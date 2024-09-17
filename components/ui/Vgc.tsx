import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Student
        <span className="text-textGreen tracking-wide">@Vishaka Girls' College</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2005 - Dec 2018
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Gained a strong educational background over 13 years, covering a broad range of 
          subjects and building a solid academic base.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed critical thinking, problem-solving, and communication skills through a well-rounded 
          curriculum and diverse learning experiences.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Benefited from a supportive environment that fostered personal growth, leadership, and 
          extracurricular involvement, contributing to overall development.
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
