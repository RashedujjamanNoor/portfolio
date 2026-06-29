import { motion } from "framer-motion";
import { FiCode, FiLayers, FiCoffee } from "react-icons/fi";

const stats = [
  {
    icon: <FiCode />,
    value: "10+",
    title: "Projects Built",
  },
  {
    icon: <FiLayers />,
    value: "12+",
    title: "Technologies",
  },
  {
    icon: <FiCoffee />,
    value: "100%",
    title: "Passion",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 uppercase tracking-[6px] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Passionate Full Stack
            <span className="text-cyan-400"> Developer</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-3xl font-semibold text-white">
              Building modern web experiences with clean code.
            </h3>

            <p className="mb-5 leading-8 text-zinc-400">
              I'm Noor, a Full Stack MERN Developer who enjoys turning ideas
              into fast, scalable, and user-friendly web applications. I focus
              on writing clean, maintainable code while creating responsive
              interfaces that deliver a great user experience.
            </p>

            <p className="mb-5 leading-8 text-zinc-400">
              My primary stack includes React, Node.js, Express.js, MongoDB,
              Redux Toolkit, Tailwind CSS, Firebase, and Framer Motion. I also
              enjoy adding smooth animations with GSAP to make interfaces feel
              polished and interactive.
            </p>

            <p className="leading-8 text-zinc-400">
              I'm constantly learning new technologies and improving my skills
              to build better digital experiences and solve real-world problems.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-4 text-3xl text-cyan-400">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold text-white">{item.value}</h3>

                <p className="mt-2 text-zinc-400">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
