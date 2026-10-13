import { argnetImg } from "@/public/assets";
import Image from "next/image";
import { RxOpenInNewWindow } from "react-icons/rx";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Research = () => {
  return (
    <section id="research" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Research" titleNo="04" />
      <motion.div
        className="w-full flex flex-col xl:flex-row gap-6 mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://argnet-x.web.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-full h-full object-cover rounded-lg border border-gray-200"
            src={argnetImg}
            alt="ARGNet research dashboard"
            priority
          />
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Research
            </p>
            <h3 className="text-2xl font-bold">
              Data-Driven Automated Metagenomic Surveillance Pipeline for
              Detecting and Quantifying Antimicrobial Resistance (AMR)
            </h3>
          </div>
          <p className="bg-[#ff8639] text-sm md:text-base p-2 md:p-6 rounded-md text-bodyColor">
            Developed an automated bioinformatics pipeline to detect and
            quantify antimicrobial resistance genes (ARGs) from global
            wastewater shotgun metagenomic sequencing data. Implemented
            sequence quality control, reference-based alignment, and gene
            annotation. Designed standard indicators using Python to integrate
            resistance abundance, gene and functional diversity, and resistance
            priority through a normalized geometric aggregation model.
            Evaluating resistance patterns across wastewater samples to support
            comparative AMR surveillance and data-driven resistance burden
            assessment.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-4 justify-end text-textDark">
            <li>Python</li>
            <li>Pandas</li>
            <li>Fastp</li>
            <li>Bowtie2</li>
            <li>SAMtools</li>
            <li>CARD</li>
            <li>ResFinder</li>
            <li>Shotgun Metagenomics</li>
          </ul>
          <a
            className="text-2xl hover:text-textGreen duration-300"
            href="https://argnet-x.web.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open ARGNet project website"
          >
            <RxOpenInNewWindow />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Research;
