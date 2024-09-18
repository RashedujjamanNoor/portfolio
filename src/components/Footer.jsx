import React from "react";
import { SiCodingninjas } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-center items-center gap-2">
            <SiCodingninjas className="text-3xl  text-green-600" />
            <p className="text-3xl font-bold">Portfolio</p>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              className="bg-white/10 p-3 rounded-full hover:text-green-400 hover:scale-105 transition-all duration-300"
              href="https://www.facebook.com/"
            >
              <FaFacebookF />
            </a>
            <a
              className="bg-white/10 p-3 rounded-full hover:text-green-400 hover:scale-105 transition-all duration-300"
              href="https://www.linkedin.com/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="bg-white/10 p-3 rounded-full hover:text-green-400 hover:scale-105 transition-all duration-300"
              href="#"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
