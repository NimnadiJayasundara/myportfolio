import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hi, I&apos;m Hansi Nimnadi, an undergraduate at the{" "}	  
            <span className="text-textGreen">
            Faculty of Information Technology, University of Moratuwa. 
            </span> 
            {" "} I have a strong foundation in both front-end and back-end development,
            with a passion for creating {" "}
            <span className="text-textGreen">
            user-friendly, responsive web applications
            </span>  
            {" "} and visually appealing designs that provide intuitive and seamless user experiences. 
          </p>
          <p>
          I&apos;m also experienced in {" "}
          <span className="text-textGreen"> 
          managing development workflows
          </span>
          {" "} and enjoy working collaboratively in 
          teams to deliver high-quality software. My goal is to leverage my technical skills 
          to develop innovative solutions and drive results.
          </p>
          <p>
            I am passionate about learning new technologies and improving my skills in full-stack development, and enhancing my expertise in UI/UX design.
          </p>
          
          <p>Here are a few technologies I have been working with recently :</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React 
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Figma
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Javascript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Canva
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              HTML
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Blender
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Prototyping
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-60 sm:h-72 md:h-80 relative group mx-auto">
        <div className="absolute w-full h-full -left-4 sm:-left-5 md:-left-6 -top-4 sm:-top-5 md:-top-6 rounded-lg">
          <div className="w-full h-full relative z-20 flex pl-4 sm:pl-5 md:pl-6 lg:pl-0">
            <Image
              className="rounded-lg h-full object-cover"
              src={profileImg}
              alt="profileImg"
            />
            <div className="hidden lg:inline-block absolute w-full h-full  rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </div>
        <div className="hidden lg:inline-flex w-full h-full border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
      </div>
      </div>
    </section>
  );
};

export default About;