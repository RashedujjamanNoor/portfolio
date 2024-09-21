import { SiCodingninjas } from "react-icons/si";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="py-4 flex justify-between items-center z-50 flex-wrap px-2 lg:mx-10 border-b-green-600 border-b sticky top-0 mb-1 bg-primary">
      <div className="flex items-center gap-2">
        <SiCodingninjas className="text-3xl lg:text-5xl text-green-600" />
        <p className="text-3xl lg:text-5xl font-bold">Noor.</p>
      </div>

      <div className="hidden md:block">
        <div className="flex justify-center items-center gap-8 text-gray-400 lg:text-xl font-medium">
          <a href="#about">About Me</a>
          <a href="#skills">Skill</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <button className="bg-btncolor btn lg:py-3 lg:px-6">
          <a href="#contact">Hire me</a>
        </button>
      </div>

      <div className="md:hidden" onClick={() => setMenu(!menu)}>
        {menu ? (
          <RxCross2 className="text-green-600 text-3xl " />
        ) : (
          <RiMenu3Line className="text-green-600 text-3xl" />
        )}
      </div>
      <div
        className={`${
          menu ? "fixed w-full" : "hidden"
        } md:hidden overflow-hidden z-30 flex flex-col items-center gap-2 pt-3 px-16 bg-green-900 top-[69px] bottom-0 right-0 transition-all duration-500 text-gray-300 font-medium`}
      >
        <div className="flex items-center gap-2">
          <SiCodingninjas className="text-3xl lg:text-5xl text-green-600" />
          <p className="text-3xl lg:text-5xl font-bold">Noor.</p>
        </div>
        <a onClick={() => setMenu(!menu)} href="#about">
          About Me
        </a>
        <a onClick={() => setMenu(!menu)} href="#skills">
          Skill
        </a>
        <a onClick={() => setMenu(!menu)} href="#projects">
          Projects
        </a>
        <a onClick={() => setMenu(!menu)} href="#education">
          Education
        </a>
        <a onClick={() => setMenu(!menu)} href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
