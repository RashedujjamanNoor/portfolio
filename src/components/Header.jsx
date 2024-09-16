const Header = () => {
  return (
    <div className="md:flex justify-center items-center gap-6 2xl:mx-36">
      <div className="flex flex-1 justify-center mt-4 md:w-1/2 md:order-2 items-end flex-wrap">
        <img
          src="aaaaa.png"
          alt=""
          className="min-w-40 min-h-40 max-w-96 max-h-96 rounded"
        />
      </div>
      <div className="md:w-4/5 lg:w-1/3">
        <p className="font-medium text-2xl mt-12 mb-7">
          Hi, I'm <span className="text-green-600">Rashedujjaman Noor</span>
        </p>
        <h1 className="text-3xl font-bold mb-4 2xl:text-5xl">
          A <span>Fullstack</span> Web Developer
        </h1>
        <p className="text-justify text-gray-400 font-medium leading-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          consequuntur beatae placeat assumenda eveniet repellendus aspernatur
          exercitationem maiores sit dolor? Molestias iste quidem quis
          consectetur facere atque recusandae laboriosam voluptatibus.
        </p>
        <div className="flex  justify-start items-center gap-4 py-3">
          <button className="btn bg-btncolor">Learn More</button>
          <button className="btn bg-white/20">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
