import { SiCodingninjas } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-950 p-7 rounded-t-lg mt-8">
      <div className="flex flex-col  items-center gap-6 sm:grid grid-cols-2 justify-center justify-items-center">
        <div>
          <div className="flex justify-center items-center gap-2">
            <SiCodingninjas className="text-3xl  text-green-600" />
            <p className="text-3xl font-bold">Portfolio</p>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              className="bg-white/10 p-3 rounded-full hover:text-green-400 hover:scale-105 transition-all duration-300"
              href="https://www.facebook.com/rashedkhan.rk.96"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              className="bg-white/10 p-3 rounded-full hover:text-green-400 hover:scale-105 transition-all duration-300"
              href="https://www.linkedin.com/in/md-rashedujjaman-noor-006773262/"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              className="bg-white/10 p-3 rounded-full hover:text-green-400 hover:scale-105 transition-all duration-300"
              href="https://github.com/RashedujjamanNoor?tab=repositories"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-xl text-gray-400 font-medium ">Explore</h1>
          <div className="flex flex-col gap-2 mt-3 font-medium text-gray-200">
            <a
              className="hover:text-green-500 transition-all duration-300"
              href="#about"
            >
              About Me
            </a>
            <a
              className="hover:text-green-500 transition-all duration-300"
              href="#skills"
            >
              Skill
            </a>
            <a
              className="hover:text-green-500 transition-all duration-300"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="hover:text-green-500 transition-all duration-300"
              href="#education"
            >
              Education
            </a>
            <a
              className="hover:text-green-500 transition-all duration-300"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5">
        <h1 className="text-gray-200 font-medium ">
          Copyright © All right reserved -| 2024
        </h1>
      </div>
    </div>
  );
};

export default Footer;
