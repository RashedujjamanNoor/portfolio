const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center pt-20">
      <h1 className="font-bold text-2xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-200 md:text-3xl lg:text-4xl 2xl:text-5xl">
        About
      </h1>
      <p className="text-center text-gray-400 font-medium w-4/5 xl:w-3/5 2xl:text-2xl md:text-lg lg:text-xl">
      I’m a software engineer specializing in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js). I create dynamic web applications with a focus on code quality and user experience. I thrive in collaborative environments and enjoy solving complex problems. Always eager to learn, I also contribute to open-source projects and engage with the developer community.
      </p>
    </div>
  );
};

export default About;
