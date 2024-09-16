import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const project = [
    {
      img: "p1.jpg",
      name: "E-Commers",
      description:
        "Enhance your online shopping experience with our E-Commerce Application UI design project. Seamlessly blending aesthetics with functionality, our intuitive interface offers easy navigation, personalized recommendations, and secure transactions. Elevate your digital storefront and captivate customers with a visually stunning design tailored to your brand",

      stack: ["React", "Express", "Node", "MongoDB"],
    },
    {
      img: "p1.jpg",
      name: "E-Commers",
      description:
        "Enhance your online shopping experience with our E-Commerce Application UI design project. Seamlessly blending aesthetics with functionality, our intuitive interface offers easy navigation, personalized recommendations, and secure transactions. Elevate your digital storefront and captivate customers with a visually stunning design tailored to your brand",

      stack: ["React", "Express", "Node", "MongoDB"],
    },
    {
      img: "p1.jpg",
      name: "E-Commers",
      description:
        "Enhance your online shopping experience with our E-Commerce Application UI design project. Seamlessly blending aesthetics with functionality, our intuitive interface offers easy navigation, personalized recommendations, and secure transactions. Elevate your digital storefront and captivate customers with a visually stunning design tailored to your brand",

      stack: ["React", "Express", "Node", "MongoDB"],
    },
    {
      img: "p1.jpg",
      name: "E-Commers",
      description:
        "Enhance your online shopping experience with our E-Commerce Application UI design project. Seamlessly blending aesthetics with functionality, our intuitive interface offers easy navigation, personalized recommendations, and secure transactions. Elevate your digital storefront and captivate customers with a visually stunning design tailored to your brand",

      stack: ["React", "Express", "Node", "MongoDB"],
    },
  ];
  return (
    <div id="projects">
      <h1 className="text-center mb-5 text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl">
        Projects
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
              <button className="btn bg-btncolor">Live</button>
              <button className="btn flex justify-center items-center gap-2 border text-btncolor">
                <FaGithub className="" />
                <p>Code</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
