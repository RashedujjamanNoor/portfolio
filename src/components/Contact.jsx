import { useForm, ValidationError } from "@formspree/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { toast } from "react-toastify";

const Contact = () => {
  const [state, handleSubmit] = useForm("mnnakjdl");
  if (state.succeeded) {
    return (
      <>
        {toast("Your Message Send Successfully", { type: "success" })}{" "}
        <p className="text-3xl text-center font-bold text-green-500">
          Thanks For Contact!
        </p>
      </>
    );
  }

  return (
    <div id="contact" className="pt-20 ">
      <h1 className="font-bold text-center text-2xl mb-3  md:text-3xl lg:text-4xl 2xl:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-200">
          Contact
        </span>
      </h1>
      <hr className="border-green-600" />

      <div className="md:flex justify-between  ">
        <div className=" flex flex-col justify-between items-center w-full mr-4">
          <div className="bg-green-950 flex flex-col justify-center items-center w-full my-4 py-5 px-4 font-medium gap-1 rounded-lg">
            <p className="flex flex-col justify-center items-center text-gray-300">
              <span>
                <MdMarkEmailRead className="text-4xl" />
              </span>
              Email
            </p>
            <p>mdrashedujjaman912@gmail.com</p>
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
          <form className="px-6 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-3 mb-3 text-slate-300 font-medium">
              <div className="flex gap-2 w-full">
                <div className="w-full">
                  <label htmlFor="fname">First Name</label>
                  <input
                    id="fname"
                    type="text"
                    name="fname"
                    className="w-full rounded mt-1 px-2 py-2 bg-primary text-sm font-medium"
                  />
                  <ValidationError
                    prefix="FName"
                    field="fname"
                    errors={state.errors}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    id="lname"
                    type="text"
                    name="lname"
                    className="w-full rounded mt-1 px-2 py-2 bg-primary text-sm font-medium"
                  />
                  <ValidationError
                    prefix="LName"
                    field="lname"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="flex gap-2 w-full ">
                <div className="w-full">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full rounded mt-1 px-2 py-2 bg-primary text-sm font-medium"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="number"
                    type="text"
                    name="number"
                    className="w-full rounded mt-1 px-2 py-2 bg-primary text-sm font-medium"
                  />
                  <ValidationError
                    prefix="Number"
                    field="number"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-24 rounded mt-1 px-2 py-2 bg-primary text-sm font-medium"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="btn bg-green-600 mb-4 w-40"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
