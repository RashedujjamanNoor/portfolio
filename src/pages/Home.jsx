import Header from "../components/Header";
import About from "../components/About";
import MySkills from "../components/MySkills";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="mx-2 md:mx-10">
      <Header />
      <About />
      <MySkills />
      <Projects />
    </div>
  );
};

export default Home;
