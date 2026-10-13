import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Ifs from "./ui/Ifs";

const WorkExperience = () => {
  const [workIfs, setWorkIfs] = useState(true);

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => setWorkIfs(true)}
            className={`${
              workIfs
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            IFS
          </li>
        </ul>
        {workIfs && <Ifs />}
      </div>
    </section>
  );
};

export default WorkExperience;
