import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div className="py-5 ">
      <h1 className="font-bold text-center text-2xl mb-3  md:text-3xl lg:text-4xl 2xl:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-200">
          Contact
        </span>
      </h1>
      <hr className="border-green-600" />

      <div className="md:flex justify-between  ">
        <div className="flex flex-col justify-center items-center w-full mr-4">
          <div className="bg-green-950 flex flex-col justify-center items-center w-full my-4 py-5 px-4 font-medium gap-1 rounded-lg">
            <p className="flex flex-col justify-center items-center text-gray-300">
              <span>
                <MdMarkEmailRead className="text-4xl" />
              </span>
              Email
            </p>
            <p>noorrk042@gmail.com</p>
          </div>
          <div className="bg-green-950 flex flex-col justify-center items-center w-full my-4 py-5 font-medium gap-1 rounded-lg">
            <p className="flex flex-col justify-center items-center text-gray-300">
              <span>
                <FaPhoneAlt className="text-3xl" />
              </span>
              Phone Number
            </p>
            <p>+8801765966912</p>
          </div>
          <div className="bg-green-950 flex flex-col justify-center items-center w-full my-4 py-5 font-medium gap-1 rounded-lg px-4 text-center">
            <p className="flex flex-col justify-center items-center text-gray-300">
              <span>
                <MdLocationPin className="text-4xl" />
              </span>
              Address
            </p>
            <p>Upozilla Saidpur, Nilphamari</p>
          </div>
        </div>
        <div className="max-w- flex flex-col  items-center bg-green-950 rounded-lg mt-4 w-full">
          <h1 className="my-3 text-2xl font-medium">Contact Me</h1>
          <form className="px-6 w-full">
            <div className="flex flex-col justify-center items-center gap-3 mb-3 text-slate-300 font-medium">
              <div className="flex gap-2 w-full">
                <div className="w-full">
                  <p>First Name</p>
                  <input
                    type="text"
                    className="w-full rounded mt-1 px-2 py-2 bg-primary text-sm font-medium"
                  />
                </div>
                <div className="w-full">
                  <p>Last Name</p>
                  <input
                    type="text"
                    className="w-full rounded mt-1 px-2 py-2 bg-primary text-sm font-medium"
                  />
                </div>
              </div>
              <div className="flex gap-2 w-full ">
                <div className="w-full">
                  <p>Email</p>
                  <input
                    type="email"
                    className="w-full rounded mt-1 px-2 py-2 bg-primary text-sm font-medium"
                  />
                </div>
                <div className="w-full">
                  <p>Phone</p>
                  <input
                    type="text"
                    className="w-full rounded mt-1 px-2 py-2 bg-primary text-sm font-medium"
                  />
                </div>
              </div>
              <div className="w-full">
                <p>Message</p>
                <textarea
                  name=""
                  id=""
                  className="w-full h-24 rounded mt-1 px-2 py-2 bg-primary text-sm font-medium"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn bg-green-600 mb-4 w-40">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
