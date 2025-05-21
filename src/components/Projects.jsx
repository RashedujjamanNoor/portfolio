import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const project = [
    {
      img: "doctorbari.png",
      name: "Doctor Appointment Booking Website",
      description:
      "DoctorBari is a user-friendly online platform designed to simplify the process of booking medical appointments. With a comprehensive database of healthcare professionals, patients can easily search for doctors by specialty, location, and availability. DoctorBari streamlines the booking experience, allowing users to schedule appointments, access patient reviews, and manage their health care needs—all in one convenient place. Prioritize your health and connect with trusted medical experts today!",

      stack: ["React", "Tailwind"],
      live:"https://doctorbari.vercel.app/",
      code:"https://github.com/RashedujjamanNoor/doctorbari-client"
    },
    {
      img: "e-Food.png",
      name: "Food Ordering Website",
      description:
        "Our food ordering website offers a seamless experience with easy add-to-cart functionality and integration with third-party APIs for real-time restaurant data, menus, and order processing.",

      stack: ["React", "Tailwind"],
      live:"https://efood-omega-six.vercel.app/shop",
      code:"https://github.com/RashedujjamanNoor/simple-ecommerce-website"
    },
    
    
  ];
  return (
    <div id="projects" className="pt-20">
      <h1 className="text-center mb-5 text-2xl font-bold   md:text-3xl lg:text-4xl 2xl:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-200 ">
          Projects
        </span>
      </h1>
      <hr className="mb-6 border-green-600" />
      <div className="grid grid-cols-auto gap-8 justify-center justify-items-center">
        {project.map((item, index) => (
          <div key={index} className="bg-green-950 p-4 rounded-lg">
            <img src={item.img} alt="" className="w-full rounded-md mb-2" />
            <h1 className="font-medium text-xl mb-4 text-slate-200">
              {item.name}
            </h1>
            <p className="text-sm font-medium text-slate-400 text-justify">
              {item.description}
            </p>
            <div className="flex justify-start items-center gap-3 my-6">
              {item.stack.map((stack, index) => (
                <p
                  className="border border-green-400 px-2 py-1 rounded-full text-green-200 font-bold"
                  key={index}
                >
                  {stack}
                </p>
              ))}
            </div>
            <div className="flex justify-start items-center mt-4 gap-3">
              <a className="btn bg-btncolor" href={item.live}>Live</a>
              <a className="btn flex justify-center items-center gap-2 border text-btncolor">
                <FaGithub className="" />
                <a href={item.code}>Code</a>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
