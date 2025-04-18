import { TbBrandGithub } from "react-icons/tb";
import { FaMedium } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-bodyColor">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/NimnadiJayasundara" target="_blank">
          <span className="w-10 h-10 text-xl bg-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen hover:bg-textLight cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://medium.com/@nimnadijayasundara12"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen hover:bg-textLight cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaMedium />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/hansi-nimnadi/"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen hover:bg-textLight cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <span className="w-10 h-10 text-xl bg-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen hover:bg-textLight cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialYoutube  />
          </span>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <span className="w-10 h-10 text-xl bg-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen hover:bg-textLight cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
