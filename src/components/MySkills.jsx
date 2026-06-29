import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFramer,
} from "react-icons/si";

import { FaCode } from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-500" },
  { name: "Redux Toolkit", icon: <SiRedux />, color: "text-violet-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-amber-400" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-400" },
  {
    name: "GSAP",
    icon: <FaCode />,
    color: "text-lime-400",
  },
];

export default function MySkills() {
  return (
    <section id="skills" className="relative overflow-hidden  py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 uppercase tracking-[6px] text-cyan-400">
            My Expertise
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Skills & Technologies
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Technologies I use to build fast, scalable, and visually engaging
            web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.45,
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-violet-500/10 opacity-0 transition group-hover:opacity-100" />

              <div
                className={`relative mb-4 flex justify-center text-5xl ${skill.color}`}
              >
                {skill.icon}
              </div>

              <h3 className="relative text-center font-medium text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
