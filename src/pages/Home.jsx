import Header from "../components/Header";
import About from "../components/About";
import MySkills from "../components/MySkills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Education from "../components/Education/Education";

const Home = () => {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      {/* Global Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute -right-40 top-[900px] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="absolute left-1/2 top-[1800px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <div className="mx-2 md:mx-10">
        <Header />
        <About />
        <MySkills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
