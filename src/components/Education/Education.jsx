import "./Education.css";

const Education = () => {
  return (
    <div id="education" className="pt-20 mx-2">
      <h1 className="text-center mb-7 text-2xl font-bold   md:text-3xl lg:text-4xl 2xl:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-200">
          <span className="border-b border-green-500">Educa</span>tion
        </span>
      </h1>

      <div className="max-w-7xl mx-auto w-full md:grid grid-cols-9 hidden font-medium text-gray-200">
        {/* Timeline 1 */}
        <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-green-950 rounded-md p-3">
            <div className="flex justify-between items-center text-wrap gap-2 mb-3">
              <h1 className="w-4/5">
                Bangladesh Army University of Science and Technology (BAUST),
                Saidpur
              </h1>
              <h1>2019-2024</h1>
            </div>
            <p className="text-sm ">B.Sc in Computer Science and Engineering</p>
          </div>
        </div>
        <div className="col-span-1 w-full h-full flex justify-center items-center relative">
          <div className="h-full w-1 bg-green-500 "></div>

          <div className="w-6 h-6 rounded-full bg-green-500 absolute text-green-950 text-center font-medium">
            1
          </div>
        </div>
        <div className="w-full h-full col-span-4"></div>

        {/* Timeline 2 */}
        <div className="w-full h-full col-span-4"></div>
        <div className="col-span-1 w-full h-full flex justify-center items-center relative">
          <div className="h-full w-1 bg-green-500 "></div>

          <div className="w-6 h-6 rounded-full bg-green-500 absolute text-green-950 text-center font-medium">
            2
          </div>
        </div>
        <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-green-950 rounded-md p-3">
            <div className="flex justify-between items-center text-wrap gap-2 mb-3">
              <h1 className="w-4/5">
              Adarsha College, Dinajpur
              </h1>
              <h1>2017-2019</h1>
            </div>
            <p className="text-sm">HSC</p>
          </div>
        </div>

        {/* Timeline 3 */}
        <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-green-950 rounded-md p-3">
            <div className="flex justify-between items-center text-wrap gap-2 mb-3">
              <h1 className="w-4/5">
              Collectorate Public School and College, Nilphamari
              </h1>
              <h1>2015-2017</h1>
            </div>
            <p className="text-sm">SSC</p>
          </div>
        </div>
        <div className="col-span-1 w-full h-full flex justify-center items-center relative">
          <div className="h-full w-1 bg-green-500 "></div>

          <div className="w-6 h-6 rounded-full bg-green-500 absolute text-green-950 text-center font-medium">
            3
          </div>
        </div>
        <div className="w-full h-full col-span-4"></div>
      </div>
      <div className="flex flex-col gap-3 md:hidden">
        <div className="bg-green-950 p-3 rounded-md text-gray-200">
          <div className="flex justify-between items-center  mb-3">
            <h1 className="w-4/6 font-medium  ">
              Bangladesh Army University of Science and Technology (BAUST),
              Saidpur
            </h1>
            <h1 className="font-medium">2019 - 2024</h1>
          </div>
          <p className="text-sm font-medium">
            B.Sc in Computer Science and Engineering
          </p>
        </div>
        <div className="bg-green-950 p-3 rounded-md text-gray-200">
          <div className="flex justify-between items-center  mb-3">
            <h1 className="w-4/6 font-medium  ">Adarsha College, Dinajpur</h1>
            <h1 className="font-medium">2017 - 2019</h1>
          </div>
          <p className="text-sm font-medium">HSC</p>
        </div>
        <div className="bg-green-950 p-3 rounded-md text-gray-200">
          <div className="flex justify-between items-center  mb-3">
            <h1 className="w-4/6 font-medium  ">
              Collectorate Public School and College, Nilphamari
            </h1>
            <h1 className="font-medium">2015 - 2017</h1>
          </div>
          <p className="text-sm font-medium">SSC</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
