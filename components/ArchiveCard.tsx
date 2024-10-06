import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  des: string;
  listItem: string[];
  link: string;
  image: StaticImageData;
}

const ArchiveCard = ({ title, des, listItem, link, image }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-120 h-124 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
       
        <div>
          <Image src={image} alt={title} className="w-full h-80 object-cover rounded-lg" />
          <h2 className="text-xl text-bodyColor font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
          <p className="text-sm mt-3 text-bodyColor">{des}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
