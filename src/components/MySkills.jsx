import { TbBrandRedux } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const MySkills = () => {
  return (
    <div id="skills" className="pt-20">
      <h1 className="text-center mb-7 text-2xl font-bold   md:text-3xl lg:text-4xl 2xl:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-200">
          My Skills
        </span>
      </h1>
      <div className="border border-green-600 p-4 rounded-lg">
        <ul className="flex flex-wrap justify-center items-center gap-4">
          <li className="flex justify-center items-center gap-2 font-bold text-lg md:text-xl text-green-500 bg-green-950 px-2 rounded-full py-1">
            <FaHtml5 />
            <p>HTML5</p>
          </li>
          <li className="flex justify-center items-center gap-2 font-bold text-lg md:text-xl text-green-500  bg-green-950 px-2 rounded-full py-1">
            <FaCss3Alt />
            <p>Css3</p>
          </li>
          <li className="flex justify-center items-center gap-2 font-bold text-lg md:text-xl text-green-500  bg-green-950 px-2 rounded-full py-1">
            <SiJavascript />
            <p>Javascript</p>
          </li>
          <li className="flex justify-center items-center gap-2 font-bold text-lg md:text-xl text-green-500  bg-green-950 px-2 rounded-full py-1">
            <RiTailwindCssFill />
            <p>TailwindCss</p>
          </li>
          <li className="flex justify-center items-center gap-2 font-bold text-lg md:text-xl text-green-500  bg-green-950 px-2 rounded-full py-1">
            <FaReact />
            <p>React</p>
          </li>
          <li className="flex justify-center items-center gap-2 font-bold text-lg md:text-xl text-green-500  bg-green-950 px-2 rounded-full py-1">
            <TbBrandRedux />
            <p>Redux Toolkit</p>
          </li>
          <li className="flex justify-center items-center gap-2 font-bold text-lg md:text-xl text-green-500  bg-green-950 px-2 rounded-full py-1">
            <FaNodeJs />
            <p>Node</p>
          </li>
          <li className="flex justify-center items-center gap-2 font-bold text-lg md:text-xl text-green-500  bg-green-950 px-2 rounded-full py-1">
            <SiExpress />
            <p>Exprees</p>
          </li>
          <li className="flex justify-center items-center gap-2 font-bold text-lg md:text-xl text-green-500  bg-green-950 px-2 rounded-full py-1">
            <SiMongodb />
            <p>MondoDB</p>
          </li>
          <li className="flex justify-center items-center gap-2 font-bold text-lg md:text-xl text-green-500  bg-green-950 px-2 rounded-full py-1">
            <FaGithub />
            <p>MondoDB</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MySkills;
