import Header from "../components/Header";
import About from "../components/About";
import MySkills from "../components/MySkills";

const Home = () => {
  return (
    <div className="mx-2 md:mx-10">
      <Header />
      <About />
      <MySkills />
    </div>
  );
};

export default Home;
