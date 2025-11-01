import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const project = [
    {
      img: "doctorbari.png",
      name: "Doctor Appointment Booking Website",
      description:
        "DoctorBari is a user-friendly platform that simplifies booking medical appointments. Patients can easily search for doctors by specialty, location, and availability. With access to reviews and scheduling tools, users can manage their healthcare needs in one place. DoctorBari makes it easy to connect with trusted medical professionals and take control of your health conveniently and efficiently.",

      stack: ["React", "Tailwind"],
      live: "https://doctorbari.vercel.app/",
      code: "https://github.com/RashedujjamanNoor/doctorbari-client",
    },
    {
      img: "e-Food.png",
      name: "Food Ordering Website",
      description:
        "Our food ordering website delivers a seamless experience with user-friendly add-to-cart functionality. Integrated with third-party APIs, it provides real-time access to restaurant data, menus, and order processing. Customers can easily browse, select, and order meals online, making the entire process fast, convenient, and efficient for both users and restaurants.",

      stack: ["React", "Tailwind", "Redux"],
      live: "https://efood-omega-six.vercel.app/shop",
      code: "https://github.com/RashedujjamanNoor/simple-ecommerce-website",
    },

    {
      img: "realestate.png",
      name: "Real-Estate Website",
      description:
        "Estate is a user-friendly real estate website where clients can view detailed property listings with photos, prices, and features. Whether buying, renting, or investing, users can easily browse available properties and send their contact information for inquiries. Estate simplifies the property search process by offering a clean interface and direct connection between clients and agents.",

      stack: ["React", "Tailwind"],
      live: "https://realstate-app-seven.vercel.app/",
      code: "https://github.com/RashedujjamanNoor/realstate-app",
    },

    {
      img: "vidlypro.png",
      name: "Editing Agency Website",
      description:
        "VidlyPro is a creative portfolio platform that showcases professional video editing and post-production services. Clients can explore projects across different styles, from cinematic reels to social media edits. With a focus on quality, storytelling, and visual appeal, VidlyPro makes it easy to discover expert editing work and connect with a team passionate about bringing stories to life.",

      stack: ["React", "Tailwind", "Framer Motion"],
      live: "https://www.vidlypro.com/",
      code: "",
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
            <img
              src={item.img}
              alt=""
              className="w-full h-48 object-cover rounded-md mb-2"
            />
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
              <a className="btn bg-btncolor" href={item.live}>
                Live
              </a>
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
