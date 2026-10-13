import { motion } from "framer-motion";
import Image from "next/image";
import { TiArrowForward } from "react-icons/ti";
import { ifsLogo } from "@/public/assets";

const Ifs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <div className="flex items-start gap-4">
        <Image
          src={ifsLogo}
          alt="IFS logo"
          className="w-14 h-14 rounded-md object-cover"
        />
        <div>
          <h3 className="flex flex-col sm:flex-row sm:flex-wrap gap-1 font-medium text-xl font-titleFont">
            Trainee Quality Assurance Engineer – Automation &amp; Manual
            <span className="text-textGreen tracking-wide">
              @IFS R&amp;D International (Pvt) Ltd
            </span>
          </h3>
          <p className="text-sm mt-1 font-medium text-textDark">
            June 2025 – September 2026
          </p>
        </div>
      </div>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and maintained automated tests for Windows, Android, iOS,
          and MAUI applications using Katalon Studio.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Performed manual and automated testing including functional,
          regression, smoke, API, web, mobile, and Windows testing.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted API testing using Postman and Swagger UI, with Redis for
          data validation and troubleshooting.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated Katalon Studio with Jenkins CI/CD for continuous and
          nightly test execution.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Managed defects using Jira, including tracking, retesting,
          verification, and root cause analysis.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated in Agile/Scrum teams, contributing to SDLC/STLC
          activities, test case design, and continuous QA improvement.
        </li>
      </ul>
    </motion.div>
  );
};

export default Ifs;
