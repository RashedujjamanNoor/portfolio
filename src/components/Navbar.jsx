import { SiCodingninjas } from "react-icons/si";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="py-4 flex justify-between items-center flex-wrap px-2 lg:mx-10 border-b-green-600 border-b sticky top-0 mb-1 bg-primary">
      <div className="flex items-center gap-2">
        <SiCodingninjas className="text-3xl lg:text-5xl text-green-600" />
        <p className="text-3xl lg:text-5xl font-bold">Noor.</p>
      </div>

      <div className="hidden md:block">
        <div className="flex justify-center items-center gap-8 text-gray-400 lg:text-xl font-medium">
          <a href="#about">About Me</a>
          <a href="#skills">Skill</a>
          <a href="#projects">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <button className="bg-btncolor btn lg:py-3 lg:px-6">Hire me</button>
      </div>

      <div className="md:hidden" onClick={() => setMenu(!menu)}>
        {menu ? (
          <RxCross2 className="text-green-600 text-3xl " />
        ) : (
          <RiMenu3Line className="text-green-600 text-3xl" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
