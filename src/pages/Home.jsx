import Header from "../components/Header";
import About from "../components/About";
import MySkills from "../components/MySkills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="mx-2 md:mx-10">
      <Header />
      <About />
      <MySkills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
