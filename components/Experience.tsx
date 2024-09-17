import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Ousl from "./ui/Ousl";
import Uos from "./ui/Uos";
import Uom from "./ui/Uom";
import Vgc from "./ui/Vgc";

const Experience = () => {
  const [workUom, setWorkUom] = useState(true);
  const [workUos, setWorkUos] = useState(false);
  const [workOusl, setWorkOusl] = useState(false);
  const [workVgc, setWorkVgc] = useState(false);

  const handleUom = () => {
    setWorkUom(true);
    setWorkUos(false);
    setWorkOusl(false);
    setWorkVgc(false);
  };

  const handleUos = () => {
    setWorkUom(false);
    setWorkUos(true);
    setWorkOusl(false);
    setWorkVgc(false);
  };

  const handleOusl = () => {
    setWorkUom(false);
    setWorkUos(false);
    setWorkOusl(true);
    setWorkVgc(false);
  };
  const handleVgc = () => {
    setWorkUom(false);
    setWorkUos(false);
    setWorkOusl(false);
    setWorkVgc(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Educated" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleUom}
            className={`${
              workUom
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            University of Moratuwa
          </li>
          <li
            onClick={handleUos}
            className={`${
              workUos
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            University of Sabaragamuwa
          </li>
          <li
            onClick={handleOusl}
            className={`${
              workOusl
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Open University of Sri Lanka
          </li>
          <li
            onClick={handleVgc}
            className={`${
              workVgc
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Vishaka Girls' College
          </li>
        </ul>
        {workUom && <Uom />}
        {workUos && <Uos />}
        {workOusl && <Ousl />}
        {workVgc && <Vgc />}
      </div>
    </section>
  );
};

export default Experience;
